"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Brain,
  Cpu,
  GraduationCap,
  Users,
  Shield,
  Zap,
  CheckCircle2,
  Lightbulb,
  Globe2,
} from "lucide-react";

const capabilities = [
  { title: "AI-Powered Insights", description: "Intelligent analytics and recommendations to enhance decision-making and productivity.", icon: Brain, color: "#047857", num: "01" },
  { title: "Workforce Enablement", description: "Tools and platforms that empower teams to work smarter and achieve better outcomes.", icon: Cpu, color: "#10B981", num: "02" },
  { title: "Skills Development", description: "Personalised learning paths and AI-assisted training to build future-ready capabilities.", icon: GraduationCap, color: "#047857", num: "03" },
  { title: "Collaboration Tools", description: "Seamless cross-border collaboration platforms connecting UK and Pakistan professionals.", icon: Users, color: "#047857", num: "04" },
  { title: "AI Governance", description: "Ethical frameworks and compliance tools ensuring responsible AI deployment.", icon: Shield, color: "#047857", num: "05" },
  { title: "Automation & Efficiency", description: "Streamline workflows and automate routine tasks to focus on high-value work.", icon: Zap, color: "#ef4444", num: "06" },
];

const howItWorks = [
  { number: "01", title: "Assess & Plan", description: "Evaluate your organisation\u2019s needs and develop a tailored AI integration strategy.", outcome: "Personalised AI roadmap", icon: Lightbulb, color: "#047857" },
  { number: "02", title: "Implement & Train", description: "Deploy AI tools and provide comprehensive training to your team across all levels.", outcome: "Operational AI capability", icon: Cpu, color: "#10B981" },
  { number: "03", title: "Optimise & Scale", description: "Continuously refine AI applications and scale successful implementations.", outcome: "Measurable productivity gains", icon: Zap, color: "#047857" },
  { number: "04", title: "Collaborate & Grow", description: "Leverage cross-border networks and partnerships to expand your AI impact.", outcome: "Sustained innovation culture", icon: Globe2, color: "#047857" },
];

const useCases = [
  { title: "Workforce Enablement", description: "Empower employees with AI tools that augment capabilities and accelerate performance across organisations.", icon: Users, color: "#047857" },
  { title: "Skills Development", description: "Personalised learning experiences that adapt to individual needs and career goals for future-readiness.", icon: GraduationCap, color: "#10B981" },
  { title: "AI Inclusion", description: "Democratise access to AI technologies, ensuring no one is left behind in the digital transformation.", icon: Globe2, color: "#047857" },
  { title: "Policy & Ecosystem Collaboration", description: "Foster cross-border partnerships and policy frameworks that support responsible AI adoption.", icon: Shield, color: "#047857" },
];

const stats = [
  { value: "6", label: "sectors covered", color: "#047857" },
  { value: "76%", label: "average adoption rate", color: "#10B981" },
  { value: "79%", label: "average efficiency gain", color: "#047857" },
  { value: "Cross-border", label: "UK\u2013Pakistan delivery", color: "#047857" },
];

export default function PeopleAIClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white content-body">
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Initiative"
        title="People AI Platform"
        subtitle="Empowering people and organisations through human-centric AI support systems that integrate technology with professional services."
        image="/image/banners/banner40.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Get Started</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Learn More
          </Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ── */}
      <Section variant="light">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative h-full text-center bg-white rounded-xl p-6">
                <p
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-[#5A5F72] text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Intro Section ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Our Vision"
            title="People AI Platform"
            color="blue"
          />
          <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
            We focus on creating inclusive AI solutions that support workforce enablement, skills development, and cross-border collaboration between the UK and Pakistan.
          </p>
          <p className="text-[#5A5F72] text-lg leading-relaxed">
            Through a human-centric approach, we bridge technology and professional services to enable sustainable workforce transformation across sectors.
          </p>
        </AnimatedSection>
      </Section>

      {/* ── Platform Capabilities ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Capabilities"
            title="Platform Capabilities"
            subtitle="Comprehensive AI-powered tools and services designed to transform how people work, learn, and collaborate."
            color="green"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${cap.color}12`, border: `1px solid ${cap.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: cap.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                      {cap.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{cap.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How It Works ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Your Journey"
            title="How It Works"
            subtitle="A simple, structured approach to integrating AI into your organisation and workflows."
            color="blue"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold border-2"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                        borderColor: `${step.color}60`,
                        color: step.color,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>

                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                    <span className="text-base font-semibold" style={{ color: step.color }}>
                      {step.outcome}
                    </span>
                  </div>
                </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Use Cases ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Impact"
            title="Use Cases"
            subtitle="Real-world applications driving transformation across industries and sectors."
            color="red"
          />

          <div className="grid md:grid-cols-2 gap-7">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `${useCase.color}12`, border: `1px solid ${useCase.color}25` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: useCase.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">
                        {useCase.title}
                      </h3>
                    </div>

                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <p className="text-base text-[#5A5F72] leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA Section ── */}
      <GlobalCTA
        label="Get Started"
        title="Join the People AI Platform"
        subtitle="Be part of a transformative movement reshaping how people and organisations work with AI across the UK and Pakistan."
        primaryButtonText="Get Started"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
