"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, ChevronDown, Award, BookOpen, Briefcase, Globe2,
  BrainCircuit, CodeXml, Cloud, Database, Shield, Cpu,
  Laptop, Rocket, GraduationCap, Lightbulb,
} from "lucide-react";
import { useState } from "react";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";


/* Lucide icons wrapped for floating hero */
const makeLucideIcon = (Icon: React.FC<Record<string, unknown>>) => {
  const Wrapped = (props: React.SVGProps<SVGSVGElement>) => <Icon {...props} />;
  return Wrapped;
};

const heroFloatingIcons = [
  { id: 1, icon: makeLucideIcon(BrainCircuit), className: "top-[8%] left-[8%]" },
  { id: 2, icon: makeLucideIcon(CodeXml), className: "top-[6%] left-[35%]" },
  { id: 3, icon: makeLucideIcon(Cloud), className: "top-[10%] right-[12%]" },
  { id: 4, icon: makeLucideIcon(Database), className: "top-[45%] right-[5%]" },
  { id: 5, icon: makeLucideIcon(Shield), className: "bottom-[15%] right-[18%]" },
  { id: 6, icon: makeLucideIcon(Cpu), className: "bottom-[10%] left-[25%]" },
  { id: 7, icon: makeLucideIcon(Laptop), className: "top-[35%] left-[4%]" },
  { id: 8, icon: makeLucideIcon(Rocket), className: "top-[5%] right-[32%]" },
  { id: 9, icon: makeLucideIcon(GraduationCap), className: "bottom-[8%] right-[8%]" },
  { id: 10, icon: makeLucideIcon(Lightbulb), className: "top-[65%] left-[6%]" },
];

const trustItems = ["UK aligned curriculum", "Industry mentors", "Practical projects", "Career support", "Cross-border collaboration"];

const programs = [
  { title: "AI & Tech Certifications", subtitle: "Industry-recognised vendor-aligned certification tracks", bullets: ["Vendor aligned tracks", "Hands on labs", "Final assessment and badge"] },
  { title: "Sector Specific Skill Training", subtitle: "Specialised programs for key industries", bullets: ["Healthcare, fintech, logistics, public sector, manufacturing", "Use cases and toolkits", "Mini capstone per sector"] },
  { title: "Student Tutoring Services", subtitle: "Personalised learning support for students", bullets: ["Fundamentals to advanced", "Code reviews and debugging help", "Weekly learning plans"] },
  { title: "Competitive Exam Support", subtitle: "Comprehensive preparation for exams and interviews", bullets: ["GRE, IELTS, tech interviews, CS fundamentals", "Mock tests and feedback", "Resource library"] },
  { title: "Internship Programs", subtitle: "Real-world experience with leading companies", bullets: ["Partner placements", "Portfolio projects", "Reference ready mentorship"] },
];

const pathwaySteps = [
  { number: "01", title: "Assess", description: "Complete skill assessments and identify your learning goals and current proficiency level.", outcome: "Personalised learning roadmap", color: "#047857" },
  { number: "02", title: "Train", description: "Participate in structured training programs with hands-on labs and expert mentorship.", outcome: "Industry-relevant skills", color: "#10B981" },
  { number: "03", title: "Build", description: "Create portfolio projects and capstone assignments that demonstrate your capabilities.", outcome: "Portfolio-ready projects", color: "#047857" },
  { number: "04", title: "Launch", description: "Access career support, internship placements, and job readiness programs.", outcome: "Career-ready profile", color: "#047857" },
];

const tracks = [
  { title: "AI Engineering Track", duration: "12 weeks", level: "Intermediate to Advanced", commitment: "15–20 hours/week", build: "Build production-ready AI models and deploy ML pipelines", color: "#047857" },
  { title: "Data and Automation Track", duration: "10 weeks", level: "Beginner to Intermediate", commitment: "12–15 hours/week", build: "Build data pipelines, automation scripts, and analytics dashboards", color: "#10B981" },
  { title: "Cloud and Cyber Foundations", duration: "8 weeks", level: "Beginner", commitment: "10–12 hours/week", build: "Build secure cloud infrastructure and implement security best practices", color: "#047857" },
];

const outcomes = [
  { value: "30+", label: "mentor hours per cohort", color: "#047857" },
  { value: "6–10", label: "projects per learner", color: "#10B981" },
  { value: "8 week", label: "job readiness sprint", color: "#047857" },
  { value: "100+", label: "cross border mentor network", color: "#047857" },
];

const faqs = [
  { question: "Who is this program for?", answer: "Our programs are designed for students, professionals, and career changers looking to build or enhance their tech skills. Whether you're a beginner or looking to advance your career, we have tracks suited to your level." },
  { question: "Do I need prior experience?", answer: "No prior experience is required for our beginner tracks. We offer programs for all skill levels, from fundamentals to advanced specialisation. Our assessment process helps match you with the right program." },
  { question: "Are programs online or onsite?", answer: "We offer both online and hybrid learning options to accommodate different schedules and locations. Most programs include live sessions, recorded content, and hands-on labs accessible remotely." },
  { question: "What is the value of certifications?", answer: "Our certifications are industry-recognised and aligned with vendor standards. They demonstrate practical skills and are valued by employers in both UK and Pakistani tech markets." },
  { question: "How do I become eligible for internships?", answer: "Internship eligibility is based on program completion, performance in assessments, and portfolio quality. We work with partner organisations to match qualified candidates with relevant opportunities." },
  { question: "What about pricing and scholarships?", answer: "We offer various pricing tiers and scholarship opportunities for eligible candidates. Please contact us through the portal or membership application to discuss options and financial support programs." },
];

export default function SkillDevelopmentCenterPage() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white content-body">
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTIB Programs"
        title="Skill Development Centre"
        subtitle="Comprehensive training programs designed to build world-class tech capabilities and accelerate your career."
        video="/videos/banner.mp4"
        videoSpeed={0.75}
        heroImage="/image/Skill Development Center/skill-dev-hero.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Apply for Training</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Partner with UPTIB
          </Button>
        </div>
      </PageHero>

      {/* ── Trust Strip ── */}
      <section className="relative bg-[#1C1F2E] border-b border-white/[0.06]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-5">
          <div className="flex flex-wrap gap-6 items-center">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-base text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#047857] flex-shrink-0" strokeWidth={2} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader
                  label="Our Mission"
                  title="Building World-Class Tech Capabilities Across the UK and Pakistan"
                  color="blue"
                />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                  Our Skill Development Center offers industry-recognised certifications, specialised training, and personalised mentorship to empower individuals and organisations with cutting-edge technology skills.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed">
                  Through strategic partnerships with leading tech companies and educational institutions, we deliver programs that bridge the skills gap and create pathways for career advancement.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Program Highlights</h3>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <ul className="space-y-4">
                    {[
                      { text: "Industry-recognised certifications", icon: Award, color: "#047857" },
                      { text: "Specialised training tracks", icon: BookOpen, color: "#10B981" },
                      { text: "Career support & internships", icon: Briefcase, color: "#047857" },
                      { text: "Cross-border collaboration", icon: Globe2, color: "#047857" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.text} className="flex items-center gap-3.5">
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                          >
                            <Icon className="w-4.5 h-4.5" style={{ color: item.color }} strokeWidth={1.5} />
                          </div>
                          <span className="text-[#3D4152] text-base font-medium">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="relative bg-white" id="programs">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader label="Training Programs" title="Our Programs" subtitle="Comprehensive skill development initiatives designed to accelerate your tech career." color="green" />
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
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-1 group-hover:text-[#10B981] transition-colors duration-200">
                      {program.title}
                    </h3>
                    <p className="text-[#7A7E8F] text-base mb-3">{program.subtitle}</p>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <ul className="space-y-2 flex-1">
                      {program.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-[#5A5F72] text-base">{bullet}</span>
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

      {/* ── Learning Pathway ── */}
      <section className="relative bg-[#E8E6E3]" id="pathway">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader label="Your Journey" title="Learning Pathway" subtitle="A structured journey from assessment to career launch." color="blue" />
            <div className="grid md:grid-cols-4 gap-6">
              {pathwaySteps.map((step, i) => (
                <motion.div
                  key={step.number}
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
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#047857] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-[#7A7E8F] text-base leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                      <span className="text-base font-semibold" style={{ color: step.color }}>
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Flagship Tracks ── */}
      <section className="relative bg-white" id="tracks">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader label="Flagship Tracks" title="Intensive Training Tracks" subtitle="Intensive programs designed to build expertise in high-demand tech domains." color="red" />
            <div className="grid md:grid-cols-3 gap-6">
              {tracks.map((track, i) => (
                <motion.div
                  key={track.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-4 group-hover:text-[#047857] transition-colors duration-200">
                      {track.title}
                    </h3>
                    <div className="space-y-2 mb-5">
                      <div className="flex justify-between text-base border-b border-[#D8D5CF] pb-2">
                        <span className="text-[#7A7E8F]">Duration</span>
                        <span className="text-[#3D4152] font-medium">{track.duration}</span>
                      </div>
                      <div className="flex justify-between text-base border-b border-[#D8D5CF] pb-2">
                        <span className="text-[#7A7E8F]">Level</span>
                        <span className="text-[#3D4152] font-medium">{track.level}</span>
                      </div>
                      <div className="flex justify-between text-base border-b border-[#D8D5CF] pb-2">
                        <span className="text-[#7A7E8F]">Commitment</span>
                        <span className="text-[#3D4152] font-medium">{track.commitment}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-[#7A7E8F] uppercase tracking-wider mb-1">What you build</p>
                      <p className="text-[#5A5F72] text-base leading-relaxed">{track.build}</p>
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Outcomes / Stats Bar ── */}
      <section className="bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <AnimatedSection>
            <SectionHeader label="Results" title="Program Outcomes" subtitle="Measurable results that accelerate your career growth." color="blue" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative h-full bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                    style={{ color: outcome.color }}
                  >
                    {outcome.value}
                  </div>
                  <p className="text-[#5A5F72] text-base">{outcome.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-[#E8E6E3]" id="faq">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know about our programs." color="blue" />
            <div>
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-t border-[#D8D5CF] last:border-b"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-[#047857] bg-[#047857]/10 px-2 py-0.5 rounded flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading font-semibold text-[#1C1F2E] text-base">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A7E8F] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pl-12 text-[#5A5F72] text-base leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <GlobalCTA
        label="Get Started"
        title="Ready to Transform Your Career?"
        subtitle="Join UPTIB’s Skill Development Center and unlock your potential in the tech industry. Start your journey today with world-class training and mentorship."
        primaryButtonText="Apply for Training"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Partner with UPTIB"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
