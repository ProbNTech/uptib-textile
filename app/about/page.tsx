"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Target, CheckCircle2, Award, Users, ArrowRight, Shield, UserCheck, Globe2, Handshake, Layers } from "lucide-react";

const brandColors = ["#2F7549", "#2F7549", "#3E8F5E"];

const whyUptech = [
  {
    icon: Shield,
    title: "Trusted Gateway",
    description: "UPTIB acts as a reliable bridge connecting Pakistani technology providers with UK and European companies.",
    color: "#2F7549",
  },
  {
    icon: UserCheck,
    title: "Verified Technology Partners",
    description: "We work with carefully selected technology companies, researchers, and professionals to ensure high-quality collaboration.",
    color: "#3E8F5E",
  },
  {
    icon: Globe2,
    title: "Market Access Expertise",
    description: "UPTIB provides guidance on European market entry, regulatory environments, and technology sector opportunities.",
    color: "#2F7549",
  },
  {
    icon: Handshake,
    title: "Cross-Border Collaboration",
    description: "We facilitate partnerships between technology companies, research institutions, universities, innovation hubs, and investors.",
    color: "#2F7549",
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    description: "From market research to partnership development and project coordination, UPTIB supports organisations throughout the collaboration process.",
    color: "#3E8F5E",
  },
];

const exploreItems = [
  { icon: Lightbulb, title: "Vision", desc: "A connected innovation ecosystem bridging UK and Pakistan's technology sectors.", href: "/about/vision", color: "#2F7549" },
  { icon: Target, title: "Mission", desc: "Our strategic mission to transform Pakistan into a thriving global tech hub.", href: "/about/mission", color: "#3E8F5E" },
  { icon: CheckCircle2, title: "Objectives & Values", desc: "Core values, key activities, and broader impact goals driving our work.", href: "/about/objectives", color: "#2F7549" },
  { icon: Award, title: "Leadership", desc: "Meet our President Khalil Choudhary â the leader of UPTIB.", href: "/about/founder", color: "#2F7549" },
  { icon: Users, title: "Management Team", desc: "Board of directors, advisory forum, and executive leadership team.", href: "/about/management-team", color: "#3E8F5E" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        label="About Us"
        title="About UPTIB"
        subtitle="Empowering Pakistan's Tech Leaders; innovation, entrepreneurship, investment, advocacy and visionary growth."
        threeBg
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Apply for Membership</ShinyButton>
          <Button href="/contact" variant="glass">Contact Us</Button>
        </div>
      </PageHero>

      {/* About Us */}
      <Section variant="light" className="content-body">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection>
            <SectionHeader
              label="Who we are"
              title="About the Forum"
              color="blue"
            />
            <p className="text-[#3D4152] leading-relaxed mb-5">
              The UK Pakistan Technology Forum brings together businesses, innovators, government partners, investors, and technology leaders from the UK and Pakistan to support cross-border innovation, trade, and economic growth. Our mission is to shape strategic technology cooperation that powers sustainable development, accelerates digital transformation, and fosters shared prosperity for both nations.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              Our primary objective is to champion a positive and soft image of Pakistan while nurturing innovation, collaboration, and continuous education within the dynamic landscape of technology.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              Our dynamic platform empowers individuals to unlock their full potential, advance their careers, and make a lasting impact on the Forum. We champion the highest standards of professionalism, integrity, and ethics, setting a benchmark for IT societies worldwide.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              By uniting Pakistani IT professionals residing and working in the United Kingdom, we establish a dynamic platform for networking, knowledge-sharing, and collective advancement.
            </p>
            <p className="text-[#3D4152] leading-relaxed">
              Through our diverse community, we aim to catalyze positive transformations in IT, shaping its future, and delivering significant contributions to both the country we reside in and the country we proudly belong to.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border-2 border-[#2F7549]/15">
              <Image
                src="/image/about/about-section-home.jpg"
                alt="About the Forum"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Why Choose UPTIB */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Why UPTIB" title="Why Choose UPTIB?" color="green" subtitle="The UK–Pakistan Trades & Investment Board provides a trusted platform for technology collaboration between Pakistan and Europe." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUptech.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl border border-[#D8D5CF] p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E] mb-2 group-hover:text-[#2F7549] transition-colors duration-200">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-base text-[#5A5F72] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Explore Section */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Learn more" title="Explore" color="red" subtitle="Discover our vision, mission, leadership, and partnerships that drive the UK-Pakistan technology corridor." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {exploreItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group text-left bg-white rounded-lg p-7 hover:shadow-lg transition-all duration-300 relative overflow-hidden block"
                  style={{ borderTop: `3px solid ${item.color}` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2" style={{ background: `radial-gradient(circle, ${item.color}08, transparent 70%)` }} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                        <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" style={{ color: item.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#16291E] mb-2">{item.title}</h3>
                    <p className="text-[#3D4152] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Join Us"
        title="Ready to Be Part of the Movement?"
        subtitle="Join UPTIB and connect with technology leaders, entrepreneurs, and innovators shaping the UKâPakistan tech corridor."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
