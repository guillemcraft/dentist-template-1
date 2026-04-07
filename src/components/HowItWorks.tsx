import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Schedule your visit",
    description:
      "Book an appointment at your convenience through our easy scheduling system, and we'll ensure a hassle-free experience from the start.",
    image: "/images/howItWorks/step1.png",
    link: { label: "Contact us", href: "/contact" },
    reversed: false,
  },
  {
    number: "02",
    title: "Personalized consultation",
    description:
      "Meet with our expert dental team to discuss your needs, goals, and tailored treatment options designed just for you.",
    image: "/images/howItWorks/step2.webp",
    link: { label: "Contact us", href: "/contact" },
    reversed: true,
  },
  {
    number: "03",
    title: "Begin your journey",
    description:
      "Medical knowledge and practices continually evolve perfectly match your goals of treatment complications with early intervention.",
    image: "/images/howItWorks/step3.jpg",
    link: { label: "Contact us", href: "/contact" },
    reversed: false,
  },
];

export default function HowItWorks() {
  return (
    <section id="dentist" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <AnimateIn direction="none">
        <p className="mb-4 text-lg font-light text-[#121212] tracking-[-0.45px] text-center">
          How It Works
        </p>
        </AnimateIn>
        <AnimateIn delay={100}>
        <h2 className="mb-16 max-w-3xl mx-auto text-center font-[family-name:var(--font-inter-display)] text-4xl font-medium leading-[60px] tracking-[-1.5px] text-[#121212] lg:text-[50px]">
          The process of achieving dental excellence
        </h2>
        </AnimateIn>

        <div className="space-y-16">
          {steps.map((step) => (
            <AnimateIn key={step.number} delay={100}>
            <div
              className={`lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 ${
                step.reversed ? "direction-reverse" : ""
              }`}
            >
              <div
                className={`relative mb-8 aspect-[4/3] overflow-hidden rounded-[32px] lg:mb-0 ${
                  step.reversed ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className={step.reversed ? "lg:order-1" : ""}>
                <p className="font-[family-name:var(--font-inter-display)] text-6xl font-medium text-[#E5E7EB]">
                  {step.number}
                </p>
                <h5 className="mb-3 text-2xl font-medium leading-[36px] tracking-[-0.72px] text-[#121212] font-[family-name:var(--font-inter-display)]">
                  {step.title}
                </h5>
                <p className="mb-4 text-lg font-light tracking-[-0.45px] text-[#575757]">
                  {step.description}
                </p>
                <Link
                  href={step.link.href}
                  className="inline-flex items-center h-12 rounded-[14px] bg-[#3072FF] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#3072FF]/90 transition hover-lift"
                >
                  {step.link.label}
                </Link>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
