"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Search,
  TrendingUp,
  BarChart3,
  Users,
  CalendarDays,
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { Article } from "@/data/news";

const HERO_IMAGE = "/image/news/news_hero.webp";

const HIGHLIGHTS = [
  { icon: TrendingUp, title: "Industry Insights", desc: "In-depth analysis & trends" },
  { icon: BarChart3, title: "Market Updates", desc: "Latest data & export stats" },
  { icon: Users, title: "Expert Opinions", desc: "Voices from industry leaders" },
  { icon: CalendarDays, title: "Events & Activities", desc: "Stay updated with Pakistan Textile Partners" },
];

export function NewsClient({ articles }: { articles: Article[] }) {
  const shouldReduceMotion = useReducedMotion();
  const published = useMemo(
    () => articles.filter((a) => a.published).sort((a, b) => b.date.localeCompare(a.date)),
    [articles]
  );

  // Categories for filter tabs
  const categories = useMemo(() => {
    const set = new Set(published.map((a) => a.category));
    return ["All", ...Array.from(set)];
  }, [published]);

  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return published.filter((a) => {
      const matchCat = activeCat === "All" || a.category === activeCat;
      const matchQuery =
        q === "" ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [published, activeCat, query]);

  // Featured carousel — top published stories
  const featured = useMemo(() => {
    const guide = articles.find((a) => a.published);
    const ordered = guide ? [guide, ...published.filter((a) => a.slug !== guide.slug)] : published;
    return ordered.slice(0, 4);
  }, [articles, published]);

  const [slide, setSlide] = useState(0);
  const activeFeatured = featured[slide] ?? featured[0];
  const go = (dir: number) =>
    setSlide((s) => (s + dir + featured.length) % featured.length);

  const [subscribed, setSubscribed] = useState(false);

  const scrollToLatest = () => {
    document.getElementById("latest")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-[#15402A]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Emerald wash + left-weighted scrim for legible copy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#053C2E]/95 via-[#15402A]/80 to-[#15402A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#053C2E] via-transparent to-[#053C2E]/40" />

        <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-28 lg:pt-36 pb-0">
          <div className="max-w-2xl">
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-[#8FD3AE] mb-5"
            >
              News & Insights
            </motion.p>
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] mb-5"
            >
              Stay Informed.
              <br />
              Stay Ahead<span className="text-[#3E8F5E]">.</span>
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white/95 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              Your source for the latest updates, market trends, export insights, and industry
              stories from Pakistan&apos;s textile sector.
            </motion.p>

            {/* Search */}
            <motion.form
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              onSubmit={(e) => {
                e.preventDefault();
                scrollToLatest();
              }}
              className="flex items-center gap-2 max-w-xl bg-white rounded-full p-1.5 shadow-xl"
            >
              <div className="flex items-center gap-3 flex-1 pl-4">
                <Search className="w-5 h-5 text-[#9CA3AF] flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search news, insights & reports..."
                  className="w-full bg-transparent py-2.5 text-[#16291E] placeholder:text-[#9CA3AF] focus:outline-none text-sm sm:text-base"
                  aria-label="Search news"
                />
              </div>
              <button
                type="submit"
                aria-label="Search"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2F7549] text-white hover:bg-[#245C3A] transition-colors flex-shrink-0"
              >
                <Search className="w-5 h-5" />
              </button>
            </motion.form>
          </div>
        </div>

        {/* Highlight cards — overlap the hero bottom */}
        <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-16 lg:mt-24 pb-px">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-t-card overflow-hidden border border-white/10 bg-[#0B3527]/70 backdrop-blur-md"
          >
            {HIGHLIGHTS.map((h, i) => (
              <button
                key={h.title}
                onClick={scrollToLatest}
                className={`group flex items-center gap-4 text-left p-5 lg:p-6 transition-colors hover:bg-white/5 ${
                  i < HIGHLIGHTS.length - 1 ? "lg:border-r border-white/10" : ""
                }`}
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3E8F5E]/15 text-[#8FD3AE] flex-shrink-0 group-hover:bg-[#3E8F5E]/25 transition-colors">
                  <h.icon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-heading font-bold text-white text-sm leading-tight">
                    {h.title}
                  </span>
                  <span className="block text-white/85 text-xs mt-1">{h.desc}</span>
                </span>
              </button>
            ))}
          </motion.div>
        </div>
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2F7549] via-[#3E8F5E] to-[#2F7549]" />
      </section>

      {/* ============ FEATURED STORY ============ */}
      {activeFeatured && (
        <section className="relative bg-white">
          <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
            <AnimatedSection>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F7549] mb-6">
                Featured Story
              </p>
            </AnimatedSection>

            <div className="relative">
              <div className="rounded-card border border-[#E5E7EB] overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Copy panel */}
                  <div className="relative bg-[#15402A] p-8 sm:p-10 lg:p-14 flex flex-col justify-center min-h-[300px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeatured.slug}
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="inline-flex items-center gap-2 text-white/60 text-sm mb-4">
                          <Calendar className="w-4 h-4" /> {activeFeatured.displayDate}
                        </p>
                        <h2 className="font-heading font-extrabold text-white text-2xl lg:text-[1.9rem] leading-tight mb-4">
                          {activeFeatured.title}
                        </h2>
                        <p className="text-white/75 leading-relaxed mb-8 line-clamp-4">
                          {activeFeatured.excerpt}
                        </p>
                        <Link
                          href={`/news/${activeFeatured.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-[#3E8F5E] hover:bg-[#6FC79A] text-white font-semibold px-6 py-3 transition-colors w-fit"
                        >
                          Read Full Story <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Image panel */}
                  <div className="relative min-h-[280px] lg:min-h-[420px] order-first lg:order-last">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeatured.slug}
                        initial={shouldReduceMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={shouldReduceMotion ? {} : { opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeFeatured.image}
                          alt={activeFeatured.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-[#15402A]/40 lg:to-transparent" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Arrows */}
              {featured.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous story"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-[#2F7549] text-white shadow-lg hover:bg-[#245C3A] transition-colors z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next story"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-[#2F7549] text-white shadow-lg hover:bg-[#245C3A] transition-colors z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Dots */}
            {featured.length > 1 && (
              <div className="flex items-center justify-center gap-2.5 mt-6">
                {featured.map((f, i) => (
                  <button
                    key={f.slug}
                    onClick={() => setSlide(i)}
                    aria-label={`Go to story ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === slide ? "w-7 bg-[#2F7549]" : "w-2.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ============ LATEST NEWS GRID ============ */}
      <section id="latest" className="relative bg-white">
        {/* dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F7549] mb-6">
              Latest News & Insights
            </p>
          </AnimatedSection>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCat === cat
                    ? "bg-[#2F7549] text-white shadow-sm"
                    : "bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#3E8F5E] hover:text-[#2F7549]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#6B7280]">
                No articles match{" "}
                {query ? <span className="font-semibold text-[#16291E]">&ldquo;{query}&rdquo;</span> : "this filter"}.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCat("All");
                }}
                className="mt-4 text-[#2F7549] font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((a, i) => (
                <AnimatedSection key={a.slug} delay={Math.min(i * 0.05, 0.25)}>
                  <Link href={`/news/${a.slug}`} className="group block h-full">
                    <article className="flex h-full flex-col rounded-card border border-[#E5E7EB] bg-white overflow-hidden transition-all duration-300 group-hover:border-[#3E8F5E] group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden bg-[#F1F5F4]">
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-white/95 text-[#2F7549] text-[11px] font-bold uppercase tracking-wide shadow-sm">
                          {a.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-4 text-xs text-[#9CA3AF] mb-3">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> {a.displayDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" /> {a.readTime}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-[#16291E] text-lg leading-snug mb-3 group-hover:text-[#2F7549] transition-colors">
                          {a.title}
                        </h3>
                        <p className="text-[#6B7280] text-sm leading-relaxed flex-1 line-clamp-3">
                          {a.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#2F7549]">
                          Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="bg-white pb-14 lg:pb-20">
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="relative overflow-hidden rounded-card bg-[#15402A] px-6 sm:px-10 lg:px-14 py-10">
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex items-start gap-5 max-w-xl">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#3E8F5E] text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </span>
                <div>
                  <h2 className="font-heading font-extrabold text-white text-xl sm:text-2xl mb-2">
                    Never Miss an Update
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Subscribe to our newsletter and get the latest news, reports, and insights
                    delivered to your inbox.
                  </p>
                </div>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-3 text-[#8FD3AE] font-semibold">
                  <CheckCircle2 className="w-6 h-6" /> Thanks — you&apos;re subscribed.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                  className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    aria-label="Your email address"
                    className="flex-1 lg:w-72 rounded-full px-5 py-3 bg-white text-[#16291E] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3E8F5E] text-sm"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#3E8F5E] hover:bg-[#6FC79A] text-white font-semibold px-7 py-3 transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
