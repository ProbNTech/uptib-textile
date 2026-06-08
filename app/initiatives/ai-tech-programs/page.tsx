"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import { GlobalCTA } from "@/components/GlobalCTA";

const programs = [
  {
    title: "IT/AI Services Company",
    subtitle: "A collective entity delivering world-class AI and IT services",
    bullets: ["Enterprise AI solutions", "Cloud infrastructure services", "Cross-border tech delivery"],
  },
  {
    title: "Collective Company Model",
    subtitle: "Collaborative business structure combining individual expertise",
    bullets: ["Shared resources and infrastructure", "Unified expertise pool", "Amplified market presence"],
  },
  {
    title: "Company Objectives",
    subtitle: "Focused on innovation and sustainable bilateral growth",
    bullets: ["Innovation acceleration", "Sustainable growth models", "UK–Pakistan tech bridges"],
  },
  {
    title: "AI Collective Startups",
    subtitle: "Innovative startup models pooling resources and networks",
    bullets: ["Resource pooling", "Knowledge sharing networks", "AI-driven acceleration"],
  },
  {
    title: "Collective Startup Model",
    subtitle: "Multiple entrepreneurs collaborating under a shared structure",
    bullets: ["Risk reduction", "Shared infrastructure", "Collaborative success"],
  },
  {
    title: "How It Works",
    subtitle: "Connecting talent, resources, and opportunities",
    bullets: ["Talent connection", "Resource optimisation", "Career pathway creation"],
  },
];

const timelineSteps = [
  { number: "01", title: "Join the Program", description: "Become a member and access our comprehensive AI and tech programs.", outcome: "Full program access" },
  { number: "02", title: "Assessment & Placement", description: "Complete skill assessments and get matched with the right program track for your goals.", outcome: "Personalised track placement" },
  { number: "03", title: "Training & Development", description: "Participate in certifications, training, and skill development programs with expert mentors.", outcome: "Industry-recognised credentials" },
  { number: "04", title: "Collective Startup Formation", description: "Join or form collective startups leveraging shared resources, expertise, and collaborative models.", outcome: "Venture co-founded" },
  { number: "05", title: "Launch & Scale", description: "Launch your venture with ongoing support and cross-border market access across the UK and Pakistan.", outcome: "Market-ready business" },
];

export default function AITechProgramsPage() {
  return (
    <div className="content-body">
      <PageHero
        title="AI and Tech Programs"
        subtitle="Driving AI innovation and tech leadership between the UK and Pakistan through comprehensive training, certifications, and collaborative startup models."
        image="/image/banners/banner25.jpg"
      />

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div>
            <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              UPTIB&apos;s AI and Tech Programs bridge the UK and Pakistan through cutting-edge AI services, collective company models, and innovative startup ecosystems that empower the next generation of tech leaders.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              Our programs are designed to accelerate technology adoption, build world-class AI capabilities, and create sustainable pathways for innovation across both nations through collective business models and collaborative startup ecosystems.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed">
              Through strategic partnerships, shared resources, and innovative collective structures, we&apos;re building a future where UK and Pakistani tech talent drives global AI innovation and technology leadership.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Programs Grid */}
      <Section variant="alt" id="programs">
        <AnimatedSection>
          <SectionHeader
            label="Our Programs"
            title="Program Areas"
            subtitle="Comprehensive initiatives designed to accelerate AI and technology adoption across the UK–Pakistan corridor."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.title} className="bg-white border border-[#D8D5CF] p-6 flex flex-col hover:border-[#047857]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-1">{program.title}</h3>
                <p className="text-[#7A7E8F] text-base mb-3">{program.subtitle}</p>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <ul className="space-y-2 flex-1">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works Timeline */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Your Journey"
            title="How It Works"
            subtitle="A step-by-step journey from joining the program to launching a successful AI and tech venture."
          />
          <div className="space-y-0">
            {timelineSteps.map((step) => (
              <div key={step.number} className="flex gap-8 py-6 border-t border-[#1C1F2E]/15 last:border-b">
                <span className="text-base font-semibold text-[#047857] tabular-nums w-8 flex-shrink-0 pt-0.5">{step.number}</span>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base sm:text-lg mb-2">{step.title}</h3>
                  <p className="text-[#3D4152] text-base leading-relaxed mb-3">{step.description}</p>
                  <span className="text-base font-semibold text-[#047857]">→ {step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA — TubesCursor */}
      <GlobalCTA
        label="Get Started"
        title="Ready to Transform Your Tech Career?"
        subtitle="Join UPTIB’s AI and Tech Programs and become part of a global network driving innovation between the UK and Pakistan."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
