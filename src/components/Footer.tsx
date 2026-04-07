import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "How It Works", href: "#dentist" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn direction="none">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
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

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium tracking-[-0.45px] text-[#575757] hover:text-[#121212] transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-base font-medium tracking-[-0.45px] text-[#575757] shrink-0">
            &copy; {new Date().getFullYear()} Dentify
          </p>
        </div>
        </AnimateIn>
      </div>
    </footer>
  );
}
