"use client";

import { useState, useMemo } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/events/EventGrid";
import { EventsCTA } from "@/components/events/EventsCTA";
import { events } from "@/data/events";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Dynamic date helpers                                                */
/* ------------------------------------------------------------------ */
function isUpcoming(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateISO) >= today;
}

function getMonthYear(dateISO: string): string {
  const d = new Date(dateISO);
  return d.toLocaleString("en-GB", { month: "long", year: "numeric" });
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/* ------------------------------------------------------------------ */
/*  Filter / sort types                                                 */
/* ------------------------------------------------------------------ */
type CategoryFilter = "All" | "London" | "Europe" | "Pakistan" | "UPTIB";
type SortOrder = "nearest" | "newest" | "oldest";

const CATEGORY_TABS: { label: string; value: CategoryFilter; color: string }[] = [
  { label: "All", value: "All", color: "#047857" },
  { label: "London", value: "London", color: "#047857" },
  { label: "Europe", value: "Europe", color: "#7C3AED" },
  { label: "Pakistan", value: "Pakistan", color: "#10B981" },
  { label: "UPTIB", value: "UPTIB", color: "#047857" },
];

/* ------------------------------------------------------------------ */
/*  Events page                                                        */
/* ------------------------------------------------------------------ */
export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();

  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const [monthFilter, setMonthFilter] = useState<string>("All");
  const [showPast, setShowPast] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>("nearest");

  /* ── Computed: split upcoming / past dynamically ── */
  const upcomingEvents = useMemo(() =>
    events.filter((e) => isUpcoming(e.dateISO)),
    []
  );
  const pastEvents = useMemo(() =>
    events.filter((e) => !isUpcoming(e.dateISO)),
    []
  );

  /* ── Available months from upcoming events for the filter ── */
  const availableMonths = useMemo(() => {
    const source = showPast ? pastEvents : upcomingEvents;
    const months = new Set(source.map((e) => getMonthYear(e.dateISO)));
    // Sort chronologically
    return Array.from(months).sort((a, b) => {
      const [mA, yA] = a.split(" ");
      const [mB, yB] = b.split(" ");
      const diff = parseInt(yA) - parseInt(yB);
      if (diff !== 0) return showPast ? -diff : diff;
      return showPast
        ? MONTH_NAMES.indexOf(mB) - MONTH_NAMES.indexOf(mA)
        : MONTH_NAMES.indexOf(mA) - MONTH_NAMES.indexOf(mB);
    });
  }, [showPast, upcomingEvents, pastEvents]);

  /* ── Filtering logic ── */
  const filteredEvents = useMemo(() => {
    const source = showPast ? pastEvents : upcomingEvents;

    return source.filter((e) => {
      // Category filter
      if (categoryFilter !== "All" && e.category !== categoryFilter) return false;
      // Month filter
      if (monthFilter !== "All" && getMonthYear(e.dateISO) !== monthFilter) return false;
      return true;
    });
  }, [showPast, categoryFilter, monthFilter, upcomingEvents, pastEvents]);

  /* ── Sorting ── */
  const sortedEvents = useMemo(() => {
    const sorted = [...filteredEvents];
    const today = new Date().toISOString().slice(0, 10);

    if (sortOrder === "nearest") {
      // Nearest to today first (for upcoming: soonest first, for past: most recent first)
      if (showPast) {
        sorted.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
      } else {
        sorted.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
      }
    } else if (sortOrder === "newest") {
      sorted.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    } else {
      sorted.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    }
    return sorted;
  }, [filteredEvents, sortOrder, showPast]);

  /* ── Group by month for display ── */
  const groupedByMonth = useMemo(() => {
    const groups: Record<string, typeof sortedEvents> = {};
    for (const e of sortedEvents) {
      const key = getMonthYear(e.dateISO);
      if (!groups[key]) groups[key] = [];
      groups[key].push(e);
    }
    return groups;
  }, [sortedEvents]);

  const gridEvents = (evts: typeof events) =>
    evts.map((e) => ({
      slug: e.slug,
      title: e.title,
      date: e.date,
      image: e.image,
      summary: e.excerpt,
      location: e.location,
      tag: e.tag,
    }));

  /* ── Stats ── */
  const stats = [
    { label: "Total Events", value: events.length, color: "#047857" },
    { label: "Upcoming", value: upcomingEvents.length, color: "#10B981" },
    { label: "Past", value: pastEvents.length, color: "#047857" },
    { label: "London", value: events.filter((e) => e.category === "London").length, color: "#047857" },
    { label: "Europe", value: events.filter((e) => e.category === "Europe").length, color: "#7C3AED" },
    { label: "Pakistan", value: events.filter((e) => e.category === "Pakistan").length, color: "#10B981" },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <PageHero
        label="Programme Calendar"
        title="Events & Engagements"
        subtitle="UPTIB flagship summits, key London and Pakistan tech events, and bilateral engagements connecting both nations' technology ecosystems."
        heroVideo="/videos/banner.mp4"
        heroVideoSpeed={2}
      />

      {/* STATS BAR */}
      <section className="bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-xl p-6">
                    <div className="font-heading font-extrabold text-3xl sm:text-4xl mb-2" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <p className="text-[#5A5F72] text-base">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS GRID WITH FILTERS */}
      <section className="relative bg-white">
        <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20 py-10 lg:py-14">
          <AnimatedSection>
            <SectionHeader
              label="Programme"
              title="Events Calendar"
              subtitle="Key engagements, summits, and activities from the UK-Pakistan technology corridor."
              color="blue"
            />

            {/* ── Filter Controls ── */}
            <div className="flex flex-col gap-4 mb-8">

              {/* Row 1: Upcoming/Past toggle + Category filters */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Upcoming / Past toggle */}
                <div className="flex rounded-lg border border-[#D8D5CF] overflow-hidden mr-2">
                  <button
                    onClick={() => { setShowPast(false); setMonthFilter("All"); }}
                    className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      !showPast
                        ? "bg-[#10B981] text-white"
                        : "bg-white text-[#5A5F72] hover:bg-gray-50"
                    }`}
                  >
                    Upcoming ({upcomingEvents.length})
                  </button>
                  <button
                    onClick={() => { setShowPast(true); setMonthFilter("All"); }}
                    className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      showPast
                        ? "bg-[#047857] text-white"
                        : "bg-white text-[#5A5F72] hover:bg-gray-50"
                    }`}
                  >
                    Past ({pastEvents.length})
                  </button>
                </div>

                {/* Category pills */}
                {CATEGORY_TABS.map((tab) => {
                  const isActive = categoryFilter === tab.value;
                  const count = (showPast ? pastEvents : upcomingEvents).filter(
                    (e) => tab.value === "All" || e.category === tab.value
                  ).length;

                  return (
                    <button
                      key={tab.value}
                      onClick={() => setCategoryFilter(tab.value)}
                      className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg border transition-all duration-200"
                      style={{
                        background: isActive ? `${tab.color}12` : "#FFFFFF",
                        borderColor: isActive ? `${tab.color}55` : "#D8D5CF",
                        color: isActive ? tab.color : "#5A5F72",
                      }}
                    >
                      {tab.label} <span className="ml-1 opacity-70">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Row 2: Month filter + Sort */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Month dropdown */}
                <div className="relative">
                  <select
                    value={monthFilter}
                    onChange={(e) => setMonthFilter(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2.5 text-sm font-semibold rounded-lg border border-[#D8D5CF] bg-white text-[#3D4152] cursor-pointer hover:border-[#047857] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#047857]/20"
                  >
                    <option value="All">All Months</option>
                    {availableMonths.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                </div>

                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                    className="appearance-none pl-4 pr-10 py-2.5 text-sm font-semibold rounded-lg border border-[#D8D5CF] bg-white text-[#3D4152] cursor-pointer hover:border-[#047857] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#047857]/20"
                  >
                    <option value="nearest">Nearest First</option>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                </div>

                {/* Result count */}
                <span className="text-sm text-[#7A7E8F] ml-auto">
                  {sortedEvents.length} event{sortedEvents.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* ── Events grouped by month ── */}
            {sortedEvents.length > 0 ? (
              <div className="space-y-10">
                {Object.entries(groupedByMonth).map(([month, evts]) => (
                  <div key={month}>
                    {/* Month header */}
                    <div className="flex items-center gap-3 mb-5">
                      <h3 className="text-lg font-bold text-[#1C1F2E] whitespace-nowrap">{month}</h3>
                      <div className="flex-1 h-px bg-[#D8D5CF]" />
                      <span className="text-sm text-[#7A7E8F]">{evts.length} event{evts.length !== 1 ? "s" : ""}</span>
                    </div>
                    <EventGrid hideBadge={false} events={gridEvents(evts)} />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 rounded-xl border bg-white border-[#D8D5CF] shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#F5F4F2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9A9EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <p className="text-base text-[#5A5F72] font-medium">
                  No events found for this filter.
                </p>
                <button
                  onClick={() => { setCategoryFilter("All"); setMonthFilter("All"); }}
                  className="mt-4 text-base font-semibold transition-colors duration-200"
                  style={{ color: "#047857" }}
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <EventsCTA />
    </div>
  );
}
