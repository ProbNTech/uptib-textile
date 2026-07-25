"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TopTicker } from "@/components/TopTicker";
import { products, subCategoryIcons } from "@/data/textile";
import {
  BedDouble, Shirt, Dumbbell, Stethoscope,
  ShoppingCart, Megaphone, Warehouse, Truck,
  Compass, ClipboardList, Factory, ClipboardCheck, Ship,
  type LucideIcon,
} from "lucide-react";

/* Brand wordmark rendered as crisp, scalable text (replaces the old raster
   wordmark.png so it always reflects the current name). Mirrors the original
   two-line layout: name on top, "PARTNERS" flanked by brand diamonds. */
function Wordmark({
  size = "desktop",
  className = "",
}: {
  size?: "desktop" | "mobile";
  className?: string;
}) {
  const text =
    size === "mobile" ? "text-[10px]" : "text-[12px] lg:text-[14px]";
  const diamond =
    size === "mobile" ? "w-[5px] h-[5px]" : "w-[6px] h-[6px]";
  const grad =
    "font-sans font-extrabold bg-gradient-to-b from-[#3b6fb5] to-[#152a52] bg-clip-text text-transparent";
  const Diamond = ({ c }: { c: string }) => (
    <span
      className={`${diamond} inline-block rotate-45 rounded-[1px]`}
      style={{ backgroundColor: c }}
    />
  );
  return (
    <span
      aria-hidden="true"
      className={`flex-col justify-center leading-[1.05] select-none ${className}`}
    >
      <span className={`${grad} ${text} tracking-[0.02em]`}>
        PAK TEXTILES GLOBAL
      </span>
      <span className={`mt-[2px] flex items-center justify-center gap-[3px] ${text}`}>
        <Diamond c="#1e40af" />
        <Diamond c="#dc2626" />
        <Diamond c="#15803d" />
        <span className={`${grad} mx-[2px] tracking-[0.04em]`}>PARTNERS</span>
        <Diamond c="#15803d" />
        <Diamond c="#dc2626" />
        <Diamond c="#1e40af" />
      </span>
    </span>
  );
}

/* Sub-category links for a product category, derived from the central content
   model so the nav stays in sync with the showcase groups (the lookbook pages). */
const subLinks = (catSlug: string): { label: string; href: string; icon?: LucideIcon }[] =>
  (products.find((p) => p.slug === catSlug)?.showcase?.groups ?? []).map((g) => ({
    label: g.name,
    href: `/products/${catSlug}/${g.slug}`,
    icon: subCategoryIcons[g.slug],
  }));

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
  items: { label: string; href: string; desc: string; icon: LucideIcon; section?: string; children?: { label: string; href: string; icon?: LucideIcon }[] }[];
};

type NavLink = {
  kind: "link";
  label: string;
  displayLabel?: string;
  href: string;
};

type NavItem = NavGroup | NavLink;

const PRODUCT_GREEN = "#78899B"; // green-700 — primary lead
const SERVICE_GREEN = "#5E7088"; // green-800 — deeper green for distinction

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
      { label: "Home Textile", href: "/products/bedding-linen", desc: "Bed linen, towels, hotel textiles, curtains & mattress protectors, Pakistan's strongest category.", icon: BedDouble, children: subLinks("bedding-linen") },
      { label: "Apparel & Accessories", href: "/products/apparel-accessories", desc: "Private-label fashion, denim, knitwear, uniforms and accessories.", icon: Shirt, children: subLinks("apparel-accessories") },
      { label: "Sportswear & Activewear", href: "/products/sportswear-activewear", desc: "Gymwear, teamwear and performance kit from the Sialkot hub.", icon: Dumbbell, children: subLinks("sportswear-activewear") },
      { label: "Healthcare Textile", href: "/products/healthcare-textile", desc: "Scrubs, gowns, hospital linen and antimicrobial textiles.", icon: Stethoscope, children: subLinks("healthcare-textile") },
    ],
  },
  /* 2 — Export Services (for Pakistani exporters) */
  {
    kind: "group",
    label: "Export Services",
    tagline: "For Pakistani exporters",
    color: SERVICE_GREEN,
    editorial: {
      headline: "Sell it. Ship it.\nScale it.",
      body: "Services that help Pakistani textile manufacturers and exporters reach buyers across the world.",
      cta: { label: "View all services →", href: "/services" },
    },
    items: [
      { label: "Marketing & Sales", href: "/services/marketing-sales", desc: "Visibility, B2B matchmaking and market intelligence for exporters going global.", icon: Megaphone },
      { label: "E-commerce & Warehouse", href: "/services/ecommerce-warehouse", desc: "Warehousing, e-commerce and Amazon market access; sell direct to global consumers.", icon: Warehouse },
      { label: "Buying House (Outsourcing)", href: "/services/buying-house", desc: "Your outsourced Pakistan procurement house: vetted factories, QA to AQL and delivery.", icon: ShoppingCart },
      { label: "Logistics", href: "/services/logistics", desc: "Freight, customs clearance, export documentation and Importer/Exporter of Record setup.", icon: Truck },
    ],
  },
  /* 3 — Import Services (for international buyers) */
  {
    kind: "group",
    label: "Import Services",
    tagline: "For international buyers",
    color: SERVICE_GREEN,
    editorial: {
      headline: "Source it.\nCheck it. Land it.",
      body: "Source from Pakistan with confidence: vendor vetting, quality control and end-to-end logistics handled for you.",
      cta: { label: "For international buyers →", href: "/#for-international-buyers" },
    },
    items: [
      { label: "Buying House (Outsourcing)", href: "/services/buying-house", desc: "Source the right Pakistani manufacturers for your order: vendor identification, sampling, price negotiation and production follow-up.", icon: Factory },
      { label: "Quality Control", href: "/#for-international-buyers", desc: "Protect your brand with rigorous inspection: pre-production, in-line and final checks against your specs before anything ships.", icon: ClipboardCheck },
      { label: "Compliance & Logistics", href: "/#for-international-buyers", desc: "Social and technical compliance, documentation, consolidation and end-to-end freight to your destination.", icon: Ship },
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
      headline: "More than a listing,\na route to real buyers.",
      body: "Join the supplier pool global buyers source from. Build credibility, get matched to qualified demand, and grow your textile exports worldwide.",
      cta: { label: "Membership overview →", href: "/membership" },
    },
    items: [
      { label: "Overview", href: "/membership", desc: "Why membership beats a listing: benefits, the three tiers and who can join.", icon: Compass },
      { label: "Become a Member", href: "/membership#apply", desc: "Complete the application and join the supplier pool buyers source from.", icon: ClipboardList },
      { label: "Industry Directory", href: "/membership/industries", desc: "Explore Pakistan's textile sectors and the companies driving each one.", icon: Factory },
    ],
  },
  /* 5 — News */
  { kind: "link", label: "News", href: "/news" },
  /* 6 — Register (the header CTA covers Contact) */
  { kind: "link", label: "Register", href: "/register" },
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
  const [panelCat, setPanelCat] = useState<string | null>(null);
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
    setPanelCat(null);
    setOpenGroup((prev) => {
      // A menu is already open — switch to the hovered group instantly so the
      // previous group's panel can't linger (and re-pin via the panel hover).
      if (prev !== null) return label;
      openTimerRef.current = setTimeout(() => setOpenGroup(label), HOVER_OPEN_DELAY);
      return prev;
    });
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
  /* Two-pane menus (categories + sub-categories) — used when a group's items
     carry sub-category children. `activeCatItem` is the category whose
     sub-categories show on the right; it defaults to the first category. */
  const panelHasSubcats = (activeGroup?.items ?? []).some((i) => (i.children?.length ?? 0) > 0);
  const activeCatItem =
    activeGroup ? (activeGroup.items.find((i) => i.href === panelCat) ?? activeGroup.items[0]) : null;
  /* Audience sections (e.g. exporters vs. importers) — render side-by-side columns. */
  const panelSections = activeGroup
    ? (Array.from(new Set(activeGroup.items.map((i) => i.section).filter(Boolean))) as string[])
    : [];

  /* Reset the right-pane selection to the first category each time a menu opens. */
  useEffect(() => { setPanelCat(null); }, [openGroup]);

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
          <div className="flex items-center justify-between gap-3 xl:gap-2 2xl:gap-4 h-[70px] sm:h-[80px] lg:h-[90px]">

            {/* ── Left: Logo + wordmark ────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 lg:gap-2.5 flex-shrink-0 group"
              aria-label="Pak Textiles Global Partners, Home"
            >
              <Image
                src="/image/main-logo-v1.png"
                alt="Pak Textiles Global Partners logo"
                width={250}
                height={258}
                className="h-[44px] sm:h-[52px] lg:h-[60px] w-auto object-contain"
                priority
              />
              <Wordmark className="hidden sm:flex xl:hidden 2xl:flex" />
            </Link>

            {/* ── Centre: Navigation ───────────────────────────── */}
            <nav
              className="hidden xl:flex items-center h-full"
              aria-label="Main navigation"
            >
              <Link
                href="/"
                onMouseEnter={handleLeave}
                className={`relative h-full px-1.5 2xl:px-2.5 flex items-center font-sans text-[11px] 2xl:text-[12.5px] font-semibold tracking-[0.02em] transition-colors duration-150 ${
                  isLinkActive("/") ? "text-[#394F73]" : "text-[#0A0A0A] hover:text-[#394F73]"
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
                      className={`relative h-full px-1.5 2xl:px-2.5 flex items-center font-sans text-[11px] 2xl:text-[12.5px] font-semibold tracking-[0.02em] transition-colors duration-150 whitespace-nowrap ${
                        isLinkActive(item.href) ? "text-[#394F73]" : "text-[#0A0A0A] hover:text-[#394F73]"
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
                      relative h-full px-1.5 2xl:px-2.5 flex items-center gap-1
                      font-sans text-[11px] 2xl:text-[12.5px] font-semibold tracking-[0.02em]
                      transition-colors duration-150 cursor-default select-none whitespace-nowrap
                      ${highlight
                        ? "text-[#394F73]"
                        : "text-[#0A0A0A] hover:text-[#394F73]"}
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
                        absolute bottom-0 left-2 right-2 h-[2px] bg-[#78899B]
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
                className="px-3.5 2xl:px-5 py-2 font-sansHeading font-bold text-[12.5px] 2xl:text-sm uppercase tracking-[0.08em] bg-[#78899B] text-white hover:bg-[#5E7088] transition-colors duration-200 whitespace-nowrap rounded"
              >
                Contact
              </Link>
            </div>

            {/* ── Mobile hamburger ─────────────────────────────── */}
            <button
              className="xl:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] flex-shrink-0"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
            >
              <span className="block w-6 h-[1.5px] bg-[#394F73]" />
              <span className="block w-6 h-[1.5px] bg-[#394F73]" />
              <span className="block w-4 h-[1.5px] self-start bg-[#394F73]" />
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MEGA PANEL — three-column editorial dropdown
        ══════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {activeGroup && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => handlePanelEnter(activeGroup.label)}
              className="hidden xl:block absolute left-0 right-0 top-full border-b-[2px] border-[#0A0A0A] bg-white shadow-xl"
            >
              {/* Stays mounted while switching groups — only the inner content
                  cross-fades, and the panel height morphs, so moving between
                  nav items feels like one continuous surface. */}
              <motion.div
                layout
                transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
                className="relative overflow-hidden"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeGroup.label}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="px-6 sm:px-10 lg:px-14 xl:px-18"
                  >
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

                  {/* ── CENTRE: categories + sub-categories ─────── */}
                  {panelHasSubcats ? (
                    /* Two-pane: categories on the left, the hovered category's
                       sub-categories on the right (defaults to the first). */
                    <div className="grid grid-cols-[minmax(180px,0.9fr)_1.1fr]">
                      <ul className="py-8 pr-5 border-r border-[#E4E1DC]">
                        {activeGroup.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = activeCatItem?.href === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onMouseEnter={() => setPanelCat(item.href)}
                                onFocus={() => setPanelCat(item.href)}
                                onClick={() => setOpenGroup(null)}
                                className={`flex items-center gap-3 py-3 pl-3 pr-2 rounded-lg transition-colors duration-150 ${isActive ? "bg-[#FAFAFA]" : "hover:bg-[#FAFAFA]"}`}
                              >
                                <div
                                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ backgroundColor: `${activeGroup.color}12`, border: `1px solid ${activeGroup.color}20` }}
                                >
                                  <ItemIcon className="w-[18px] h-[18px]" style={{ color: activeGroup.color }} strokeWidth={1.5} />
                                </div>
                                <span
                                  className="flex-1 font-heading font-semibold text-panel-item leading-snug"
                                  style={{ color: isActive ? activeGroup.color : "#0A0A0A" }}
                                >
                                  {item.label}
                                </span>
                                <span
                                  className="font-sans text-panel-desc transition-opacity duration-150"
                                  style={{ color: activeGroup.color, opacity: isActive ? 1 : 0 }}
                                >
                                  →
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                      {activeCatItem && (
                        <div className="py-8 pl-8">
                          <p className="font-sans text-panel-eyebrow uppercase text-[#6B6B6B] mb-1">
                            In this category
                          </p>
                          <Link
                            href={activeCatItem.href}
                            onClick={() => setOpenGroup(null)}
                            className="inline-block font-heading font-bold text-panel-item text-[#0A0A0A] hover:text-[#394F73] transition-colors duration-150"
                          >
                            {activeCatItem.label}
                          </Link>
                          <p className="mt-1.5 font-sans text-panel-desc text-[#6B6B6B] line-clamp-1">
                            {activeCatItem.desc}
                          </p>
                          {activeCatItem.children && activeCatItem.children.length > 0 ? (
                            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-0">
                              {activeCatItem.children.map((child) => {
                                const ChildIcon = child.icon;
                                return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setOpenGroup(null)}
                                    className="group/sub flex items-center justify-between gap-2 py-2 border-b border-[#EDEBE7] transition-colors duration-150"
                                  >
                                    <span className="flex items-center gap-2.5 font-sans text-panel-item text-[#3F3F3F] group-hover/sub:text-[#394F73] transition-colors duration-150">
                                      {ChildIcon && (
                                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#78899B]/10 text-[#394F73]">
                                          <ChildIcon className="size-[15px]" strokeWidth={1.75} aria-hidden />
                                        </span>
                                      )}
                                      {child.label}
                                    </span>
                                    <span
                                      className="font-sans text-panel-desc opacity-0 group-hover/sub:opacity-100 transition-opacity duration-150"
                                      style={{ color: activeGroup.color }}
                                    >
                                      →
                                    </span>
                                  </Link>
                                </li>
                                );
                              })}
                            </ul>
                          ) : null}
                        </div>
                      )}
                    </div>
                  ) : (
                    panelSections.length > 0 ? (
                    /* Audience columns — each section side by side, labels only (no descriptions). */
                    <div className="py-10 px-10">
                      <div className={`grid gap-x-10 ${panelSections.length >= 2 ? "grid-cols-2 divide-x divide-[#E4E1DC]" : "grid-cols-1"}`}>
                        {panelSections.map((section, sIdx) => (
                          <div key={section} className={sIdx > 0 ? "pl-10" : ""}>
                            <p
                              className="font-sans text-panel-eyebrow uppercase tracking-wide mb-3 pb-3 border-b border-[#E4E1DC]"
                              style={{ color: activeGroup.color }}
                            >
                              {section}
                            </p>
                            <ul className="space-y-0">
                              {activeGroup.items
                                .filter((i) => i.section === section)
                                .map((item) => {
                                  const ItemIcon = item.icon;
                                  return (
                                    <li key={`${section}-${item.href}`} className="border-b border-[#EDEBE7] last:border-0">
                                      <Link
                                        href={item.href}
                                        onClick={() => setOpenGroup(null)}
                                        className="group/item flex items-center gap-3 py-3.5 hover:bg-[#FAFAFA] -mx-3 px-3 transition-colors duration-150"
                                      >
                                        <div
                                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover/item:scale-110"
                                          style={{ backgroundColor: `${activeGroup.color}12`, border: `1px solid ${activeGroup.color}20` }}
                                        >
                                          <ItemIcon className="w-[18px] h-[18px]" style={{ color: activeGroup.color }} strokeWidth={1.5} />
                                        </div>
                                        <span className="flex-1 font-heading font-semibold text-panel-item text-[#0A0A0A] leading-snug">
                                          {item.label}
                                        </span>
                                        <span
                                          className="flex-shrink-0 font-sans text-panel-desc opacity-0 group-hover/item:opacity-100 transition-all duration-150 group-hover/item:translate-x-0.5"
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
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="py-10 px-10">
                      <p className="font-sans text-panel-eyebrow uppercase text-[#6B6B6B] mb-4 pb-3 border-b border-[#E4E1DC]">
                        Section index
                      </p>
                      <ul className="space-y-0">
                        {activeGroup.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <li key={item.href} className="border-b border-[#E4E1DC] last:border-0">
                              <Link
                                href={item.href}
                                onClick={() => setOpenGroup(null)}
                                className="
                                  group/item flex items-start gap-4 py-4
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
                  ))}

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
                  </motion.div>
                </AnimatePresence>
              </motion.div>
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
                    alt="Pak Textiles Global Partners logo"
                    width={320}
                    height={226}
                    className="h-[40px] w-auto object-contain"
                  />
                  <Wordmark size="mobile" className="flex" />
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
                            {item.items.map((subItem, subIdx) => {
                              const SubIcon = subItem.icon;
                              const showSection = !!subItem.section && subItem.section !== item.items[subIdx - 1]?.section;
                              return (
                                <li key={`${subItem.section ?? ""}-${subItem.href}`} className="border-t border-[#E4E1DC]">
                                  {showSection && (
                                    <p
                                      className="px-6 pt-3 pb-1 font-sans text-mobile-desc uppercase tracking-wide font-semibold"
                                      style={{ color: item.color }}
                                    >
                                      {subItem.section}
                                    </p>
                                  )}
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
                                      {!subItem.section && (
                                        <span className="block font-sans text-mobile-desc text-[#6B6B6B]">
                                          {subItem.desc}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                  {subItem.children && subItem.children.length > 0 && (
                                    <ul className="pb-2.5">
                                      {subItem.children.map((child) => {
                                        const ChildIcon = child.icon;
                                        return (
                                        <li key={child.href}>
                                          <Link
                                            href={child.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="flex items-center gap-2.5 pl-[60px] pr-6 py-2 font-sans text-mobile-desc text-[#6B6B6B] hover:text-[#394F73] transition-colors duration-150"
                                          >
                                            {ChildIcon && (
                                              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#78899B]/10 text-[#394F73]">
                                                <ChildIcon className="size-[14px]" strokeWidth={1.75} aria-hidden />
                                              </span>
                                            )}
                                            {child.label}
                                          </Link>
                                        </li>
                                        );
                                      })}
                                    </ul>
                                  )}
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
                  className="block text-center py-3 px-4 bg-[#78899B] text-white font-sansHeading font-bold text-mobile-cta uppercase hover:bg-[#5E7088] transition-colors duration-200 rounded"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
