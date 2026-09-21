"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/common/Eyebrow";
import { EditorialMarquee } from "@/components/common/EditorialMarquee";
import { STUDIO_ASSETS, STUDIO_INFO } from "@/lib/data";
import { 
  ArrowUpRight, 
  ChefHat, 
  Tv, 
  BedDouble, 
  Utensils, 
  Home, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  PhoneCall 
} from "lucide-react";
import Link from "next/link";

const INTERIOR_SERVICES = [
  {
    number: "01",
    title: "Bespoke Modular Kitchens",
    tagline: "Ergonomic Culinary Spaces",
    icon: ChefHat,
    image: STUDIO_ASSETS.kitchenChampagne,
    description:
      "Precision-crafted modular kitchens designed for seamless workflow, durability, and contemporary elegance. We incorporate European soft-close hardware, custom island counters, and high-efficiency concealed storage.",
    features: [
      "Waterproof & Termite-Resistant BWP Grade Carcasses",
      "Soft-Close Drawers, Tandem Boxes & Corner Carousels",
      "Quartz, Granite & Porcelain Seamless Countertops",
      "Concealed Built-in Ovens, Hobs & Chimney Ducts",
      "Custom Breakfast Islands & Under-Cabinet LED Lighting"
    ],
  },
  {
    number: "02",
    title: "Living Room & Media Lounge Interiors",
    tagline: "Atmospheric Living Environments",
    icon: Tv,
    image: STUDIO_ASSETS.livingFlutedConsole,
    description:
      "Transforming living spaces into warm, sculptural gathering hubs. We design floating media consoles with back-lit travertine or fluted timber, integrated acoustic paneling, and tailored furniture configurations.",
    features: [
      "Custom Floating TV Units & Hidden Cable Channels",
      "Fluted Wood Paneling, Travertine & Veneer Accents",
      "Architectural Cove Lighting & Ambient Scene Control",
      "Bespoke Spatial Partition Screens & Foyer Dividers",
      "Tailored Sectional Lounges & Coffee Table Millwork"
    ],
  },
  {
    number: "03",
    title: "Master & Guest Bedroom Suites",
    tagline: "Serene Private Sanctuaries",
    icon: BedDouble,
    image: STUDIO_ASSETS.livingClassicalMolding,
    description:
      "Calming, uncluttered bedroom retreats designed for rest and rejuvenation. Featuring floor-to-ceiling sliding or hinged wardrobes with intelligent inner organizers, upholstered headboards, and hidden dressing vanities.",
    features: [
      "Floor-to-Ceiling Wardrobes with Sensor-Activated Lighting",
      "Custom Upholstered Headboards & Bedside Floating Consoles",
      "Concealed Walk-In Dressing Units & Full-Length Mirrors",
      "Acoustic Wall Treatment & Blackout Window Draping",
      "Ergonomic Study Desks & Integrated Vanity Stations"
    ],
  },
  {
    number: "04",
    title: "Dining Spaces & Breakfast Counters",
    tagline: "Refined Hospitality at Home",
    icon: Utensils,
    image: STUDIO_ASSETS.vanityTimberAlcove,
    description:
      "Elevating daily meals and festive entertaining with cohesive dining interiors. From solid teak dining tables and crockery consoles to backlit bar units and dramatic pendant illumination.",
    features: [
      "Custom Solid Teak & Marble-Top Dining Tables",
      "Crockery Display Cabinets with Tinted Glass & Warm LEDs",
      "Compact Breakfast Nooks & Counter Seating",
      "Statement Ceiling Rafts & Designer Pendant Drops",
      "Wash Basin Counter Styling with Natural Stone Bowls"
    ],
  },
  {
    number: "05",
    title: "Turnkey Inside-Home Interiors & Renovation",
    tagline: "End-to-End Home Transformation",
    icon: Home,
    image: STUDIO_ASSETS.livingDualArtSectional,
    description:
      "Complete home interior execution under one roof. We manage electrical redesign, false ceiling gypsum architecture, wall paneling, painting, custom millwork, and final staging for a hassle-free handover.",
    features: [
      "Minimalist Gypsum False Ceilings with Magnetic Track Lights",
      "Foyer & Pooja Room Traditional-Modern Joinery",
      "Complete Electrical, Plumbing & HVAC Coordination",
      "Factory-Finished Precision Joinery with Anti-Scratch Surfaces",
      "Dedicated Site Supervisor & 100% On-Time Delivery"
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Spatial Consultation",
    desc: "In-depth discussion of your lifestyle, room layout, storage requirements, and aesthetic preferences.",
  },
  {
    step: "02",
    title: "3D Photorealistic Design",
    desc: "Detailed 3D visualizations showing exact materials, textures, lighting, and modular dimensions.",
  },
  {
    step: "03",
    title: "Factory Pre-Fabrication",
    desc: "Automated precision cutting and edge-banding in our state-of-the-art facility for millimeter accuracy.",
  },
  {
    step: "04",
    title: "Turnkey Installation",
    desc: "Dust-minimized swift on-site assembly, thorough quality inspection, and spotless handover.",
  },
];

export default function ServicesPage() {
  return (
    <div className="site-shell bg-[#f4f2ee] text-[#161616]">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Editorial Hero */}
        <section className="content-rail pb-12 md:pb-20 border-b border-[#161616]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Eyebrow>Interior Capabilities & Disciplines</Eyebrow>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#161616] leading-[1.05] mt-3">
              Home inside rooms, living areas &amp; <em className="text-[#c52a22] font-normal">kitchens.</em>
            </h1>
            <p className="text-base sm:text-lg text-[#615d57] leading-relaxed mt-5 font-light">
              From bespoke modular kitchens and media lounges to serene master bedrooms and complete turnkey home fit-outs, we bring warmth, functionality, and architectural finesse to every corner of your residence.
            </p>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mt-8 text-xs font-semibold text-[#161616]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#c52a22]" />
                <span>10-Year Hardware Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#c52a22]" />
                <span>Factory-Finished Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#c52a22]" />
                <span>Turnkey On-Time Handover</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Detailed Room & Kitchen Services */}
        <section className="content-rail py-16 md:py-24 space-y-16 md:space-y-28">
          {INTERIOR_SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-8 lg:gap-16 items-center`}
                >
                  {/* Service Image */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-[#242321] rounded-sm shadow-md group-hover:shadow-xl transition-shadow duration-700">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-[#161616]/90 backdrop-blur-md px-3.5 py-1.5 text-[0.65rem] tracking-widest uppercase text-white font-mono font-semibold rounded-sm flex items-center gap-2 shadow-sm">
                        <Icon size={14} className="text-[#c52a22]" />
                        <span>Service {service.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#c52a22] font-semibold">
                      <span>{service.tagline}</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] group-hover:text-[#c52a22] transition-colors leading-tight mt-2">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#615d57] font-light leading-relaxed mt-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 pt-6 border-t border-[#161616]/10">
                      <span className="text-[0.65rem] uppercase tracking-widest text-[#746f68] font-bold block mb-3">
                        Design Inclusions &amp; Specifications
                      </span>
                      <ul className="space-y-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#161616]/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c52a22] mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 text-xs tracking-wider uppercase font-bold text-[#161616] hover:text-[#c52a22] transition-colors group/btn"
                      >
                        <span>Book Room Consultation</span>
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
        </section>

        {/* 4-Step Process Section */}
        <section className="bg-[#e9e6df] py-16 md:py-24 border-y border-[#161616]/10">
          <div className="content-rail">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Eyebrow>Execution Methodology</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#161616] mt-2">
                How we bring your home interiors to life.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white p-7 rounded-sm border border-[#161616]/10 shadow-sm relative group hover:border-[#c52a22] transition-colors"
                >
                  <span className="font-mono text-2xl font-bold text-[#c52a22] block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl text-[#161616] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#746f68] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EditorialMarquee dark />

        {/* CTA Banner */}
        <section className="content-rail py-20 md:py-28 text-center">
          <div className="max-w-2xl mx-auto">
            <Eyebrow>Start Your Transformation</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#161616] mt-3 leading-tight">
              Ready to design your kitchen, living room, or bedroom?
            </h2>
            <p className="text-sm sm:text-base text-[#746f68] font-light mt-4 leading-relaxed">
              Schedule a personalized design session with our interior specialists across Kochi, Calicut, Trivandrum, Thrissur &amp; Bangalore.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c52a22] text-white text-xs tracking-widest uppercase font-bold shadow-md hover:bg-[#a8211b] transition-all"
              >
                <span>Request Free Room Estimate</span>
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 border border-[#161616]/20 hover:border-[#161616] text-[#161616] px-6 py-4 text-xs tracking-widest uppercase font-bold transition-all"
              >
                <PhoneCall size={14} />
                <span>{STUDIO_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
