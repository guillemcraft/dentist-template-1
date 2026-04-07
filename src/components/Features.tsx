import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const features = [
  {
    icon: "/images/icons/preventive-care.svg",
    title: "Preventive care",
    description:
      "Regular checkups and cleanings help maintain optimal oral health and prevent potential issues.",
  },
  {
    icon: "/images/icons/advanced-technology.svg",
    title: "Advanced technology",
    description:
      "Our state-of-the-art equipment ensures precise diagnostics and effective treatments for every patient.",
  },
  {
    icon: "/images/icons/cosmetic-solutions.svg",
    title: "Cosmetic solutions",
    description:
      "Transform your smile with teeth whitening, veneers, and other advanced aesthetic treatments.",
  },
  {
    icon: "/images/icons/emergency-care.svg",
    title: "Emergency care",
    description:
      "Immediate assistance for dental emergencies, ensuring your comfort and quick resolution of urgent issues.",
  },
  {
    icon: "/images/icons/personalized-treatments.svg",
    title: "Personalized treatments",
    description:
      "Every service is tailored to meet your unique dental needs, ensuring the best possible noted outcomes.",
  },
  {
    icon: "/images/icons/family-friendly.svg",
    title: "Family-friendly services",
    description:
      "We provide comprehensive care for patients of all ages, making us the perfect choice for your family.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#3072FF] text-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn direction="none">
        <p className="text-lg font-light text-white tracking-[-0.45px] text-center mb-4">
          Features
        </p>
        </AnimateIn>
        <AnimateIn delay={100}>
        <h2 className="font-[family-name:var(--font-inter-display)] text-4xl lg:text-[50px] font-medium leading-[60px] tracking-[-1.5px] text-white mb-12 max-w-3xl mx-auto text-center">
          Delivering more than just dental care & ideas
        </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 100}>
            <div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className="mb-4"
              />
              <h6 className="text-2xl font-medium leading-[36px] tracking-[-0.72px] text-white font-[family-name:var(--font-inter-display)] mb-2">
                {feature.title}
              </h6>
              <p className="text-lg font-light tracking-[-0.45px] text-white/70">{feature.description}</p>
            </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
