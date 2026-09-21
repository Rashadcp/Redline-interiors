"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_ASSETS } from "@/lib/data";

const SLIDES = [
  {
    image: STUDIO_ASSETS.livingFlutedConsole,
    number: "01",
    title: "Living Room & Media Lounge",
    alt: "Suspended backlit media console and fluted oak wall panels",
  },
  {
    image: STUDIO_ASSETS.kitchenChampagne,
    number: "02",
    title: "Modular Kitchen Studios",
    alt: "High-gloss champagne acrylics and fluted walnut joinery",
  },
  {
    image: STUDIO_ASSETS.vanityTimberAlcove,
    number: "03",
    title: "Dining & Vanity Portals",
    alt: "Architectural timber portal archway and backlit halo mirror",
  },
  {
    image: STUDIO_ASSETS.livingChandelierLounge,
    number: "04",
    title: "Contemporary Ambient Lounges",
    alt: "Curved velvet club chairs and warm double ring brass chandelier",
  },
  {
    image: STUDIO_ASSETS.vanityGranitePendant,
    number: "05",
    title: "Bespoke Wash Counters & Millwork",
    alt: "Granite feature wall and fluted oak suspended vanity",
  },
];

interface PhilosophyProps {
  onNavigate: (id: string) => void;
}

export function Philosophy({ onNavigate }: PhilosophyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto scroll/advance slides every 3.8s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xCopy = useTransform(scrollYProgress, [0, 1], ["-2%", "1%"]);
  const xImg = useTransform(scrollYProgress, [0, 1], ["2%", "-1%"]);

  const slide = SLIDES[currentSlide];

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

      {/* Auto-Cycling Image Showcase */}
      <motion.figure
        className="philosophy-image image-frame group cursor-pointer relative shadow-lg rounded-lg overflow-hidden"
        style={{ x: reduceMotion ? 0 : xImg }}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
        onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
        title="Click to see next space"
      >
        <div className="w-full h-full relative overflow-hidden bg-[#242321] rounded-lg">
          <AnimatePresence initial={false}>
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover absolute inset-0 rounded-lg"
              initial={{ x: "100%", opacity: 0.5, scale: 1.04 }}
              animate={{ x: "0%", opacity: 1, scale: 1 }}
              exit={{ x: "-100%", opacity: 0.3, scale: 0.96 }}
              transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
            />
          </AnimatePresence>
        </div>

        {/* Dynamic Caption & Slide Indicator */}
        <figcaption className="absolute left-0 bottom-0 flex items-center justify-between w-full p-3.5 sm:px-4 sm:py-3 bg-[#161616]/90 backdrop-blur-md text-white text-[0.62rem] uppercase tracking-wider z-10 rounded-b-lg">
          <div className="flex items-center gap-3">
            <span className="text-[#ff5b53] font-mono font-bold">{slide.number}</span>
            <span className="font-medium tracking-widest">{slide.title}</span>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "w-5 bg-[#ff5b53]" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </figcaption>
      </motion.figure>
    </section>
  );
}
