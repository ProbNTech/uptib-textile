"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/types";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

/**
 * Desktop dropdown for a top-level nav item that has children.
 * Opens on hover and on keyboard focus; closes on Escape, blur and route change.
 */
export function MegaMenu({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isActive = pathname.startsWith(item.href);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
          isActive ? "text-primary-light" : "text-white/85 hover:text-white",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </Link>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3 transition-all duration-150",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-card-hover">
          <ul className="grid grid-cols-2 gap-1">
            {item.children?.map((leaf) => {
              const Icon = getIcon(leaf.icon);
              return (
                <li key={leaf.href}>
                  <Link
                    href={leaf.href}
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-primary-dark">
                        {leaf.label}
                      </span>
                      <span className="block text-xs text-muted">
                        {leaf.description}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}
