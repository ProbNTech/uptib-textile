import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import type { SiteImage } from "@/data/images";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "white";
};

type CTASectionProps = {
  title: string;
  description?: string;
  buttons: CTAButton[];
  variant?: "navy" | "surface";
  /** Optional full-bleed photo behind a navy overlay. */
  image?: SiteImage;
};

export function CTASection({
  title,
  description,
  buttons,
  variant = "navy",
  image,
}: CTASectionProps) {
  const isNavy = variant === "navy" || !!image;
  return (
    <section
      className={`relative isolate overflow-hidden ${
        isNavy ? "bg-primary-dark" : "bg-surface"
      }`}
    >
      {image ? (
        <div aria-hidden className="absolute inset-0">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="bg-primary-dark/88 absolute inset-0" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(0,86,167,0.45), transparent 70%)",
            }}
          />
        </div>
      ) : null}
      <Container className="relative py-16 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2
            className={`text-3xl font-semibold sm:text-4xl ${
              isNavy ? "text-white" : "text-primary-dark"
            }`}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={isNavy ? "text-lg text-white/80" : "text-lg text-body"}
            >
              {description}
            </p>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row">
            {buttons.map((b, i) => (
              <Button
                key={b.href + b.label}
                href={b.href}
                size="lg"
                variant={
                  b.variant ??
                  (isNavy ? (i === 0 ? "white" : "secondary") : "primary")
                }
              >
                {b.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
