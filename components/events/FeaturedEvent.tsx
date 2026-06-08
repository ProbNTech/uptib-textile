"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface Event {
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
}

interface FeaturedEventProps {
  event: Event;
}

export function FeaturedEvent({ event }: FeaturedEventProps) {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <div className="relative rounded border border-gray-100 bg-white overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-200 transition-all duration-500 group">
        {/* Blue gradient edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#047857] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glass border effect */}
        <div className="absolute inset-0 rounded border border-gray-100 pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-0">
          {/* Text content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            {/* Badges */}
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-sm">
                <span className="text-base font-bold text-white tracking-wide uppercase">
                  Featured Event
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#047857]/20 border border-[#047857]/30">
                <Calendar className="w-3.5 h-3.5 text-[#047857]" />
                <span className="text-base font-semibold text-[#047857]">
                  {event.date}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-[#064E3B] group-hover:text-[#047857] transition-colors duration-300">
              {event.title}
            </h2>

            {/* Summary */}
            <p className="text-base text-[#475569] mb-6 leading-relaxed">
              {event.summary}
            </p>

            {/* Location */}
            <div className="flex items-start gap-2 text-base text-[#475569] mb-6">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#047857]" />
              <span>{event.location}</span>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-base font-semibold text-[#047857] group-hover:gap-3 transition-all duration-300">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
            {!imageError ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#047857]/20 to-[#10B981]/15">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-[#047857]/50 mx-auto mb-2" />
                  <span className="text-base font-medium text-[#475569]">
                    Event Image
                  </span>
                </div>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/5 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
