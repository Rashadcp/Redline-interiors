"use client";

import { useCallback } from "react";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { EditorialMarquee } from "@/components/common/EditorialMarquee";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Approach } from "@/components/sections/Approach";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="site-shell" id="home">
      <ScrollProgress />
      <Header onNavigate={scrollToSection} />

      <main>
        <Hero onNavigate={scrollToSection} />
        <Philosophy onNavigate={scrollToSection} />
        
        {/* Company Name Editorial Marquee Banner */}
        <EditorialMarquee />

        <Approach onNavigate={scrollToSection} />
        <Projects onNavigate={scrollToSection} />

        {/* Dark Luxury Company Banner */}
        <EditorialMarquee dark />

        <Services onNavigate={scrollToSection} />
        <Contact />
      </main>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
