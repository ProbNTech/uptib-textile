"use client";

import dynamic from "next/dynamic";

const TubesCursor = dynamic(
  () => import("@/components/ui/tube-cursor").then((m) => ({ default: m.TubesCursor })),
  { ssr: false }
);

export function TubesCTA({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative z-[2] overflow-hidden bg-[#0B0F1A] text-white">
      <TubesCursor
        initialColors={["#047857", "#10B981", "#047857"]}
        lightColors={["#059669", "#4ade80", "#E74C5E", "#6EE7B7"]}
        lightIntensity={220}
        className="min-h-[420px] md:min-h-[480px]"
      >
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-14 md:py-20">
          {children}
        </div>
      </TubesCursor>
    </section>
  );
}
