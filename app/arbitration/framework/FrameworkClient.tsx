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
import { DownloadButton } from "@/components/DownloadButton";
import {
  Scale,
  Shield,
  Gavel,
  BookOpen,
  Globe2,
  CheckCircle2,
  FileText,
  Users,
  Clock,
  Lock,
  Zap,
  Monitor,
  MessageCircle,
  Upload,
  Video,
  Bell,
  KeyRound,
  Fingerprint,
  HelpCircle,
  PoundSterling,
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  UserCheck,
  FileCheck,
  Blocks,
} from "lucide-react";

/* ── Legal Basis ─────────────────────────────────────────────────── */
const legalBasis = [
  {
    title: "Arbitration Act 1996 (UK)",
    description: "The primary governing legislation for all arbitration proceedings under the UPTIB Framework.",
    icon: Gavel,
    color: "#2F7549",
  },
  {
    title: "LCIA Rules",
    description: "London Court of International Arbitration Rules applied for structured and professional conduct of arbitration.",
    icon: BookOpen,
    color: "#3E8F5E",
  },
  {
    title: "New York Convention (1958)",
    description: "Ensures arbitration awards are binding, final, and enforceable internationally across 170+ countries.",
    icon: Globe2,
    color: "#2F7549",
  },
];

/* ── Key Principles ──────────────────────────────────────────────── */
const keyPrinciples = [
  {
    title: "Party Autonomy",
    description: "Parties can select arbitrators, agree on rules, and decide procedures within the framework.",
    icon: Users,
    color: "#2F7549",
  },
  {
    title: "Expert Arbitrators",
    description: "Arbitrators with technical and industry expertise are appointed to ensure informed decisions.",
    icon: UserCheck,
    color: "#3E8F5E",
  },
  {
    title: "Speed & Efficiency",
    description: "Digital processes aim to resolve disputes within 30\u201390 days.",
    icon: Zap,
    color: "#2F7549",
  },
  {
    title: "Confidentiality",
    description: "All proceedings, submissions, and awards are confidential.",
    icon: Lock,
    color: "#2F7549",
  },
  {
    title: "Global Enforceability",
    description: "Awards designed to be enforceable internationally under recognised conventions.",
    icon: Globe2,
    color: "#3E8F5E",
  },
];

/* ── Detailed Process Steps ──────────────────────────────────────── */
const detailedSteps = [
  {
    number: "01",
    title: "Initiating Arbitration",
    icon: ClipboardList,
    color: "#2F7549",
    items: [
      "Party raises dispute using the UPTIB digital arbitration platform",
      "Include: nature of the dispute, relevant contracts, relief requested",
      "Framework administrator acknowledges receipt within 3 business days",
      "Preliminary review verifies eligibility and scope",
    ],
  },
  {
    number: "02",
    title: "Arbitrator Appointment",
    icon: UserCheck,
    color: "#3E8F5E",
    items: [
      "Single arbitrator for simple disputes (< \u00a3250,000)",
      "Three-member tribunal for complex or high-value disputes",
      "Arbitrators selected from UPTIB\u2019s Technical Arbitration Panel or mutually agreed",
      "Appointment timeline: 7\u201314 days",
      "All arbitrators must disclose potential conflicts before appointment",
    ],
  },
  {
    number: "03",
    title: "Case Management & Evidence",
    icon: FileText,
    color: "#2F7549",
    items: [
      "Procedural timetable set in consultation with parties",
      "Submission deadlines for claims, counterclaims, and evidence",
      "Electronic evidence admissible: code, logs, screenshots, blockchain records",
      "Witness statements and expert testimony presented virtually or at hearings",
      "All filings digitally managed via the UPTIB secure platform",
    ],
  },
  {
    number: "04",
    title: "Hearing & Award",
    icon: FileCheck,
    color: "#2F7549",
    items: [
      "Hearings: document-only, virtual (secure video), hybrid, or in-person",
      "Arbitrator issues final written award with findings, reasoning, and remedies",
      "Timeline: 30\u201360 days after final hearing",
      "Awards are final under the Arbitration Act 1996",
      "Internationally enforceable under the New York Convention",
    ],
  },
];

/* ── Appointment Timeline ────────────────────────────────────────── */
const appointmentTimeline = [
  { step: "Initial party selection attempt", duration: "7 days" },
  { step: "UPTIB Committee appointment (if no agreement)", duration: "5 days" },
  { step: "Conflict-of-interest disclosures", duration: "3 days" },
  { step: "Final appointment confirmation", duration: "2 days" },
];

/* ── Cost Schedule ───────────────────────────────────────────────── */
const costSchedule = [
  {
    category: "Arbitrator Fees",
    color: "#2F7549",
    items: [
      { label: "Single Arbitrator (simple dispute)", fee: "\u00a33,000 \u2013 \u00a310,000" },
      { label: "Three-Member Tribunal (complex/high-value)", fee: "\u00a310,000 \u2013 \u00a330,000" },
      { label: "Hourly Rate (additional services)", fee: "\u00a3250 \u2013 \u00a3500/hr" },
    ],
  },
  {
    category: "Platform & Admin Fees",
    color: "#3E8F5E",
    items: [
      { label: "Digital platform usage fee", fee: "\u00a3500 flat per case" },
      { label: "Additional document storage", fee: "\u00a350 per GB" },
      { label: "Administrative fee", fee: "\u00a3250 \u2013 \u00a31,000" },
      { label: "Scheduling & case management", fee: "\u00a3100 per party" },
    ],
  },
];

/* ── Digital Platform Features ───────────────────────────────────── */
const platformFeatures = [
  { title: "Secure Access", description: "Two-factor authentication (2FA) with role-based access for Claimant, Respondent, Arbitrator, and Administrator.", icon: KeyRound, color: "#2F7549" },
  { title: "Case Dashboard", description: "Notifications, case summary with status and timeline, document repository, and encrypted messaging system.", icon: Monitor, color: "#3E8F5E" },
  { title: "Digital Filing", description: "Submit notices, claims, defences, and evidence in PDF or approved digital formats with automatic timestamping.", icon: Upload, color: "#2F7549" },
  { title: "Virtual Hearings", description: "Integrated video conferencing for virtual and hybrid hearing sessions with secure platform-provided links.", icon: Video, color: "#2F7549" },
  { title: "Automated Reminders", description: "Real-time alerts for deadlines, hearings, new messages, and procedural updates to keep proceedings on track.", icon: Bell, color: "#3E8F5E" },
  { title: "Security & Compliance", description: "All communications encrypted. GDPR and UK data protection compliant. Access restricted to authorised users. Training sessions offered for first-time users.", icon: Fingerprint, color: "#2F7549" },
];

/* ── FAQs ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What types of disputes can be resolved under this framework?",
    a: "Technology service disputes, software licensing conflicts, intellectual property claims, digital asset or blockchain disputes, and platform governance disagreements.",
  },
  {
    q: "How do I initiate arbitration?",
    a: "Submit a Notice of Dispute via the UPTIB Digital Arbitration Platform including details of the dispute, contract references, and requested relief.",
  },
  {
    q: "How many arbitrators are appointed?",
    a: "Single arbitrator for simple disputes (< \u00a3250,000). Three-member tribunal for complex/high-value disputes or technical matters.",
  },
  {
    q: "What is the typical timeline for arbitration?",
    a: "From Notice of Dispute to final award typically takes 30\u201390 days, depending on complexity. Arbitrator appointment takes 7\u201314 days, written submissions 2\u20134 weeks, and the final award is issued 30\u201360 days post-hearing.",
  },
  {
    q: "Is the arbitration confidential?",
    a: "Yes, all proceedings, submissions, and awards are strictly confidential unless disclosure is required by law.",
  },
  {
    q: "Can arbitration awards be enforced internationally?",
    a: "Yes, under the New York Convention and Arbitration Act 1996 (UK), awards are enforceable in 170+ participating jurisdictions.",
  },
  {
    q: "What if a dispute involves smart contracts or blockchain?",
    a: "Arbitrators can review on-chain evidence and issue digital awards that may be executable via smart contracts with parties\u2019 consent.",
  },
  {
    q: "How are costs allocated?",
    a: "Parties generally bear their own legal and expert fees. Arbitrators may allocate fees based on outcome, complexity, and procedural compliance. Platform and administrative fees are shared equally unless otherwise determined.",
  },
  {
    q: "Who appoints the arbitrator(s)?",
    a: "Parties attempt to mutually agree on arbitrator(s) within 7 days. If no agreement is reached, the UPTIB Arbitration Committee appoints arbitrator(s) from the Technical Arbitration Panel. Arbitrators must have relevant technical, industry, or legal expertise.",
  },
  {
    q: "Who can I contact for support?",
    a: "24/7 technical support is available via the platform, chat, email, or phone. The UPTIB Arbitration Committee provides procedural guidance and handles all enquiries regarding arbitration proceedings.",
  },
];

export default function FrameworkClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        label="Policy Document"
        title={
          <>
            UPTIB Arbitration
            <br />
            Framework Policy
          </>
        }
        subtitle="Version 1.0 — A comprehensive framework for resolving disputes arising in technology agreements, SaaS platforms, digital assets, software development contracts, and intellectual property transactions."
        image="/image/banners/banner74.jpg"
        // particleNetwork
      >
        <div className="flex flex-wrap items-center gap-4">
      <ShinyButton href="/contact">File a Dispute</ShinyButton>
      <DownloadButton href="/documents/UPTIB-Arbitration-Framework.pdf" filename="UPTIB-Arbitration-Framework.pdf">
        Download PDF
      </DownloadButton>
    </div>
      </PageHero >

    {/* ── Scope ────────────────────────────────────────────────── */ }
    < Section variant = "light" >
      <AnimatedSection>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <SectionHeader
              label="Introduction"
              title="Framework Scope & Purpose"
              color="blue"
            />
            <p className="text-[#3D4152] text-lg leading-relaxed mb-5">
              This policy establishes the UPTIB Arbitration Framework for resolving disputes arising in technology agreements, SaaS platforms, digital assets, software development contracts, and intellectual property transactions.
            </p>
            <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
              The purpose of the Framework is to provide a fast, confidential, and enforceable dispute resolution process that leverages technology while complying with UK law (Arbitration Act 1996) and international arbitration standards.
            </p>
            <p className="text-[#5A5F72] text-lg leading-relaxed">
              This Framework applies to all contracts entered into by UPTIB involving technology services, software licensing, SaaS, and platform agreements, as well as disputes between UPTIB and clients, vendors, technology partners, and investors where contracts reference arbitration.
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2F754910", border: "1px solid #2F754920" }}>
                  <Scale className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-[#16291E] text-lg">Applies To</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <ul className="space-y-3">
                {[
                  "Technology services & software licensing",
                  "SaaS & platform agreements",
                  "Digital asset & blockchain disputes",
                  "Intellectual property transactions",
                  "Disputes with clients, vendors, and partners",
                  "Investor disputes (where contracts reference arbitration)",
                ].map((item, i) => (
                  <motion.li key={item} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#5A5F72] text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-[#D8D5CF]">
                <p className="text-xs text-[#5A5F72]"><span className="font-semibold text-[#2F7549]">Excluded:</span> Employment disputes (separate HR policy) and regulatory/statutory enforcement matters.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
      </Section >

    {/* ── Legal Basis ──────────────────────────────────────────── */ }
    < Section variant = "dark" >
      <AnimatedSection>
        <SectionHeader
          label="Legal Foundation"
          title="Legal Basis"
          subtitle="The Framework is governed by established UK and international arbitration law, ensuring all awards are binding, final, and enforceable."
          color="red"
          dark
        />

        <div className="grid md:grid-cols-3 gap-6">
          {legalBasis.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="group relative h-full rounded-2xl border border-white/10 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}60)` }} />
                  <div className="p-7 text-center">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
                      <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
      </Section >

    {/* ── Arbitration Agreement ────────────────────────────────── */ }
    < Section variant = "light" >
      <AnimatedSection>
        <SectionHeader label="Agreement" title="Arbitration Acceptance Agreement" subtitle="Under the Arbitration Act 1996 — United Kingdom. Every relevant contract must include an arbitration clause." color="green" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Agreement Overview */}
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#3E8F5E] to-[#3E8F5E]/40" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#3E8F5E10", border: "1px solid #3E8F5E20" }}>
                  <FileText className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-[#16291E] text-lg">Agreement Clauses</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-[#5A5F72] text-sm leading-relaxed mb-4">
                Parties sign a formal Arbitration Acceptance Agreement covering the following key provisions:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Agreement to arbitrate all disputes",
                  "Governing law: Laws of England and Wales",
                  "Arbitration procedure under the Arbitration Act 1996",
                  "Appointment of independent arbitrator(s)",
                  "Seat and venue: London, England (or agreed alternative)",
                  "Confidentiality of all proceedings and awards",
                  "Binding and enforceable decision",
                  "Arbitrator authority to allocate costs",
                  "Waiver of court proceedings (except enforcement)",
                  "Voluntary acceptance by both parties",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#5A5F72] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contract Requirements */}
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#2F7549] to-[#2F7549]/40" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2F754910", border: "1px solid #2F754920" }}>
                  <ClipboardList className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-[#16291E] text-lg">Contract Requirements</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-[#5A5F72] text-sm leading-relaxed mb-4">
                Every relevant contract must include an arbitration clause specifying:
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Agreement to Arbitrate", desc: "Commitment to resolve disputes under this Framework" },
                  { label: "Seat of Arbitration", desc: "Typically London, England" },
                  { label: "Governing Law", desc: "Laws of England & Wales" },
                  { label: "Number of Arbitrators", desc: "One or three, based on dispute complexity" },
                  { label: "Procedural Rules", desc: "LCIA or UPTIB digital arbitration rules" },
                  { label: "Language", desc: "English as the language of proceedings" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <div>
                      <span className="font-semibold text-[#16291E] text-sm">{item.label}</span>
                      <span className="text-[#5A5F72] text-xs block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-[#D8D5CF]">
                <p className="text-[#5A5F72] text-xs leading-relaxed">
                  <span className="font-semibold text-[#16291E]">Note:</span> Proceedings may take place in person or by electronic means as determined by the arbitrator. The decision or award shall be final and binding, and judgment may be entered in any court of competent jurisdiction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
      </Section >

    {/* ── Key Principles — DARK ────────────────────────────────── */ }
    < Section variant = "dark" >
      <AnimatedSection>
        <SectionHeader label="Principles" title="Key Principles" color="green" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {keyPrinciples.map((p, i) => {
            const Icon = p.icon;
            const lightColors = ["#8FD3AE", "#86efac", "#F9A8B4", "#8FD3AE", "#86efac"];
            const c = lightColors[i];
            return (
              <motion.div key={p.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group rounded-2xl border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5 transition-all duration-300">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden h-full">
                  <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${c}, transparent)` }} />
                  <div className="p-5 text-center">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: `${c}15`, border: `1px solid ${c}30` }}>
                      <Icon className="w-5 h-5" style={{ color: c }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-white text-sm mb-1">{p.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
      </Section >

    {/* ── Detailed Process ─────────────────────────────────────── */ }
    < Section variant = "light" >
      <AnimatedSection>
        <SectionHeader label="Detailed Process" title="Arbitration Procedure" subtitle="A step-by-step guide to how disputes are handled from initiation to final award." color="blue" />

        <div className="space-y-6">
          {detailedSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}40)` }} />
                <div className="p-7 lg:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold border-2" style={{ background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`, borderColor: `${step.color}60`, color: step.color }}>
                      {step.number}
                    </div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${step.color}08` }}>
                      <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#16291E] text-xl">{step.title}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-0 lg:ml-[104px]">
                    {step.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                        <span className="text-[#5A5F72] text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
      </Section >

    {/* ── Arbitrator Appointment ────────────────────────────────── */ }
    < Section variant = "dark" >
      <AnimatedSection>
        <SectionHeader label="Appointment" title="Arbitrator Appointment Procedure" color="green" dark />

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              Parties attempt to mutually agree on arbitrators within 7 days of the Notice of Arbitration. If no agreement is reached, the UPTIB Arbitration Committee appoints from the Technical Arbitration Panel. All arbitrators must have relevant technical, industry, or legal expertise.
            </p>

            <div className="space-y-3">
              {appointmentTimeline.map((item, i) => (
                <motion.div key={item.step} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 }} className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#3E8F5E]/10 flex items-center justify-center text-xs font-bold text-[#3E8F5E]">{i + 1}</span>
                    <span className="text-white text-sm font-medium">{item.step}</span>
                  </div>
                  <span className="text-xs font-bold text-[#3E8F5E] bg-[#3E8F5E]/8 px-2.5 py-1 rounded-full">{item.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#3E8F5E10", border: "1px solid #3E8F5E20" }}>
                <Shield className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Conflict-of-Interest Process</h3>
            </div>
            <div className="h-px bg-white/10 mb-5" />
            <ul className="space-y-3">
              {[
                "All potential arbitrators must disclose any conflicts of interest",
                "Parties may raise objections within 3 business days of disclosure",
                "UPTIB Arbitration Committee resolves objections fairly and promptly",
                "Appointed arbitrators sign a declaration of compliance with the Framework",
                "All appointments formally documented via the digital platform",
              ].map((item, i) => (
                <motion.li key={item} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>
      </Section >

    {/* ── Cost Schedule ────────────────────────────────────────── */ }
    < Section variant = "light" >
      <AnimatedSection>
        <SectionHeader label="Fees" title="Cost Schedule & Fees" subtitle="Transparent pricing for arbitration services under the UPTIB Framework." color="red" />

        <div className="grid md:grid-cols-2 gap-7">
          {costSchedule.map((group, gi) => (
            <motion.div key={group.category} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: gi * 0.1 }} className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden">
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${group.color}, ${group.color}60)` }} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${group.color}10`, border: `1px solid ${group.color}20` }}>
                    <PoundSterling className="w-5 h-5" style={{ color: group.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#16291E] text-lg">{group.category}</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex items-center justify-between">
                      <span className="text-[#3D4152] text-sm">{item.label}</span>
                      <span className="text-sm font-bold whitespace-nowrap ml-3" style={{ color: group.color }}>{item.fee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-6 rounded-xl bg-gradient-to-r from-[#2F7549]/8 to-transparent border border-[#2F7549]/15 p-6">
            <h4 className="font-heading font-bold text-[#16291E] text-sm mb-2">Payment & Allocation</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Parties bear their own legal representation costs",
                "Arbitrators may allocate costs based on outcome and complexity",
                "Platform and admin fees payable within 7 days of initiation",
                "Additional costs invoiced and payable within 14 days",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#5A5F72] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </AnimatedSection>
      </Section >

    {/* ── Digital Platform ─────────────────────────────────────── */ }
    < Section variant = "dark" >
      <AnimatedSection>
        <SectionHeader label="Technology" title="UPTIB Digital Arbitration Platform" subtitle="A secure, GDPR-compliant platform for managing the entire arbitration process digitally." color="blue" dark />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group relative h-full rounded-2xl border border-white/10 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: feature.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">{feature.title}</h3>
                  <div className="h-px bg-white/10 mb-2" />
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Smart Contract Support */}
        <AnimatedSection delay={0.3}>
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#2F7549] via-[#3E8F5E] to-[#2F7549]" />
            <div className="p-7 lg:p-8 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#2F754910", border: "1px solid #2F754920" }}>
                <Blocks className="w-6 h-6 text-[#2F7549]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Digital & Smart Contract Dispute Resolution</h3>
                <p className="text-white/60 text-base leading-relaxed">
                  Where disputes involve blockchain or smart contracts, the arbitrator may review on-chain evidence, issue digital awards executable via smart contracts, and the Framework supports fully automated enforcement with parties&apos; consent.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </AnimatedSection>
      </Section >

    {/* ── Sample Arbitration Clause ─────────────────────────────── */ }
    < Section variant = "light" >
      <AnimatedSection>
        <SectionHeader label="Sample Clause" title="Recommended Arbitration Clause" color="green" />

        <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-[#3E8F5E]/15 bg-white shadow-sm overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-[#3E8F5E] via-[#2F7549] to-[#3E8F5E]" />
          <div className="p-8 lg:p-10">
            <blockquote className="relative border-l-4 border-[#3E8F5E] pl-6 py-5 bg-gradient-to-r from-[#3E8F5E]/5 to-transparent rounded-r-xl">
              <div className="absolute -left-1 -top-2 text-[#3E8F5E]/20 text-6xl font-serif leading-none">&ldquo;</div>
              <p className="text-[#16291E] text-base leading-[1.8] font-medium relative z-10">
                Any dispute, controversy, or claim arising out of or relating to this Agreement, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration under the UPTIB Arbitration Framework.
              </p>
              <p className="text-[#16291E] text-base leading-[1.8] font-medium relative z-10 mt-4">
                The arbitration shall be conducted in accordance with the Arbitration Act 1996 (UK) and any applicable LCIA or UPTIB digital arbitration rules. The number of arbitrators shall be one for disputes under &pound;250,000 or three for complex disputes, as determined by the UPTIB Arbitration Committee. The seat of arbitration shall be London, England. The language of arbitration shall be English. The arbitrator(s) shall have the authority to allocate costs and fees, and the award shall be final and binding upon the Parties.
              </p>
            </blockquote>
          </div>
        </motion.div>
      </AnimatedSection>
      </Section >

    {/* ── FAQs ─────────────────────────────────────────────────── */ }
    < Section variant = "dark" >
      <AnimatedSection>
        <SectionHeader label="FAQs" title="Frequently Asked Questions" color="red" dark />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#2F7549]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-4 h-4 text-[#2F7549]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">{faq.q}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
      </Section >

    {/* ── Governance & Review ──────────────────────────────────── */ }
    < Section variant = "light" >
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#2F7549] to-[#2F7549]/40" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2F754910", border: "1px solid #2F754920" }}>
                  <Users className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-[#16291E] text-lg">Governance</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-4" />
              <p className="text-[#5A5F72] text-base leading-relaxed mb-4">
                The UPTIB Arbitration Committee oversees implementation, arbitrator selection, and compliance. The Committee reports annually to the Board of Directors on arbitration activity, efficiency, and lessons learned.
              </p>
              <p className="text-[#5A5F72] text-base leading-relaxed">
                The Framework maintains secure digital records of disputes, awards, and timelines. Analytics are used to improve process efficiency, identify recurring issues, and update rules.
              </p>
            </div>
          </motion.div>

          <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#3E8F5E] to-[#3E8F5E]/40" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#3E8F5E10", border: "1px solid #3E8F5E20" }}>
                  <Clock className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-[#16291E] text-lg">Policy Review</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-4" />
              <p className="text-[#5A5F72] text-base leading-relaxed mb-4">
                This Framework is reviewed every 12 months to incorporate legal updates in UK arbitration law, technological innovations in digital dispute resolution, and feedback from arbitrators, parties, and stakeholders.
              </p>
              <ul className="space-y-2">
                {["Legal updates in UK arbitration law", "Technological innovations in digital dispute resolution", "Feedback from arbitrators, parties, and stakeholders"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#5A5F72] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
      </Section >

    {/* ── CTA ────────────────────────────────────────────────────── */ }
    < GlobalCTA
  label = "Get Started"
  title = "Ready to Use the Framework?"
  subtitle = "Contact UPTIB to initiate arbitration or learn more about our dispute resolution services."
  primaryButtonText = "File a Dispute"
  primaryButtonLink = "/contact"
  secondaryButtonText = "Back to Overview"
  secondaryButtonLink = "/arbitration"
  image = "/image/exporters-and-sellers.jpg"
    />
    </div >
  );
}
