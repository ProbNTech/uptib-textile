import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";
import { productImageTall } from "@/data/images";
import { getIcon } from "@/lib/icons";
import type { ProductSlug } from "@/types";

// Bottom border + matching icon colour, per card — blue/green alternating.
const accents: Record<ProductSlug, { border: string; icon: string }> = {
  "bedding-linen": { border: "bg-primary", icon: "text-primary" },
  "apparel-accessories": { border: "bg-tertiary", icon: "text-tertiary" },
  "sportswear-activewear": { border: "bg-primary", icon: "text-primary" },
  "healthcare-textile": { border: "bg-tertiary", icon: "text-tertiary" },
};

export function ProductsShowcase() {
  return (
    <section className="bg-surface">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_3.4fr] lg:gap-14">
          {/* Intro */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Our Products
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] text-primary-dark lg:text-4xl">
              The textiles
              <br /> we trade
            </h2>
            <p className="mt-6 text-base leading-relaxed text-body">
              From yarn to fashion, we supply quality you can trust.
            </p>
            <Link
              href="/products"
              className="mt-12 inline-flex items-center gap-1.5 font-semibold text-secondary hover:text-secondary-dark"
            >
              View all products
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          {/* Vertical cards — tiny gap, minimal radius */}
          <div className="grid grid-cols-2 gap-0.5 xl:grid-cols-4">
            {products.map((product) => {
              const Icon = getIcon(product.icon);
              const photo = productImageTall[product.slug];
              const accent = accents[product.slug];
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group relative flex aspect-[3/5] flex-col justify-end overflow-hidden rounded-[5px] shadow-card"
                >
                  {/* Image */}
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 22vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Lighter gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/15 to-transparent" />

                  {/* Overlaid content */}
                  <div className="relative p-5">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-white shadow-md">
                      <Icon className={`size-5 ${accent.icon}`} aria-hidden />
                    </span>
                    <h3 className="mt-4 truncate text-[15px] font-bold tracking-tight text-white">
                      {product.cardTitle}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-white/85">
                      {product.cardBlurb}
                    </p>
                  </div>

                  {/* Colored bottom border */}
                  <span
                    className={`relative z-10 h-1 w-full ${accent.border}`}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
