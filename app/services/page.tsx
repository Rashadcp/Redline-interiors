"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/common/Eyebrow";
import { EditorialMarquee } from "@/components/common/EditorialMarquee";
import { SERVICES } from "@/lib/data";
import { ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles, Trees } from "lucide-react";
import Link from "next/link";

const SERVICE_DETAILS = [
  {
    title: "Tropical Modern Architecture",
    icon: Compass,
    description:
      "Comprehensive architectural planning tailored to Kerala's climatic conditions. Deep overhangs, cross-ventilation corridors, and passive cooling layouts.",
    deliverables: ["Site Microclimate Analysis", "Conceptual Floor Plans", "3D Spatial Visualization", "Authority Approvals"],
  },
  {
    title: "Luxury Residential Interiors",
    icon: Sparkles,
    description:
      "Bespoke spatial design prioritizing tactile harmony, diffused tropical light, and curated contemporary furniture.",
    deliverables: ["Custom Furniture Design", "Material & Lighting Schedules", "Acoustic & Environmental Tuning", "Turnkey Execution"],
  },
  {
    title: "Courtyard & Landscape Integration",
    icon: Trees,
    description:
      "Seamless indoor-outdoor transitions bringing rainwater bodies, indigenous flora, and vernacular courtyards (Nadumuttom) into modern life.",
    deliverables: ["Biophilic Layouts", "Water Body Engineering", "Indigenous Flora Selection", "Courtyard Micro-climate Control"],
  },
  {
    title: "Bespoke Teak & Joinery Craft",
    icon: Layers,
    description:
      "Master-crafted teakwood ceilings, bespoke cane weaving, brass inlays, and custom architectural cabinetry made in our dedicated Kerala ateliers.",
    deliverables: ["Handcrafted Teak Furniture", "Louvered Partition Screens", "Bespoke Wardrobes & Kitchens", "Artisanal Metalwork"],
  },
  {
    title: "Commercial & Hospitality Design",
    icon: ShieldCheck,
    description:
      "Signature design for boutique resorts, coastal cafes, luxury retail, and experiential headquarters across South India.",
    deliverables: ["Brand Spatial Identity", "Guest Flow Optimization", "Commercial Compliance", "Fast-track Project Delivery"],
  },
];

export default function ServicesPage() {
  return (
    <div className="site-shell bg-[#f7f5f0] text-[#161616]">
      <Header />

      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="content-rail pb-16 md:pb-24 border-b border-[#161616]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Eyebrow>Disciplines & Capabilities</Eyebrow>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-[#161616] leading-[1.05] mt-3">
              Full-spectrum architectural & <em className="text-[#c52a22] font-normal">interior expertise.</em>
            </h1>
            <p className="text-lg md:text-xl text-[#615d57] leading-relaxed mt-6 font-light">
              From early land evaluation to the final bespoke furniture placement, our unified design-and-craft
              studio delivers uncompromising quality across Kerala.
            </p>
          </motion.div>
        </section>

        {/* Detailed Services Grid */}
        <section className="content-rail py-20 md:py-28 space-y-12">
          {SERVICE_DETAILS.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-8 md:p-12 bg-white border border-[#161616]/10 shadow-sm hover:border-[#c52a22] transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-1 text-2xl font-serif text-[#c52a22]">
                  0{index + 1}
                </div>
                <div className="md:col-span-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon className="text-[#c52a22]" size={24} />
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#161616]">{service.title}</h2>
                  </div>
                  <p className="text-[#615d57] text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-5 bg-[#f7f5f0] p-6 border border-[#161616]/5">
                  <span className="text-[0.62rem] uppercase tracking-widest text-[#c52a22] font-bold block mb-3">
                    Key Deliverables
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#161616]">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c52a22]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </section>

        <EditorialMarquee dark />

        {/* CTA Banner */}
        <section className="content-rail py-20 text-center">
          <Eyebrow>Start Your Consultation</Eyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#161616] mt-3">
            Have a residence or project in mind?
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c52a22] text-white text-xs tracking-widest uppercase font-bold shadow-md hover:bg-[#a8211b] transition-all"
            >
              <span>Consult Our Architects</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
