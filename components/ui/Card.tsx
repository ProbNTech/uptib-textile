import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  icon?: LucideIcon;
  badge?: string;
  cta?: string;
  className?: string;
};

export function Card({
  title,
  description,
  href,
  icon: Icon,
  badge,
  cta = "Explore",
  className,
}: CardProps) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        {Icon ? (
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon className="size-6" aria-hidden />
          </span>
        ) : null}
        {badge ? <Badge tone="red">{badge}</Badge> : null}
      </div>
      <div className="mt-5 flex-1">
        <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
        <p className="mt-2 text-body">{description}</p>
      </div>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {cta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-200",
    href &&
      "hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}
