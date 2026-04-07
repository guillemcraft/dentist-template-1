"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "How It Works", href: "#dentist" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMenu = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleMobileLink = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-40">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
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
                  className="text-lg font-medium tracking-[-0.45px] text-[#121212] hover:text-[#3072FF] transition-colors"
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
              onClick={openMenu}
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
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-white transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex h-[88px] items-center justify-between px-4 py-5">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
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
              onClick={closeMenu}
              aria-label="Close menu"
              className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-0" : "rotate-90"}`}
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
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleMobileLink(link.href)}
                className={`text-2xl font-medium text-[#121212] hover:text-[#3072FF] transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${150 + i * 75}ms` : "0ms" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <div
            className={`px-4 pb-8 mb-[env(safe-area-inset-bottom)] transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? `${150 + navLinks.length * 75}ms` : "0ms" }}
          >
            <button
              onClick={() => handleMobileLink("#contact")}
              className="block w-full rounded-[14px] bg-[#3072FF] px-4 py-3 text-center text-lg font-medium tracking-[-0.45px] text-white transition-colors hover:bg-[#3072FF]/90"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
