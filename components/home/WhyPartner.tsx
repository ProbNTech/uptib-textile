import Image from "next/image";
import { Play, ShieldCheck, BadgeCheck, Truck, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { images } from "@/data/images";

const features = [
  { icon: ShieldCheck, label: "Verified Manufacturers" },
  { icon: BadgeCheck, label: "Quality Assurance" },
  { icon: Truck, label: "On-time Delivery" },
  { icon: Leaf, label: "Ethical & Sustainable" },
];

export function WhyPartner() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(50% 60% at 85% 20%, rgba(0,86,167,0.4), transparent 60%)",
        }}
      />
      <Container className="relative py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video / image */}
          <div className="group relative aspect-[16/11] overflow-hidden rounded-3xl">
            <Image
              src={images.warehouse.src}
              alt="Inside a textile manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary-dark/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl transition-transform group-hover:scale-110">
                <Play
                  className="size-6 translate-x-0.5 fill-current"
                  aria-hidden
                />
              </span>
              <span className="text-sm font-semibold text-white">
                Watch our story
              </span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-light">
              Why partner with UPTIB?
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Marketing the supply.
              <br />
              Sourcing the demand.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              UPTIB is your end-to-end textile sourcing and marketing partner in
              Pakistan and the UK. We connect international buyers with verified
              manufacturers, ensuring quality, compliance and on-time delivery.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {features.map((f) => (
                <li
                  key={f.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
                >
                  <f.icon className="size-4 text-tertiary-light" aria-hidden />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
