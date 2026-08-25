"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { STUDIO_INFO } from "@/lib/data";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/918136940526?text=Hi%20Redline%20Interiors,%20I%20would%20like%20to%20consult%20on%20an%20interior%20project.`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Redline Interiors on WhatsApp"
        title="Chat on WhatsApp (+91 81369 40526)"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.3-.777.98-1.002 1.23-.226.25-.452.28-.753.13-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.585-.492-.506-.677-.516-.175-.008-.376-.01-.576-.01-.201 0-.527.075-.802.376-.276.3-1.053 1.03-1.053 2.511s1.078 2.911 1.228 3.112c.15.2 2.122 3.24 5.14 4.544.718.31 1.278.495 1.716.634.721.23 1.376.197 1.895.12.578-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.125-.276-.225-.577-.376zM12.04 2C6.502 2 2.015 6.486 2.015 12.023c0 1.767.461 3.493 1.336 5.012L2 22l5.127-1.344c1.47.801 3.129 1.223 4.913 1.223 5.537 0 10.024-4.486 10.024-10.023C22.064 6.486 17.577 2 12.04 2zm0 18.344c-1.503 0-2.977-.404-4.262-1.168l-.305-.181-3.167.831.846-3.088-.198-.316c-.84-1.336-1.284-2.888-1.284-4.479 0-4.606 3.748-8.353 8.37-8.353 4.621 0 8.369 3.747 8.369 8.353 0 4.607-3.748 8.353-8.369 8.353z" />
        </svg>
      </a>
    </motion.div>
  );
}
