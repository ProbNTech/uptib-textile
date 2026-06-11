"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const brandColors = ["#2F7549", "#2F7549", "#3E8F5E"];

export default function LeadershipPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        label="Leadership"
        title="Our Leadership"
        subtitle="Meet the leaders driving the UK-Pakistan technology corridor through innovation, collaboration, and sustainable partnerships."
        image="/image/banners/banner47.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Join Pakistan Textile Partners</ShinyButton>
          <Button href="/about/management-team" variant="glass">Management Team</Button>
        </div>
      </PageHero>

      {/* President Profile Section */}
      <Section variant="light" className="content-body">
        <AnimatedSection>
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 items-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                <Image src="/image/ceo/khalil-choudhary-headshot.jpg" alt="Khalil Choudhary — President, Pakistan Textile Partners" fill className="object-cover" sizes="300px" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg -z-10" style={{ background: `linear-gradient(135deg, ${brandColors[0]}20, ${brandColors[2]}20)` }} />
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-base font-bold uppercase tracking-widest mb-3" style={{ background: `${brandColors[0]}12`, color: brandColors[0] }}>
                President
              </div>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-[#16291E] mb-3">Khalil Choudhary</h2>
              <div className="h-1 w-16 rounded-full mb-5" style={{ background: `linear-gradient(to right, ${brandColors[0]}, ${brandColors[1]}, ${brandColors[2]})` }} />
              <p className="text-[#3D4152] leading-relaxed mb-4">
                A visionary leader dedicated to strengthening the UK–Pakistan technology corridor through innovation, collaboration, and sustainable partnerships. Under his leadership, Pakistan Textile Partners has grown into a strategic platform connecting technology professionals, entrepreneurs, and organisations across both nations.
              </p>
              <p className="text-[#3D4152] leading-relaxed">
                With deep expertise in technology strategy, bilateral trade, and community building, Khalil Choudhary drives Pakistan Textile Partners&apos; mission to champion Pakistan&apos;s soft image globally while creating pathways for prosperity through digital innovation.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* President Message */}
      <Section variant="light" className="content-body">
        <AnimatedSection>
          <SectionHeader label="From the President" title="A Message from Our President" color="green" />
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-t-4 border-t-[#2F7549]">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-2 ring-[#2F7549]/20 ring-offset-2">
                <Image
                  src="/image/ceo/khalil-choudhary-portrait.jpg"
                  alt="Khalil Choudhary — President, Pakistan Textile Partners"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#16291E] mb-1">Khalil Choudhary</h3>
              <p className="text-base text-[#2F7549] font-semibold mb-3">President, Pakistan Textile Partners</p>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-base text-[#7A7E8F] leading-relaxed">
                Visionary leader dedicated to strengthening the UK–Pakistan technology corridor through innovation, collaboration, and sustainable partnerships.
              </p>
            </div>
            <div>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                When we founded the UK Pakistan Technology Forum, our vision was simple yet ambitious: to create a bridge between two nations rich in talent, innovation, and entrepreneurial spirit. Pakistan&apos;s technology sector is one of the fastest-growing in the world, and the United Kingdom remains a global hub for innovation and enterprise. Together, these two nations have extraordinary potential to shape the future of technology.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Pakistan Textile Partners was built on the belief that collaboration, not competition, drives progress. We bring together technology professionals, entrepreneurs, investors, government leaders, and academics from both nations to forge partnerships that create lasting impact — not just for businesses, but for communities and future generations.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Our programmes span artificial intelligence, digital transformation, startup incubation, skill development, and bilateral trade facilitation. Through our work, we are not only building businesses — we are building a movement. A movement that champions Pakistan&apos;s soft image globally, nurtures the next generation of technology leaders, and creates pathways for prosperity in both nations.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                I invite you to join us on this journey. Whether you are a seasoned technology professional, an emerging entrepreneur, an investor seeking opportunities, or a policy maker shaping the future — there is a place for you at Pakistan Textile Partners. Together, we can build something extraordinary.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Join the Movement"
        title="Be Part of the Pakistan Textile Partners Story"
        subtitle="Join our leadership and thousands of technology leaders building the future of UK-Pakistan tech collaboration."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Management Team"
        secondaryButtonLink="/about/management-team"
        image="/image/textile/manufacturers.jpg"
      />
    </div>
  );
}
