"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It's recommended to visit the dentist every six months for regular checkups and cleanings.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes, we provide prompt emergency dental care to address urgent issues like pain, injuries, or tooth loss.",
  },
  {
    question: "Are dental X-rays safe?",
    answer:
      "Yes, dental X-rays are safe and use minimal radiation. We also take precautions to ensure your safety.",
  },
  {
    question: "What should I do if I have a toothache?",
    answer:
      "Rinse with warm salt water, take over-the-counter pain relief, and schedule an appointment with us immediately.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Absolutely! We specialize in gentle, child-friendly dental care for kids of all ages.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimateIn direction="none">
          <p className="text-lg font-medium text-[#121212] tracking-[-0.45px] text-center mb-4">
            FAQ
          </p>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="font-[family-name:var(--font-inter-display)] text-4xl lg:text-[50px] font-medium leading-[60px] tracking-[-1.5px] text-[#121212] mb-12 max-w-3xl mx-auto text-center">
            Answers to your most common concerns
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E5E7EB]">
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium tracking-[-0.45px] text-[#121212] pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0 text-xl text-[#121212]">
                  {openIndex === index ? "\u2212" : "+"}
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{
                  gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-lg font-medium tracking-[-0.45px] text-[#575757] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
