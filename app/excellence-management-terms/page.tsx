"use client";

import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import {
  Target, Users, Award, Trophy, Shield, Scale, Mail, CheckCircle2,
} from "lucide-react";

const terms = [
  {
    icon: Target,
    number: "01",
    title: "Scope",
    accent: "border-[#047857]",
    content: "These terms and conditions apply to all participants, nominees, and awardees involved in UPTIB\u2019s excellence management programmes, including the Tech Excellence Awards, recognition initiatives, and related activities.",
  },
  {
    icon: Users,
    number: "02",
    title: "Eligibility",
    accent: "border-[#10B981]",
    content: "Participation in excellence management programmes is open to UPTIB members and invited participants who meet the published eligibility criteria for each programme. UPTIB reserves the right to verify eligibility and disqualify participants who do not meet the requirements.",
  },
  {
    icon: Award,
    number: "03",
    title: "Nomination & Selection",
    accent: "border-[#047857]",
    content: "Nominations may be submitted by members, partners, or the UPTIB team. All nominations are reviewed by an independent panel. The selection process is based on merit, impact, innovation, and alignment with UPTIB\u2019s values and objectives. Decisions of the judging panel are final.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Awards & Recognition",
    accent: "border-[#10B981]",
    content: "Awards and recognition are granted at the sole discretion of UPTIB and the judging panel. UPTIB reserves the right to withhold or withdraw awards if the recipient is found to have breached these terms, the Code of Conduct, or any applicable laws.",
  },
  {
    icon: Shield,
    number: "05",
    title: "Intellectual Property",
    accent: "border-[#047857]",
    content: "By participating, you grant UPTIB a non-exclusive, royalty-free licence to use your name, likeness, company name, and submitted materials for promotional and marketing purposes related to the programme.",
  },
  {
    icon: Scale,
    number: "06",
    title: "Liability",
    accent: "border-[#047857]",
    content: "UPTIB shall not be liable for any loss, damage, or expense arising from participation in excellence management programmes, except where caused by our negligence. Participants are responsible for their own travel, accommodation, and related expenses unless otherwise specified.",
  },
];

const processSteps = [
  "Review published eligibility criteria for the programme",
  "Submit nomination through official channels",
  "Independent panel reviews all submissions",
  "Shortlisted candidates are notified",
  "Final selection based on merit and impact",
  "Awards presented at official ceremony",
];

export default function ExcellenceManagementTermsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Excellence Management Terms & Conditions"
        subtitle="Terms governing participation in UPTIB's excellence management programmes, awards, and recognition initiatives."
        image="/image/banners/banner31.jpg"
      />

      {/* Terms */}
      <Section variant="light">
        <AnimatedSection>
          <div className="mb-8">
            <p className="text-base font-semibold text-[#047857] uppercase tracking-widest">Last updated: 2025</p>
          </div>
          <div className="space-y-6">
            {terms.map((term, i) => {
              const Icon = term.icon;
              return (
                <motion.div
                  key={term.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`bg-white border border-[#D8D5CF] border-l-4 ${term.accent} rounded p-6 sm:p-8`}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-base text-[#7A7E8F] font-semibold">{term.number}</span>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">{term.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#3D4152] text-base leading-relaxed">{term.content}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Process */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="Awards Process"
            subtitle="The step-by-step journey from nomination to recognition."
          />
          <div>
            {processSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex gap-4 py-4 border-t border-[#D8D5CF] last:border-b"
              >
                <span className="text-base font-bold text-[#047857] tabular-nums w-6 flex-shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#3D4152] text-base leading-relaxed">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Contact */}
      <GlobalCTA
        label="Need Help?"
        title="Questions About These Terms?"
        subtitle="For questions about these terms, contact us at info@ukpaktrade.org.uk."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
