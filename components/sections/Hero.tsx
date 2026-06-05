import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { SiteImage } from "@/data/images";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "white";
};

type HeroHighlight = { value: string; label: string };

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: HeroAction[];
  size?: "page" | "landing";
  highlights?: HeroHighlight[];
  /** Optional photographic background (rendered under a navy overlay). */
  image?: SiteImage;
  children?: ReactNode;
};

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  size = "page",
  highlights,
  image,
  children,
}: HeroProps) {
  const isLanding = size === "landing";
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark">
      {/* Photographic background */}
      {image ? (
        <div aria-hidden className="absolute inset-0">
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Navy wash for text legibility */}
          <div className="absolute inset-0 bg-primary-dark/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/40" />
        </div>
      ) : null}

      {/* Layered brand glows (blue + light blue + green) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 75% at 82% -5%, rgba(0,86,167,0.55), transparent 60%), radial-gradient(45% 60% at 98% 30%, rgba(46,120,199,0.30), transparent 60%), radial-gradient(40% 55% at 2% 100%, rgba(1,122,60,0.20), transparent 60%)",
        }}
      />
      {/* Fine grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(70% 70% at 70% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 70% at 70% 0%, black, transparent 75%)",
        }}
      />

      <Container
        className={cn(
          "relative",
          isLanding ? "py-24 sm:py-32 lg:py-40" : "py-16 sm:py-24",
        )}
      >
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur">
            <span
              className="size-1.5 rounded-full bg-primary-light"
              aria-hidden
            />
            {eyebrow}
          </span>
          <h1
            className={cn(
              "mt-6 font-display font-extrabold tracking-tight text-white",
              isLanding
                ? "text-4xl leading-[1.07] sm:text-5xl lg:text-6xl"
                : "text-3xl leading-[1.1] sm:text-4xl lg:text-5xl",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {description}
            </p>
          ) : null}
          {actions && actions.length > 0 ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {actions.map((a, i) => (
                <Button
                  key={a.href + a.label}
                  href={a.href}
                  size="lg"
                  variant={a.variant ?? (i === 0 ? "white" : "secondary")}
                  withArrow={i === 0}
                >
                  {a.label}
                </Button>
              ))}
            </div>
          ) : null}

          {highlights && highlights.length > 0 ? (
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
              {highlights.map((h) => (
                <div key={h.label} className="min-w-[7rem]">
                  <dt className="text-2xl font-bold text-white sm:text-3xl">
                    {h.value}
                  </dt>
                  <dd className="mt-1 text-sm text-white/65">{h.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        {children ? <div className="mt-14">{children}</div> : null}
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white/5"
      />
    </section>
  );
}
