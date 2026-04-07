import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const checklistItems = [
  "Compassionate care with a focus",
  "State-of-the-art technology for treatments",
  "Personalized solutions to every smile",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left side - Image */}
          <AnimateIn direction="left">
          <div className="relative aspect-[546/520] w-full overflow-hidden rounded-[24px]">
            <Image
              src="/images/about/why-choose.jpg"
              alt="Why choose our dental clinic"
              fill
              className="object-cover"
            />
          </div>
          </AnimateIn>

          {/* Right side - Text content */}
          <AnimateIn delay={200} direction="right">
          <div>
            <h3 className="font-[family-name:var(--font-inter-display)] text-3xl font-medium text-[#121212] lg:text-4xl mb-4">
              Why choose us:
            </h3>
            <p className="text-lg font-light tracking-[-0.45px] text-[#575757] mb-8">
              We are dedicated to providing exceptional dental care that
              prioritizes your comfort, convenience, and lasting results.
              Here&apos;s what makes us stand out:
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-4">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3072FF]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 4L5.5 10L2.5 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-light tracking-[-0.45px] text-[#121212]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* About us link */}
            <Link
              href="/about"
              className="mt-8 inline-flex items-center h-12 rounded-[14px] bg-[#3072FF] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#3072FF]/90 transition hover-lift"
            >
              About us
            </Link>
          </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
