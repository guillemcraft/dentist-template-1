import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const features = [
  {
    icon: "/images/icons/personalized-care.svg",
    title: "Personalized care",
    description:
      "Every smile is unique, and our treatments are tailored to meet your specific needs. From preventive carefully",
  },
  {
    icon: "/images/icons/advanced-tech.svg",
    title: "Advanced technology",
    description:
      "We use state-of-the-art tools and techniques to deliver precise, efficient, and effective treatments.",
  },
  {
    icon: "/images/icons/team-cares.svg",
    title: "Team that cares",
    description:
      "Our dedicated team combines expertise with compassion, ensuring you feel supported at every step.",
  },
];

const stats = [
  { value: "150+", label: "Smiles Transformed" },
  { value: "+10", label: "Years of Experience" },
  { value: "500+", label: "Happy Patients" },
  { value: "98%", label: "Patient Satisfaction" },
];

export default function Introduction() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <AnimateIn direction="none">
          <p className="text-lg font-light text-[#121212] tracking-[-0.45px] text-center mb-4">
            Introduction
          </p>
        </AnimateIn>

        {/* Heading */}
        <AnimateIn delay={100}>
          <h2 className="font-[family-name:var(--font-inter-display)] text-4xl lg:text-[50px] font-medium leading-[60px] tracking-[-1.5px] text-[#121212] mb-16 max-w-2xl mx-auto text-center">
            A commitment to healthier, brighter smiles
          </h2>
        </AnimateIn>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 150} className="flex flex-col items-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-2xl font-medium leading-[36px] tracking-[-0.72px] text-[#121212] font-[family-name:var(--font-inter-display)] mb-2">
                {feature.title}
              </h3>
              <p className="text-lg font-light tracking-[-0.45px] text-[#575757]">
                {feature.description}
              </p>
            </AnimateIn>
          ))}
        </div>

        {/* Play button */}
        <AnimateIn delay={100} direction="none">
          <div className="flex justify-center mt-16">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icons/play-button.svg"
                alt="Play video"
                width={60}
                height={60}
              />
            </a>
          </div>
        </AnimateIn>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <p className="font-[family-name:var(--font-inter-display)] text-5xl lg:text-[64px] font-medium leading-[73.6px] tracking-[-1.92px] text-[#121212]">
                {stat.value}
              </p>
              <p className="text-xl font-light leading-[31px] tracking-[-0.5px] text-[#121212] mt-2">{stat.label}</p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
