"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import {
  Shield, Lock, Eye, FileText, Clock, Users,
  CheckCircle2, Scale, Database, UserCheck,
  Fingerprint, Bell, BarChart3, AlertTriangle,
} from "lucide-react";
import { DownloadButton } from "@/components/DownloadButton";

/* ── Retention data ───────────────────────────────────────────────── */
const retentionData = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended", color: "#2F7549" },
  { category: "Prospects", period: "Up to 24 months from last contact", color: "#3E8F5E" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term", color: "#2F7549" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term", color: "#2F7549" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term", color: "#3E8F5E" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended", color: "#2F7549" },
];

/* ── Quick nav sections ───────────────────────────────────────────── */
const navSections = [
  { id: "introduction", label: "Introduction" },
  { id: "collection", label: "How We Collect" },
  { id: "info-type", label: "Information Type" },
  { id: "how-used", label: "How Info Is Used" },
  { id: "retention", label: "Retention Periods" },
  { id: "access", label: "Who Has Access" },
  { id: "lawful", label: "Lawful Processing" },
  { id: "marketing", label: "Marketing" },
  { id: "profiles", label: "Building Profiles" },
  { id: "rights", label: "Your Rights" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        label="Data Protection"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        image="/image/banners/banner23.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <DownloadButton href="/documents/UPTIB-Privacy-Policy.pdf" filename="UPTIB-Privacy-Policy.pdf">
            Download PDF
          </DownloadButton>
        </div>
      </PageHero>

      <div className="content-body">
      {/* ── Introduction + Quick Nav ─────────────────────────────────── */}
      <section id="introduction" className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Privacy Notice" title="Introduction" color="blue" />

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#16291E] pt-2">Our Commitment to Your Privacy</h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <p className="text-base text-[#5A5F72] leading-relaxed mb-5">
                    The UK-PAKISTAN TECH FORUM LTD (UPTIB) is the UK&apos;s leading organization for promoting opportunities and increasing bi-later trade and investment in between UK and Pakistan. We are committed to protecting the privacy of your Personal Information. This policy sets out how we collect, use and transfer your Personal Information, the security measures we employ to protect such data and your rights and choices with regards to access or use of such data.
                  </p>
                  <p className="text-base text-[#5A5F72] leading-relaxed">
                    This policy explains when and why we collect personal information about you, how we use it, the conditions under which we may disclose it to others, how we keep it safe and secure and your rights and choices in relation to your information.
                  </p>
                </div>
              </motion.div>

              {/* Quick Navigation */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
                <h3 className="font-heading font-bold text-base text-[#16291E] mb-5">Quick Navigation</h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <nav className="space-y-1.5">
                  {navSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className="w-full text-left px-3 py-2.5 text-base font-medium transition-all duration-200 border-l-2 border-transparent text-[#7A7E8F] hover:text-[#3D4152] hover:border-[#D8D5CF] hover:bg-[#F5F4F2] rounded-r-lg"
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How Do We Collect Information ─────────────────────────────── */}
      <section id="collection" className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Data Collection" title="How Do We Collect Information from You?" subtitle="We obtain information about you in the following ways:" color="green" />

            <div className="space-y-5">
              {/* Direct Information */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 overflow-hidden shadow-sm"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#3E8F5E] to-[#3E8F5E]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">Information You Give Us Directly</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed">
                  For example, we may obtain information about you when you decide to become a member, partner or key stakeholder of UPTIB or take part in one of our events, or when you register to receive one of our newsletters. UPTIB collects information directly from individuals or from the parent companies of the individuals. The information could be collected through emails, phone calls, online registration forms, event registration forms and face-to-face meetings. UPTIB collects personal data about individuals when there is a legitimate basis, a contract or when such information is provided on a voluntary basis.
                </p>
              </motion.div>

              {/* Third Parties */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 overflow-hidden shadow-sm"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2F7549] to-[#2F7549]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">Third-Party Referrals & Networking</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">
                  Your information may be shared with us by third parties (i.e. a referral from an existing member or a referral as part of a contract we are delivering) or by one of our Partners. In all cases the person sharing your information should be already known to you and have obtained your permission.
                </p>
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">
                  We also receive data through networking (e.g. by you giving us a business card or by you attending one of our events) and we will add these details, if relevant, onto our internal CRM management system.
                </p>
                <p className="text-base text-[#7A7E8F] leading-relaxed">
                  If you contact us using the Contact Form on our website, we will email you in response to that request and if relevant records that information in our CRM system.
                </p>
              </motion.div>

              {/* Website Visit */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 overflow-hidden shadow-sm"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2F7549] to-[#2F7549]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">When You Visit Our Website</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">
                  We, like many companies, automatically collect the following information:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base text-[#5A5F72] leading-relaxed">Technical information, including the type of device you&apos;re using, the IP address, browser and operating system being used to connect your computer to the internet.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base text-[#5A5F72] leading-relaxed">Information about your visit to this website, for example we collect information about pages you visit and how you navigate the website, i.e. length of visits to certain pages, services you viewed and searched for, referral sources (e.g. how you arrived at our website).</span>
                  </li>
                </ul>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 overflow-hidden shadow-sm"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2F7549] to-[#2F7549]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">Social Media</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed">
                  When you interact with us on social media platforms such as LinkedIn and Twitter we may obtain information about you (for example, when you publicly tag us in an event photo). The information we receive will depend on the privacy preferences you have set on those types of platforms.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What Type of Information Is Collected ─────────────────────── */}
      <section id="info-type" className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Data Types" title="What Type of Information Is Collected from You?" color="blue" />

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden max-w-4xl shadow-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#16291E] pt-2">Personal Information We Collect</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-base text-[#7A7E8F] leading-relaxed mb-3">
                The personal information we collect, store and use might include:
              </p>
              <p className="text-base text-[#5A5F72] leading-relaxed">
                Your name and contact details (including postal address, email address and telephone number). The name of the organization you work for and the events you attend. We do not collect sensitive data about you, other than dietary / any special access requirements for the purposes of event planning.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How and Why Is Your Information Used ──────────────────────── */}
      <section id="how-used" className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Data Usage" title="How and Why Is Your Information Used?" subtitle="We may use your information for a number of different purposes, which may include:" color="blue" />

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden max-w-4xl shadow-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
              <ul className="space-y-3">
                {[
                  "providing you with the services and information you asked for.",
                  "processing orders, such as event attendance, that you have submitted.",
                  "carrying out our obligations under any contracts entered between you and us.",
                  "keeping a record of your relationship with us.",
                  "conducting analysis so we can understand how we can improve our services;",
                  "checking for updated contact details against third party sources, such as LinkedIn so we can stay in touch if you move.",
                  "seeking your views or comments on the services we provide.",
                  "notifying you of changes to our services.",
                  "sending you communications which you have requested or that may be of interest to you.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How Long Is Your Information Kept For ─────────────────────── */}
      <section id="retention" className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Retention Periods" title="How Long Is Your Information Kept For?" subtitle="We keep your information for no longer than is necessary for the purposes it was collected for. The length of time we retain your personal information is determined by operational and legal considerations. For example, we are legally required to hold some types of information to fulfil our statutory and regulatory obligations (e.g. health/safety and tax/accounting purposes). We review our retention periods on a regular basis:" color="red" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {retentionData.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 overflow-hidden shadow-sm"
                >
                  <div
                    className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)` }}
                  />
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                  >
                    <Clock className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{item.category}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-base text-[#7A7E8F] leading-relaxed">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who Has Access to Your Information ────────────────────────── */}
      <section id="access" className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Data Access" title="Who Has Access to Your Information?" color="green" />

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden max-w-4xl shadow-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#16291E] pt-2">Data Sharing Practices</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <ul className="space-y-4">
                {[
                  "We do not sell or rent your information to third parties.",
                  "We do not share your information with third parties for marketing purposes.",
                  "We may pass your information to our associates for the purpose of completing tasks on your behalf.",
                  "We have secure cloud service providers to manage our customer details and service records.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lawful Processing ────────────────────────────────────────── */}
      <section id="lawful" className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Legal Basis" title="Lawful Processing" subtitle="Data protection law requires us to rely on one or more lawful grounds to process your personal information. We consider the following grounds to be relevant:" color="blue" />

            <div className="space-y-5 max-w-5xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }} className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2F7549] to-[#2F7549]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">Performance of a Contract</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed">Where we are entering into a contract with you or performing our obligations under it, for example when you became a &apos;paying&apos; member of our network.</p>
              </motion.div>

              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.06 }} className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#3E8F5E] to-[#3E8F5E]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">Legal Obligation</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed">Where necessary, we can comply with a legal or regulatory obligation to which we are subject.</p>
              </motion.div>

              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.12 }} className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2F7549] to-[#2F7549]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <Fingerprint className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">Legitimate Interests</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">Where it is reasonably necessary to achieve our legitimate interests, i.e. those required for running UPTIB as a B2B strategic networking organization in pursuit of our shared aims and ideals. For example, to:</p>
                <ul className="space-y-3 mb-5">
                  {["broker connections where there is mutual benefit in doing so","send postal communications which we think will be of interest to you;","conduct research to better understand the priorities of our membership and to represent accurately the UK and Pakistan business community.","contact you to seek your views or comments on emerging political or economic issues.","enhance, modify, personalize, or otherwise improve our services /communications for the benefit of our members, partners and stakeholders; and understand better how people interact with our website.","invite you to event(s) that we may think are relevant to you in your professional capacity."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#F5F4F2] border border-[#D8D5CF] rounded-lg p-5">
                  <p className="text-base text-[#7A7E8F] leading-relaxed">When we legitimately process your personal information in this way, we consider and balance any potential impact on you (both positive and negative), and your rights under data protection laws. We will not use your personal information where our interests are overridden by the impact on you, for example, where use would be excessively intrusive (unless, for instance, we are otherwise required or permitted to by law).</p>
                </div>
              </motion.div>

              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.18 }} className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2F7549] to-[#2F7549]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#16291E] pt-2">Specific Consent</h3>
                </div>
                <p className="text-base text-[#7A7E8F] leading-relaxed">Where you have provided specific consent to us using your personal information in a certain way, such as to send you email, text and/or contact via telephone.</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Marketing Communications & Building Profiles ──────────────── */}
      <section id="marketing" className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Communications" title="Marketing Communications" color="red" />

            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E]">Marketing</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-5">We may use your contact details to provide you with information about the vital work we do for the UK and Pakistan business community and additional opportunities to support us or to work together on projects, if we think it may be of interest to you.</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold tracking-[0.1em] uppercase text-[#2F7549] mb-2">Email</h4>
                    <p className="text-base text-[#7A7E8F] leading-relaxed">You may opt out of our marketing communications at any time by clicking the unsubscribed link at the end of our marketing emails.</p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold tracking-[0.1em] uppercase text-[#2F7549] mb-2">Post</h4>
                    <p className="text-base text-[#7A7E8F] leading-relaxed">We may occasionally send you marketing communications by post unless you have told us that you would prefer not to hear from us, under your access rights request (details listed below).</p>
                  </div>
                </div>
              </motion.div>

              <motion.div id="profiles" initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E]">Building Profiles</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">We may analyze your personal information to create a profile of your interests and preferences so that we can tailor and target our communications in a way that is timely and relevant to you {"\u2013"} an example of this would be where interest in one of our Special Interest Groups (SIGs) has been expressed by you. This allows us to be more focused, efficient, and cost effective with our resources and reduces the risk of someone receiving information they may find inappropriate or irrelevant.</p>
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">We{"\u2019"}re committed to putting you in control of your data, please refer to your rights, below.</p>
                <p className="text-base text-[#7A7E8F] leading-relaxed">We may also use your personal information to detect and reduce fraud and credit risk.</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Your Rights ──────────────────────────────────────────────── */}
      <section id="rights" className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Data Subject Rights" title="Your Rights" subtitle="Under UK data protection law, you have certain rights over the personal information that we hold about you. Here is a summary of the rights that we think apply:" color="red" />

            <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
              {[
                { icon: Eye, title: "Right of Access", color: "#2F7549", desc: "You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email: " },
                { icon: FileText, title: "Right to Correction", color: "#3E8F5E", desc: "We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected." },
                { icon: Shield, title: "Right to Restrict Use", color: "#2F7549", desc: "You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we\u2019re not lawfully allowed to use it." },
                { icon: AlertTriangle, title: "Right of Erasure", color: "#2F7549", desc: "You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it." },
                { icon: Database, title: "Right to Data Portability", color: "#3E8F5E", desc: "If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format." },
                { icon: Scale, title: "Right to Object", color: "#2F7549", desc: "You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes." },
              ].map((right, i) => {
                const Icon = right.icon;
                return (
                  <motion.div key={right.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className={`absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full opacity-40 group-hover:opacity-100 transition-opacity duration-300`} style={{ background: `linear-gradient(to bottom, ${right.color}, ${right.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${right.color}10`, border: `1px solid ${right.color}20` }}>
                      <Icon className="relative z-10 w-5 h-5" style={{ color: right.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{right.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">
                      {right.desc}
                      {right.title === "Right of Access" && <a href="mailto:info@ukpaktrade.org.uk" className="text-[#2F7549] hover:text-[#8FD3AE] transition-colors">info@ukpaktrade.org.uk</a>}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.36 }} className="relative bg-gradient-to-br from-[#2F7549]/10 to-[#2F7549]/10 border border-[#2F7549]/20 rounded-xl p-6 mt-8 overflow-hidden max-w-5xl">
              <div className="relative">
                <p className="text-base text-[#5A5F72] leading-relaxed mb-4">
                  If you want to exercise any of the above rights, please email us at{" "}
                  <a href="mailto:info@ukpaktrade.org.uk" className="text-[#2F7549] hover:text-[#8FD3AE] transition-colors">info@ukpaktrade.org.uk</a>
                  {" "}and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for further information and/or evidence of identity. We will endeavor to respond fully to all requests within 10 working days of your request, however if we are unable to do so we will contact you with reasons for the delay.
                </p>
                <p className="text-base text-[#5A5F72] leading-relaxed">
                  Please note that exceptions apply to a number of these rights, and not all rights will be applicable in all circumstances. For more details we recommend you consult the guidance published by the UK{"\u2019"}s Information Commissioner{"\u2019"}s Office,{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2F7549] hover:text-[#8FD3AE] transition-colors">https://ico.org.uk</a>.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Keeping Your Information Safe & Security ──────────────────── */}
      <section id="security" className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Data Protection" title="Keeping Your Information Safe" color="green" />

            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E]">Technical & Organisational Controls</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">When you give us personal information, we take steps to ensure that appropriate technical and organizational controls are in place to protect it.</p>
                <p className="text-base text-[#7A7E8F] leading-relaxed">Any sensitive information such as credit or debit card details is encrypted and protected with the following software 128 Bit encryption on SSL. When you are on a secure page, a lock icon will appear on the bottom of web browsers such as Microsoft Internet Explorer. This information will be stored by a third party. We have carried out due diligence with the organization.</p>
              </motion.div>

              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E]">Security</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-4">UPTIB uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to only those employees, contractors or agents who have a legitimate business need to have access to that data. The employees, contractors or agents will process your personal data in accordance with our instructions. They will be subject to a duty of confidentiality and due care with respect to handling personal data. We have put in place procedures to deal with any suspected data security breach and will notify you and any applicable regulator of a suspected breach where we are legally required to do so.</p>
                <p className="text-base text-[#7A7E8F] leading-relaxed">Emails are transmitted normally over the Internet, and this can never be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk. Once we receive your information, we will make our best effort to ensure its security on our systems. Where we have given (or where you have chosen) a password which enables you to access certain parts of our website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      </div>

      {/* ── Contact CTA — Gradient dark section ──────────────────────── */}
      <section id="contact" className="relative overflow-hidden py-12" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2F7549, transparent 50%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div>
              <p className="text-base font-bold tracking-[0.2em] uppercase text-[#2F7549] mb-4">Get in Touch</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">Contact Information</h2>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-8">
                For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}
                <a href="mailto:info@ukpaktrade.org.uk" className="text-[#2F7549] hover:text-[#8FD3AE] transition-colors">info@ukpaktrade.org.uk</a>
              </p>
              <div className="flex flex-wrap gap-4">
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
