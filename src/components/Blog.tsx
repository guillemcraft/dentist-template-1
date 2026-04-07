import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const posts = [
  {
    image: "/images/blog/cavities.jpg",
    title: "How to prevent cavities with simple daily habits",
    date: "Dec 18, 2024",
    readTime: "3 min read",
  },
  {
    image: "/images/blog/missing-teeth.webp",
    title: "Top reasons to replace missing teeth promptly",
    date: "Jan 15, 2025",
    readTime: "6 min read",
  },
  {
    image: "/images/blog/gum-health.jpg",
    title: "The connection between gum health and overall wellness",
    date: "Jan 13, 2025",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section id="blogs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn direction="none">
          <p className="text-lg font-medium text-[#121212] tracking-[-0.45px] text-center mb-4">
            Blogs
          </p>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="font-[family-name:var(--font-inter-display)] text-4xl lg:text-[50px] font-medium leading-[60px] tracking-[-1.5px] text-[#121212] mb-12 max-w-3xl mx-auto text-center">
            Stay updated with dental wellness tips
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimateIn key={post.title} delay={i * 150}>
              <Link
                href="#"
                className="group"
              >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[18px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover img-zoom"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-medium leading-[36px] tracking-[-0.72px] text-[#121212] font-[family-name:var(--font-inter-display)] pr-4">
                    {post.title}
                  </h3>
                  <Image
                    src="/images/icons/arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0 mt-1"
                  />
                </div>
                <div className="flex items-center gap-4 text-base font-medium tracking-[-0.45px] text-[#575757]">
                  <span className="flex items-center gap-1.5">
                    <Image
                      src="/images/icons/calendar.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Image
                      src="/images/icons/clock.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    {post.readTime}
                  </span>
                </div>
              </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
