"use client";

import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import {
  UserCheck, Briefcase, GraduationCap, Calendar, Banknote,
  Mail, CheckCircle2, Rocket,
} from "lucide-react";

const gettingStartedSteps = [
  "Complete your member profile with company details and logo",
  "Browse the membership directory to connect with peers",
  "Subscribe to our newsletter for the latest updates",
  "Review the Code of Conduct and community guidelines",
];

const guidanceSections = [
  {
    icon: Briefcase,
    title: "Accessing Services",
    accent: "border-[#047857]",
    content: "As a member, you have access to a range of services including business networks, mentorship, digital marketing support, business support, and more. Visit the Services section of the website to explore what is available and contact our team for personalised support.",
  },
  {
    icon: GraduationCap,
    title: "Participating in Programmes",
    accent: "border-[#10B981]",
    content: "UPTIB runs regular programmes including AI & Tech Programs, Skill Development, and Incubation. Programme applications are announced through our newsletter and events page. Members receive priority access and preferential rates for all programmes.",
  },
  {
    icon: Calendar,
    title: "Events & Networking",
    accent: "border-[#047857]",
    content: "Stay active in the UPTIB community by attending events, roundtables, and trade delegations. Member-exclusive events are marked in the events calendar. We encourage members to actively participate, share their expertise, and build meaningful connections.",
  },
  {
    icon: Banknote,
    title: "Funding & Grants",
    accent: "border-[#10B981]",
    content: "Members can apply for funding through our Funding & Grants programmes. Visit the funding page for current opportunities, eligibility criteria, and application guidance. Our team is available to support you through the application process.",
  },
];

export default function MembersGuidancePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Members Guidance"
        subtitle="A guide for UPTIB members on how to access services, participate in programmes, and make the most of your membership."
        image="/image/banners/banner27.jpg"
      />

      {/* Getting Started */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Member Handbook"
            title="Getting Started"
            subtitle="Welcome to UPTIB. Once your membership is confirmed, follow these steps to get the most out of your membership."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-t-2 border-[#047857] bg-white rounded p-6"
              >
                <span className="text-2xl font-heading font-bold text-[#047857] mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[#3D4152] text-base leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Guidance Sections */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Your Membership"
            title="How to Make the Most of UPTIB"
            subtitle="Explore the services, programmes, events, and funding available to you as a member."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {guidanceSections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`bg-white border border-[#D8D5CF] border-l-4 ${section.accent} rounded p-6 hover:border-[#047857]/40 transition-colors duration-300`}
                >
                  <Icon className="w-6 h-6 text-[#047857] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{section.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#3D4152] text-base leading-relaxed">{section.content}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Communication & Support */}
      <GlobalCTA
        label="Contact Us"
        title="Communication & Support"
        subtitle="For any questions, support requests, or feedback, contact our membership team at info@ukpaktrade.org.uk. We aim to respond to all member enquiries within 2 business days."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
