import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Shirt, Stethoscope, Handshake, type LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { products } from "@/data/textile";

const productImages: Record<string, string> = {
  "bedding-linen": "/image/textile/home/hotel-1.jpg",
  "apparel-accessories": "/image/apparels-v1.jpg",
  "sportswear-activewear": "/image/sportswear-activewear-new.jpg",
  "healthcare-textile": "/image/healthcare-home-product-image.jpg",
};

/* Short card taglines — concise, matching the showcase layout */
const productTaglines: Record<string, string> = {
  "bedding-linen": "Bed linen, towels, bath linen & more",
  "apparel-accessories": "Fashion wear, jackets, knitwear & more",
  "sportswear-activewear": "Performance fabrics & activewear",
  "healthcare-textile": "Hospitality, medical textiles & more",
};

/* Per-card accent — drives the bottom bar and icon colour */
const productAccents: Record<string, string> = {
  "bedding-linen": "#8C9AAB",
  "apparel-accessories": "#DC2626",
  "sportswear-activewear": "#A3AEBC",
  "healthcare-textile": "#DC2626",
};

type ProductCard = {
  name: string;
  tagline: string;
  image: string;
  icon: LucideIcon;
  accent: string;
  href: string;
};

/* The four headline categories (link to their hub pages) + four focused
   sub-lines carried over from the "Made in Pakistan" mosaic, each linking
   straight to its existing sub-category page. */
const productCards: ProductCard[] = [
  ...products.map((p) => ({
    name: p.name,
    tagline: productTaglines[p.slug],
    image: productImages[p.slug],
    icon: p.icon,
    accent: productAccents[p.slug],
    href: `/products/${p.slug}`,
  })),
  {
    name: "Hospitality Textile",
    tagline: "Hospital linen, single source",
    image: "/image/textile/healthcare/linen-1.jpg",
    icon: Building2,
    accent: "#A3AEBC",
    href: "/products/healthcare-textile/hospital-bed-linen-draw-sheets",
  },
  {
    name: "Denim & Woven Bottoms",
    tagline: "Jeans, chinos & woven bottoms",
    image: "/image/textile/apparel/denim-woven/denim-home.jpg",
    icon: Shirt,
    accent: "#8C9AAB",
    href: "/products/apparel-accessories/denim-woven",
  },
  {
    name: "Private-Label Apparel",
    tagline: "OEM hoodies, shirts & uniforms",
    image: "/image/textile/apparel/private-label-apparel-home-product-section.avif",
    icon: Shirt,
    accent: "#DC2626",
    href: "/products/apparel-accessories/fashion-basics-loungewear",
  },
  {
    name: "Medical Scrubs & Uniforms",
    tagline: "Scrubs, lab coats & patient gowns",
    image: "/image/textile/healthcare/medical-uniform-home-product-section.jpg",
    icon: Stethoscope,
    accent: "#DC2626",
    href: "/products/healthcare-textile/scrubs-medical-uniforms",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative z-[1] sec-pt sec-pb scroll-mt-24 overflow-hidden bg-[#394F73]"
      aria-labelledby="products-heading"
    >
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #FFFFFF 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
            {/* ── Left: intro column ── */}
            <div className="flex shrink-0 flex-col lg:w-[230px] lg:pt-3 xl:w-[260px]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D8CDBA]">
                Our Products
              </p>
              <h2 id="products-heading" className="font-heading text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
                The textiles<br className="hidden lg:block" /> we present
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                From yarn to fashion, we supply quality you can trust: bedding, apparel, sportswear and healthcare textiles.
              </p>
              <Link
                href="/products"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D8CDBA] transition-all hover:gap-2.5 lg:mb-8"
              >
                View all products
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* CTA card — sized to its content, pinned to the bottom on desktop */}
              <div
                className="relative mt-8 hidden flex-col overflow-hidden rounded-2xl p-6 ring-1 ring-white/10 lg:mt-auto lg:flex"
                style={{ background: "linear-gradient(160deg, #48608A 0%, #2E4061 100%)" }}
              >
                {/* soft accent glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#B3AA98]/25 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <Handshake className="size-5 text-[#D8CDBA]" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-white">
                    Sourcing something specific?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Tell us what you need and we&apos;ll match you with the right Pakistani manufacturer.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group/cta relative mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#394F73] transition-colors hover:bg-[#D8CDBA]"
                >
                  Request a quote
                  <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* ── Right: product cards ── */}
            <div className="grid flex-1 grid-cols-2 gap-1.5 lg:grid-cols-4">
              {productCards.map((card) => {
                const Icon = card.icon;
                const accent = card.accent;
                return (
                  <Link
                    key={card.name}
                    href={card.href}
                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md"
                  >
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 22vw"
                    />
                    {/* darkening overlay — light, just enough for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* subtle bottom shade behind the text */}
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent" />

                    {/* centred icon badge */}
                    <div className="absolute left-1/2 top-[44%] flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                      <Icon className="size-6" strokeWidth={1.8} style={{ color: accent }} aria-hidden />
                    </div>

                    {/* bottom copy */}
                    <div className="absolute inset-x-0 bottom-0 p-5 pb-6">
                      <h3 className="font-heading text-lg font-bold leading-tight text-white">
                        {card.name}
                      </h3>
                      <p className="mt-1.5 text-[0.8rem] leading-snug text-white/80">
                        {card.tagline}
                      </p>
                    </div>

                  </Link>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
