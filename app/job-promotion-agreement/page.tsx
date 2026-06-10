"use client";

import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileText, Target, Banknote, Lock, Clock,
  Scale, Gavel, PenTool, CheckCircle2, AlertTriangle, Briefcase,
} from "lucide-react";
import { DownloadButton } from "@/components/DownloadButton";

const sections = [
  {
    id: "purpose",
    icon: FileText,
    number: "1",
    title: "Purpose",
    accent: "border-[#2F7549]",
    content: (
      <p className="text-[#3D4152] text-base leading-relaxed">
        This Agreement sets out the terms under which the Forum will promote the Employer&apos;s job opportunities to its network of members, stakeholders, and partners in the UK, Europe, Middle East, African continent and Pakistan.
      </p>
    ),
  },
  {
    id: "scope",
    icon: Target,
    number: "2",
    title: "Scope of Services",
    accent: "border-[#2F7549]",
    content: (
      <div>
        <p className="text-[#3D4152] text-base leading-relaxed mb-4">The Forum agrees to:</p>
        <ul className="space-y-3 mb-6">
          {[
            "Publish and promote the Employer\u2019s job openings through the Forum\u2019s website, newsletters, social media, events, and other marketing channels.",
            "List jobs on the Forum\u2019s Member Job Portal.",
            "Facilitate introductions to potential candidates where requested.",
            "Provide updates and analytics on job promotion performance (optional).",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
              <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[#3D4152] text-base leading-relaxed">
          The Employer agrees to provide accurate job descriptions, requirements, and relevant materials for promotion.
        </p>
      </div>
    ),
  },
  {
    id: "fees",
    icon: Banknote,
    number: "3",
    title: "Fees and Payment",
    accent: "border-[#2F7549]",
    content: (
      <div>
        <p className="text-[#3D4152] text-base leading-relaxed mb-6">
          The Employer agrees to pay the Forum the following fees for promotion services:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-base border-collapse">
            <thead>
              <tr className="bg-[#16291E] text-white">
                <th className="text-left py-3 px-4 font-semibold">Service</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
                <th className="text-left py-3 px-4 font-semibold">Fee (GBP)</th>
                <th className="text-left py-3 px-4 font-semibold">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: "Job Posting", desc: "Placement on Forum Job Portal", fee: "\u00A3[Amount]", freq: "Payable within 30 days of after getting job" },
                { service: "Featured Campaign", desc: "Promotion via newsletter, social media, or events", fee: "\u00A3[Amount]", freq: "Payable within 30 days of after getting job" },
                { service: "Recruitment Support", desc: "Candidate introduction, event participation", fee: "\u00A3[Amount]", freq: "Payable within 30 days of after getting job" },
              ].map((row, i) => (
                <tr key={row.service} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F7F5]"}>
                  <td className="py-3 px-4 font-medium text-[#16291E] border-b border-[#D8D5CF]">{row.service}</td>
                  <td className="py-3 px-4 text-[#3D4152] border-b border-[#D8D5CF]">{row.desc}</td>
                  <td className="py-3 px-4 text-[#2F7549] font-semibold border-b border-[#D8D5CF]">{row.fee}</td>
                  <td className="py-3 px-4 text-[#3D4152] border-b border-[#D8D5CF]">{row.freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" strokeWidth={2} />
          <div>
            <h4 className="font-heading font-bold text-[#16291E] text-base mb-1">Binding Payment Clause</h4>
            <p className="text-[#3D4152] text-base leading-relaxed">
              Fees are legally binding once services are delivered. Non-payment constitutes a breach of this Agreement.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "responsibilities",
    icon: Briefcase,
    number: "4",
    title: "Employer Responsibilities",
    accent: "border-[#3E8F5E]",
    content: (
      <div>
        <p className="text-[#3D4152] text-base leading-relaxed mb-4">The Employer shall:</p>
        <ul className="space-y-3">
          {[
            "Provide complete and accurate job information, including title, description, qualifications, salary, location, and contact details.",
            "Ensure all materials comply with applicable laws and regulations.",
            "Respond promptly to candidate inquiries and Forum requests for clarification.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
              <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "confidentiality",
    icon: Lock,
    number: "5",
    title: "Confidentiality",
    accent: "border-[#3E8F5E]",
    content: (
      <p className="text-[#3D4152] text-base leading-relaxed">
        Both parties agree to keep confidential any proprietary, candidate, or business information obtained during the execution of this Agreement.
      </p>
    ),
  },
  {
    id: "term",
    icon: Clock,
    number: "6",
    title: "Term & Termination",
    accent: "border-[#2F7549]",
    content: (
      <ul className="space-y-3">
        {[
          "This Agreement shall commence on the Effective Date and remain in effect until all jobs under this agreement have been promoted or until terminated by either party with 30 days\u2019 written notice.",
          "Termination does not release the Employer from the obligation to pay fees for services already provided.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "liability",
    icon: Scale,
    number: "7",
    title: "Liability",
    accent: "border-[#2F7549]",
    content: (
      <ul className="space-y-3">
        {[
          "The Forum is not responsible for hiring decisions or employment outcomes.",
          "The Employer is responsible for accuracy of job postings and legal compliance in hiring.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "governing-law",
    icon: Gavel,
    number: "8",
    title: "Governing Law",
    accent: "border-[#2F7549]",
    content: (
      <p className="text-[#3D4152] text-base leading-relaxed">
        This Agreement shall be governed by and construed in accordance with the laws of <strong>England and Wales, United Kingdom</strong>.
      </p>
    ),
  },
];

export default function JobPromotionAgreementPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Job Promotion Agreement"
        subtitle="Terms and conditions governing the promotion of job opportunities through the UK\u2013Pakistan Technology Forum network and channels."
        image="/image/banners/banner39.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <DownloadButton href="/documents/UPTIB-Job-Promotion-Agreement.pdf" filename="UPTIB-Job-Promotion-Agreement.pdf">
            Download PDF
          </DownloadButton>
        </div>
      </PageHero>

      {/* Parties */}
      <Section variant="light">
        <AnimatedSection>
          <div>
            <p className="text-base font-semibold text-[#2F7549] uppercase tracking-widest mb-6">Agreement</p>
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h2 className="font-heading font-bold text-[#16291E] text-xl mb-6">Job Promotion Agreement</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-[#2F7549] pl-4">
                  <p className="text-base text-[#7A7E8F] uppercase tracking-wider mb-1">Party A</p>
                  <p className="font-heading font-bold text-[#16291E]">[Employer Name]</p>
                  <p className="text-base text-[#3D4152]">&ldquo;Employer&rdquo;</p>
                </div>
                <div className="border-l-4 border-[#3E8F5E] pl-4">
                  <p className="text-base text-[#7A7E8F] uppercase tracking-wider mb-1">Party B</p>
                  <p className="font-heading font-bold text-[#16291E]">UK&ndash;Pakistan Technology Forum</p>
                  <p className="text-base text-[#3D4152]">&ldquo;Forum&rdquo;</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D8D5CF]">
                <p className="text-base text-[#7A7E8F]">Effective Date: <span className="text-[#16291E] font-medium">[Insert Date]</span></p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Agreement Sections */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Terms & Conditions"
            title="Agreement Clauses"
            subtitle="Complete terms governing job promotion services, fees, responsibilities, and obligations."
          />
          <div className="space-y-6">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`bg-white border border-[#D8D5CF] border-l-4 ${section.accent} rounded p-6 sm:p-8`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-base text-[#7A7E8F] font-semibold">Section {section.number}</span>
                      <h3 className="font-heading font-bold text-[#16291E] text-lg">{section.title}</h3>
                    </div>
                  </div>
                  {section.content}
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Signatures */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Execution"
            title="Signatures"
            subtitle="This Agreement is executed by the authorised representatives of both parties."
          />
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { party: "UK\u2013Pakistan Technology Forum", role: "Forum" },
              { party: "Employer / Employee", role: "Employer" },
            ].map((signee) => (
              <motion.div
                key={signee.role}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#D8D5CF] rounded p-6"
              >
                <PenTool className="w-5 h-5 text-[#2F7549] mb-3" strokeWidth={1.5} />
                <h3 className="font-heading font-bold text-[#16291E] text-base mb-4">{signee.party}</h3>
                <div className="space-y-4">
                  {["Name", "Title", "Signature", "Date"].map((field) => (
                    <div key={field}>
                      <p className="text-base text-[#7A7E8F] mb-1">{field}</p>
                      <div className="border-b-2 border-dotted border-[#D8D5CF] pb-3" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
