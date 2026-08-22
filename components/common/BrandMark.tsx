"use client";

import React from "react";

interface BrandMarkProps {
  onNavigate?: (id: string) => void;
  className?: string;
}

export function BrandMark({ onNavigate, className = "" }: BrandMarkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("home");
    } else {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      className={`inline-flex items-center justify-center cursor-pointer select-none group transition-transform duration-200 hover:scale-105 ${className}`}
      href="#home"
      aria-label="Redline Interiors, return to home"
      onClick={handleClick}
    >
      <img
        src="/logo1.png"
        alt="Redline Interiors"
        className="h-7 sm:h-9 w-auto object-contain"
      />
    </a>
  );
}
