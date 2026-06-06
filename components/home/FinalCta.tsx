import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-tertiary">
      <div aria-hidden className="absolute inset-0">
        <Image
          src={images.ctaBg.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* route markers */}
          <div className="mb-8 flex items-center justify-center gap-4 text-sm text-white">
            <span className="flex items-center gap-1.5">
              <span aria-hidden>🇬🇧</span> London
            </span>
            <span aria-hidden className="text-white/50">
              ·····················
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden>🇵🇰</span> Lahore
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to grow your textile business?
          </h2>
          <p className="mt-4 text-lg text-white">
            Let&apos;s connect and create value together.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="/contact?topic=quote"
              variant="white"
              size="lg"
              withArrow
              className="!rounded-md"
            >
              Book a Consultation
            </Button>
            <Button
              href="/contact"
              variant="outlineWhite"
              size="lg"
              withArrow
              className="!rounded-md"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
