"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TopTicker } from "@/components/TopTicker";
import {
  BedDouble, Shirt, Dumbbell, Stethoscope,
  ShoppingCart, Megaphone, Warehouse, Truck,
  Compass, ClipboardList, Factory,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   Navigation types & data
───────────────────────────────────────────────────────────────── */
type NavGroup = {
  kind: "group";
  label: string;
  displayLabel?: string;
  tagline: string;
  color: string;
  editorial: { headline: string; body: string; cta: { label: string; href: string } };
  items: { label: string; href: string; desc: string; icon: LucideIcon }[];
};

type NavLink = {
  kind: "link";
  label: string;
  displayLabel?: string;
  href: string;
};

type NavItem = NavGroup | NavLink;

const PRODUCT_GREEN = "#2F7549"; // green-700 — primary lead
const SERVICE_GREEN = "#245C3A"; // green-800 — deeper green for distinction

const navItems: NavItem[] = [
  /* 1 — Product */
  {
    kind: "group",
    label: "Product",
    tagline: "What we make in Pakistan",
    color: PRODUCT_GREEN,
    editorial: {
      headline: "Made in Pakistan.\nSold across the world.",
      body: "Pakistan is one of the world's top-ten textile exporters and a global leader in cotton and home textiles. Browse the categories where its manufacturing is strongest.",
      cta: { label: "View all products →", href: "/products" },
    },
    items: [
      { label: "Home Textile", href: "/products/bedding-linen", desc: "Bed linen, towels, hotel textiles, curtains & mattress protectors — Pakistan's strongest category.", icon: BedDouble },
      { label: "Apparel & Accessories", href: "/products/apparel-accessories", desc: "Private-label fashion, denim, knitwear, uniforms and accessories.", icon: Shirt },
      { label: "Sportswear & Activewear", href: "/products/sportswear-activewear", desc: "Gymwear, teamwear and performance kit from the Sialkot hub.", icon: Dumbbell },
      { label: "Healthcare Textile", href: "/products/healthcare-textile", desc: "Scrubs, gowns, hospital linen and antimicrobial textiles.", icon: Stethoscope },
    ],
  },
  /* 2 — Service */
  {
    kind: "group",
    label: "Service",
    tagline: "What we do for you",
    color: SERVICE_GREEN,
    editorial: {
      headline: "Source it. Sell it.\nShip it. Scale it.",
      body: "Four services that connect Pakistani manufacturing to global buyers — and help Pakistani exporters reach markets worldwide.",
      cta: { label: "View all services →", href: "/services" },
    },
    items: [
      { label: "Marketing & Sales", href: "/services/marketing-sales", desc: "Visibility, B2B matchmaking and market intelligence for exporters going global.", icon: Megaphone },
      { label: "E-commerce & Warehouse", href: "/services/ecommerce-warehouse", desc: "Warehousing, e-commerce and Amazon market access — sell direct to global consumers.", icon: Warehouse },
      { label: "Buying House (Outsourcing)", href: "/services/buying-house", desc: "Your outsourced Pakistan procurement house: vetted factories, QA to AQL and delivery.", icon: ShoppingCart },
      { label: "Logistics", href: "/services/logistics", desc: "Freight, customs clearance, export documentation and Importer/Exporter of Record setup.", icon: Truck },
    ],
  },
  /* 3 — Global Textile Market */
  { kind: "link", label: "Global Textile Market", href: "/global-textile-market" },
  /* 4 — Membership */
  {
    kind: "group",
    label: "Membership",
    tagline: "Join the supplier pool",
    color: PRODUCT_GREEN,
    editorial: {
      headline: "More than a listing —\na route to real buyers.",
      body: "Join the supplier pool global buyers source from. Build credibility, get matched to qualified demand, and grow your textile exports worldwide.",
      cta: { label: "Membership overview →", href: "/membership" },
    },
    items: [
      { label: "Overview", href: "/membership", desc: "Why membership beats a listing — benefits, the three tiers and who can join.", icon: Compass },
      { label: "Become a Member", href: "/membership#apply", desc: "Complete the application and join the supplier pool buyers source from.", icon: ClipboardList },
      { label: "Industry Directory", href: "/membership/industries", desc: "Explore Pakistan's textile sectors and the companies driving each one.", icon: Factory },
    ],
  },
  /* 5 — News */
  { kind: "link", label: "News", href: "/news" },
  /* 6 — Contact */
  { kind: "link", label: "Contact", href: "/contact" },
];

const navGroups = navItems.filter((item): item is NavGroup => item.kind === "group");

const HOVER_OPEN_DELAY = 80;
const HOVER_CLOSE_DELAY = 180;

/* ─────────────────────────────────────────────────────────────────
   Header component
───────────────────────────────────────────────────────────────── */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();

  /* Active when the link's href is the current page (or a parent of it). */
  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  /* A dropdown group is active when any of its sub-pages is the current page. */
  const isGroupActive = (items: { href: string }[]) => items.some((i) => isLinkActive(i.href));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null; }
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  }, []);

  const handleGroupEnter = useCallback((label: string) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => setOpenGroup(label), HOVER_OPEN_DELAY);
  }, [clearTimers]);

  const handlePanelEnter = useCallback((label: string) => {
    clearTimers();
    setOpenGroup(label);
  }, [clearTimers]);

  const handleLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => setOpenGroup(null), HOVER_CLOSE_DELAY);
  }, [clearTimers]);

  const activeGroup = navGroups.find((g) => g.label === openGroup) ?? null;

  return (
    <>
      {/* ── Skip link ──────────────────────────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:px-4 focus:py-2 focus:bg-[#0A0A0A] focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      {/* ═══════════════════════════════════════════════════════════
          HEADER — white two-tier professional layout
      ══════════════════════════════════════════════════════════════ */}
      <header
        role="banner"
        className="sticky top-0 z-50 bg-white border-b border-gray-200"
        onMouseLeave={handleLeave}
      >
        {/* ── Top ticker banner ──────────────────────────────── */}
        <TopTicker />

        {/* ── Single nav bar: logo + nav + CTA ───────────────── */}
        <div className="px-5 sm:px-8 lg:px-12 xl:px-8 2xl:px-16">
          <div className="flex items-center justify-between gap-6 h-[70px] sm:h-[80px] lg:h-[90px]">

            {/* ── Left: Logo + wordmark ────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 lg:gap-2.5 flex-shrink-0 group"
              aria-label="Pakistan Textile Partners — Home"
            >
              <Image
                src="/image/main-logo-v1.png"
                alt="Pakistan Textile Partners logo"
                width={250}
                height={258}
                className="h-[52px] sm:h-[60px] lg:h-[72px] w-auto object-contain"
                priority
              />
              <Image
                src="/image/wordmark.png"
                alt="Pakistan Textile Partners"
                width={1499}
                height={328}
                className="hidden sm:block h-[26px] lg:h-[32px] w-auto object-contain"
              />
            </Link>

            {/* ── Centre: Navigation ───────────────────────────── */}
            <nav
              className="hidden xl:flex items-center h-full"
              aria-label="Main navigation"
            >
              <Link
                href="/"
                onMouseEnter={handleLeave}
                className={`relative h-full px-2 2xl:px-3.5 flex items-center font-sans text-[12px] 2xl:text-[14px] font-semibold tracking-[0.04em] transition-colors duration-150 ${
                  isLinkActive("/") ? "text-[#2F7549]" : "text-[#0A0A0A] hover:text-[#2F7549]"
                }`}
              >
                HOME
              </Link>

              {navItems.map((item) => {
                if (item.kind === "link") {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onMouseEnter={handleLeave}
                      className={`relative h-full px-2 2xl:px-3.5 flex items-center font-sans text-[12px] 2xl:text-[14px] font-semibold tracking-[0.04em] transition-colors duration-150 whitespace-nowrap ${
                        isLinkActive(item.href) ? "text-[#2F7549]" : "text-[#0A0A0A] hover:text-[#2F7549]"
                      }`}
                    >
                      {(item.displayLabel ?? item.label).toUpperCase()}
                    </Link>
                  );
                }

                const isActive = openGroup === item.label;
                const groupActive = isGroupActive(item.items);
                const highlight = isActive || groupActive;
                return (
                  <button
                    key={item.label}
                    type="button"
                    aria-expanded={isActive}
                    aria-haspopup="true"
                    onMouseEnter={() => handleGroupEnter(item.label)}
                    className={`
                      relative h-full px-2 2xl:px-3.5 flex items-center gap-1
                      font-sans text-[12px] 2xl:text-[14px] font-semibold tracking-[0.04em]
                      transition-colors duration-150 cursor-default select-none whitespace-nowrap
                      ${highlight
                        ? "text-[#2F7549]"
                        : "text-[#0A0A0A] hover:text-[#2F7549]"}
                    `}
                  >
                    {(item.displayLabel ?? item.label).toUpperCase()}
                    <svg
                      className={`w-2.5 h-2.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span
                      className={`
                        absolute bottom-0 left-2 right-2 h-[2px] bg-[#2F7549]
                        transition-opacity duration-150
                        ${highlight ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  </button>
                );
              })}
            </nav>

            {/* ── Right: CTA ───────────────────────────────────── */}
            <div className="hidden xl:flex items-center gap-5 flex-shrink-0">
              <Link
                href="/contact"
                onMouseEnter={handleLeave}
                className="px-6 py-2.5 font-heading font-bold text-base uppercase tracking-[0.12em] bg-[#2F7549] text-white hover:bg-[#245C3A] transition-colors duration-200 whitespace-nowrap rounded"
              >
                Get a Quote
              </Link>
            </div>

            {/* ── Mobile hamburger ─────────────────────────────── */}
            <button
              className="xl:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] flex-shrink-0"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
            >
              <span className="block w-6 h-[1.5px] bg-[#15402A]" />
              <span className="block w-6 h-[1.5px] bg-[#15402A]" />
              <span className="block w-4 h-[1.5px] self-start bg-[#15402A]" />
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MEGA PANEL — three-column editorial dropdown
        ══════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {activeGroup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={() => handlePanelEnter(activeGroup.label)}
              className="hidden xl:block absolute left-0 right-0 top-full border-b-[2px] border-[#0A0A0A] bg-white shadow-xl"
            >
              <div className="px-6 sm:px-10 lg:px-14 xl:px-18">
                <div className="grid grid-cols-[200px_1fr_260px] gap-0 divide-x divide-[#E4E1DC]">

                  {/* ── LEFT: Section identity ──────────────────── */}
                  <div className="py-10 pr-10 flex flex-col justify-between">
                    <div>
                      <p className="font-sans text-panel-eyebrow uppercase mb-3" style={{ color: activeGroup.color }}>
                        {activeGroup.tagline}
                      </p>
                      <h2 className="font-heading font-bold text-panel-title text-[#0A0A0A]">
                        {activeGroup.label}
                      </h2>
                      <span className="block w-8 h-[2px] mt-4" style={{ backgroundColor: activeGroup.color }} />
                    </div>
                    <p className="font-sans text-panel-desc text-[#6B6B6B] mt-6">
                      Navigate with the links to the right, or{" "}
                      <Link
                        href={activeGroup.editorial.cta.href}
                        onClick={() => setOpenGroup(null)}
                        className="text-[#0A0A0A] underline underline-offset-2 transition-colors duration-150"
                        onMouseEnter={(e) => e.currentTarget.style.color = activeGroup.color}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#0A0A0A'}
                      >
                        go to overview
                      </Link>
                      .
                    </p>
                  </div>

                  {/* ── CENTRE: Items list ──────────────────────── */}
                  <div className="py-10 px-10">
                    <p className="font-sans text-panel-eyebrow uppercase text-[#6B6B6B] mb-4 pb-3 border-b border-[#E4E1DC]">
                      Section index
                    </p>
                    <ul className="space-y-0">
                      {activeGroup.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setOpenGroup(null)}
                              className="
                                group/item flex items-start gap-4 py-4
                                border-b border-[#E4E1DC] last:border-0
                                hover:bg-[#FAFAFA] -mx-4 px-4
                                transition-colors duration-150
                              "
                            >
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover/item:scale-110"
                                style={{ backgroundColor: `${activeGroup.color}12`, border: `1px solid ${activeGroup.color}20` }}
                              >
                                <ItemIcon className="w-5 h-5" style={{ color: activeGroup.color }} strokeWidth={1.5} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="block font-heading font-semibold text-panel-item text-[#0A0A0A] transition-colors duration-150 leading-snug mb-1">
                                  {item.label}
                                </span>
                                <span className="block font-sans text-panel-desc text-[#6B6B6B]">
                                  {item.desc}
                                </span>
                              </div>
                              <span
                                className="flex-shrink-0 font-sans text-panel-desc opacity-0 group-hover/item:opacity-100 transition-all duration-150 mt-0.5 group-hover/item:translate-x-0.5"
                                style={{ color: activeGroup.color }}
                              >
                                →
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* ── RIGHT: Editorial feature panel ─────────── */}
                  <div className="py-10 pl-10 flex flex-col justify-between">
                    <div>
                      <p className="font-sans text-panel-eyebrow uppercase text-[#6B6B6B] mb-4">
                        From the forum
                      </p>
                      <blockquote className="font-heading font-bold text-panel-quote text-[#0A0A0A] whitespace-pre-line">
                        {activeGroup.editorial.headline}
                      </blockquote>
                      <span className="block w-6 h-[1.5px] bg-[#E4E1DC] mt-5 mb-5" />
                      <p className="font-sans text-panel-body text-[#6B6B6B]">
                        {activeGroup.editorial.body}
                      </p>
                    </div>

                    <Link
                      href={activeGroup.editorial.cta.href}
                      onClick={() => setOpenGroup(null)}
                      className="
                        inline-flex items-center gap-2 mt-8
                        font-sans text-nav-label uppercase font-medium
                        text-[#0A0A0A] border-b border-[#0A0A0A] pb-px
                        transition-colors duration-150 self-start
                      "
                      onMouseEnter={(e) => { e.currentTarget.style.color = activeGroup.color; e.currentTarget.style.borderColor = activeGroup.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#0A0A0A'; e.currentTarget.style.borderColor = '#0A0A0A'; }}
                    >
                      {activeGroup.editorial.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE PANEL — slides in from left
      ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="xl:hidden fixed inset-y-0 left-0 w-[320px] bg-white z-50 flex flex-col border-r-2 border-[#0A0A0A]"
            >
              {/* Drawer masthead */}
              <div className="px-6 py-5 border-b-2 border-[#0A0A0A] flex items-center justify-between flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Image
                    src="/image/main-logo-v1.png"
                    alt="Pakistan Textile Partners logo"
                    width={320}
                    height={226}
                    className="h-[44px] w-auto object-contain"
                  />
                  <Image
                    src="/image/wordmark.png"
                    alt="Pakistan Textile Partners"
                    width={1499}
                    height={328}
                    className="h-[22px] w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <span className="relative w-4 h-4 block">
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="block w-4 h-[1.5px] bg-[#0A0A0A] rotate-45" />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="block w-4 h-[1.5px] bg-[#0A0A0A] -rotate-45" />
                    </span>
                  </span>
                </button>
              </div>

              {/* Scrollable nav */}
              <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
                {/* Home link */}
                <div className="border-b border-[#D8D5D0]">
                  <Link
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full px-6 py-4 flex items-center text-left"
                  >
                    <span className="font-heading font-bold text-mobile-group uppercase text-[#0A0A0A]">
                      Home
                    </span>
                  </Link>
                </div>

                {navItems.map((item) => {
                  if (item.kind === "link") {
                    return (
                      <div key={item.label} className="border-b border-[#D8D5D0]">
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="w-full px-6 py-4 flex items-center text-left"
                        >
                          <span className="font-heading font-bold text-mobile-group uppercase text-[#0A0A0A]">
                            {item.label}
                          </span>
                        </Link>
                      </div>
                    );
                  }

                  const isExp = mobileExpanded === item.label;
                  return (
                    <div key={item.label} className="border-b border-[#D8D5D0]">
                      <button
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                        onClick={() => setMobileExpanded(isExp ? null : item.label)}
                        aria-expanded={isExp}
                      >
                        <span className="font-heading font-bold text-mobile-group uppercase text-[#0A0A0A]">
                          {item.label}
                        </span>
                        <span
                          className={`block w-[9px] h-[9px] border-r-[1.5px] border-b-[1.5px] border-[#0A0A0A] transition-transform duration-200 mr-1 ${
                            isExp ? "-rotate-135 translate-y-[3px]" : "rotate-45 -translate-y-[2px]"
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExp && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.items.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <li key={subItem.href} className="border-t border-[#E4E1DC]">
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="flex items-start gap-3 px-6 py-3.5"
                                  >
                                    <div
                                      className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                                      style={{ backgroundColor: `${item.color}12`, border: `1px solid ${item.color}20` }}
                                    >
                                      <SubIcon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <span className="block font-sans text-mobile-item font-medium text-[#0A0A0A] transition-colors duration-150 mb-0.5">
                                        {subItem.label}
                                      </span>
                                      <span className="block font-sans text-mobile-desc text-[#6B6B6B]">
                                        {subItem.desc}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="flex-shrink-0 p-6 border-t-2 border-[#0A0A0A] space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center py-3 px-4 bg-[#2F7549] text-white font-heading font-bold text-mobile-cta uppercase hover:bg-[#245C3A] transition-colors duration-200 rounded"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
