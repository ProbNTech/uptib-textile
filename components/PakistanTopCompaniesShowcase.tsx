"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { CompanyCard } from "@/components/directory/CompanyCard";
import { textileManufacturers } from "@/data/textile-manufacturers";

import "swiper/css";
import "swiper/css/navigation";

const showcase = [...textileManufacturers].sort((a, b) => a.name.localeCompare(b.name));

export default function PakistanTopCompaniesShowcase() {
  if (showcase.length === 0) return null;

  return (
    <section
      className="relative z-[1] py-16 lg:py-20 overflow-hidden bg-white"
    >
      {/* Pakistan map — section background watermark */}
      <Image
        src="/image/pakistan.png"
        alt=""
        aria-hidden
        width={900}
        height={760}
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] lg:w-[900px] max-w-none h-auto opacity-[0.45] z-0"
      />
      <div className="relative z-[1] px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <SectionHeader
            label="Showcase"
            title="Pakistan's Vetted Textile Manufacturers"
            subtitle="Real manufacturers, mills and sourcing partners in our network — across home & hospitality textiles, apparel, sportswear, healthcare textiles and yarn & fabric."
            color="green"
          />

          <div className="relative mt-2">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={showcase.length > 4}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".pak-companies-next",
                prevEl: ".pak-companies-prev",
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1400: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {showcase.map((company) => (
                <SwiperSlide key={company.id} className="!h-auto pb-4">
                  <CompanyCard company={company} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center justify-between mt-6">
              <Link
                href="/membership"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2F7549] hover:text-[#245C3A] transition-colors"
              >
                Explore all manufacturers
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex gap-2.5">
                <button
                  aria-label="Previous companies"
                  className="pak-companies-prev group w-10 h-10 flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[#2F7549]/30 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#6B7280] transition-all duration-300 group-hover:text-[#2F7549] group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  aria-label="Next companies"
                  className="pak-companies-next group w-10 h-10 flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[#2F7549]/30 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#6B7280] transition-all duration-300 group-hover:text-[#2F7549] group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
