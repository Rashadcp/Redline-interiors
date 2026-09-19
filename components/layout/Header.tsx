"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { BrandMark } from "@/components/common/BrandMark";
import { NAV_ITEMS, STUDIO_INFO } from "@/lib/data";

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled || menuOpen || pathname !== "/"
            ? "py-3 bg-[#f7f5f0]/90 backdrop-blur-xl border-b border-[#161616]/10 text-[#161616] shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "py-6 bg-transparent text-white"
        }`}
      >
        <div className="content-rail relative flex items-center justify-between">
          {/* Brand Logo & Name */}
          <BrandMark />

          {/* Desktop Floating Pill Navigation (Centered) */}
          <nav
            className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 px-4 py-1.5 rounded-full transition-all duration-300 ${
              scrolled || pathname !== "/"
                ? "bg-[#161616]/[0.04] border border-[#161616]/10 shadow-inner"
                : "bg-black/30 backdrop-blur-md border border-transparent"
            }`}
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map(({ label, id, href }) => {
              const isActive = isCurrentPage(href);
              const isHovered = hoveredNav === id;
              const isLightHeader = scrolled || pathname !== "/";

              return (
                <Link
                  key={id}
                  href={href}
                  onMouseEnter={() => setHoveredNav(id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`relative px-4 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase font-bold transition-colors duration-200 cursor-pointer ${
                    isLightHeader
                      ? isActive
                        ? "text-[#c52a22]"
                        : "text-[#161616]/75 hover:text-[#161616]"
                      : isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {/* Active / Hover Background Pill */}
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="navPill"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isLightHeader
                          ? isActive
                            ? "bg-white shadow-sm border border-black/5"
                            : "bg-black/5"
                          : isActive
                          ? "bg-white/20 shadow-sm"
                          : "bg-white/10"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}

                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c52a22] animate-pulse" />
                    )}
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2.5 rounded-full transition-colors cursor-pointer ${
              scrolled || menuOpen || pathname !== "/"
                ? "bg-[#161616]/5 text-[#161616] hover:bg-[#161616]/10"
                : "bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
            }`}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-30 bg-[#f7f5f0] text-[#161616] flex flex-col justify-between pt-28 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Top Navigation Links */}
            <div className="flex flex-col gap-2">
              <span className="text-[0.62rem] tracking-[0.2em] uppercase font-bold text-[#c52a22] mb-2">
                Studio Navigation
              </span>
              {NAV_ITEMS.map(({ label, id, href }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-[#161616]/10 text-left font-serif text-3xl text-[#161616] hover:text-[#c52a22] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#c52a22]/70 font-sans">
                        0{index + 1}
                      </span>
                      {label}
                    </span>
                    <ArrowUpRight size={20} strokeWidth={1.4} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Contact Details */}
            <div className="pt-8 flex flex-col gap-4 border-t border-[#161616]/10 mt-6">
              <div className="flex items-center gap-3 text-xs text-[#746f68]">
                <MapPin size={15} className="text-[#c52a22]" />
                <a
                  href={STUDIO_INFO.address.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c52a22] transition-colors"
                >
                  Moonniyur, Thalappara, Kerala
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#746f68]">
                <Phone size={15} className="text-[#c52a22]" />
                <a href={`tel:${STUDIO_INFO.phone}`}>{STUDIO_INFO.phone}</a>
                <span className="text-[0.65rem] text-[#8a857e]">({STUDIO_INFO.hours})</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
