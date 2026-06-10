"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import {
  Shield, CheckCircle2, Users, Heart, Scale, Lightbulb,
  BookOpen, Award, Briefcase, MessageCircle, AlertTriangle,
  Gavel, Ban, GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { GlobalCTA } from "@/components/GlobalCTA";
import { DownloadButton } from "@/components/DownloadButton";

const navSections = [
  { id: "principles", label: "Principles" },
  { id: "whatsapp-rules", label: "WhatsApp Rules" },
  { id: "disciplinary", label: "Disciplinary Procedure" },
];

const principles = [
  { icon: Shield, title: "Integrity", description: "Members will consistently demonstrate honesty and ethical behavior in all actions and decisions." },
  { icon: Users, title: "Respect and Equality", description: "Treat all members with dignity, equality, and cultural sensitivity, without discrimination based on any criteria." },
  { icon: Award, title: "Competence", description: "Members will accurately represent their skills and experience and continuously strive to maintain professional competence." },
  { icon: Heart, title: "Loyalty", description: "Act with unwavering loyalty towards the Forum and maintain confidentiality when entrusted with sensitive information." },
  { icon: Scale, title: "Impartiality", description: "Provide objective advice, disclosing any potential conflicts of interest promptly and transparently." },
  { icon: Lightbulb, title: "Ethical Conduct", description: "Members will not pursue personal gain at the expense of the Forum and actively work to enhance its reputation." },
  { icon: Ban, title: "Non-discrimination", description: "Refrain from engaging in discriminatory practices in any professional activities." },
  { icon: GraduationCap, title: "Continuous Development", description: "Commit to lifelong learning, actively seeking opportunities to develop skills and knowledge, and encouraging fellow members to do the same." },
  { icon: Briefcase, title: "Professionalism", description: "Adhere to recognized professional standards, offering services and advice diligently and responsibly within their areas of expertise." },
];

const whatsappRules = [
  { number: "01", title: "No Personal Attacks", rule: "Refrain from personal attacks in group chats to maintain a respectful environment; violation may result in temporary or permanent BAN." },
  { number: "02", title: "Avoid Irrelevant Posts", rule: "Steer clear of posting irrelevant content or discussions." },
  { number: "03", title: "No Political or Religious Posts", rule: "Do not share political, religious, sectarian, or biased content." },
  { number: "04", title: "No Unauthorized Adverts", rule: "Obtain prior approval from Management before sharing advertisements in the group." },
  { number: "05", title: "Notify Admins of Number Changes", rule: "Inform Group Admin or Management of any mobile number changes within 3 days to avoid temporary or permanent BAN." },
  { number: "06", title: "Stay Relevant", rule: "Keep discussions aligned with the group\u2019s objectives to ensure focused communication." },
  { number: "07", title: "Post Curfew", rule: "Refrain from posting after 11:00 PM unless urgent matters arise." },
  { number: "08", title: "Welcoming New Members", rule: "Designate one member to welcome new members on behalf of the group to maintain efficiency." },
  { number: "09", title: "Address Grievances Privately", rule: "Contact Management directly for grievances instead of discussing them publicly." },
];

const disciplinarySteps = [
  { step: "01", title: "Complaint Submission", description: "All complaints must be submitted in writing and sent to the Management Committee of the Forum. Any member is eligible to lodge a complaint." },
  { step: "02", title: "Investigation", description: "Upon receipt, the complaint will undergo investigation by a Committee vested with the authority to summon any member(s) deemed relevant to the matter." },
  { step: "03", title: "Response Period", description: "Should the Committee determine potential misconduct, the implicated member(s) will be afforded a 7-day period to respond to the allegations." },
  { step: "04", title: "Disciplinary Actions", description: "Should the member(s) be found guilty, disciplinary actions may include caution, reprimand, suspension, or expulsion from Forum membership." },
  { step: "05", title: "Lack of Merit", description: "If the complaint lacks merit following the Committee\u2019s evaluation, the complainant will be duly informed." },
  { step: "06", title: "Referral to Disciplinary Committee", description: "In instances where the matter is referred to the Disciplinary Committee, formal proceedings will be arranged for a fair hearing of the charges." },
  { step: "07", title: "Escalation", description: "If the Committee finds the response inadequate or no written representation is received, the matter will be escalated to the Disciplinary Committee." },
  { step: "08", title: "Outcome Communication", description: "For caution and reprimand, the Forum will disseminate details of the circumstances and outcome to all members without disclosing the member\u2019s identity. In cases of suspension or expulsion, the Forum will, at its discretion, inform members confidentially." },
  { step: "09", title: "Right to Appeal", description: "Affected members retain the right to appeal the committee\u2019s decision within 7 days, submitting a written appeal." },
  { step: "10", title: "Appeal Review", description: "The Executive Committee will then review the appeal." },
  { step: "11", title: "Final Verdict", description: "The verdict rendered by the Executive Committee on the appeal(s) shall be final and non-negotiable." },
];

const principleColors = ["#2F7549", "#3E8F5E", "#2F7549", "#2F7549", "#3E8F5E", "#2F7549", "#2F7549", "#3E8F5E", "#2F7549"];
const disciplinaryColors = ["#2F7549", "#3E8F5E", "#2F7549", "#2F7549", "#3E8F5E", "#2F7549", "#2F7549", "#3E8F5E", "#2F7549", "#3E8F5E", "#2F7549"];

export default function CodeOfConductPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("principles");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      <PageHero
        label="Ethics & Standards"
        title="Code of Conduct"
        subtitle="UK–Pakistan Trades & Investment Board Code of Conduct"
        image="/image/banners/banner29.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <DownloadButton href="/documents/UPTIB-Code-of-Conduct.pdf" filename="UPTIB-Code-of-Conduct.pdf">
            Download PDF
          </DownloadButton>
        </div>
      </PageHero>

      <div className="content-body">
      {/* ââ Summary + Quick Nav â Light section ââââââââââââââââââââââââ */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Our Standards" title="Ethical Framework" color="blue" />

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  All members are required to give an undertaking to the effect that they would abide by the UPTIB Code of Conduct. The Code of Conduct will also specify the procedure for the action to be taken against concerned members for any breach of this Code. The following is the Code of Conduct prepared by the Executive Committee and adopted after approval by balloting by the Voting Members of UPTIB.
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  UK–Pakistan Trades & Investment Board Code of Conduct is issued under the authority of the Constitution of the UK–Pakistan Trades & Investment Board and is binding on all members of the Organization. {"\u201C"}UK-Pakistani Tech Forum is hereby also mentioned as UPTIB{"\u201D"}
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  The Code of Conduct for UK–Pakistan Trades & Investment Board is a foundational document established under the authority of our organization{"\u2019"}s Constitution. It outlines the principles and standards that all members are expected to uphold in their professional and personal conduct.
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  As a binding document, adherence to this Code is mandatory for all members, ensuring consistency, integrity, and professionalism in our collective endeavors. By adhering to these ethical and behavioral guidelines, we demonstrate our commitment to excellence, integrity, and mutual respect within our community and in our interactions with others. {"\u201C"}UK-Pakistani Tech Forum is hereby also mentioned as UPTIB{"\u201D"}
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed">
                  The UPTIB Code of Conduct is compulsory for all members and adherence to its principles is obligatory. Therefore, it is imperative for every member of UPTIB to possess a comprehensive understanding and knowledge of its provisions.
                </p>
              </motion.div>

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
                <nav className="space-y-2">
                  {navSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 border-l-2 rounded-r-lg ${
                        activeSection === s.id
                          ? "border-[#2F7549] text-[#2F7549] bg-[#2F7549]/[0.08]"
                          : "border-transparent text-[#7A7E8F] hover:text-[#3D4152] hover:border-[#D8D5CF] hover:bg-[#F5F4F2]"
                      }`}
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

      {/* ââ 9 Principles â Light alt section âââââââââââââââââââââââââââ */}
      <section id="principles" className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Core Values" title="Our 9 Principles" subtitle="The foundation of ethical conduct and professional standards that every UPTIB member upholds." color="blue" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {principles.map((item, i) => {
                const Icon = item.icon;
                const color = principleColors[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:border-[#D8D5CF] hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm"
                  >
                    {/* Left accent */}
                    <div
                      className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                      style={{ background: `linear-gradient(to bottom, ${color}, ${color}40)` }}
                    />

                    <div
                      className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${color}10`, border: `1px solid ${color}20` }}
                    >
                      <div
                        className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                        style={{ backgroundColor: color }}
                      />
                      <Icon className="relative z-10 w-5 h-5" style={{ color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{item.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ WhatsApp Group Rules â Light section âââââââââââââââââââââââ */}
      <section id="whatsapp-rules" className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Communication Standards" title="WhatsApp Group Rules" subtitle="Guidelines for professional conduct in UPTIB WhatsApp groups and digital communication channels." color="green" />

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="p-3 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20">
                    <MessageCircle className="w-6 h-6 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#16291E]">Group Communication Policy</h3>
                    <p className="text-base text-[#7A7E8F]">Applicable to all UPTIB WhatsApp groups and channels</p>
                  </div>
                </motion.div>
                <div className="space-y-3">
                  {whatsappRules.slice(0, 5).map((item, i) => (
                    <motion.div
                      key={item.number}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group relative flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 shadow-sm"
                    >
                      <span
                        className="text-base font-bold tabular-nums pt-0.5 flex-shrink-0"
                        style={{ color: "#3E8F5E" }}
                      >
                        {item.number}
                      </span>
                      <p className="text-base text-[#7A7E8F] leading-relaxed"><span className="text-[#5A5F72] font-semibold">{item.title}:</span> {item.rule}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {whatsappRules.slice(5).map((item, i) => (
                  <motion.div
                    key={item.number}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 shadow-sm"
                  >
                    <span
                      className="text-base font-bold tabular-nums pt-0.5 flex-shrink-0"
                      style={{ color: "#3E8F5E" }}
                    >
                      {item.number}
                    </span>
                    <p className="text-base text-[#7A7E8F] leading-relaxed"><span className="text-[#5A5F72] font-semibold">{item.title}:</span> {item.rule}</p>
                  </motion.div>
                ))}

                {/* Warning card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="relative bg-gradient-to-br from-[#2F7549]/10 to-[#2F7549]/10 border border-[#2F7549]/20 rounded-xl p-6 mt-3 overflow-hidden"
                >
                  <div className="relative">
                    <AlertTriangle className="w-5 h-5 text-[#2F7549] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">
                      Violations of these rules may result in removal from the group and further disciplinary action as outlined in the Disciplinary Procedure below.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Disciplinary Procedure â Light alt section âââââââââââââââââ */}
      <section id="disciplinary" className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Enforcement" title="Disciplinary Procedure" subtitle={<>All members of the Forum are expected to adhere to the Forum{"\u2019"}s Code of Conduct. In the event of a member wishing to file a complaint against other members for violating the Code, the following procedures apply:</>} color="red" />

            <div className="space-y-0">
              {disciplinarySteps.map((item, i) => {
                const color = disciplinaryColors[i];
                return (
                <motion.div
                  key={item.step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="grid grid-cols-[70px_1fr] border-b border-[#D8D5CF] last:border-b-0 group hover:bg-white/60 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center py-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${color}14`, border: `1px solid ${color}25` }}
                    >
                      <span className="text-base font-bold tabular-nums" style={{ color }}>{item.step}</span>
                    </div>
                  </div>
                  <div className="py-6 pl-6 border-l border-[#D8D5CF]">
                    <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{item.title}</h3>
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Reporting & Commitment â Light section ââââââââââââââââââââ */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Accountability" title="Reporting & Commitment" color="blue" />

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Reporting a Concern */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E]">Reporting a Concern</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-5">
                  If you witness or experience a breach of this Code of Conduct, you are encouraged to report it through the following channels:
                </p>
                <ul className="space-y-3">
                  {[
                    "Email the governance team at info@ukpaktrade.org.uk",
                    "Speak confidentially with any Board member",
                    "Use the anonymous reporting form on the member portal",
                    "Contact the designated ethics officer directly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Our Commitment */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#3E8F5E]/10 border border-[#3E8F5E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#3E8F5E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#16291E]">Our Commitment</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-3">
                  {[
                    "All reports are treated with strict confidentiality",
                    "No retaliation against anyone who reports in good faith",
                    "Fair and transparent investigation process",
                    "Timely resolution with clear communication to all parties",
                    "Regular review and updates to the Code of Conduct",
                    "Zero tolerance for violations of ethical standards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      </div>

      {/* ââ CTA ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <GlobalCTA
        label="Questions?"
        title="Committed to the Highest Standards"
        subtitle="If you have questions about the Code of Conduct or need to report a concern, please contact the governance team."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Apply for Membership"
        secondaryButtonLink="/membership#apply"
        image="/image/bedding-h.jpg"
      />
    </div>
  );
}
