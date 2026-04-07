import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    image: "/images/services/pediatric.webp",
    rating: 4.5,
    name: "Pediatric Dentistry",
    description:
      "Gentle and specialized dental care for growing smiles with all.",
  },
  {
    image: "/images/services/emergency.jpg",
    rating: 4.6,
    name: "Emergency Care",
    description:
      "Quick and reliable dental care for unexpected emergencies.",
  },
  {
    image: "/images/services/orthodontic.webp",
    rating: 4.9,
    name: "Orthodontic Solutions",
    description:
      "Achieve a straighter, healthier smile with modern orthodontic treatments.",
  },
  {
    image: "/images/services/cosmetic.webp",
    rating: 4.8,
    name: "Cosmetic Enhancements",
    description:
      "Enhance your smile's appearance with personalized cosmetic dental treatments.",
  },
  {
    image: "/images/services/restorative.webp",
    rating: 4.9,
    name: "Restorative Dentistry",
    description:
      "Restore the function and beauty of your smile with advanced dental treatments.",
  },
  {
    image: "/images/services/preventive.webp",
    rating: 4.8,
    name: "Preventive Care",
    description:
      "Protect your oral health with routine checkups and preventive treatments carefully.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn direction="none">
        <p className="text-lg font-medium text-[#121212] tracking-[-0.45px] text-center mb-4">
          Services
        </p>
        </AnimateIn>
        <AnimateIn delay={100}>
        <h2 className="font-[family-name:var(--font-inter-display)] text-4xl lg:text-[50px] font-medium leading-[60px] tracking-[-1.5px] text-[#121212] mb-12 max-w-3xl mx-auto text-center">
          Personalized solutions for better oral health
        </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.name} delay={i * 100}>
            <Link
              href="#"
              className="group"
            >
              <div className="relative aspect-[371/300] w-full overflow-hidden rounded-[18px]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover img-zoom"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icons/star.svg"
                      alt="Rating"
                      width={16}
                      height={16}
                    />
                    <span className="text-base font-medium">
                      {service.rating}
                    </span>
                    <span className="text-2xl font-medium leading-[36px] tracking-[-0.72px] text-[#121212] font-[family-name:var(--font-inter-display)]">
                      {service.name}
                    </span>
                  </div>
                  <Image
                    src="/images/icons/arrow.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-lg font-medium tracking-[-0.45px] text-[#575757] mt-2">
                  {service.description}
                </p>
              </div>
            </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
