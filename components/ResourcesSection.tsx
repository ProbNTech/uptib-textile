"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const resources = [
  {
    date: "16 February 2026",
    title: "UK–Pakistan Tech Market Overview 2026",
    categories: ["Market Entry & Internationalisation", "Reports"],
    image: "/image/eventgallery/event-1.jpg",
  },
  {
    date: "13 February 2026",
    title: "Investment Landscape: UK–Pakistan Technology Outlook",
    categories: ["Funding & Investment", "Webinar"],
    image: "/image/eventgallery/event-2.jpg",
  },
  {
    date: "13 February 2026",
    title: "Cross-Border Startup Growth Guide",
    categories: ["Innovation", "Digital Trade"],
    image: "/image/eventgallery/event-3.jpg",
  },
];

export function ResourcesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Header with divider line */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-6 mb-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#047857] shrink-0">
              Resources
            </h2>
            <div className="flex-1 h-[2px] bg-[#10B981]" />
          </div>
          <p className="text-lg text-[#4B5563] leading-relaxed">
            Explore insights, market intelligence, policy briefings, and cross-border technology updates from the UK–Pakistan Tech Forum.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-5 bg-[#F0F4F8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Date */}
              <p className="text-base text-[#94A3B8] mb-2">{item.date}</p>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg text-[#1F2937] leading-snug mb-3 group-hover:text-[#047857] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Categories */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
                {item.categories.map((cat, i) => (
                  <span key={cat}>
                    <a
                      href="#"
                      className="text-base font-medium text-[#047857] hover:underline transition-all duration-200"
                    >
                      {cat}
                    </a>
                    {i < item.categories.length - 1 && (
                      <span className="text-[#CBD5E1] ml-3">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Bottom border */}
              <div className="h-[2px] w-full bg-[#10B981]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
