"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

export function FAQSection({
  title = "Frequently asked questions",
  subtitle,
  faqs,
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background:
          "radial-gradient(900px circle at 100% 0%, rgba(4,120,87,0.06), transparent 55%), #F8FAFF",
      }}
      aria-labelledby="directory-faq-title"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full bg-white border border-[#D1FAE5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#047857]">
            FAQ
          </span>
          <h2
            id="directory-faq-title"
            className="mt-4 font-heading font-extrabold text-[#064E3B] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-[#475569] leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border bg-white transition-all duration-200 ${
                  isOpen
                    ? "border-[#047857]/40 shadow-[0_10px_30px_-15px_rgba(4,120,87,0.25)]"
                    : "border-[#E5E7EB]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}-answer`}
                >
                  <span className="font-heading font-semibold text-[#064E3B] text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#047857] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-${i}-answer`}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-5"
                >
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
