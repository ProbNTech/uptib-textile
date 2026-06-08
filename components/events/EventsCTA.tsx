"use client";

import { Button } from "@/components/Button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { TubesCTA } from "@/components/TubesCTA";

export function EventsCTA() {
  return (
    <TubesCTA>
      <div className="max-w-2xl">
        <p className="text-base font-bold uppercase tracking-widest text-[#4ade80] mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          Get involved
        </p>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-none text-white mb-5 drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
          Join UPTIB Today
        </h2>
        <div className="h-px bg-white/20 mb-6" />
        <p className="text-lg text-white/80 leading-relaxed mb-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          Become part of a trusted network shaping the future of UK–Pakistan technology collaboration.
        </p>
        <div className="flex flex-wrap gap-4">
          <ShinyButton href="/membership">
            Become a Member
          </ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </TubesCTA>
  );
}
