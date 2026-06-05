import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SiteImage } from "@/data/images";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  href: string;
  image: SiteImage;
  title: string;
  description: string;
  icon?: LucideIcon;
  badge?: string;
  cta?: string;
  /** Extra figures shown as small chips under the description. */
  meta?: string[];
  className?: string;
};

export function MediaCard({
  href,
  image,
  title,
  description,
  icon: Icon,
  badge,
  cta = "Explore",
  meta,
  className,
}: MediaCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/45 to-transparent" />
        {Icon ? (
          <span className="absolute left-4 top-4 inline-flex size-11 items-center justify-center rounded-xl bg-white/95 text-primary shadow-sm backdrop-blur">
            <Icon className="size-5" aria-hidden />
          </span>
        ) : null}
        {badge ? (
          <span className="absolute right-4 top-4">
            <Badge tone="red">{badge}</Badge>
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
        <p className="mt-2 flex-1 text-body">{description}</p>
        {meta && meta.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.map((m) => (
              <span
                key={m}
                className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
              >
                {m}
              </span>
            ))}
          </div>
        ) : null}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {cta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
