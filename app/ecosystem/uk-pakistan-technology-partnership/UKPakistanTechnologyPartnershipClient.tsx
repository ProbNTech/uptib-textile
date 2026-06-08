"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Landmark, Building2, GraduationCap } from "lucide-react";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const WireframeDottedGlobe = dynamic(
  () => import("@/components/ui/wireframe-dotted-globe").then((m) => m.WireframeDottedGlobe),
  { ssr: false }
);

const pillars = [
  { title: "Governments", description: "Facilitating policy alignment and bilateral technology cooperation between UK and Pakistani government bodies.", color: "#047857" },
  { title: "Enterprises & Investors", description: "Supporting cross-border trade, investment facilitation, and market access for businesses and capital.", color: "#10B981" },
  { title: "Startups & Academia", description: "Fostering innovation, talent development, and research collaboration between both nations.", color: "#047857" },
];

const whyJoin = [
  "Exclusive network of leading technology professionals",
  "Strategic partnerships and collaboration opportunities",
  "Access to funding, resources, and market insights",
  "Platform for thought leadership and industry influence",
  "Cross-border innovation and knowledge exchange",
];

const recognitionItems = [
  { title: "Innovation", description: "Celebrating exceptional achievements in technology innovation and cross-border development.", color: "#047857" },
  { title: "Collaboration", description: "Recognising successful partnerships that strengthen the UK–Pakistan tech corridor.", color: "#047857" },
  { title: "Leadership", description: "Honouring individuals and organisations driving digital transformation.", color: "#10B981" },
];

const benefits = [
  { title: "Connect with Leading Minds", description: "Access an exclusive network of tech leaders, founders, and executives across both nations.", color: "#047857" },
  { title: "Launch New Products", description: "Platform to showcase innovations and reach key stakeholders across the corridor.", color: "#10B981" },
  { title: "Establish Thought Leadership", description: "Position your organisation as a leader in the UK–Pakistan tech ecosystem.", color: "#047857" },
  { title: "Boost Brand Awareness", description: "Increase visibility and recognition across both markets simultaneously.", color: "#047857" },
];

const attendees = [
  "C-suite executives and senior management",
  "Chief technology officers and tech leads",
  "Startup founders and entrepreneurs",
  "Venture capitalists and angel investors",
  "Senior technology directors and professionals",
  "Thought leaders and domain experts",
  "Corporate innovation and strategy heads",
  "Business development and partnership directors",
];

const partnerLogos = [
  "/image/sponsor-logos/7.png",
  "/image/sponsor-logos/8.png",
  "/image/sponsor-logos/9.png",
  "/image/sponsor-logos/10.png",
  "/image/sponsor-logos/11.png",
  "/image/sponsor-logos/12.png",
];

export default function UKPakistanTechnologyPartnershipClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white content-body">
      {/* ── Hero Section — split layout with globe ── */}
      <section className="relative z-[2] w-full overflow-hidden bg-[#0B0F1A]">
        {/* Subtle left-side gradient */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(5,10,20,0.72) 0%, rgba(5,10,20,0.50) 45%, rgba(5,10,20,0.25) 70%, rgba(5,10,20,0.10) 100%)",
          }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 z-[11] pointer-events-none opacity-[0.04] bg-gradient-to-br from-white/5 via-transparent to-white/5" />

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute right-[10%] top-[20%] w-[400px] h-[400px] rounded-full pointer-events-none z-[5]"
          style={{ background: "radial-gradient(circle, rgba(4,120,87,0.12), transparent 70%)" }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[60%] bottom-[15%] w-[250px] h-[250px] rounded-full pointer-events-none z-[5]"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)" }}
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content: text left, globe right */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center min-h-[420px] lg:min-h-[560px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20 gap-8 lg:gap-0">
          {/* Left — text */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.18em] text-[#047857] mb-4 sm:mb-5"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                UPTIB Ecosystem
              </motion.p>

              <h1
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-6"
                style={{ lineHeight: 1.25, textShadow: "0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)" }}
              >
                {"UK–Pakistan Technology Partnership".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="text-base sm:text-lg text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                Strengthening bilateral technology collaboration between the United Kingdom and Pakistan.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 sm:mt-8"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <ShinyButton href="/membership">Become a Member</ShinyButton>
                  <Button href="/contact" variant="glass">
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — interactive globe */}
          <div className="w-full lg:w-[50%] flex items-center justify-center lg:-mr-8 xl:-mr-12">
            <motion.div
              className="w-full max-w-[600px] xl:max-w-[680px] aspect-square"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <WireframeDottedGlobe size={680} />
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#047857] via-[#10B981] to-[#047857]" />
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionHeader
                  label="Our Vision"
                  title="The UK–Pakistan Technology Partnership"
                  color="blue"
                  subtitle="A strategic collaboration framework designed to strengthen technology, innovation, and digital trade between the United Kingdom and Pakistan."
                />
                <p className="text-[#3D4152] text-lg leading-relaxed mb-4">
                  By connecting governments, enterprises, investors, startups, and academia, we create a powerful network that enables technology-led growth, fosters innovation, and builds lasting bridges between our two nations.
                </p>
                <p className="text-[#3D4152] text-lg leading-relaxed">
                  This partnership facilitates cross-border cooperation, knowledge exchange, and joint initiatives that drive sustainable growth in both nations&apos; technology ecosystems.
                </p>
              </div>
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Partnership Pillars</h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-4">
                  {[
                    { title: "Governments", desc: "Policy alignment & bilateral tech cooperation", icon: Landmark, color: "#047857" },
                    { title: "Enterprises & Investors", desc: "Cross-border trade & investment facilitation", icon: Building2, color: "#10B981" },
                    { title: "Startups & Academia", desc: "Innovation, talent & research collaboration", icon: GraduationCap, color: "#047857" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex items-start gap-3.5">
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                        >
                          <Icon className="w-4.5 h-4.5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1F2E] text-base">{item.title}</span>
                          <p className="text-[#5A5F72] text-sm leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who We Connect ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Partnership Overview"
                title="Who We Connect"
                color="green"
                subtitle="Connecting governments, enterprises, investors, startups, and academia to drive technology-led growth."
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{pillar.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CEO at Conference ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px hover:shadow-xl transition-all duration-300">
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/image/ceo/khalil-choudhary-conference.jpg" alt="Khalil Choudhary at UK-Pakistan technology conference" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 600px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-heading font-bold text-base">Khalil Choudhary</p>
                    <p className="text-white/70 text-sm">President, UPTIB</p>
                  </div>
                </div>
              </div>
              <div>
                <SectionHeader
                  label="Our Leadership"
                  title="Driving Partnership at the Highest Level"
                  color="blue"
                />
                <p className="text-[#3D4152] text-lg leading-relaxed mb-4">
                  UPTIB President Khalil Choudhary actively engages with government officials, industry leaders, and international organisations to strengthen the UK–Pakistan technology corridor.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-6">
                  Through conferences, trade missions, and bilateral summits, UPTIB creates high-level networking opportunities that drive meaningful partnerships and collaboration.
                </p>
                <ul className="space-y-3">
                  {[
                    { text: "Government & policy engagement", color: "#047857" },
                    { text: "International summit representation", color: "#10B981" },
                    { text: "Strategic partnership building", color: "#047857" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: item.color }} strokeWidth={2} />
                      <span className="text-[#3D4152] text-base font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Recognition Program"
                title="Recognising Excellence"
                color="red"
                subtitle="Celebrating Pakistan's contributions to the UK tech sector through prestigious recognition."
              />
            </div>
            <p className="text-[#3D4152] text-lg leading-relaxed mb-6">
              Our recognition program celebrates exceptional achievements in technology innovation, cross-border collaboration, and leadership that strengthens the UK–Pakistan tech corridor.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {recognitionItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Unlock Opportunities ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Why Partner With Us"
                title="Unlock Opportunities"
                color="blue"
                subtitle="Benefits of joining the UK–Pakistan Technology Partnership."
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{benefit.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Membership & Attendees ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionHeader
                  label="Membership"
                  title="Why UK–Pakistan Tech Forum"
                  color="green"
                  subtitle="An invite-only community of UK-based Pakistan tech leaders, founders, investors, and executives."
                />
                <ul className="space-y-0">
                  {whyJoin.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-4 border-b border-[#D8D5CF] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeader
                  label="Community"
                  title="Typical Attendees"
                  color="red"
                  subtitle="Join a community of distinguished technology leaders and innovators."
                />
                <ul className="space-y-0">
                  {attendees.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3 border-b border-[#D8D5CF] last:border-b-0">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#047857] flex-shrink-0" />
                      <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Partners (hidden until real logos are available) ── */}
      {/* <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="Partners"
                title="Our Partners Make Us Stronger"
                color="red"
                subtitle="Collaborating with leading organisations to drive innovation and strengthen the UK–Pakistan tech corridor."
              />
            </div>
            <p className="text-[#3D4152] text-lg leading-relaxed mb-6">
              Our strategic partnerships with governments, enterprises, investors, and academic institutions enable us to create meaningful impact and drive sustainable growth across both nations.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {partnerLogos.map((logo, i) => (
                <motion.div
                  key={logo}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="aspect-square bg-[#F5F4F2] border border-[#D8D5CF] rounded-xl flex items-center justify-center p-3 hover:border-[#047857]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image src={logo} alt={`Partner logo ${i + 1}`} fill className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" sizes="120px" />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <GlobalCTA
        label="Join the Partnership"
        title="Strengthen the Corridor. Build the Future."
        subtitle="Join us in building a stronger technology partnership between the UK and Pakistan."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
