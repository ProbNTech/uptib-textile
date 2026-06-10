"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import { CheckCircle2, Globe2, Handshake, TrendingUp, Zap, Cpu, Building2, Monitor, FlaskConical } from "lucide-react";

const brandColors = ["#2F7549", "#2F7549", "#3E8F5E"];

const broaderImpact = [
  { icon: Globe2, title: "Global Market Access", desc: "Expand global market access and exports for UK and Pakistani tech companies.", color: "#2F7549" },
  { icon: Handshake, title: "Strategic Partnerships", desc: "Build strategic partnerships across industry, government, and academia.", color: "#2F7549" },
  { icon: TrendingUp, title: "Investment & Innovation", desc: "Unlock investment and innovation opportunities for growing businesses.", color: "#3E8F5E" },
  { icon: Zap, title: "Technology Transfer", desc: "Promote technology transfer between the United Kingdom and Pakistan.", color: "#2F7549" },
];

const additionalObjectives = [
  "Host annual International and local conferences to advance UPTIB Mission",
  "Provide networking opportunities for Tech professionals and businesses",
  "Participate in humanitarian projects, Promote UK-Pakistan relationship",
  "Recognize outstanding engineers, students and entrepreneurs",
  "Provide career guidance and mentoring to UK members and students in Pakistan",
  "Provide scholarships to outstanding students in Pakistan",
];

export default function ObjectivesPage() {
  return (
    <div>
      <PageHero
        label="Objectives & Values"
        title="Our Objectives"
        subtitle="We provide a platform to all Pakistani IT professionals residing in the United Kingdom working across various levels and industry sectors."
        image="/image/banners/banner59.jpg"

      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Join UPTIB</ShinyButton>
          <Button href="/about/founder" variant="glass">Meet Our Founder</Button>
        </div>
      </PageHero>

      {/* Values & Activities */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our foundation" title="Objectives &amp; Values" color="blue" subtitle="We provide a platform to all Pakistani IT professionals residing in the United Kingdom working across various levels and industry sectors." />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Values */}
            <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-t-4 border-t-[#2F7549]">
              <h3 className="font-heading font-bold text-lg text-[#16291E] mb-5">Our Values</h3>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">UPTIB members share and practice a set of unique values:</p>
              <ul className="space-y-3">
                {[
                  "Pursuit of excellence in the IT profession",
                  "Commitment to traditional Pakistan values — ownership of responsibility and duty to the profession, fellow professionals, family and humanity",
                  "Commitment to serve the community",
                  "Mutual respect and responsibility",
                  "Practice of highest ethics",
                  "Honesty and Integrity",
                ].map((val) => (
                  <li key={val} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-base leading-relaxed">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-t-4 border-t-[#3E8F5E]">
              <h3 className="font-heading font-bold text-lg text-[#16291E] mb-5">Key Activities</h3>
              <ul className="space-y-3">
                {[
                  "Career Counseling & Leadership Development",
                  "Cultural Events & Charity Programs",
                  "Monthly Networking Mixer & Lecture Series",
                  "Quarterly Cultural Events",
                  "Annual Gala Dinner & Award Program",
                  "Interacting with Policy Makers on issues pertaining to Pakistan IT Professionals",
                  "Professional Development & Skill Growth — Enable network members to participate in Tech development, management, maintenance, and support. Create income opportunities through revenue sharing, royalties, and the Innovative Collective Startup Model.",
                  "Collective Startups & AI Platform Development — Develop AI-driven Tech platforms, systems, and tools for organizations, sector-specific collectives, and governments. Ensure access to AI Tech and support services across all economic sectors.",
                  "IT/AI Pakistani Services Companies — Establish Pakistani professional-owned IT/AI services companies in every country. Provide stable jobs and income opportunities for IT professionals and Tech service providers.",
                  "Local Community IT Support & Co-working Spaces — Develop Tech Centers with co-working spaces. Facilitate IT support services to local communities through UPTIB.",
                  "STEM Careers Promotion — Promote careers in Science, Technology, Engineering and Mathematics to inspire the next generation of tech leaders.",
                  "Mentorship Programs & Knowledge Sharing",
                  "Conferences & Seminars on latest tech trends",
                ].map((act) => (
                  <li key={act} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-base leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Strategic Objectives Detail */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader label="Strategic Objectives" title="Key Focus Areas" color="green" subtitle="Detailed objectives driving UPTIB's mission to empower Pakistani IT professionals and foster innovation worldwide." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#2F754915", border: "1px solid #2F754930" }}>
                <TrendingUp className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">Professional Development</h3>
              <p className="text-white/70 text-base leading-relaxed">Enable network members to participate in Tech development, management, maintenance, and support. Create income opportunities through revenue sharing, royalties, and the Innovative Collective Startup Model.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#2F754915", border: "1px solid #2F754930" }}>
                <Cpu className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">Collective Startups</h3>
              <p className="text-white/70 text-base leading-relaxed">Develop AI-driven Tech platforms, systems, and tools for organizations, sector-specific collectives, and governments. Ensure access to AI Tech and support services across all economic sectors.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#3E8F5E15", border: "1px solid #3E8F5E30" }}>
                <Building2 className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">IT/AI Pakistani Services Companies</h3>
              <p className="text-white/70 text-base leading-relaxed">Establish Pakistani professional-owned IT/AI services companies in every country. Provide stable jobs and income opportunities for IT professionals and Tech service providers.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#2F754915", border: "1px solid #2F754930" }}>
                <Monitor className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">Local Community Support</h3>
              <p className="text-white/70 text-base leading-relaxed">Develop Tech Centers with co-working spaces. Facilitate IT support services to local communities through UPTIB.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#2F754915", border: "1px solid #2F754930" }}>
                <FlaskConical className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2">STEM Careers Promotion</h3>
              <p className="text-white/70 text-base leading-relaxed">Promote careers in Science, Technology, Engineering and Mathematics to inspire the next generation of tech leaders.</p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Broader Impact */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Broader Impact" title="Empowering Technology Organisations" color="red" subtitle="We empower technology organisations from the UK and Pakistan to achieve global impact." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {broaderImpact.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded-lg p-6 hover:shadow-md transition-all duration-300" style={{ borderTop: `3px solid ${item.color}` }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#16291E] text-base mb-2">{item.title}</h3>
                  <p className="text-[#3D4152] text-base leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {additionalObjectives.map((item, i) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded-lg p-5 hover:shadow-sm transition-shadow duration-300">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brandColors[i % 3] }} strokeWidth={2} />
                <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Be Part of the Impact"
        title="Join the Movement"
        subtitle="Become part of UPTIB and contribute to the objectives that are shaping the future of UK-Pakistan technology collaboration."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Meet Our Founder"
        secondaryButtonLink="/about/founder"
        image="/image/hero-bg/pexels-wasifmehmood997-15817294.jpg"
      />
    </div>
  );
}
