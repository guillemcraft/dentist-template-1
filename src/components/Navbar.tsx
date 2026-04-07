"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "How It Works", href: "#dentist" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex h-[88px] items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/favicon.svg"
              alt=""
              width={21}
              height={21}
              priority
            />
            <span className="text-2xl font-medium tracking-[-0.6px] text-[#121212] font-[family-name:var(--font-satoshi)]">
              Dentify
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium tracking-[-0.45px] transition-colors ${
                  pathname === link.href
                    ? "text-[#3072FF]"
                    : "text-[#121212] hover:text-[#3072FF]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="rounded-[14px] bg-[#3072FF] px-4 py-2.5 text-lg font-medium tracking-[-0.45px] text-white transition-colors hover:bg-[#3072FF]/90 hover-lift"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#121212"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          {/* Mobile Header */}
          <div className="flex h-[88px] items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <Image
                src="/images/favicon.svg"
                alt=""
                width={21}
                height={21}
              />
              <span className="text-2xl font-medium tracking-[-0.6px] text-[#121212] font-[family-name:var(--font-satoshi)]">
                Dentify
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#121212"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#3072FF]"
                    : "text-[#121212] hover:text-[#3072FF]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="px-6 pb-10">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-[14px] bg-[#3072FF] px-4 py-3 text-center text-lg font-medium tracking-[-0.45px] text-white transition-colors hover:bg-[#3072FF]/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
