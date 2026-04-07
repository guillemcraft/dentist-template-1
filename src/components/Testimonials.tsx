import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const testimonials = [
  {
    before: "/images/testimonials/after1.jpg",
    after: "/images/testimonials/before1.jpg",
    quote:
      "Outstanding service and clear communication. Their solutions delivered results expectations.",
    avatar: "/images/testimonials/daniel.webp",
    name: "Daniel Smith",
  },
  {
    before: "/images/testimonials/after2.jpg",
    after: "/images/testimonials/before2.jpg",
    quote:
      "Professional, efficient, and result-driven. We couldn't have asked for a better dental clinic.",
    avatar: "/images/testimonials/lisa.webp",
    name: "Lisa Green",
  },
  {
    before: "/images/testimonials/after3.jpg",
    after: "/images/testimonials/before3.jpg",
    quote:
      "Fast, effective guidance. The team's approach ensured we met our goals within the timeframe.",
    avatar: "/images/testimonials/john.webp",
    name: "John Smith",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <AnimateIn direction="none">
          <p className="mb-4 text-lg font-light text-[#121212] tracking-[-0.45px] text-center">
            Testimonial
          </p>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="mb-12 max-w-3xl mx-auto text-center font-[family-name:var(--font-inter-display)] text-4xl font-medium leading-[60px] tracking-[-1.5px] text-[#121212] lg:text-[50px]">
            What our patients say about us &amp; service!!
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 150}>
              <div>
                {/* Before / After images */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  <div className="relative aspect-[369/320] overflow-hidden">
                    <Image
                      src={t.before}
                      alt="Before treatment"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded bg-white/90 px-3 py-1 text-xs font-semibold uppercase">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[369/320] overflow-hidden">
                    <Image
                      src={t.after}
                      alt="After treatment"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded bg-white/90 px-3 py-1 text-xs font-semibold uppercase">
                      After
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <Image
                  src="/images/icons/quote.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mb-3"
                />
                <p className="mb-4 text-lg font-light tracking-[-0.45px] text-[#121212]">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-sm font-semibold text-[#121212]">
                    {t.name}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
