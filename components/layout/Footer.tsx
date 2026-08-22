"use client";

import { BrandMark } from "@/components/common/BrandMark";
import { NAV_ITEMS, STUDIO_INFO } from "@/lib/data";

interface FooterProps {
  onNavigate: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <BrandMark onNavigate={onNavigate} />
        <p>Interiors shaped with a clear point of view.</p>
      </div>

      <div className="footer-grid">
        <div>
          <p className="footer-label">Contact</p>
          <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
          <a href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}>{STUDIO_INFO.phone}</a>
        </div>

        <div>
          <p className="footer-label">Visit</p>
          <p>
            {STUDIO_INFO.address.line1}
            <br />
            {STUDIO_INFO.address.line2}
          </p>
        </div>

        <div>
          <p className="footer-label">Follow</p>
          {STUDIO_INFO.socials.map((social) => (
            <a key={social.label} href={social.href}>
              {social.label}
            </a>
          ))}
        </div>

        <div className="footer-nav">
          <p className="footer-label">Navigate</p>
          {NAV_ITEMS.map(({ label, id }) => (
            <button key={id} onClick={() => onNavigate(id)}>
              {label}
            </button>
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
