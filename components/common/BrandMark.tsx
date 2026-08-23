"use client";

import React from "react";
import Link from "next/link";

interface BrandMarkProps {
  onNavigate?: (id: string) => void;
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center cursor-pointer select-none group transition-transform duration-200 hover:scale-105 ${className}`}
      aria-label="Redline Interiors, return to home"
    >
      <img
        src="/logo1.png"
        alt="Redline Interiors"
        className="h-7 sm:h-9 w-auto object-contain"
      />
    </Link>
  );
}
