"use client";

import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Lightbulb, Globe, Compass, CheckCircle2, ChevronDown, Users, Clock, Award, Target, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "75+", label: "Active Mentors", color: "#047857" },
  { value: "200+", label: "Startups Mentored", color: "#10B981" },
  { value: "12", label: "Countries Represented", color: "#047857" },
  { value: "92%", label: "Founder Satisfaction", color: "#047857" },
];

const advantages = [
  {
    icon: Lightbulb,
    title: "Help Build the Future",
    color: "#047857",
    description: "As a mentor, your insights and experience can be pivotal in helping founders overcome obstacles and scale their businesses effectively, having a direct impact on their success.",
    features: ["Shape the next generation of tech leaders", "Direct impact on startup outcomes", "Contribute to the UK\u2013Pakistan tech ecosystem"],
  },
  {
    icon: Compass,
    title: "Enhance Your Horizons",
    color: "#047857",
    description: "Mentoring enables you to examine existing challenges from different perspectives, not only providing startups with innovative solutions but also honing your own strategic thinking and problem-solving skills.",
    features: ["Fresh perspectives on industry challenges", "Sharpen your leadership skills", "Stay connected to emerging trends"],
  },
  {
    icon: Globe,
    title: "Access to a Global Community",
    color: "#10B981",
    description: "Join our diverse network spanning several countries and Tech industries. Connect with forward-thinking individuals and organizations worldwide, enabling potential collaboration, partnerships, or even new business opportunities.",
    features: ["Cross-border mentor network", "Industry events and summits", "Peer learning opportunities"],
  },
];

const mentorRoles = [
  {
    title: "Being an Advisor",
    icon: Target,
    color: "#047857",
    description: "Work closely with startups on a weekly basis and will often form part of our Advisory Board for the duration of the program. All advisory mentors will get the opportunity time to meet participating teams face-to-face, play a role in selection, and then decide which startups they want to engage with.",
    commitment: "Weekly sessions throughout the programme",
    responsibilities: ["Weekly 1:1 sessions with founders", "Participate in startup selection", "Advisory Board membership", "Face-to-face team meetings"],
  },
  {
    title: "Being an Expert",
    icon: Award,
    color: "#047857",
    description: "For those who don\u2019t have time to dedicate themselves to a particular team, we have a secondary pool of standby experts that will work with one or more startups on an ad-hoc basis. They provide niche advice, troubleshoot problems startups face, and provide introductions to their personal network. The time commitment is on an as-needed basis when best suits.",
    commitment: "As-needed basis, when it best suits",
    responsibilities: ["Ad-hoc expert consultations", "Niche problem-solving sessions", "Network introductions", "Specialist workshops"],
  },
];

const processSteps = [
  { number: "01", title: "Apply", color: "#047857", description: "Submit your application with your expertise, industry background, and areas where you can add the most value.", outcome: "Application reviewed" },
  { number: "02", title: "Onboard", color: "#10B981", description: "Complete our mentor onboarding including orientation, toolkit access, and introduction to the current cohort.", outcome: "Mentor activated" },
  { number: "03", title: "Match", color: "#047857", description: "We match you with startups based on your expertise, industry focus, and the startup\u2019s specific needs.", outcome: "Startup matched" },
  { number: "04", title: "Mentor", color: "#10B981", description: "Begin your mentoring journey \u2014 guiding founders through challenges, strategy, and growth.", outcome: "Impact delivered" },
];

const mentorProfiles = [
  { title: "Technology Leaders", description: "CTOs, VPs of Engineering, and technical founders with deep product and engineering expertise.", icon: Target, color: "#047857" },
  { title: "Business Strategists", description: "CEOs, Managing Directors, and strategy consultants with scaling and market entry experience.", icon: Compass, color: "#047857" },
  { title: "Investment Experts", description: "VCs, angel investors, and fund managers who understand fundraising from both sides.", icon: Award, color: "#10B981" },
  { title: "Domain Specialists", description: "Industry experts in FinTech, HealthTech, EdTech, AI, and other high-growth sectors.", icon: Globe, color: "#047857" },
];

const faqs = [
  { question: "What is the time commitment for mentors?", answer: "Advisor mentors commit to weekly sessions (typically 1\u20132 hours) throughout the programme duration (usually 3\u20136 months). Expert mentors engage on an ad-hoc basis, typically 2\u20134 hours per month as needed." },
  { question: "Do mentors receive compensation?", answer: "Mentoring is primarily a volunteer role driven by a desire to give back to the ecosystem. However, mentors gain access to our global network, exclusive events, and the opportunity to identify early-stage investment opportunities." },
  { question: "How are mentors matched with startups?", answer: "We use a combination of expertise mapping, industry alignment, and mutual preference to create optimal mentor-startup matches. Both mentors and founders have input in the matching process." },
  { question: "Can I mentor remotely?", answer: "Yes, we support both in-person and remote mentoring. Many of our cross-border mentoring relationships are conducted virtually, with in-person sessions arranged around key events and milestones." },
  { question: "How do I become a mentor?", answer: "Apply through our membership portal or contact us directly. We look for professionals with 5+ years of relevant experience, a genuine desire to support founders, and availability to commit to the programme structure." },
];

const sidebarItems = [
  { title: "Strategic Guidance", desc: "Help founders navigate critical decisions on product, market, and growth strategy.", color: "#047857" },
  { title: "Network Access", desc: "Open doors to investors, partners, customers, and talent through warm introductions.", color: "#047857" },
  { title: "Accountability", desc: "Keep founders focused on execution with regular check-ins and milestone tracking.", color: "#10B981" },
];

const faqColors = ["#047857", "#047857", "#10B981", "#047857", "#047857"];

export default function MentorshipPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Service"
        title="Connecting Those Who Made It With the Ones on Their Way"
        subtitle="We provide a pool of experts who will mentor the incubates and guide startups with their experience. Our domain-specific and generic network of mentors would acknowledge the challenges faced by the incubates and give them advice in their fields of expertise."
        image="/image/banners/mentorship.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Become a Mentor</ShinyButton>
          <Button href="/contact" variant="glass">Find a Mentor</Button>
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

      {/* ── Intro + Sidebar ── */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader label="Be The Backbone of Great Startups" title="Shaping the Future by Empowering Innovators" color="blue" />
              <p className="text-[#3D4152] text-lg leading-relaxed mb-5">
                Innovators are everywhere, but they need a little push from someone who knows what it takes to make their dreams come true. That&apos;s where our mentors come in shaping the future by empowering innovators around the world with their wisdom and experience. If you&apos;ve ever had the privilege of meeting a mentor who changed your life, you know how important mentors can be. Mentors help us find our path and shape us for the future by showing us what&apos;s possible.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                Our mentorship programme connects experienced industry leaders, successful founders, and domain specialists with early-stage startups navigating the complexities of building and scaling technology businesses across the UK and Pakistan.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                Whether you are a seasoned executive looking to give back, or an emerging entrepreneur seeking guidance, the programme creates meaningful relationships that accelerate growth, unlock opportunities, and strengthen the cross-border tech ecosystem.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">What Mentors Provide</h3>
                <div className="h-px bg-[#D8D5CF] mb-6" />
                <ul className="space-y-5">
                  {sidebarItems.map((item, i) => (
                    <motion.li
                      key={item.title}
                      className="flex items-start gap-3.5"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                      >
                        <ArrowUpRight className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="font-semibold text-[#1C1F2E] text-base">{item.title}</span>
                        <p className="text-[#5A5F72] text-base leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Advantages ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Benefits" title="Advantages of Being a Mentor" subtitle="Mentoring isn't just about giving — it's about growing together." color="red" />

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{item.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#5A5F72] leading-relaxed mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-base text-[#5A5F72]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Mentor Roles ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Roles" title="How Mentors Work with Startups" subtitle="As a mentor with us, you get to work closely with ambitious innovators. Many are building businesses for the first time and need guidance across different areas. This is where you step in. Whether you're a successful founder or an industry specialist, this is your chance to support the next generation of entrepreneurs and learn along the way." color="blue" />

          <div className="grid md:grid-cols-2 gap-7">
            {mentorRoles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `${role.color}12`, border: `1px solid ${role.color}25` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: role.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">{role.title}</h3>
                        <div
                          className="inline-flex items-center gap-1.5 mt-1 text-base font-medium"
                          style={{ color: `${role.color}CC` }}
                        >
                          <Clock className="w-3 h-3" />
                          {role.commitment}
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-base text-[#5A5F72] leading-relaxed mb-5">{role.description}</p>

                    <ul className="grid grid-cols-2 gap-3">
                      {role.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-base text-[#5A5F72]">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: role.color }} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Process Steps ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Process" title="How to Become a Mentor" subtitle="A clear four-step pathway from application to impact." color="green" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
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

                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{step.title}</h3>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>

                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                  <span className="text-base font-semibold" style={{ color: step.color }}>{step.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Mentor Profiles ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Profiles" title="Who We're Looking For" subtitle="We welcome mentors from diverse backgrounds and disciplines." color="blue" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorProfiles.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{item.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our mentorship programme." color="red" />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* ── CTA ── */}
      <GlobalCTA
        label="Make an Impact"
        title="Ready to Shape the Next Generation of Tech Leaders?"
        subtitle="Whether you're an experienced founder or an industry specialist, this is your chance to support ambitious entrepreneurs and learn along the way."
        primaryButtonText="Join as a Mentor"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}

/* ── FAQ Accordion Component ── */
function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const color = faqColors[index % faqColors.length];

        return (
          <motion.div
            key={faq.question}
            className="bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden transition-all duration-300 shadow-sm"
            style={isOpen ? { borderColor: `${color}30` } : {}}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 py-5 px-6 text-left"
            >
              <span
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold transition-all duration-300"
                style={
                  isOpen
                    ? { background: color, color: "#fff", boxShadow: `0 0 20px ${color}40` }
                    : { background: `${color}15`, color, border: `1px solid ${color}25` }
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-heading font-semibold text-[#1C1F2E] text-base flex-1">
                {faq.question}
              </span>

              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={isOpen ? { background: `${color}15` } : { background: "transparent" }}
              >
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-300"
                  style={{
                    color: isOpen ? color : "#7A7E8F",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pl-[4.75rem]">
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-[#5A5F72] text-base leading-[1.8]">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
