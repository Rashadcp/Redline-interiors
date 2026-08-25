import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redline Interiors — Luxury Interior Architecture & Tropical Design | Kerala, India",
  description:
    "Redline Interiors is a premier interior architecture and design studio in Kerala, India. Crafting luxury residences, tropical villas, and bespoke commercial spaces in Kochi, Calicut, Trivandrum, and beyond.",
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            {children}
            <WhatsAppButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
