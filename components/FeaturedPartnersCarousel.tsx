"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PartnerCard } from "@/components/PartnerCard";
import type { FeaturedPartner } from "@/data/featured-partners";
import { members, type Member } from "@/data/members";

import "swiper/css";
import "swiper/css/navigation";

/**
 * Featured Partners are the real, current UPTIB members.
 * We adapt each Member into the FeaturedPartner shape consumed by PartnerCard.
 */

const sectorToCategory: Record<string, string> = {
  "Artificial Intelligence": "AI & Data",
  "FinTech": "Fintech",
  "Cybersecurity": "Cybersecurity",
  "HealthTech": "HealthTech",
  "EdTech": "Consulting",
  "E-Commerce": "Consulting",
  "Digital Transformation": "Consulting",
};

function pickCategory(member: Member): string {
  for (const sector of member.sectors) {
    if (sectorToCategory[sector]) return sectorToCategory[sector];
  }
  return "AI & Data";
}

function memberToPartner(member: Member, index: number): FeaturedPartner {
  return {
    id: index + 1,
    slug: member.slug,
    name: member.name,
    description: member.description,
    image: member.logo || "/image/placeholder.webp",
    href: member.website,
    category: pickCategory(member),
    featured: true,
    order: index + 1,
  };
}

const homepagePartners: FeaturedPartner[] = members.map(memberToPartner);

export default function FeaturedPartnersCarousel() {
  if (homepagePartners.length === 0) return null;

  return (
    <section
      className="relative z-[1] py-16 lg:py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px circle at 0% 0%, rgba(4,120,87,0.07), transparent 50%), radial-gradient(800px circle at 100% 100%, rgba(16,185,129,0.05), transparent 50%), #FFFFFF",
      }}
    >
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <SectionHeader
            label="Our partners"
            title="Featured Partners"
            subtitle="UPTIB member organisations operating across the UK–Pakistan technology corridor — drawn directly from the membership directory."
            color="blue"
          />

          <div className="relative mt-2">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={homepagePartners.length > 4}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".partners-next",
                prevEl: ".partners-prev",
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1400: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {homepagePartners.map((partner, i) => (
                <SwiperSlide key={partner.slug} className="!h-auto pb-4">
                  <PartnerCard partner={partner} index={i} displayMode="logo" />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation + CTA row */}
            <div className="flex items-center justify-between mt-6">
              <Link
                href="/membership/directory"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#047857] hover:text-[#065F46] transition-colors"
              >
                View full member directory
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex gap-2.5">
                <button aria-label="Previous partners" className="partners-prev group w-10 h-10 flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[#047857]/30 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#6B7280] transition-all duration-300 group-hover:text-[#047857] group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button aria-label="Next partners" className="partners-next group w-10 h-10 flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[#047857]/30 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#6B7280] transition-all duration-300 group-hover:text-[#047857] group-hover:translate-x-0.5"
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
