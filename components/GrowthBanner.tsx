"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface GrowthBannerProps {
  image: string;
  label?: string;
  title: string;
  body?: string;
  chips?: { value: string; label: string }[];
}

/**
 * Full-width fixed-parallax "shutter" band — mirrors the home page cotton band.
 * The photo sits behind a green-led gradient with the copy on the left.
 */
export function GrowthBanner({ image, label = "Built for your growth", title, body, chips }: GrowthBannerProps) {
  return (
    <section
      className="relative isolate flex min-h-[60vh] items-center overflow-hidden py-24 lg:min-h-[70vh] lg:py-32"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-label={title}
    >
      {/* Brand overlay for legibility — green-led, deep at the left where copy sits */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,33,22,0.92) 0%, rgba(21,64,42,0.78) 42%, rgba(21,64,42,0.32) 70%, rgba(21,64,42,0.12) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }}
      />
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="max-w-2xl">
            <SectionLabel label={label} title={title} color="#8FD3AE" light />
            {body && <p className="text-white/85 text-base sm:text-lg leading-relaxed">{body}</p>}
            {chips && chips.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <div
                    key={chip.value}
                    className="flex items-baseline gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="font-heading font-extrabold text-white text-lg leading-none">{chip.value}</span>
                    <span className="text-white/75 text-xs sm:text-sm">{chip.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
