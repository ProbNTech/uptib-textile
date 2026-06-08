"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import { Target, Award, Users, Globe2, Radio, Rocket, TrendingUp, Zap, Handshake, Briefcase, Database, GraduationCap, FlaskConical } from "lucide-react";

const missionPillars = [
  { icon: Target, title: "Apex Organization", desc: "To be the Apex organization for IT professionals in business, government, and people.", color: "#047857" },
  { icon: Award, title: "Represent Professionals", desc: "To represent IT professionals in all aspects of their profession and increase the value of the profession.", color: "#047857" },
  { icon: Users, title: "Inclusive Community", desc: "To be a place for anyone in the profession, representing all ages, career stages, demographics, and needs.", color: "#10B981" },
  { icon: Globe2, title: "Global Collaboration", desc: "To collaborate with Networks and organizations representing professionals in countries around the world to unify and advance the profession globally.", color: "#047857" },
  { icon: Radio, title: "Timely Information", desc: "To provide relevant, consistent, and timely information to stakeholders.", color: "#047857" },
  { icon: Rocket, title: "Fuel Growth", desc: "Fuel business creation and expansion — address funding gaps for early-stage companies and increase opportunities for high-growth enterprises.", color: "#10B981" },
  { icon: Database, title: "Information Management", desc: "Complete management of client information with easy access and updates for professionals, employers, trainers and businesses so they can benefit from the most accurate and timely information available.", color: "#047857" },
];

const strategicFocus = [
  { icon: TrendingUp, title: "Enhance Tech Adoption", desc: "Encourage the uptake of technology across Pakistani businesses to elevate productivity and competitiveness.", color: "#047857" },
  { icon: Zap, title: "Incentivize Investment", desc: "Promote initiatives like R&D incentives, refining investor definitions, and broadening EIS/SEIS scope to stimulate business growth.", color: "#047857" },
  { icon: Handshake, title: "Connectivity", desc: "Bridging the gaps and providing lightning-fast connectivity across the nation.", color: "#10B981" },
  { icon: Briefcase, title: "Technical Support", desc: "To become the industry benchmark by providing one-stop solutions for all technical support and related services.", color: "#047857" },
];

export default function MissionPage() {
  return (
    <div>
      <PageHero
        label="Our Mission"
        title="Mission"
        subtitle="Our mission is to transform Pakistan into a thriving tech hub. By forging connections with global experts and harnessing diverse resources, we're setting the stage for a tech-driven future."
        image="/image/banners/banner116.png"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Join UPTIB</ShinyButton>
          <Button href="/about/objectives" variant="glass">Our Objectives</Button>
        </div>
      </PageHero>

      {/* Mission Pillars */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our mission" title="Mission" color="green" subtitle="Our mission is to transform Pakistan into a thriving tech hub. By forging connections with global experts and harnessing diverse resources, we're setting the stage for a tech-driven future." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded-lg p-6 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <p className="text-[#3D4152] text-base leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Strategic Focus */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Strategic Focus" title="How We Deliver" color="blue" subtitle="The tech sector stands as a cornerstone of Pakistan's economy. We collaborate with governments and the broader community to drive impact." />
          <div className="grid md:grid-cols-2 gap-5">
            {strategicFocus.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-lg p-5 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1F2E] text-base mb-1">{item.title}</h4>
                    <p className="text-[#3D4152] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Broader Mission Commitments */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Broader Commitments" title="Investing in the Future" color="green" subtitle="Beyond our core pillars, UPTIB is committed to nurturing talent and inspiring the next generation of technology leaders." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-lg p-6 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#10B98110", border: "1px solid #10B98125" }}>
                <FlaskConical className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">STEM Careers Promotion</h4>
                <p className="text-[#3D4152] text-base leading-relaxed">Promote careers in Science, Technology, Engineering and Mathematics to inspire the next generation of tech leaders.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-lg p-6 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#04785710", border: "1px solid #04785725" }}>
                <GraduationCap className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">Student Scholarships</h4>
                <p className="text-[#3D4152] text-base leading-relaxed">Provide scholarships to outstanding students in Pakistan, ensuring access to quality education and fostering the next wave of technology talent.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Join Our Mission"
        title="Help Shape the Future of Tech"
        subtitle="Join UPTIB and become part of the mission to transform the UK-Pakistan technology corridor into a global innovation powerhouse."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Our Objectives"
        secondaryButtonLink="/about/objectives"
      />
    </div>
  );
}
