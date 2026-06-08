"use client";

import { useState, useMemo, useCallback } from "react";
import { LazyImage } from "@/components/ui/lazy-image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { featuredEvents } from "@/data/featured-events";

const homepageEvents = featuredEvents.filter(e => new Date(e.dateISO).getMonth() !== 2);

function isEventUpcomingISO(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateISO) >= today;
}

const tagColors: Record<string, string> = {
  Summit: "#047857",
  Expo: "#10B981",
  Conference: "#047857",
  Workshop: "#EAB308",
  Webinar: "#047857",
  Forum: "#10B981",
};

function getTagColor(tag: string): string {
  return tagColors[tag] || "#047857";
}

function HomeEventCard({ event }: { event: typeof homepageEvents[0] }) {
  const color = getTagColor(event.tag);

  return (
    <Link href="/events" className="group flex flex-col gap-2 rounded-lg p-2 duration-75 hover:bg-[#E8E6E3]/60 active:bg-[#E8E6E3]">
      <LazyImage
        src={event.image}
        fallback="/image/placeholder.webp"
        inView={true}
        alt={event.title}
        ratio={16 / 9}
        className="transition-all duration-500 group-hover:scale-105"
        AspectRatioClassName="border-[#D8D5CF]"
      />
      <div className="space-y-2 px-2 pb-2">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#5A5F72]">
          <p>{event.tag}</p>
          <div className="size-1 rounded-full" style={{ background: color }} />
          <p>{event.date}</p>
          {event.location && (
            <>
              <div className="size-1 rounded-full bg-[#5A5F72]" />
              <p className="line-clamp-1">{event.location}</p>
            </>
          )}
        </div>
        <h3 className="line-clamp-2 text-lg leading-snug font-semibold tracking-tight text-[#1C1F2E]">
          {event.title}
        </h3>
        <p className="line-clamp-3 text-sm text-[#5A5F72]">
          {event.shortDescription}
        </p>
      </div>
    </Link>
  );
}

export default function HomeEventsSection() {
  const [showPast, setShowPast] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [monthFilter, setMonthFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("nearest");

  const upcomingCount = useMemo(() =>
    homepageEvents.filter((e) => isEventUpcomingISO(e.dateISO)).length, []
  );
  const pastCount = useMemo(() =>
    homepageEvents.filter((e) => !isEventUpcomingISO(e.dateISO)).length, []
  );

  const getMonthYear = (dateISO: string) => {
    const d = new Date(dateISO);
    return d.toLocaleString("en-GB", { month: "long", year: "numeric" });
  };

  const availableMonths = useMemo(() => {
    const source = homepageEvents.filter((e) =>
      showPast ? !isEventUpcomingISO(e.dateISO) : isEventUpcomingISO(e.dateISO)
    );
    const months = Array.from(new Set(source.map((e) => getMonthYear(e.dateISO))));
    return months.sort((a, b) => {
      const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const [mA, yA] = a.split(" ");
      const [mB, yB] = b.split(" ");
      const diff = parseInt(yA) - parseInt(yB);
      if (diff !== 0) return showPast ? -diff : diff;
      return showPast ? MONTHS.indexOf(mB) - MONTHS.indexOf(mA) : MONTHS.indexOf(mA) - MONTHS.indexOf(mB);
    });
  }, [showPast]);

  const getCatCount = useCallback((cat: string) => {
    return homepageEvents.filter((e) => {
      const isUp = isEventUpcomingISO(e.dateISO);
      if (showPast ? isUp : !isUp) return false;
      if (cat === "All") return true;
      if (cat === "London") return e.location?.toLowerCase().includes("london");
      if (cat === "Pakistan") {
        const loc = e.location?.toLowerCase() ?? "";
        return loc.includes("pakistan") || loc.includes("karachi") || loc.includes("islamabad") || loc.includes("lahore");
      }
      return e.tag === cat;
    }).length;
  }, [showPast]);

  const filtered = useMemo(() => {
    let result = homepageEvents.filter((e) => {
      const isUp = isEventUpcomingISO(e.dateISO);
      if (showPast ? isUp : !isUp) return false;

      if (categoryFilter !== "All") {
        if (categoryFilter === "London" && !e.location?.toLowerCase().includes("london")) return false;
        if (categoryFilter === "Pakistan") {
          const loc = e.location?.toLowerCase() ?? "";
          if (!loc.includes("pakistan") && !loc.includes("karachi") && !loc.includes("islamabad") && !loc.includes("lahore")) return false;
        }
        if (["Summit", "Expo", "Conference"].includes(categoryFilter) && e.tag !== categoryFilter) return false;
      }

      if (monthFilter !== "All" && getMonthYear(e.dateISO) !== monthFilter) return false;

      return true;
    });

    if (sortOrder === "nearest") {
      result = showPast
        ? result.sort((a, b) => b.dateISO.localeCompare(a.dateISO))
        : result.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    } else if (sortOrder === "newest") {
      result = result.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    } else {
      result = result.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    }

    const isUK = (e: typeof result[0]) => {
      const loc = e.location?.toLowerCase() ?? "";
      return loc.includes("london") || loc.includes("westminster") || loc.includes("excel");
    };
    const isPK = (e: typeof result[0]) => {
      const loc = e.location?.toLowerCase() ?? "";
      return loc.includes("pakistan") || loc.includes("karachi") || loc.includes("islamabad") || loc.includes("lahore");
    };
    const ukEvents = result.filter(isUK);
    const pkEvents = result.filter(isPK);
    const otherEvents = result.filter(e => !isUK(e) && !isPK(e));
    result = [...ukEvents, ...otherEvents, ...pkEvents];

    return result.slice(0, 9);
  }, [showPast, categoryFilter, monthFilter, sortOrder]);

  const CATEGORY_OPTIONS = ["All", "London", "Pakistan", "Summit", "Expo", "Conference"];
  const catColors: Record<string, string> = { All: "#047857", London: "#047857", Pakistan: "#10B981", Summit: "#047857", Expo: "#10B981", Conference: "#047857" };

  return (
    <section
      className="relative z-[1] py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px circle at 0% 0%, rgba(4,120,87,0.07), transparent 50%), radial-gradient(800px circle at 100% 100%, rgba(16,185,129,0.06), transparent 50%), #F8FAFC",
      }}
      aria-labelledby="events-heading"
    >
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection>
          <SectionLabel
            label="Attend an Event"
            title={showPast ? "Past Events" : "Upcoming Events"}
            body="Our events span bilateral summits, investor dialogues, webinars, and trade delegations. All events are open to UPTIB members and selected guests."
            color="#10B981"
            align="center"
          />

          <div className="flex flex-col gap-4 mt-8 mb-6">
            <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Event time period">
              <div className="flex rounded-lg border border-[#B0ADA6] overflow-hidden mr-2">
                <button
                  role="tab"
                  aria-selected={!showPast}
                  onClick={() => { setShowPast(false); setMonthFilter("All"); setCategoryFilter("All"); }}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    !showPast ? "bg-[#10B981] text-white" : "bg-white text-[#5A5F72] hover:bg-gray-50"
                  }`}
                >
                  Upcoming ({upcomingCount})
                </button>
                <button
                  role="tab"
                  aria-selected={showPast}
                  onClick={() => { setShowPast(true); setMonthFilter("All"); setCategoryFilter("All"); }}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    showPast ? "bg-[#047857] text-white" : "bg-white text-[#5A5F72] hover:bg-gray-50"
                  }`}
                >
                  Past ({pastCount})
                </button>
              </div>

              {CATEGORY_OPTIONS.map((cat) => {
                const isActive = categoryFilter === cat;
                const color = catColors[cat] || "#047857";
                const count = getCatCount(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    aria-pressed={isActive}
                    className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg border transition-all duration-200"
                    style={{
                      background: isActive ? `${color}12` : "#FFFFFF",
                      borderColor: isActive ? `${color}55` : "#B0ADA6",
                      color: isActive ? color : "#5A5F72",
                    }}
                  >
                    {cat} <span className="ml-1 opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select
                  value={monthFilter}
                  onChange={(e) => setMonthFilter(e.target.value)}
                  aria-label="Filter by month"
                  className="appearance-none pl-4 pr-10 py-2.5 text-sm font-semibold rounded-lg border border-[#B0ADA6] bg-white text-[#3D4152] cursor-pointer hover:border-[#047857] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#047857]/50"
                >
                  <option value="All">All Months</option>
                  {availableMonths.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5F72] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  aria-label="Sort order"
                  className="appearance-none pl-4 pr-10 py-2.5 text-sm font-semibold rounded-lg border border-[#B0ADA6] bg-white text-[#3D4152] cursor-pointer hover:border-[#047857] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#047857]/50"
                >
                  <option value="nearest">Nearest First</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5F72] pointer-events-none" />
              </div>

              <span className="text-sm text-[#5A5F72] ml-auto" role="status" aria-live="polite">
                {filtered.length} event{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6" role="tabpanel">
              {filtered.map((event) => (
                <HomeEventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[#3D4152] mb-10" role="status" aria-live="polite">
              <p className="text-base">No events found for this filter.</p>
              <button
                onClick={() => { setCategoryFilter("All"); setMonthFilter("All"); }}
                className="mt-3 px-4 py-2 text-sm font-semibold text-[#047857]"
              >
                Clear filters
              </button>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <PillButton href="/events">View all events</PillButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
