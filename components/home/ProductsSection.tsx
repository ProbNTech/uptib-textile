import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { products } from "@/data/textile";

const productImages: Record<string, string> = {
  "bedding-linen": "/image/bedding-v1.jpg",
  "apparel-accessories": "/image/apparels-v1.jpg",
  "sportswear-activewear": "/image/sprtswear-v1.jpg",
  "healthcare-textile": "/image/healthcare-v1.jpg",
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
  "bedding-linen": "#2563EB",
  "apparel-accessories": "#DC2626",
  "sportswear-activewear": "#16A34A",
  "healthcare-textile": "#DC2626",
};

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative z-[1] pt-20 lg:pt-28 pb-10 lg:pb-12 scroll-mt-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px circle at 100% 0%, rgba(4,120,87,0.07), transparent 50%), radial-gradient(800px circle at 0% 100%, rgba(16,185,129,0.06), transparent 50%), #F7F8FA",
      }}
      aria-labelledby="products-heading"
    >
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #16291E 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
            {/* ── Left: intro column ── */}
            <div className="flex shrink-0 flex-col justify-center lg:w-[200px] xl:w-[220px]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#5A5F72]">
                Our Products
              </p>
              <h2 id="products-heading" className="font-heading text-3xl font-bold leading-[1.15] text-[#16291E] sm:text-4xl">
                The textiles<br className="hidden lg:block" /> we trade
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A5F72]">
                From yarn to fashion, we supply quality you can trust.
              </p>
              <Link
                href="/products"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#DC2626] transition-all hover:gap-2.5"
              >
                View all products
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* ── Right: product cards ── */}
            <div className="grid flex-1 grid-cols-2 gap-[2px] lg:grid-cols-4">
              {products.map((p) => {
                const Icon = p.icon;
                const accent = productAccents[p.slug];
                return (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  >
                    <Image
                      src={productImages[p.slug]}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                        {p.name}
                      </h3>
                      <p className="mt-1.5 text-[0.8rem] leading-snug text-white/80">
                        {productTaglines[p.slug]}
                      </p>
                    </div>

                    {/* accent bar */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1.5"
                      style={{ backgroundColor: accent }}
                      aria-hidden
                    />
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
