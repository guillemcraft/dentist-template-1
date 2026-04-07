import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const locations = [
  {
    city: "New York, NY",
    address: "123 Smile Street, Suite 101, New York, NY 10001",
  },
  {
    city: "Los Angeles, CA",
    address: "456 Bright Avenue, Building B, Los Angeles, CA 90012",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5F8FF]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-[family-name:var(--font-inter-display)] text-4xl lg:text-[50px] font-medium leading-[60px] tracking-[-1.5px] text-[#121212] mb-12 max-w-2xl">
            Talk to us about your dental concerns
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Locations */}
          <AnimateIn delay={100} direction="left">
          <div className="flex flex-col gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="flex gap-3">
                <Image
                  src="/images/icons/location.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-lg font-medium tracking-[-0.45px] text-[#121212]">{loc.city}</p>
                  <p className="text-base font-medium tracking-[-0.45px] text-[#575757]">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
          </AnimateIn>

          {/* Contact Form */}
          <AnimateIn delay={200} direction="right">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#E5E7EB] rounded-[15px] px-4 py-3.5 text-sm bg-white focus:border-[#3072FF] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-[#E5E7EB] rounded-[15px] px-4 py-3.5 text-sm bg-white focus:border-[#3072FF] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#E5E7EB] rounded-[15px] px-4 py-3.5 text-sm bg-white focus:border-[#3072FF] focus:outline-none"
            />
            <select
              defaultValue=""
              className="w-full border border-[#E5E7EB] rounded-[15px] px-4 py-3.5 text-sm bg-white focus:border-[#3072FF] focus:outline-none text-[#6B7280]"
            >
              <option value="" disabled>
                Select a date
              </option>
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-[#E5E7EB] rounded-[15px] px-4 py-3.5 text-sm bg-white focus:border-[#3072FF] focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#3072FF] text-white rounded-[16px] py-4 px-8 text-base font-medium hover:bg-[#3072FF]/90 transition hover-lift"
            >
              Submit
            </button>
          </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
