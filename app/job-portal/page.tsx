"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Search,
  Building2,
  Users,
  Briefcase,
  Globe2,
  Shield,
  TrendingUp,
  FileText,
  CheckCircle2,
  GraduationCap,
  Rocket,
  UserCheck,
  Send,
  Code2,
  Database,
  Palette,
  Cloud,
  Landmark,
  ArrowRight,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Opportunities", color: "#047857" },
  { value: "120+", label: "Partner Companies", color: "#10B981" },
  { value: "15+", label: "Countries", color: "#047857" },
  { value: "95%", label: "Satisfaction", color: "#047857" },
];

const forEmployers = [
  "Post job openings and internships to a targeted tech audience",
  "Reach qualified candidates across the UK, Europe, Middle East and Pakistan",
  "Access a curated pool of technology professionals from both nations",
  "Leverage AI-powered matching to find the ideal candidate faster",
  "Streamlined recruitment analytics and application management",
];

const forJobSeekers = [
  "Explore opportunities in innovative technology companies",
  "Apply directly to UK and Pakistan-based organisations",
  "Stay informed about industry trends, skills requirements and career resources",
  "Build a verified profile that showcases your expertise globally",
  "Receive personalised job recommendations based on your skills",
];

const portalFeatures = [
  { icon: Globe2, title: "Cross-Border Reach", desc: "Connect talent and employers across UK, Pakistan, Europe, and the Middle East through a unified platform.", color: "#047857", num: "01" },
  { icon: Shield, title: "Verified Profiles", desc: "All candidates and employers are verified through the UPTIB membership network for trust and quality.", color: "#10B981", num: "02" },
  { icon: TrendingUp, title: "Career Growth", desc: "Access career tips, market insights, salary benchmarks, and professional development resources.", color: "#047857", num: "03" },
  { icon: GraduationCap, title: "Internship Pipeline", desc: "Dedicated pathways for students and graduates entering the tech workforce across borders.", color: "#047857", num: "04" },
  { icon: FileText, title: "Smart Matching", desc: "AI-powered recommendations matching candidates with roles based on skills, experience, and preferences.", color: "#10B981", num: "05" },
  { icon: Rocket, title: "Fast-Track Hiring", desc: "Streamlined application process designed for speed, efficiency, and quality of hire.", color: "#047857", num: "06" },
];

const howItWorks = [
  { step: "01", icon: UserCheck, title: "Register", desc: "Create your profile as a candidate or employer and join the UPTIB network.", outcome: "Account activated", color: "#047857" },
  { step: "02", icon: Search, title: "Browse or Post", desc: "Job seekers explore listings with advanced filters. Employers post openings with detailed requirements.", outcome: "Matched to opportunities", color: "#10B981" },
  { step: "03", icon: Send, title: "Apply or Review", desc: "Candidates apply directly. Employers review applications, shortlist, and connect with talent.", outcome: "Applications submitted", color: "#047857" },
  { step: "04", icon: Briefcase, title: "Connect & Hire", desc: "Schedule interviews, make offers, and build cross-border technology teams.", outcome: "Talent connected", color: "#047857" },
];

const keySectors = [
  { icon: Code2, title: "Software Dev", desc: "Full-stack, mobile, frontend, backend, and systems engineering roles across global tech teams.", color: "#047857" },
  { icon: Shield, title: "Cybersecurity", desc: "Security analysts, penetration testers, compliance officers, and threat intelligence specialists.", color: "#10B981" },
  { icon: Database, title: "Data & AI", desc: "Data scientists, ML engineers, AI researchers, and analytics professionals driving innovation.", color: "#047857" },
  { icon: Palette, title: "Product & Design", desc: "UX/UI designers, product managers, and design system leads shaping digital experiences.", color: "#047857" },
  { icon: Cloud, title: "DevOps & Cloud", desc: "Cloud architects, SRE engineers, platform teams, and infrastructure automation specialists.", color: "#10B981" },
  { icon: Landmark, title: "FinTech", desc: "Payment systems, digital banking, blockchain, and regulatory technology professionals.", color: "#047857" },
];

/* ── Component ─────────────────────────────────────────────────────── */

export default function JobPortalPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Careers"
        title="Job Portal"
        subtitle="Connecting UK-Pakistan tech talent with world-class opportunities. Explore, apply, and build your career across borders with the UPTIB Job Portal."
        image="/image/banners/job-portal.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="#who-its-for">Browse Jobs</ShinyButton>
          <Button href="/contact" variant="glass">Post a Job</Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ── */}
      <section className="bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-xl p-6">
                    <div
                      className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-[#5A5F72] text-base">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section id="who-its-for" className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          <AnimatedSection>
            <SectionHeader
              label="Who It's For"
              title="Connecting Talent with Technology"
              subtitle="Our Job Portal is designed to connect skilled professionals with leading technology organisations across the UK-Pakistan corridor."
              color="blue"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Employers Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-xl overflow-hidden p-8">
                    <div className="mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: "#04785715",
                          border: "1px solid #04785730",
                        }}
                      >
                        <Building2 className="w-6 h-6 text-[#047857]" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      For Employers
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <ul className="space-y-3">
                      {forEmployers.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Job Seekers Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-xl overflow-hidden p-8">
                    <div className="mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: "#10B98115",
                          border: "1px solid #10B98130",
                        }}
                      >
                        <Users className="w-6 h-6 text-[#10B981]" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2 group-hover:text-[#10B981] transition-colors duration-200">
                      For Job Seekers
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <ul className="space-y-3">
                      {forJobSeekers.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Portal Features ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          <AnimatedSection>
            <SectionHeader
              label="Platform Features"
              title="Why UPTIB Job Portal"
              subtitle="A purpose-built platform empowering cross-border technology careers and workforce development."
              color="green"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portalFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                      <div className="relative h-full bg-white rounded-xl overflow-hidden p-6">
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${item.color}15`,
                              border: `1px solid ${item.color}30`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                          </div>
                          <span
                            className="text-base font-bold tracking-[0.2em] uppercase"
                            style={{ color: `${item.color}60` }}
                          >
                            {item.num}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#047857] transition-colors duration-200">
                          {item.title}
                        </h3>
                        <div className="h-px bg-[#D8D5CF] mb-3" />
                        <p className="text-[#3D4152] text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          <AnimatedSection>
            <SectionHeader
              label="Process"
              title="How It Works"
              subtitle="A streamlined journey from registration to hire — connecting talent with opportunity in four simple steps."
              color="red"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                      <div className="relative h-full bg-white rounded-xl overflow-hidden p-6">
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold border"
                            style={{
                              background: `${item.color}25`,
                              borderColor: `${item.color}50`,
                              color: item.color,
                            }}
                          >
                            {item.step}
                          </div>
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${item.color}15`,
                              border: `1px solid ${item.color}30`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                          </div>
                        </div>

                        <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-[#3D4152] text-base leading-relaxed mb-4">{item.desc}</p>

                        <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: item.color }} strokeWidth={2} />
                          <span className="text-base font-semibold" style={{ color: item.color }}>
                            {item.outcome}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Connector arrows between steps (desktop) */}
            <div className="hidden lg:flex items-center justify-center gap-3 mt-10">
              {["Register", "Browse / Post", "Apply / Review", "Connect & Hire"].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F4F2] border border-[#D8D5CF]">
                    <span className="text-base font-bold text-[#5A5F72]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base font-semibold text-[#3D4152]">{label}</span>
                  </div>
                  {i < 3 && <ArrowRight className="w-4 h-4 text-[#D8D5CF]" />}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Key Sectors ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          <AnimatedSection>
            <SectionHeader
              label="Industries"
              title="Key Sectors"
              subtitle="Explore high-demand technology sectors where cross-border talent is driving innovation and growth."
              color="red"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keySectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                      <div className="relative h-full bg-white rounded-xl overflow-hidden p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${sector.color}15`,
                              border: `1px solid ${sector.color}30`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: sector.color }} strokeWidth={1.5} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-1 group-hover:text-[#047857] transition-colors duration-200">
                              {sector.title}
                            </h3>
                            <p className="text-[#3D4152] text-base leading-relaxed">{sector.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section — TubesCursor ── */}
      <GlobalCTA
        label="The Future of Work"
        title="The Future of Cross-Border Tech Careers"
        subtitle="Empowering technology talent and fostering cross-border collaboration — our Job Portal helps build the workforce of the future."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
