"use client";

import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileText, Target, Shield, Banknote, Lock, Clock,
  Scale, Gavel, PenTool, CheckCircle2, AlertTriangle,
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
        The purpose of this Agreement is to define the terms under which the Forum will promote, market, and showcase the Product Owner&apos;s products, solutions, or services to its network of members, stakeholders, and partners in the UK, Europe, Middle East and African continent.
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
        <p className="text-[#3D4152] text-base leading-relaxed mb-4">The Forum agrees to provide the following marketing services:</p>
        <ul className="space-y-3">
          {[
            "Promotion of the Product Owner\u2019s products through the Forum\u2019s website, newsletters, social media, and events.",
            "Listing of products on the Forum\u2019s Member Product Portal.",
            "Inclusion in relevant Forum campaigns, exhibitions, and trade missions.",
            "Facilitation of introductions to potential clients, investors, and partners within the Forum network.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
              <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "responsibilities",
    icon: Shield,
    number: "3",
    title: "Product Owner Responsibilities",
    accent: "border-[#3E8F5E]",
    content: (
      <div>
        <p className="text-[#3D4152] text-base leading-relaxed mb-4">The Product Owner agrees to:</p>
        <ul className="space-y-3">
          {[
            "Provide accurate and complete product information, images, branding, and promotional materials.",
            "Ensure all marketing materials comply with applicable laws and do not infringe third-party rights.",
            "Respond promptly to requests for information or approvals related to marketing initiatives.",
            "Pay any agreed marketing fees or service charges as outlined in Schedule A (if applicable).",
            "Pay all fees as outlined in Section 5, which are binding and enforceable.",
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
    id: "ip",
    icon: Shield,
    number: "4",
    title: "Intellectual Property",
    accent: "border-[#2F7549]",
    content: (
      <ul className="space-y-3">
        {[
          "The Product Owner retains all intellectual property rights in its products and branding.",
          "The Forum may use the Product Owner\u2019s trademarks, logos, and product descriptions solely for the purpose of marketing under this Agreement.",
          "Any third-party materials provided by the Product Owner must be properly licensed and free of claims.",
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
    id: "fees",
    icon: Banknote,
    number: "5",
    title: "Fee Structure",
    accent: "border-[#2F7549]",
    content: (
      <div>
        <p className="text-[#3D4152] text-base leading-relaxed mb-6">
          The Product Owner agrees to pay the Forum the following fees for marketing services:
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
                { service: "Product Listing", desc: "Placement on Member Product Portal", fee: "\u00A3[Amount]", freq: "Annual / Per Product" },
                { service: "Featured Campaign", desc: "Inclusion in newsletters, social media, and events", fee: "\u00A3[Amount]", freq: "Per Campaign" },
                { service: "Trade Mission / Exhibition Support", desc: "Access to Forum-facilitated events", fee: "\u00A3[Amount]", freq: "Per Event" },
                { service: "Custom Marketing Services", desc: "Content creation, design, or promotional campaigns", fee: "\u00A3[Amount]", freq: "As Agreed" },
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

        <div className="space-y-4">
          <div>
            <h4 className="font-heading font-bold text-[#16291E] text-base mb-2">Payment Terms</h4>
            <ul className="space-y-2">
              {[
                "Fees are due within 30 days of invoice.",
                "Late payments may incur interest at 4% per month.",
                "Additional services outside this fee schedule will require written approval.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#3D4152] text-base mt-1">&bull;</span>
                  <span className="text-[#3D4152] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="font-heading font-bold text-[#16291E] text-base mb-1">Binding Payment Clause</h4>
              <p className="text-[#3D4152] text-base leading-relaxed">
                The Product Owner unconditionally agrees to pay all fees as invoiced by the Forum. Fees are due within 30 days of invoice, and non-payment constitutes a breach of this Agreement. The Forum may suspend or terminate marketing services if payment is not received on time. Late payments incur interest at 4% per month until paid in full. This clause is legally binding and enforceable under the governing law specified in Section 8.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "confidentiality",
    icon: Lock,
    number: "6",
    title: "Confidentiality",
    accent: "border-[#3E8F5E]",
    content: (
      <p className="text-[#3D4152] text-base leading-relaxed">
        Both parties shall maintain the confidentiality of proprietary information and shall not disclose such information without prior written consent.
      </p>
    ),
  },
  {
    id: "term",
    icon: Clock,
    number: "7",
    title: "Term & Termination",
    accent: "border-[#2F7549]",
    content: (
      <ul className="space-y-3">
        {[
          "Term: 12 months / specify period, unless terminated earlier.",
          "Termination: Either party may terminate with 30 days\u2019 written notice.",
          "Termination does not release the Product Owner from the obligation to pay fees accrued prior to termination.",
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
    number: "8",
    title: "Liability",
    accent: "border-[#2F7549]",
    content: (
      <ul className="space-y-3">
        {[
          "Forum is not liable for indirect or consequential damages.",
          "Product Owner is responsible for accuracy of claims and materials.",
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
    number: "9",
    title: "Governing Law",
    accent: "border-[#2F7549]",
    content: (
      <p className="text-[#3D4152] text-base leading-relaxed">
        This Agreement shall be governed by and construed in accordance with the laws of <strong>England and Wales, United Kingdom</strong>.
      </p>
    ),
  },
];

export default function MarketingAgreementPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Marketing Agreement"
        subtitle="Terms and conditions governing the promotion, marketing, and showcase of products through the UK\u2013Pakistan Technology Forum network."
        image="/image/banners/banner32.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <DownloadButton href="/documents/UPTIB-Marketing-Agreement.pdf" filename="UPTIB-Marketing-Agreement.pdf">
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
              <h2 className="font-heading font-bold text-[#16291E] text-xl mb-6">Marketing Agreement</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-[#2F7549] pl-4">
                  <p className="text-base text-[#7A7E8F] uppercase tracking-wider mb-1">Party A</p>
                  <p className="font-heading font-bold text-[#16291E]">[Product Owner Name]</p>
                  <p className="text-base text-[#3D4152]">&ldquo;Product Owner&rdquo;</p>
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
            subtitle="Complete terms governing marketing services, fees, responsibilities, and obligations."
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
              { party: "Product Owner", role: "Product Owner" },
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
