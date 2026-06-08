"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";

/* Brand-color mapping for event tags */
const tagColors: Record<string, string> = {
  Summit: "#047857",
  Expo: "#10B981",
  Conference: "#047857",
  Workshop: "#EAB308",
  Webinar: "#047857",
  Forum: "#10B981",
};

function getTagColor(tag?: string): string {
  return tag ? (tagColors[tag] || "#047857") : "#047857";
}

interface Event {
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
  slug?: string;
  tag?: string;
}

interface EventGridProps {
  events: Event[];
  hideBadge?: boolean;
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const color = getTagColor(event.tag);

  const card = (
    <div className="group flex flex-col gap-2 rounded-lg p-2 duration-75 hover:bg-[#E8E6E3]/60 active:bg-[#E8E6E3]">
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
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#7A7E8F]">
          {event.tag && (
            <>
              <p>{event.tag}</p>
              <div className="size-1 rounded-full" style={{ background: color }} />
            </>
          )}
          <p>{event.date}</p>
          {event.location && (
            <>
              <div className="size-1 rounded-full bg-[#7A7E8F]" />
              <p className="line-clamp-1">{event.location}</p>
            </>
          )}
        </div>
        <h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight text-[#1C1F2E]">
          {event.title}
        </h2>
        <p className="line-clamp-3 text-sm text-[#3D4152]/70">
          {event.summary}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {event.slug ? (
        <Link href={`/events/${event.slug}`} className="block">
          {card}
        </Link>
      ) : (
        card
      )}
    </motion.div>
  );
}

export function EventGrid({ events }: EventGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event, index) => (
        <EventCard key={index} event={event} index={index} />
      ))}
    </div>
  );
}
