"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, HelpCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeExporterFaqs } from "@/data/faqs";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";

type ExporterFaqProps = {
  faqs?: Faq[];
  label?: string;
  title?: string;
  body?: string;
};

export default function ExporterFaq({
  faqs = homeExporterFaqs,
  label = "FAQs",
  title = "Frequently asked questions",
  body = "What Pakistani textile exporters ask us most about reaching buyers worldwide.",
}: ExporterFaqProps = {}) {
  const [open, setOpen] = useState<number | null>(0);

  // FAQ structured data — helps the section surface as rich results.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      className="relative z-[1] py-20 lg:py-28 overflow-hidden bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
            {/* Intro — sticky on desktop */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel
                label={label}
                title={title}
                body={body}
                color="#2F7549"
              />

              {/* Support card */}
              <div className="mt-2 max-w-sm rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_30px_-12px_rgba(4,120,87,0.18)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2F7549] text-white">
                    <HelpCircle className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#16291E]">Still have questions?</p>
                    <p className="text-xs text-[#5A5F72]">We usually reply within one business day.</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7549]"
                >
                  Talk to our team
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                const panelId = `home-faq-panel-${i}`;
                const buttonId = `home-faq-button-${i}`;

                return (
                  <div
                    key={item.q}
                    className={cn(
                      "rounded-2xl border transition-colors duration-200",
                      isOpen
                        ? "border-[#2F7549]/25 bg-[#2F7549]/[0.04] shadow-[0_10px_30px_-12px_rgba(4,120,87,0.18)]"
                        : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB] hover:shadow-[0_10px_30px_-12px_rgba(4,120,87,0.12)]",
                    )}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                      >
                        <span
                          className={cn(
                            "inline-flex size-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums transition-colors",
                            isOpen ? "bg-[#2F7549] text-white" : "bg-[#2F7549]/10 text-[#2F7549]",
                          )}
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="flex-1 text-sm font-medium text-[#16291E]">{item.q}</span>

                        <span
                          className={cn(
                            "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors",
                            isOpen ? "bg-[#2F7549] text-white" : "bg-[#F8FAFC] text-[#5A5F72]",
                          )}
                          aria-hidden
                        >
                          <Plus className={cn("size-4 transition-transform duration-200", isOpen && "rotate-45")} />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="px-4 pb-5 pl-[4.25rem] pr-12 text-[#5A5F72] leading-relaxed sm:px-5 sm:pl-[4.75rem]"
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
