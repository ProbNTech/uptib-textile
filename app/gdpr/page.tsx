"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import {
  Shield, Eye, Users, FileText, Bell, Scale, Lock, Clock,
  UserCheck, ArrowRightLeft, Ban, Mail, CheckCircle2,
} from "lucide-react";
import { DownloadButton } from "@/components/DownloadButton";

/* ── Data Subject Rights (from Cookies page GDPR section) ──────────── */
const dataSubjectRights = [
  { icon: Eye, title: "Right to Access", color: "#2F7549", desc: "Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them and if so, exactly what data is being collected, how, where, and for what purposes. This data can be manually requested via info@ukpaktrade.org.uk and provided in an electronic format free of charge." },
  { icon: Users, title: "Right to Be Forgotten", color: "#3E8F5E", desc: "Should data subjects at any time wish to withdraw their consent and no longer allow UK-PAKISTAN TECH FORUM LTD (UPTIB) International to store their personal data, this request can be manually made via info@ukpaktrade.org.uk Please be sure to include the full name (including any prefixes) and email address of whom the data is in reference too, so that all data relating to the data subject in question can be accurately removed." },
  { icon: FileText, title: "Data Portability", color: "#2F7549", desc: "Similar to the Right to Access, Data Portability requires that data subjects are able to request, obtain, and/or transfer possession of collected data at any time. As mentioned above, this data can be manually requested via info@ukpaktrade.org.uk and provided in an electronic format free of charge. Should the data subject wish to transfer the possession of the data stored by UK-PAKISTAN TECH FORUM LTD (UPTIB), please be sure to also include the full name (including any prefixes) and the relevant contact information relating to the individual or organization whom you wish the data to be transferred to." },
  { icon: Bell, title: "Breach Notification", color: "#2F7549", desc: "Should UK-PAKISTAN TECH FORUM LTD (UPTIB) encounter a breach/unauthorized access of personal data that is likely to \u201Cresult in a risk for the rights and freedoms of individuals\u201D, UK-PAKISTAN TECH FORUM LTD (UPTIB) will ensure that a notification is made within 72 hours of becoming aware of the breach." },
];

const yourRights = [
  { icon: Eye, title: "Right of Access", color: "#2F7549", desc: "You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email: info@ukpaktrade.org.uk" },
  { icon: UserCheck, title: "Right to Correction", color: "#3E8F5E", desc: "We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected." },
  { icon: Lock, title: "Right to Restrict Use", color: "#2F7549", desc: "You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we\u2019re not lawfully allowed to use it." },
  { icon: Ban, title: "Right of Erasure", color: "#2F7549", desc: "You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it." },
  { icon: ArrowRightLeft, title: "Right to Portability", color: "#3E8F5E", desc: "If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format." },
  { icon: Scale, title: "Right to Object", color: "#2F7549", desc: "You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes." },
];

const lawfulBases = [
  { icon: FileText, title: "Performance of a Contract", color: "#2F7549", desc: "Where we are entering into a contract with you or performing our obligations under it, for example when you became a \u2018paying\u2019 member of our network." },
  { icon: Scale, title: "Legal Obligation", color: "#3E8F5E", desc: "Where necessary, we can comply with a legal or regulatory obligation to which we are subject." },
  { icon: CheckCircle2, title: "Legitimate Interests", color: "#2F7549", desc: "Where it is reasonably necessary to achieve our legitimate interests, i.e. those required for running Pakistan Textile Partners as a B2B strategic networking organization in pursuit of our shared aims and ideals." },
  { icon: Mail, title: "Specific Consent", color: "#2F7549", desc: "Where you have provided specific consent to us using your personal information in a certain way, such as to send you email, text and/or contact via telephone." },
];

const retentionPeriods = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended" },
  { category: "Prospects", period: "Up to 24 months from last contact" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended" },
];

export default function GDPRPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        label="Data Protection"
        title="GDPR Compliance"
        subtitle="Our commitment to data protection and your rights under the General Data Protection Regulation."
        image="/image/banners/banner30.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <DownloadButton href="/documents/UPTIB-GDPR-Policy.pdf" filename="UPTIB-GDPR-Policy.pdf">
            Download PDF
          </DownloadButton>
        </div>
      </PageHero>

      <div className="content-body">
      {/* ── Data Subject Rights — Light section ─────────────────────── */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="GDPR Compliance" title="Data Subject Rights" subtitle={<>GDPR compliance requires data subjects to be granted certain rights. What follows is not an exhaustive list, but those rights that are relevant to the collection, processing, and storage of personal data on{" "}<a href="https://www.ukpaktrade.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2F7549] hover:text-[#8FD3AE] transition-colors">www.ukpaktrade.org.uk</a></>} color="blue" />
            <div className="grid md:grid-cols-2 gap-5">
              {dataSubjectRights.map((right, i) => {
                const Icon = right.icon;
                return (
                  <motion.div key={right.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${right.color}, ${right.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${right.color}10`, border: `1px solid ${right.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: right.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: right.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{right.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{right.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Your Rights — Light alt section ─────────── */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Your Rights" title="Rights Under UK Data Protection Law" subtitle="Under UK data protection law, you have certain rights over the personal information that we hold about you. Here is a summary of the rights that we think apply:" color="green" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {yourRights.map((right, i) => {
                const Icon = right.icon;
                return (
                  <motion.div key={right.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${right.color}, ${right.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${right.color}10`, border: `1px solid ${right.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: right.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: right.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{right.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{right.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4, delay: 0.3 }} className="mt-8 relative bg-gradient-to-br from-[#3E8F5E]/10 to-[#2F7549]/10 border border-[#3E8F5E]/20 rounded-xl p-6 overflow-hidden">
              <div className="relative">
                <Mail className="w-5 h-5 text-[#3E8F5E] mb-3" strokeWidth={1.5} />
                <p className="text-[#5A5F72] text-base leading-relaxed">If you want to exercise any of the above rights, please email us at{" "}<a href="mailto:info@ukpaktrade.org.uk" className="text-[#3E8F5E] hover:text-[#4ade80] transition-colors">info@ukpaktrade.org.uk</a>{" "}and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for further information and/or evidence of identity. We will endeavor to respond fully to all requests within 10 working days of your request, however if we are unable to do so we will contact you with reasons for the delay.</p>
                <p className="text-[#7A7E8F] text-base leading-relaxed mt-4">Please note that exceptions apply to a number of these rights, and not all rights will be applicable in all circumstances. For more details we recommend you consult the guidance published by the UK{"\u2019"}s Information Commissioner{"\u2019"}s Office,{" "}<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#3E8F5E] hover:text-[#4ade80] transition-colors">https://ico.org.uk</a>.</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lawful Processing — Light section ─────────────────── */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Legal Basis" title="Lawful Processing" subtitle="Data protection law requires us to rely on one or more lawful grounds to process your personal information. We consider the following grounds to be relevant:" color="blue" />
            <div className="grid md:grid-cols-2 gap-5">
              {lawfulBases.map((basis, i) => {
                const Icon = basis.icon;
                return (
                  <motion.div key={basis.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${basis.color}, ${basis.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${basis.color}10`, border: `1px solid ${basis.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: basis.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: basis.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{basis.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{basis.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Data Retention — Light alt section ───────────────────────── */}
      <section className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Retention Policy" title="Data Retention" subtitle="We keep your information for no longer than is necessary for the purposes it was collected for. The length of time we retain your personal information is determined by operational and legal considerations." color="red" />
            <div>
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4 }} className="grid grid-cols-[1fr_2fr] gap-4 px-6 py-4 mb-2">
                <div className="text-base font-bold tracking-[0.2em] uppercase text-[#2F7549]">Category</div>
                <div className="text-base font-bold tracking-[0.2em] uppercase text-[#2F7549]">Retention Period</div>
              </motion.div>
              {retentionPeriods.map((item, i) => (
                <motion.div key={item.category} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group grid grid-cols-[1fr_2fr] gap-4 relative bg-white border border-[#D8D5CF] rounded-xl px-6 py-5 mb-3 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                  <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100 bg-gradient-to-b from-[#2F7549] to-[#2F7549]/25" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#2F7549]" strokeWidth={1.5} />
                    </div>
                    <span className="font-heading font-bold text-base text-[#16291E]">{item.category}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base text-[#7A7E8F] leading-relaxed">{item.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Security — Light section ────────────────────────────────── */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Data Security" title="Security Measures" color="green" />
            <div>
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E] pt-2">Safeguarding Your Data</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#5A5F72] leading-relaxed">Pakistan Textile Partners uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to only those employees, contractors or agents who have a legitimate business need to have access to that data.</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      </div>

      {/* ── Contact CTA — Gradient dark section ───────────────────── */}
      <section className="relative overflow-hidden py-12" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2F7549, transparent 50%)" }} />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div>
              <p className="text-base font-bold tracking-[0.2em] uppercase text-[#2F7549] mb-4">Get in Touch</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">Contact Us</h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}<a href="mailto:info@ukpaktrade.org.uk" className="text-[#2F7549] hover:text-[#8FD3AE] transition-colors">info@ukpaktrade.org.uk</a></p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Button href="/contact" variant="primary" size="lg">Contact Us</Button>
                <Button href="/membership#apply" variant="glass" size="lg">Apply for Membership</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
