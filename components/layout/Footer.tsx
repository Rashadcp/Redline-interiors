"use client";

import Link from "next/link";
import { BrandMark } from "@/components/common/BrandMark";
import { NAV_ITEMS, STUDIO_INFO } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <BrandMark />
        <p>Interiors shaped with a clear point of view.</p>
      </div>

      <div className="footer-grid">
        <div>
          <p className="footer-label">Contact</p>
          <a href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}>{STUDIO_INFO.phone}</a>
          <span className="text-xs text-[#746f68] block mt-1">{STUDIO_INFO.hours}</span>
        </div>

        <div>
          <p className="footer-label">Visit</p>
          <a
            href={STUDIO_INFO.address.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c52a22] transition-colors"
          >
            {STUDIO_INFO.address.line1}
            <br />
            {STUDIO_INFO.address.line2}
          </a>
        </div>

        <div className="footer-nav">
          <p className="footer-label">Navigate</p>
          {NAV_ITEMS.map(({ label, id, href }) => (
            <Link key={id} href={href} className="cursor-pointer">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <p className="footer-label">Follow</p>
          {STUDIO_INFO.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social hover:text-[#c52a22] transition-colors"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
              </svg>
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-75">
        <span>© {STUDIO_INFO.copyrightYear} Redline Interiors. All rights reserved.</span>
        <span>
          Developed by{" "}
          <a
            href={STUDIO_INFO.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c52a22] transition-colors underline underline-offset-4 font-semibold inline-flex items-center gap-1"
          >
            {STUDIO_INFO.developer.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
