"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { NewsCard, NewsCardProps } from "./NewsCard";

interface NewsCarouselProps {
  articles: NewsCardProps[];
  /** When true, the cards render with light text for dark backgrounds. */
  light?: boolean;
  /** Optional CTA rendered on the left of the toolbar, opposite the prev/next arrows. */
  cta?: React.ReactNode;
}

export default function NewsCarousel({ articles, light = false, cta }: NewsCarouselProps) {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative">

      <Swiper
        onSwiper={(s) => (swiperRef.current = s)}
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {articles.map((article, i) => (
          <SwiperSlide key={article.slug}>
            <NewsCard {...article} index={i} light={light} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Toolbar — CTA + prev/next arrows grouped right */}
      <div className="flex items-center justify-end gap-4 mt-8">
        {cta && <div className="shrink-0">{cta}</div>}

        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="group w-11 h-11 flex items-center justify-center rounded-full bg-[#3E8F5E] shadow-md hover:bg-[#16a34a] hover:scale-105 transition-[transform,background-color] duration-300 ease-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="group w-11 h-11 flex items-center justify-center rounded-full bg-[#3E8F5E] shadow-md hover:bg-[#16a34a] hover:scale-105 transition-[transform,background-color] duration-300 ease-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
