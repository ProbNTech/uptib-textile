"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/10 transition-colors",
        scrolled
          ? "bg-primary-dark/95 shadow-lg backdrop-blur"
          : "bg-primary-dark",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/assets/uptib-logo.webp"
            alt={site.legalName}
            width={200}
            height={68}
            priority
            className="h-11 w-auto brightness-0 invert lg:h-12"
          />
          <span className="hidden border-l border-white/20 pl-2.5 leading-tight sm:block">
            <span className="block text-sm font-bold tracking-wide text-white">
              UPTIB TEXTILE
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-white">
              TRADE · TRUST · GROWTH
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <MegaMenu key={item.href} item={item} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-secondary-light"
                        : "text-white hover:text-white/80",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/contact?topic=quote"
            variant="secondary"
            className="hidden !rounded !px-7 !py-3 sm:inline-flex"
          >
            Get in Touch
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
          >
            <Menu className="size-6" aria-hidden />
          </button>
        </div>
      </Container>

      <MobileNav
        items={mainNav}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
