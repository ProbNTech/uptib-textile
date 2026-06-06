"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, HelpCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { homeFaqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

// FAQ structured data — helps the section surface as rich results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative isolate overflow-hidden bg-surface">
      {/* Ambient blue + green glows — the co-equal brand pairing. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-tertiary/5 blur-3xl"
      />

      <Container className="relative py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
          {/* Intro — sticky on desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-tertiary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              <span className="size-1.5 rounded-full bg-tertiary" aria-hidden />
              FAQs
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
              Frequently asked{" "}
              <span className="text-tertiary">questions</span>
            </h2>
            <p className="mt-4 max-w-sm text-body">
              Whether you&apos;re sourcing from Pakistan or exporting to the
              world, here&apos;s what buyers and manufacturers ask us most.
            </p>

            {/* Support card with a blue→green gradient mark */}
            <div className="mt-8 max-w-sm rounded-2xl border border-line bg-white p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-tertiary text-white">
                  <HelpCircle className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-primary-dark">
                    Still have questions?
                  </p>
                  <p className="text-xs text-muted">
                    We usually reply within one business day.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Talk to our team
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          {/* Accordion — blue/navy accent throughout */}
          <div className="flex flex-col gap-3">
            {homeFaqs.map((item, i) => {
              const isOpen = open === i;
              const panelId = `home-faq-panel-${i}`;
              const buttonId = `home-faq-button-${i}`;

              const accentText = "text-primary";
              const accentBg = "bg-primary";
              const accentTint = "bg-primary/10";
              const openShell = "border-primary/25 bg-primary/[0.04]";

              return (
                <div
                  key={item.q}
                  className={cn(
                    "rounded-2xl border transition-colors duration-200",
                    isOpen
                      ? cn(openShell, "shadow-card")
                      : "border-line bg-white hover:border-line/80 hover:shadow-card",
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
                      {/* Number badge */}
                      <span
                        className={cn(
                          "inline-flex size-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums transition-colors",
                          isOpen
                            ? cn(accentBg, "text-white")
                            : cn(accentTint, accentText),
                        )}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1 font-semibold text-primary-dark">
                        {item.q}
                      </span>

                      {/* +/× toggle */}
                      <span
                        className={cn(
                          "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors",
                          isOpen
                            ? cn(accentBg, "text-white")
                            : "bg-surface text-muted",
                        )}
                        aria-hidden
                      >
                        <Plus
                          className={cn(
                            "size-4 transition-transform duration-200",
                            isOpen && "rotate-45",
                          )}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-4 pb-5 pl-[4.25rem] pr-12 text-body sm:px-5 sm:pl-[4.75rem]"
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
