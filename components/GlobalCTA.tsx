"use client";

import { TubesCTA } from "@/components/TubesCTA";
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
}

export function GlobalCTA({
  label = "Join Us",
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: GlobalCTAProps) {
  return (
    <TubesCTA>
      <AnimatedSection>
        <div className="max-w-3xl">
          <p className="text-base font-semibold text-[#4ade80] uppercase tracking-wider mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            {label}
          </p>
          <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
            {title}
          </h2>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ShinyButton href={primaryButtonLink}>
              {primaryButtonText}
            </ShinyButton>
            {secondaryButtonText && secondaryButtonLink && (
              <Button href={secondaryButtonLink} variant="glass" size="lg">
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </AnimatedSection>
    </TubesCTA>
  );
}
