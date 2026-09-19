"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_INFO } from "@/lib/data";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell bg-[#f7f5f0] text-[#161616]">
      <Header />

      <main className="pt-32 md:pt-40">
        {/* Page Hero */}
        <section className="content-rail pb-12 border-b border-[#161616]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Eyebrow>Start a Dialogue</Eyebrow>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-[#161616] leading-[1.05] mt-3">
              Let&apos;s build something <em className="text-[#c52a22] font-normal">enduring.</em>
            </h1>
            <p className="text-lg md:text-xl text-[#615d57] leading-relaxed mt-6 font-light">
              We welcome commissions for bespoke home interiors, modular kitchens, and bedroom living spaces across Malappuram, Calicut, and Kerala.
            </p>
          </motion.div>
        </section>

        {/* Contact Form & Studio Details */}
        <section className="content-rail py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Interactive Inquiry Form */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 md:p-12 border border-[#161616]/10 shadow-sm rounded-sm">
            <h2
              className="font-serif text-[#161616] font-normal"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                lineHeight: "1.35",
                marginBottom: "32px",
                display: "block",
              }}
            >
              Project Commission Inquiry
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-[#efede8] text-center space-y-4 border border-[#c52a22]/30"
              >
                <CheckCircle2 className="mx-auto text-[#c52a22]" size={42} />
                <h3 className="font-serif text-2xl text-[#161616]">Thank you for reaching out</h3>
                <p className="text-sm text-[#615d57] max-w-md mx-auto">
                  Our interior design team in Thalappara will review your project requirements and connect shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Menon"
                      className="w-full px-4 py-3 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:outline-none text-sm text-[#161616]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98470 00000"
                      className="w-full px-4 py-3 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:outline-none text-sm text-[#161616]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2">
                      Service Required *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:outline-none text-sm text-[#161616]"
                    >
                      <option value="Modular Kitchen">Bespoke Modular Kitchen</option>
                      <option value="Living Room">Living Room &amp; Media Lounge</option>
                      <option value="Bedroom Suites">Master Bedroom &amp; Wardrobes</option>
                      <option value="Dining Area">Dining Area Interior</option>
                      <option value="Turnkey Full Home">Turnkey Full Home Fit-out</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Thalappara, Calicut, Malappuram"
                      className="w-full px-4 py-3 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:outline-none text-sm text-[#161616]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2">
                    Project Scope &amp; Vision
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your room size, house plan, timeline, and interior requirements..."
                    className="w-full px-4 py-3 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:outline-none text-sm text-[#161616]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c52a22] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:bg-[#a8211b] transition-colors flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right: Studio Direct Contact & Offices */}
          <div className="md:col-span-5 space-y-8">
            <div className="p-8 bg-white border border-[#161616]/10 shadow-sm space-y-6">
              <span className="text-[0.62rem] uppercase tracking-widest text-[#c52a22] font-bold block">
                Principal Studio &amp; Workshop
              </span>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#c52a22] flex-shrink-0 mt-1" size={18} />
                  <div>
                    <h3 className="font-serif text-xl text-[#161616]">Redline Interiors Studio</h3>
                    <a
                      href={STUDIO_INFO.address.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#615d57] leading-relaxed mt-1 block hover:text-[#c52a22] transition-colors"
                    >
                      {STUDIO_INFO.address.line1}
                      <br />
                      {STUDIO_INFO.address.line2}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Phone className="text-[#c52a22] flex-shrink-0" size={18} />
                  <div>
                    <a
                      href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-[#161616] hover:text-[#c52a22] transition-colors"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                    <span className="text-[0.65rem] text-[#746f68] block mt-0.5">{STUDIO_INFO.hours}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#161616]/10">
                  <a
                    href={`https://wa.me/${STUDIO_INFO.phone.replace(/[^0-9]/g, "")}?text=Hi%20Redline%20Interiors,%20I%20would%20like%20to%20consult%20on%20an%20interior%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-sm rounded-sm flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.3-.777.98-1.002 1.23-.226.25-.452.28-.753.13-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.585-.492-.506-.677-.516-.175-.008-.376-.01-.576-.01-.201 0-.527.075-.802.376-.276.3-1.053 1.03-1.053 2.511s1.078 2.911 1.228 3.112c.15.2 2.122 3.24 5.14 4.544.718.31 1.278.495 1.716.634.721.23 1.376.197 1.895.12.578-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.125-.276-.225-.577-.376zM12.04 2C6.502 2 2.015 6.486 2.015 12.023c0 1.767.461 3.493 1.336 5.012L2 22l5.127-1.344c1.47.801 3.129 1.223 4.913 1.223 5.537 0 10.024-4.486 10.024-10.023C22.064 6.486 17.577 2 12.04 2zm0 18.344c-1.503 0-2.977-.404-4.262-1.168l-.305-.181-3.167.831.846-3.088-.198-.316c-.84-1.336-1.284-2.888-1.284-4.479 0-4.606 3.748-8.353 8.37-8.353 4.621 0 8.369 3.747 8.369 8.353 0 4.607-3.748 8.353-8.369 8.353z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#161616] text-white shadow-sm space-y-4">
              <span className="text-[0.62rem] uppercase tracking-widest text-[#ff5b53] font-bold block">
                Commission Timelines
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                We accept a limited number of commissions per quarter to preserve design rigor, craftsmanship quality, and meticulous site supervision.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
