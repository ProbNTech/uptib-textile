"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import type { NavItem } from "@/types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav({
  items,
  open,
  onClose,
}: {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>("Products");

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "visible" : "invisible",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-primary-dark/50 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <nav
        aria-label="Mobile"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-semibold text-primary-dark">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-full text-primary-dark hover:bg-surface"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {items.map((item) => {
              if (!item.children) {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-primary-dark hover:bg-surface",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isOpen = expanded === item.label;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-primary-dark hover:bg-surface"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-5 transition-transform",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  {isOpen ? (
                    <ul className="mb-1 ml-2 space-y-0.5 border-l border-line pl-3">
                      <li>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-surface"
                        >
                          All {item.label.toLowerCase()}
                        </Link>
                      </li>
                      {item.children.map((leaf) => (
                        <li key={leaf.href}>
                          <Link
                            href={leaf.href}
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2 text-sm text-body hover:bg-surface"
                          >
                            {leaf.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-t border-line p-4">
          <Button
            href="/contact?topic=quote"
            className="w-full"
            onClick={onClose}
          >
            Get a Quote
          </Button>
        </div>
      </nav>
    </div>
  );
}
