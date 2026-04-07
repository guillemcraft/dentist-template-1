import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export default function Hero() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left column - Text */}
          <div>
            <AnimateIn delay={0} direction="none">
            <p className="text-lg font-light text-[#121212] tracking-[-0.45px] mb-4">
              Healthy smiles, happy lives.
            </p>
            </AnimateIn>
            <AnimateIn delay={100}>
            <h1 className="font-[family-name:var(--font-inter-display)] text-5xl lg:text-[64px] font-medium leading-[1.15] lg:leading-[73.6px] tracking-[-1.92px] text-[#121212] mb-6">
              Bringing brighter smiles to your family
            </h1>
            </AnimateIn>
            <AnimateIn delay={200}>
            <p className="text-xl font-light leading-[31px] tracking-[-0.5px] text-[#575757] mb-8 max-w-lg">
              Experience personalized dental care designed to meet your unique
              needs. From preventive checkups to advanced oral health and
              confidence are always at their best.
            </p>
            </AnimateIn>
            <AnimateIn delay={300}>
            <div className="flex items-center gap-4">
              <Link
                href="#booking"
                className="inline-flex items-center h-12 bg-[#3072FF] text-white rounded-[14px] px-6 text-lg font-medium tracking-[-0.45px] hover:bg-[#3072FF]/90 transition hover-lift"
              >
                Book Now
              </Link>
              <a href="tel:123456789" className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <div>
                  <p className="text-base font-medium text-[#121212]">Contact us</p>
                  <p className="text-sm font-light text-[#575757] tracking-[-0.42px]">(123) 456 789</p>
                </div>
              </a>
            </div>
            </AnimateIn>
          </div>

          {/* Right column - Image */}
          <div className="mt-10 lg:mt-0">
            <AnimateIn delay={200} direction="right">
            <div className="relative aspect-[489/518] w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/hero/hero.jpg"
                alt="Dental care"
                fill
                className="object-cover"
                priority
              />
            </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
