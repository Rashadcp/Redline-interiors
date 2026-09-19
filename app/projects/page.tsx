"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/common/Eyebrow";
import { PROJECTS, PROJECT_SECTIONS, STUDIO_INFO, ProjectItem, ProjectSection } from "@/lib/data";
import {
  ArrowUpRight,
  LayoutList,
  Columns2,
  LayoutGrid,
  Compass,
  Sparkles,
  MapPin,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"showcase" | "gallery" | "index">("showcase");
  const [selectedSection, setSelectedSection] = useState<"all" | ProjectSection>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxProject) return;
      if (e.key === "Escape") setLightboxProject(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxProject]);

  const displayedProjects =
    selectedSection === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.section === selectedSection);

  const activeSections =
    selectedSection === "all"
      ? PROJECT_SECTIONS
      : PROJECT_SECTIONS.filter((s) => s.id === selectedSection);

  const navigateLightbox = (direction: number) => {
    if (!lightboxProject) return;
    const currentIndex = displayedProjects.findIndex((p) => p.number === lightboxProject.number);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + displayedProjects.length) % displayedProjects.length;
    setLightboxProject(displayedProjects[nextIndex]);
  };

  return (
    <div className="site-shell bg-[#f4f2ee] text-[#161616] min-h-screen">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Editorial Hero Header */}
        <section className="content-rail pb-8 border-b border-[#161616]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <Eyebrow>Archive &amp; Portfolio · Redline Interiors</Eyebrow>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#161616] leading-[1.05] mt-3">
                Selected <em>works</em> &amp; spatial studies.
              </h1>
              <p className="text-sm md:text-base text-[#746f68] font-light leading-relaxed mt-4">
                A curated survey of bespoke modular kitchens, living areas, bedroom suites, and fine dining environments crafted across South India.
              </p>
            </div>

            {/* Right Controls & Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-6 text-xs text-[#746f68] border-l border-[#161616]/10 pl-4 py-1">
                <div>
                  <span className="block font-mono font-bold text-[#161616] text-sm">
                    {PROJECTS.length.toString().padStart(2, "0")}
                  </span>
                  <span className="tracking-wider uppercase text-[0.6rem]">Commissions</span>
                </div>
                <div>
                  <span className="block font-mono font-bold text-[#161616] text-sm">100%</span>
                  <span className="tracking-wider uppercase text-[0.6rem]">Bespoke Joinery</span>
                </div>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 bg-[#e8e5de] p-1 rounded-sm border border-[#161616]/10">
                <button
                  onClick={() => setViewMode("showcase")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] tracking-wider uppercase font-semibold transition-all rounded-sm cursor-pointer ${
                    viewMode === "showcase"
                      ? "bg-[#161616] text-white shadow-sm"
                      : "text-[#746f68] hover:text-[#161616]"
                  }`}
                  title="Editorial Showcase View"
                >
                  <Columns2 size={13} />
                  <span className="hidden sm:inline">Showcase</span>
                </button>
                <button
                  onClick={() => setViewMode("gallery")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] tracking-wider uppercase font-semibold transition-all rounded-sm cursor-pointer ${
                    viewMode === "gallery"
                      ? "bg-[#161616] text-white shadow-sm"
                      : "text-[#746f68] hover:text-[#161616]"
                  }`}
                  title="Full Image Gallery View"
                >
                  <LayoutGrid size={13} />
                  <span className="hidden sm:inline">Full Gallery</span>
                </button>
                <button
                  onClick={() => setViewMode("index")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] tracking-wider uppercase font-semibold transition-all rounded-sm cursor-pointer ${
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

          {/* Section Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            <button
              onClick={() => setSelectedSection("all")}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-semibold transition-all rounded-full border cursor-pointer ${
                selectedSection === "all"
                  ? "bg-[#161616] text-white border-[#161616] shadow-sm"
                  : "bg-white/80 text-[#746f68] border-[#161616]/10 hover:border-[#161616] hover:text-[#161616]"
              }`}
            >
              All Sections ({PROJECTS.length})
            </button>
            {PROJECT_SECTIONS.map((sec) => {
              const count = PROJECTS.filter((p) => p.section === sec.id).length;
              const isActive = selectedSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase font-semibold transition-all rounded-full border cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#161616] text-white border-[#161616] shadow-sm"
                      : "bg-white/80 text-[#746f68] border-[#161616]/10 hover:border-[#161616] hover:text-[#161616]"
                  }`}
                >
                  <span>{sec.label}</span>
                  <span
                    className={`text-[0.6rem] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? "bg-[#c52a22] text-white" : "bg-[#161616]/10 text-[#555]"
                    }`}
                  >
                    0{count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* VIEW MODE 1: Architectural Split Showcase with Section-Wise Dividers */}
        {viewMode === "showcase" && (
          <div className="content-rail py-10 md:py-16">
            {activeSections.map((section, sectionIdx) => {
              const sectionProjects = displayedProjects.filter((p) => p.section === section.id);
              if (sectionProjects.length === 0) return null;

              return (
                <section key={section.id} className="mb-20 md:mb-28 last:mb-12">
                  {/* Section Title Divider */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-12 md:mb-16 border-b border-[#161616]/15">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-semibold tracking-widest text-[#c52a22] uppercase">
                          Section 0{sectionIdx + 1}
                        </span>
                        <span className="w-6 h-px bg-[#c52a22]/30" />
                        <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#746f68] font-bold">
                          {section.label}
                        </span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] mt-2 font-normal">
                        {section.label}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#746f68] font-light max-w-2xl mt-1.5 leading-relaxed">
                        {section.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-start md:self-end">
                      <span className="font-mono text-xs text-[#746f68] bg-[#e8e5de] px-3 py-1 rounded-sm">
                        0{sectionProjects.length} Selected Works
                      </span>
                    </div>
                  </div>

                  {/* Section Projects List */}
                  <div className="flex flex-col gap-16 md:gap-24">
                    {sectionProjects.map((project, index) => {
                      const isEven = index % 2 === 1;
                      return (
                        <motion.article
                          key={project.number}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          className="group"
                        >
                          <div
                            className={`flex flex-col ${
                              isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                            } gap-8 lg:gap-14 items-center`}
                          >
                            {/* High-Resolution Architectural Image Container */}
                            <div className="w-full lg:w-6/12 relative flex-shrink-0">
                              <div
                                onClick={() => setLightboxProject(project)}
                                className="relative aspect-[16/11] sm:aspect-[4/3] max-h-[380px] sm:max-h-[440px] overflow-hidden bg-[#242321] rounded-sm shadow-sm group-hover:shadow-xl transition-all duration-500 cursor-pointer"
                              >
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Location & Year Tag */}
                                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                                  <span className="bg-[#161616]/85 backdrop-blur-md px-2.5 py-1 text-[0.58rem] tracking-widest uppercase text-white font-medium rounded-sm shadow-sm flex items-center gap-1.5">
                                    <MapPin size={10} className="text-[#c52a22]" />
                                    {project.location}
                                  </span>
                                </div>

                                <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 text-[0.58rem] tracking-widest uppercase text-[#161616] font-mono font-bold rounded-sm shadow-sm">
                                  {project.area}
                                </div>

                                {/* Full View Lightbox Trigger Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                  <div className="bg-[#161616]/90 text-white backdrop-blur-md px-4 py-2 text-xs tracking-wider uppercase font-semibold rounded-sm shadow-lg flex items-center gap-2 border border-white/20">
                                    <Maximize2 size={13} className="text-[#c52a22]" />
                                    <span>Inspect Full Image</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Details & Specs Container */}
                            <div className="w-full lg:w-6/12 flex flex-col justify-center">
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
                              <h3 className="font-serif text-3xl sm:text-4xl text-[#161616] group-hover:text-[#c52a22] transition-colors leading-[1.15] mt-3">
                                {project.title}
                              </h3>

                              {/* Scope & Description */}
                              <p className="text-sm text-[#5a5651] font-light leading-relaxed mt-4 border-l-2 border-[#c52a22]/30 pl-3.5 py-0.5">
                                {project.scope}
                              </p>

                              {/* Architectural Specs Grid */}
                              <div className="grid grid-cols-2 gap-4 py-5 my-6 border-y border-[#161616]/10 text-xs">
                                <div>
                                  <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">
                                    Location
                                  </span>
                                  <span className="font-medium text-[#161616]">{project.location}</span>
                                </div>
                                <div>
                                  <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">
                                    Spatial Footprint
                                  </span>
                                  <span className="font-mono font-medium text-[#161616]">{project.area}</span>
                                </div>
                                <div>
                                  <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">
                                    Classification
                                  </span>
                                  <span className="font-medium text-[#161616]">{project.category}</span>
                                </div>
                                <div>
                                  <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">
                                    Commission Year
                                  </span>
                                  <span className="font-mono font-medium text-[#161616]">{project.year}</span>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex items-center gap-4">
                                <button
                                  onClick={() => setLightboxProject(project)}
                                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#746f68] hover:text-[#161616] cursor-pointer py-2"
                                >
                                  <Eye size={14} className="text-[#c52a22]" />
                                  <span>View High-Res Photo</span>
                                </button>
                                <span className="text-[#161616]/20">·</span>
                                <Link
                                  href="/contact"
                                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-bold text-[#161616] hover:text-[#c52a22] transition-colors group/btn"
                                >
                                  <span>Commission Similar Space</span>
                                  <span className="w-7 h-7 rounded-full border border-[#161616]/20 flex items-center justify-center group-hover/btn:bg-[#161616] group-hover/btn:border-[#161616] group-hover/btn:text-white transition-all">
                                    <ArrowUpRight size={13} />
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
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: Full Image Gallery Grid (High Impact Photo Focus) */}
        {viewMode === "gallery" && (
          <div className="content-rail py-10 md:py-16">
            {activeSections.map((section, sectionIdx) => {
              const sectionProjects = displayedProjects.filter((p) => p.section === section.id);
              if (sectionProjects.length === 0) return null;

              return (
                <section key={section.id} className="mb-16 md:mb-24 last:mb-8">
                  {/* Section Title Divider */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-5 mb-8 border-b border-[#161616]/15">
                    <div>
                      <span className="font-mono text-xs font-semibold tracking-widest text-[#c52a22] uppercase">
                        Section 0{sectionIdx + 1}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#161616] mt-1 font-normal">
                        {section.label}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-[#746f68]">
                      0{sectionProjects.length} Works
                    </span>
                  </div>

                  {/* High-Impact Gallery Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {sectionProjects.map((project) => (
                      <motion.div
                        key={project.number}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group flex flex-col bg-white rounded-sm overflow-hidden border border-[#161616]/10 shadow-xs hover:shadow-xl transition-all duration-300"
                      >
                        {/* Image Frame with Zoom Overlay */}
                        <div
                          onClick={() => setLightboxProject(project)}
                          className="relative aspect-[4/3] overflow-hidden bg-[#242321] cursor-pointer"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                          {/* Top Badges */}
                          <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
                            <span className="bg-[#161616]/85 backdrop-blur-md px-2.5 py-1 text-[0.6rem] tracking-widest uppercase text-white font-medium rounded-sm">
                              {project.location}
                            </span>
                            <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 text-[0.6rem] tracking-widest uppercase text-[#161616] font-mono font-bold rounded-sm">
                              {project.area}
                            </span>
                          </div>

                          {/* Center Fullscreen Action */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                            <span className="bg-[#c52a22] text-white px-4 py-2 text-xs tracking-wider uppercase font-bold rounded-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                              <Maximize2 size={14} />
                              <span>View Full Size</span>
                            </span>
                          </div>
                        </div>

                        {/* Card Info Details */}
                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div>
                            <div className="flex items-center justify-between text-xs text-[#746f68] mb-2 font-mono">
                              <span className="text-[#c52a22] font-semibold">{project.number}</span>
                              <span>{project.year}</span>
                            </div>
                            <h3 className="font-serif text-2xl text-[#161616] group-hover:text-[#c52a22] transition-colors leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-xs text-[#5a5651] font-light mt-2.5 line-clamp-2">
                              {project.scope}
                            </p>
                          </div>

                          <div className="mt-5 pt-4 border-t border-[#161616]/10 flex items-center justify-between">
                            <span className="text-[0.65rem] tracking-wider uppercase font-bold text-[#746f68]">
                              {project.category}
                            </span>
                            <Link
                              href="/contact"
                              className="text-xs font-semibold text-[#161616] hover:text-[#c52a22] inline-flex items-center gap-1 transition-colors"
                            >
                              <span>Commission</span>
                              <ArrowUpRight size={13} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 3: Minimalist Architectural Register Table */}
        {viewMode === "index" && (
          <section className="content-rail py-10 md:py-16">
            <div className="border-t border-[#161616]/15">
              {displayedProjects.map((project) => (
                <div
                  key={project.number}
                  onMouseEnter={() => setHoveredProject(project.number)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#161616]/10 hover:bg-white/70 px-4 -mx-4 transition-all duration-300"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-mono text-sm text-[#c52a22] font-semibold w-8">
                      {project.number}
                    </span>
                    <div>
                      <h3
                        onClick={() => setLightboxProject(project)}
                        className="font-serif text-xl sm:text-2xl text-[#161616] group-hover:text-[#c52a22] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#746f68] mt-1 md:hidden">
                        {project.location} · {project.area}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-8 text-xs">
                    <span className="text-[#746f68] uppercase tracking-wider text-[0.65rem] w-36 text-left">
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
                    <button
                      onClick={() => setLightboxProject(project)}
                      className="w-8 h-8 rounded-full border border-[#161616]/15 flex items-center justify-center group-hover:bg-[#161616] group-hover:text-white transition-all cursor-pointer"
                      title="View High-Res Photo"
                    >
                      <Maximize2 size={13} />
                    </button>
                    <Link
                      href="/contact"
                      className="w-8 h-8 rounded-full border border-[#161616]/15 flex items-center justify-center group-hover:bg-[#c52a22] group-hover:border-[#c52a22] group-hover:text-white transition-all"
                      title="Inquire About Project"
                    >
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
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
                Have a residence or kitchen to elevate?
              </h2>
              <p className="text-[#a09c95] font-light text-sm sm:text-base mt-4 leading-relaxed">
                From precision modular kitchens to complete home joinery across Kerala, we translate architectural visions into tangible living perfection.
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
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                  className="border border-white/20 hover:border-white text-white px-6 py-3.5 text-xs tracking-widest uppercase font-medium transition-all"
                >
                  Call {STUDIO_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* High-Resolution Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8"
            onClick={() => setLightboxProject(null)}
          >
            {/* Top Lightbox Bar */}
            <div
              className="flex items-center justify-between text-white pb-4 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#c52a22] font-bold">
                  {lightboxProject.number}
                </span>
                <span className="text-white/30">/</span>
                <span className="text-xs uppercase tracking-wider font-semibold text-white/90">
                  {lightboxProject.title}
                </span>
                <span className="hidden sm:inline-block text-xs text-white/50">
                  · {lightboxProject.location} ({lightboxProject.area})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-[0.65rem] uppercase tracking-widest text-white/40 mr-2">
                  Use arrow keys to navigate
                </span>
                <button
                  onClick={() => setLightboxProject(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Center Image Display */}
            <div
              className="relative flex-grow flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={() => navigateLightbox(-1)}
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer border border-white/10"
                aria-label="Previous project photo"
              >
                <ChevronLeft size={24} />
              </button>

              <motion.img
                key={lightboxProject.number}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                src={lightboxProject.image}
                alt={lightboxProject.title}
                className="max-h-[72vh] md:max-h-[76vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
              />

              {/* Next Button */}
              <button
                onClick={() => navigateLightbox(1)}
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer border border-white/10"
                aria-label="Next project photo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption & Action */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-white text-xs"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-2xl">
                <span className="text-[#c52a22] font-mono uppercase tracking-wider text-[0.65rem] block mb-0.5">
                  Scope of Execution
                </span>
                <p className="text-white/80 font-light text-xs sm:text-sm">
                  {lightboxProject.scope}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="bg-[#c52a22] hover:bg-[#a8201a] text-white px-5 py-2.5 rounded-sm uppercase tracking-wider text-[0.65rem] font-bold inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Inquire For This Design</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
