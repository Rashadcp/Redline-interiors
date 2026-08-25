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
  title: "Redline Interiors — Bespoke Home Interiors, Modular Kitchens & Living Spaces | Thalappara, Kerala",
  description:
    "Redline Interiors is a premier interior contractor based in Thalappara, Malappuram, Kerala. Specializing in bespoke modular kitchens, living areas, bedroom suites, and turnkey home interior executions.",
  keywords: [
    "Redline Interiors",
    "Interior Contractor Kerala",
    "Modular Kitchen Malappuram",
    "Living Room Interior Calicut",
    "Thalappara Interior Design",
    "Home Interior Contractor",
    "Bespoke Bedroom Wardrobes",
  ],
  openGraph: {
    title: "Redline Interiors — Bespoke Home Interiors & Modular Kitchens",
    description: "Crafting beautiful home interiors across Kerala. Specializing in bespoke modular kitchens, living areas, and luxury bedroom suites.",
    url: "https://redlineinteriors.in",
    siteName: "Redline Interiors",
    images: [
      {
        url: "/living.png",
        width: 1200,
        height: 630,
        alt: "Redline Interiors Living Room Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
