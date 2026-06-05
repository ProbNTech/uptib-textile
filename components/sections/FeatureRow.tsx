import type { ReactNode } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import type { SiteImage } from "@/data/images";
import { cn } from "@/lib/utils";

type FeatureRowProps = {
  eyebrow?: string;
  title: string;
  image: SiteImage;
  /** Place the image on the left instead of the right. */
  reverse?: boolean;
  /** Small stat chip overlaid on the image corner. */
  badge?: { value: string; label: string };
  cta?: { label: string; href: string };
  children: ReactNode;
};

export function FeatureRow({
  eyebrow,
  title,
  image,
  reverse = false,
  badge,
  cta,
  children,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Media */}
      <div className={cn("relative", reverse && "lg:order-2")}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-primary-dark/10" />
        </div>
        {/* Decorative accent block */}
        <div
          aria-hidden
          className={cn(
            "absolute -z-10 size-32 rounded-3xl bg-primary/10",
            reverse ? "-right-4 -top-4" : "-bottom-4 -left-4",
          )}
        />
        {badge ? (
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-line bg-white px-5 py-3 shadow-card-hover">
            <p className="text-2xl font-bold text-primary">{badge.value}</p>
            <p className="text-xs font-medium text-muted">{badge.label}</p>
          </div>
        ) : null}
      </div>

      {/* Copy */}
      <div className={cn("flex flex-col gap-5", reverse && "lg:order-1")}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="text-3xl font-semibold text-primary-dark sm:text-4xl">
          {title}
        </h2>
        <div className="prose-measure space-y-4 text-lg text-body">
          {children}
        </div>
        {cta ? (
          <div className="pt-2">
            <Button href={cta.href} variant="outline" withArrow>
              {cta.label}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
