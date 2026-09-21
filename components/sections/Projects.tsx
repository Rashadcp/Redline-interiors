"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { PROJECTS, ProjectItem } from "@/lib/data";

interface ProjectsProps {
  onNavigate: (id: string) => void;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onNavigate: (id: string) => void;
}

const CATEGORIES = [
  { label: "All Works", value: "all" },
  { label: "Modular Kitchens", value: "kitchen" },
  { label: "Living Spaces", value: "living" },
  { label: "Wash Counters", value: "vanity" },
] as const;

function ProjectCard({ project, index, onNavigate }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;

  // Individual scroll progress for each card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Vertical parallax inside the aperture frame
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);
  const numberOffset = useTransform(scrollYProgress, [0, 1], isEven ? ["-10px", "10px"] : ["10px", "-10px"]);

  // Asymmetric differential scroll float
  const cardY = useTransform(scrollYProgress, [0, 1], isEven ? ["0px", "-15px"] : ["15px", "-30px"]);

  return (
    <motion.article
      ref={cardRef}
      className={`project-card ${project.className} group relative`}
      style={{
        y: reduceMotion ? 0 : cardY,
      }}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay: (index % 2) * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {/* Main Image Frame with Architectural Aperture */}
      <div
        className="project-image-button relative overflow-hidden bg-[#242321] rounded-none border border-[#161616]/10 shadow-sm group-hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
        onClick={() => onNavigate("contact")}
      >
        {/* Architectural Corner Crosshair Accents */}
        <div className="absolute top-2 left-2 z-20 text-white/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Plus size={14} strokeWidth={1.5} />
        </div>
        <div className="absolute top-2 right-2 z-20 text-white/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Plus size={14} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-2 left-2 z-20 text-white/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Plus size={14} strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-2 right-2 z-20 text-white/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Plus size={14} strokeWidth={1.5} />
        </div>

        {/* Top Floating Glass HUD Bar */}
        <div className="absolute top-0 inset-x-0 z-20 p-4 md:p-5 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616]/75 backdrop-blur-md text-[0.62rem] tracking-[0.16em] uppercase text-white/90 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c52a22]" />
            {project.location}
          </span>
          <span className="hidden sm:inline-flex px-3 py-1 bg-white/90 backdrop-blur-md text-[0.62rem] tracking-[0.14em] uppercase text-[#161616] font-bold">
            {project.area}
          </span>
        </div>

        {/* Parallax Image Layer */}
        <div className="w-full h-full overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="transition-transform duration-700 ease-out group-hover:scale-105 object-cover w-full h-full brightness-[0.96] group-hover:brightness-100"
            style={{
              y: reduceMotion ? 0 : imageY,
              scale: reduceMotion ? 1 : imageScale,
            }}
          />
        </div>

        {/* Ambient Dark Gradient Shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Center Hover Action Pill */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="px-5 py-2.5 bg-[#c52a22] text-white text-[0.68rem] tracking-[0.18em] uppercase font-bold inline-flex items-center gap-3 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
            <span>Explore Project</span>
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* Bottom Metadata & Number Section */}
      <div className="project-meta relative pt-4 flex items-start justify-between gap-4">
        {/* Left: Project Number & Info */}
        <div className="flex items-start gap-4">
          <motion.span
            className="project-index-number select-none font-serif text-[#c52a22] opacity-80 group-hover:opacity-100 transition-opacity"
            style={{ x: reduceMotion ? 0 : numberOffset }}
          >
            {project.number}
          </motion.span>
          <div className="cursor-pointer" onClick={() => onNavigate("contact")}>
            <p className="text-[0.64rem] tracking-[0.18em] uppercase font-semibold text-[#746f68] mb-1">
              {project.category} · {project.year}
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#161616] group-hover:text-[#c52a22] transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-[#8a857e] mt-1 italic font-serif">
              Scope: {project.scope}
            </p>
          </div>
        </div>

        {/* Right: Interactive Arrow Button */}
        <button
          className="hidden sm:flex items-center justify-center w-11 h-11 border border-[#161616]/20 rounded-full group-hover:bg-[#c52a22] group-hover:border-[#c52a22] group-hover:text-white transition-all duration-300 flex-shrink-0 cursor-pointer"
          onClick={() => onNavigate("contact")}
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight size={18} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}

export function Projects({ onNavigate }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["-2%", "1%"]);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.section === activeTab;
  });

  return (
    <section
      ref={sectionRef}
      className="projects section-space overflow-hidden relative"
      id="projects"
      aria-labelledby="projects-title"
    >
      {/* Section Datum Line */}
      <motion.div
        className="section-datum projects-datum"
        aria-hidden="true"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
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

      {/* Header with Title & Editorial Intro */}
      <motion.div
        className="projects-heading content-rail"
        style={{ x: reduceMotion ? 0 : headingX }}
      >
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <Eyebrow>Selected Portfolio · Kerala</Eyebrow>
          <h2 id="projects-title">
            Featured
            <br />
            <em>interiors.</em>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-start md:items-end gap-5"
        >
          <p className="max-w-md">
            An intentionally edited portfolio of bespoke modular kitchens, elegant living areas, and luxurious bedrooms crafted around modern utility and enduring materiality.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className={`px-4 py-1.5 text-[0.62rem] tracking-[0.14em] uppercase font-bold transition-all duration-300 cursor-pointer border ${
                  activeTab === cat.value
                    ? "bg-[#161616] text-white border-[#161616] shadow-sm"
                    : "bg-transparent text-[#746f68] border-[#161616]/15 hover:border-[#161616] hover:text-[#161616]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="project-grid content-rail mt-12 md:mt-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              onNavigate={onNavigate}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
