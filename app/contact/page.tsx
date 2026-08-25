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
              We welcome commissions for private residences, waterfront villas, and bespoke commercial spaces
              across Kerala and South India.
            </p>
          </motion.div>
        </section>

        {/* Contact Form & Studio Details */}
        <section className="content-rail py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Interactive Inquiry Form */}
          <div className="md:col-span-7 bg-white p-8 md:p-12 border border-[#161616]/10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#161616] mb-6">
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
                  Our principal architectural team in Kochi will review your project requirements and connect within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2">
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:outline-none text-sm text-[#161616]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Calicut, Kochi, Wayanad"
                      className="w-full px-4 py-3 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:outline-none text-sm text-[#161616]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#746f68] font-bold mb-2">
                    Project Scope & Vision
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the property, plot size, timeline, and architectural requirements..."
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
