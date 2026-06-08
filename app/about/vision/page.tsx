"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import { Lightbulb, Globe2, Handshake, TrendingUp, Network } from "lucide-react";

const visionPillars = [
  {
    icon: Network,
    title: "National Network",
    desc: "Create a national network of Tech businessmen, Engineers and technical professionals of Pakistani Diaspora living in the UK for networking, career advancement, and technology exchange.",
    color: "#047857",
  },
  {
    icon: Handshake,
    title: "Innovation Bridge",
    desc: "An inclusive support group linking Tech leaders, digital entrepreneurs, corporate executives, investors, accelerators, and emerging AI/Tech start-ups to encourage collaboration between UK/Europe and Pakistan.",
    color: "#10B981",
  },
  {
    icon: Globe2,
    title: "Trusted Facilitator",
    desc: "A trusted intermediary facilitating the growth of the strategic economic relationship, trade and investment flows between Pakistan and the United Kingdom through vast business networks.",
    color: "#047857",
  },
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    desc: "Help British Pakistani Nationals set up business in Pakistan and Pakistani Tech businesses establish a footprint in the UK through strong relationships with governments and industry bodies.",
    color: "#047857",
  },
];

export default function VisionPage() {
  return (
    <div>
      <PageHero
        label="Our Vision"
        title="Vision"
        subtitle="A connected innovation ecosystem where UK and Pakistani technology sectors collaborate to create world-leading digital solutions that improve lives, strengthen economies, and solve global challenges."
        image="/image/banners/banner15.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Join UPTIB</ShinyButton>
          <Button href="/about/mission" variant="glass">Our Mission</Button>
        </div>
      </PageHero>

      {/* Vision Statement */}
      <Section variant="light" className="content-body">
        <AnimatedSection>
          <SectionHeader label="Our purpose" title="Vision" color="red" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-l-4 border-l-[#047857]">
                <Lightbulb className="w-8 h-8 text-[#047857] mb-5" strokeWidth={1.5} />
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-4">Our Vision</h3>
                <p className="text-[#3D4152] leading-relaxed mb-4">
                  A connected innovation ecosystem where UK and Pakistani technology sectors collaborate to create world-leading digital solutions that improve lives, strengthen economies, and solve global challenges.
                </p>
                <p className="text-[#3D4152] leading-relaxed">
                  We aim to create a national network of Tech businessmen, Engineers and technical professionals of Pakistani Diaspora living in the UK, to provide a platform for networking, career advancement, technology exchange and to develop the next generation of scientists, engineers and technical professionals in Pakistan.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[#3D4152] leading-relaxed">
                We are an inclusive support group to create an innovation bridge through links with Tech leaders, digital entrepreneurs, influential corporate executives, savvy investors, Angel/Seed Investors, accelerators, emerging start-ups in AI/Tech, professionals, advisors, policy makers &amp; public bodies with aim to encourage investment collaboration on tech enabled social projects between UK/Europe and Pakistan.
              </p>
              <p className="text-[#3D4152] leading-relaxed">
                The organization also plays the important role of a trusted facilitator in the growth of the strategic economic relationship, trade and investment flows between Pakistan and the United Kingdom. UPTIB acts as the intermediary for British Pakistani Nationals to understand how to approach the business community and set up business in Pakistan â conversely for Pakistani Tech businesses that want to have a footprint in UK.
              </p>
              <p className="text-[#3D4152] leading-relaxed">
                It strives to do so through its vast network of businessmen, professionals, in both regions but also through strong relationships with governments and industry bodies of both countries.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Vision Pillars */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="What We Envision" title="Our Vision Pillars" color="blue" subtitle="The four strategic pillars that define our vision for the UK-Pakistan technology corridor." />
          <div className="grid md:grid-cols-2 gap-6">
            {visionPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded-lg p-6 hover:shadow-md transition-all duration-300" style={{ borderTop: `3px solid ${item.color}` }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                  <p className="text-[#3D4152] text-base leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Share Our Vision"
        title="Be Part of the Vision"
        subtitle="Join the UK–Pakistan Trades & Investment Board and help build a connected innovation ecosystem that creates lasting impact for both nations."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Our Mission"
        secondaryButtonLink="/about/mission"
      />
    </div>
  );
}
