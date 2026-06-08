"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  CheckCircle2,
  BookOpen,
  Zap,
  Cpu,
  Building2,
  Car,
  Globe2,
  Microscope,
  HeartPulse,
  Wheat,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const techFocusAreas = [
  { icon: BookOpen, title: "Driving Digital Literacy", desc: "Empowering communities across Pakistan with digital skills, coding education, and technology awareness programmes to bridge the digital divide.", color: "#047857" },
  { icon: Zap, title: "Energy Solutions", desc: "Leveraging technology to develop renewable energy solutions, smart grids, and efficient power management systems for Pakistan's growing energy needs.", color: "#10B981" },
  { icon: Cpu, title: "Fusion Technology", desc: "Exploring cutting-edge fusion technology research and development through UK–Pakistan academic and industry collaboration.", color: "#047857" },
  { icon: Building2, title: "Smart Buildings & Infrastructure", desc: "Developing IoT-enabled smart building solutions, sustainable construction technology, and intelligent infrastructure management systems.", color: "#047857" },
  { icon: Car, title: "Precision Lasers & Electric Vehicles", desc: "Innovating transportation with state-of-the-art laser technology and electric vehicles, supporting the EV ecosystem through technology transfer, charging infrastructure, and sustainable mobility solutions.", color: "#047857" },
  { icon: Globe2, title: "Internet Access & Connectivity", desc: "Bridging connectivity gaps with broadband expansion, satellite internet solutions, and digital infrastructure development across underserved regions.", color: "#ef4444" },
  { icon: Microscope, title: "Microchip & Biotech", desc: "Advancing semiconductor design, microchip manufacturing capabilities, and biotechnology research through bilateral partnerships and knowledge exchange.", color: "#06b6d4" },
  { icon: HeartPulse, title: "Body Mapping & Health Tech", desc: "Pioneering digital health solutions including AI-powered body mapping, telemedicine platforms, and health data analytics for improved patient outcomes.", color: "#10B981" },
  { icon: Wheat, title: "Agriculture & AgriTech", desc: "Transforming Pakistan's agriculture sector through precision farming, drone technology, supply chain digitalisation, and climate-smart agriculture solutions.", color: "#047857" },
];

const programs = [
  {
    title: "IT/AI Services Company",
    description: "A collective entity providing AI and IT services, leveraging shared resources and expertise to deliver world-class solutions.",
    features: ["Enterprise AI solutions", "Cloud infrastructure services", "Cross-border tech delivery"],
  },
  {
    title: "Collective Company Model",
    description: "A collaborative business structure that combines individual expertise into a unified, powerful entity, maximising impact and opportunities.",
    features: ["Shared resources & infrastructure", "Unified expertise pool", "Amplified market presence"],
  },
  {
    title: "Company Objectives",
    description: "Focused on driving innovation, creating sustainable growth, and building bridges between UK and Pakistani tech ecosystems.",
    features: ["Innovation acceleration", "Sustainable growth models", "UK-Pakistan tech bridges"],
  },
  {
    title: "AI Collective Startups",
    description: "Innovative startup models that pool resources, knowledge, and networks to accelerate AI-driven business development.",
    features: ["Resource pooling", "Knowledge sharing networks", "AI-driven acceleration"],
  },
  {
    title: "Collective Startup Model",
    description: "A revolutionary approach where multiple entrepreneurs collaborate under a shared structure, reducing risk and amplifying success.",
    features: ["Risk reduction", "Shared infrastructure", "Collaborative success"],
  },
  {
    title: "How It Works",
    description: "A streamlined process connecting talent, resources, and opportunities to create sustainable tech ventures and career pathways.",
    features: ["Talent connection", "Resource optimisation", "Career pathway creation"],
  },
];

const steps = [
  { number: "01", title: "Join the Program", description: "Become a member and access our comprehensive AI and tech programs.", color: "#047857" },
  { number: "02", title: "Assessment & Placement", description: "Complete skill assessments and get matched with the right program track.", color: "#10B981" },
  { number: "03", title: "Training & Development", description: "Participate in certifications, training, and skill development programs.", color: "#047857" },
  { number: "04", title: "Collective Startup Formation", description: "Join or form collective startups leveraging shared resources, expertise, and collaborative models.", color: "#047857" },
  { number: "05", title: "Launch & Scale", description: "Launch your venture with ongoing support and cross-border market access.", color: "#047857" },
];

export default function AITechProgramsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white content-body">
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Programs"
        title="AI & Tech Programs"
        subtitle="Driving AI innovation and tech leadership between the UK and Pakistan through comprehensive training, certifications, and collaborative startup models."
        video="/videos/banner.mp4"
        videoSpeed={2}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Become a Member</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Get in Touch
          </Button>
        </div>
      </PageHero>

      {/* ── Intro Section ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 pt-10 pb-4">
          <AnimatedSection>
            <div>
              <SectionHeader
                label="Our Vision"
                title="UPTIB's AI and Tech Programs bridge the UK and Pakistan through cutting-edge AI services, collective company models, and innovative startup ecosystems."
                color="blue"
              />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                Our programs are designed to accelerate technology adoption, build world-class AI capabilities, and create sustainable pathways for innovation across both nations through collective business models and collaborative startup ecosystems.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                Through strategic partnerships, shared resources, and innovative collective structures, we&apos;re building a future where UK and Pakistani tech talent drives global AI innovation and technology leadership.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="Our Programs"
              title="Program Areas"
              color="green"
              subtitle="Comprehensive initiatives designed to accelerate AI and technology adoption across the UK–Pakistan corridor."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      {program.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#7A7E8F] text-base leading-relaxed mb-4">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-[#5A5F72] text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="Process"
              title="How It Works"
              color="blue"
              subtitle="A step-by-step journey from concept to successful AI and tech venture."
            />
            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex gap-8 py-6 border-t border-[#D8D5CF] last:border-b"
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className="absolute inset-[-4px] rounded-full opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500"
                      style={{ background: step.color }}
                    />
                    <div
                      className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold border"
                      style={{
                        background: `${step.color}25`,
                        borderColor: `${step.color}50`,
                        boxShadow: `0 0 20px ${step.color}20`,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base sm:text-lg mb-1.5 group-hover:text-[#047857] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-[#7A7E8F] text-base leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Technology Focus Areas ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader
              label="What We Do"
              title="Technology Focus Areas"
              color="red"
              subtitle="UPTIB drives innovation across key technology sectors that are transforming both nations."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techFocusAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative">
                          <div
                            className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                            style={{ background: area.color }}
                          />
                          <div
                            className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${area.color}15`,
                              border: `1px solid ${area.color}30`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: area.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#047857] transition-colors duration-200">
                        {area.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#7A7E8F] text-base leading-relaxed">{area.desc}</p>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Next Steps / CTA ── */}
      <GlobalCTA
        label="Get Involved"
        title="Start Building With UPTIB"
        subtitle="Whether you are an entrepreneur, student, or technology professional, our programmes provide structured pathways to training, collaboration, and market access across the UK–Pakistan technology corridor."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Get in Touch"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
