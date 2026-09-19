"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MapPin, CheckCircle2, Send, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_INFO } from "@/lib/data";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Modular Kitchen",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-cta relative overflow-hidden" id="contact" aria-labelledby="contact-title">
      <motion.div
        className="section-datum contact-datum"
        aria-hidden="true"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <span>05</span>
        <motion.i
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <div className="content-rail">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial & Direct Channels */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
          >
            <Eyebrow>New Commissions &amp; Spatial Studies</Eyebrow>
            
            <h2 id="contact-title" className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#161616] leading-[1.05] mt-2">
              Bring us <br />
              the <em>plan.</em>
            </h2>

            <p className="text-sm sm:text-base text-[#615d57] font-light leading-relaxed mt-5 max-w-lg">
              Whether designing a bespoke modular kitchen, styling an ambient living space, or executing a turnkey home interior, our studio in Thalappara ensures millimeter precision and enduring craft.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap gap-3.5 mt-8 w-full">
              <a
                href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#161616] hover:bg-[#c52a22] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-sm rounded-sm"
              >
                <Phone size={14} className="text-[#c52a22] group-hover:text-white" />
                <span>Call {STUDIO_INFO.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.phone.replace(/[^0-9]/g, "")}?text=Hi%20Redline%20Interiors,%20I%20would%20like%20to%20consult%20on%20an%20interior%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-sm rounded-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.3-.777.98-1.002 1.23-.226.25-.452.28-.753.13-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.585-.492-.506-.677-.516-.175-.008-.376-.01-.576-.01-.201 0-.527.075-.802.376-.276.3-1.053 1.03-1.053 2.511s1.078 2.911 1.228 3.112c.15.2 2.122 3.24 5.14 4.544.718.31 1.278.495 1.716.634.721.23 1.376.197 1.895.12.578-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.125-.276-.225-.577-.376zM12.04 2C6.502 2 2.015 6.486 2.015 12.023c0 1.767.461 3.493 1.336 5.012L2 22l5.127-1.344c1.47.801 3.129 1.223 4.913 1.223 5.537 0 10.024-4.486 10.024-10.023C22.064 6.486 17.577 2 12.04 2zm0 18.344c-1.503 0-2.977-.404-4.262-1.168l-.305-.181-3.167.831.846-3.088-.198-.316c-.84-1.336-1.284-2.888-1.284-4.479 0-4.606 3.748-8.353 8.37-8.353 4.621 0 8.369 3.747 8.369 8.353 0 4.607-3.748 8.353-8.369 8.353z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Studio Address Card */}
            <div className="mt-8 pt-8 border-t border-[#161616]/10 w-full flex items-start justify-between gap-4">
              <div>
                <a
                  href={STUDIO_INFO.address.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs text-[#161616] font-medium hover:text-[#c52a22] transition-colors"
                >
                  <MapPin size={15} className="text-[#c52a22] flex-shrink-0 mt-0.5" />
                  <span>{STUDIO_INFO.address.line1}, {STUDIO_INFO.address.city}</span>
                </a>
                <span className="text-[0.68rem] text-[#746f68] block mt-1 pl-6">
                  {STUDIO_INFO.hours}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Consultation Form */}
          <motion.div
            className="lg:col-span-6 w-full"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="bg-white p-7 sm:p-10 border border-[#161616]/10 shadow-lg relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#161616]/10">
                <div>
                  <span className="text-[0.65rem] uppercase tracking-widest text-[#c52a22] font-mono font-bold block mb-1">
                    Direct Studio Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#161616]">Request Free Room Estimate</h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-[#f4f2ee] flex items-center justify-center text-[#c52a22]">
                  <Sparkles size={15} />
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-3"
                >
                  <CheckCircle2 className="mx-auto text-[#c52a22]" size={48} />
                  <h4 className="font-serif text-2xl text-[#161616]">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-[#615d57] max-w-sm mx-auto leading-relaxed">
                    Thank you {formData.name || ""}. Our interior design team in Thalappara will contact you at {formData.phone || "your number"} to review your {formData.service} requirements.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-[#c52a22] font-bold underline underline-offset-4 pt-2"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-[#746f68] font-bold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Asif Ali"
                        className="w-full px-3.5 py-2.5 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:bg-white focus:outline-none text-xs text-[#161616] rounded-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-[#746f68] font-bold mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98470 00000"
                        className="w-full px-3.5 py-2.5 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:bg-white focus:outline-none text-xs text-[#161616] rounded-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-[#746f68] font-bold mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:bg-white focus:outline-none text-xs text-[#161616] rounded-sm transition-all"
                      >
                        <option value="Modular Kitchen">Bespoke Modular Kitchen</option>
                        <option value="Living Room & Media Lounge">Living Room &amp; Media Unit</option>
                        <option value="Master Bedroom Suite">Master Bedroom &amp; Wardrobes</option>
                        <option value="Dining Space">Dining Space Interior</option>
                        <option value="Turnkey Full Home">Turnkey Full Home Fit-out</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-[#746f68] font-bold mb-1.5">
                        Location / City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Thalappara, Calicut"
                        className="w-full px-3.5 py-2.5 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:bg-white focus:outline-none text-xs text-[#161616] rounded-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-wider text-[#746f68] font-bold mb-1.5">
                      Approximate Area / Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. 3BHK villa kitchen and living room woodwork, plan ready..."
                      className="w-full px-3.5 py-2.5 bg-[#f7f5f0] border border-[#161616]/15 focus:border-[#c52a22] focus:bg-white focus:outline-none text-xs text-[#161616] rounded-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#c52a22] hover:bg-[#a8211b] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 rounded-sm cursor-pointer"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
