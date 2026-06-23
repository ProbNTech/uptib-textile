"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";

interface GlobalCTAProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  /** Optional right-hand image. Defaults to a textile photo. */
  image?: string;
}

const DEFAULT_CTA_IMAGE = "/image/textile/products/bedding-linen.jpg";

export function GlobalCTA({
  label = "Join Us",
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image = DEFAULT_CTA_IMAGE,
}: GlobalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#F6F2EA]">
      <div className="grid lg:grid-cols-2">
        {/* Left — copy */}
        <div className="relative flex flex-col justify-center py-16 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #394F73 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <AnimatedSection>
            <div className="relative max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#647689] mb-4">{label}</p>
              <h2 className="font-heading font-extrabold text-[#1A1A1A] text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-5">
                {title}
              </h2>
              <p className="text-[#4A4A46] text-base sm:text-lg leading-relaxed mb-8">{subtitle}</p>
              <div className="flex flex-wrap items-center gap-4">
                <ShinyButton href={primaryButtonLink}>{primaryButtonText}</ShinyButton>
                {secondaryButtonText && secondaryButtonLink && (
                  <Button
                    href={secondaryButtonLink}
                    variant="glass"
                    size="lg"
                    className="!bg-white !text-[#1A1A1A] !border-white hover:!bg-[#ECE5D8] hover:!text-[#1A1A1A] hover:!border-[#ECE5D8]"
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[240px] lg:min-h-[440px]">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* Blend the photo into the cream panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2EA]/80 via-[#F6F2EA]/10 to-transparent" />
          <div className="absolute inset-0 lg:hidden bg-[#F6F2EA]/12" />
        </div>
      </div>
    </section>
  );
}
