import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Shield,
  CheckCircle2,
  FileText,
  Users,
  Lock,
  Scale,
  AlertTriangle,
  Globe2,
  RefreshCw,
  XCircle,
  Eye,
  Award,
  Heart,
  Target,
  BadgeCheck,
  Ban,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";
import { DownloadButton } from "@/components/DownloadButton";

/* ââ Membership Overview Stats âââââââââââââââââââââââââââââââââââ */
const overviewStats = [
  { value: "Open", label: "To All Eligible Applicants", color: "#047857" },
  { value: "Annual", label: "Membership Term", color: "#10B981" },
  { value: "UK Law", label: "Governed by England & Wales", color: "#047857" },
  { value: "GDPR", label: "Data Protection Compliant", color: "#047857" },
];

/* ââ Core Terms (Sections 1â5 from PDF) ââââââââââââââââââââââââââ */
const coreTerms = [
  {
    number: "01",
    title: "Membership",
    icon: Users,
    color: "#047857",
    items: [
      "Membership is available to individuals or entities who meet UPTIB's membership criteria",
      "UPTIB offers different membership tiers, each with associated benefits",
      "Details of membership tiers are provided at the time of application",
      "Membership commences on the date the application is accepted",
      "Membership continues for the period specified in the membership plan unless terminated earlier",
    ],
  },
  {
    number: "02",
    title: "Member Responsibilities",
    icon: ClipboardList,
    color: "#047857",
    items: [
      "Provide accurate and complete information during the application process",
      "Comply with UPTIB's policies, codes of conduct, and applicable UK law",
      "Use UPTIB services responsibly and not engage in conduct that harms UPTIB or other members",
      "Maintain the confidentiality of any proprietary or sensitive information received during membership",
      "Responsible for maintaining the confidentiality of account credentials",
    ],
  },
  {
    number: "03",
    title: "UPTIB Responsibilities",
    icon: Shield,
    color: "#047857",
    items: [
      "Provide the services and benefits associated with the Member's chosen membership tier",
      "Notify Members of any changes to services or policies",
      "Process personal data in accordance with the UK GDPR and the Data Protection Act 2018",
    ],
  },
  {
    number: "04",
    title: "Termination",
    icon: XCircle,
    color: "#10B981",
    items: [
      "UPTIB may terminate membership if the Member breaches these Terms, misuses services, or violates applicable law",
      "Members may terminate their membership by giving written notice to UPTIB",
      "Upon termination, access to services will cease",
    ],
  },
];

/* ââ Code of Conduct Principles ââââââââââââââââââââââââââââââââââ */
const conductPrinciples = [
  { title: "Integrity", description: "Consistently demonstrate honesty and ethical behaviour in all actions and decisions.", icon: Shield, color: "#047857" },
  { title: "Respect & Equality", description: "Treat all members with dignity, equality, and cultural sensitivity, without discrimination.", icon: Heart, color: "#10B981" },
  { title: "Competence", description: "Accurately represent skills and experience; continuously strive to maintain professional competence.", icon: Target, color: "#047857" },
  { title: "Loyalty", description: "Act with unwavering loyalty towards the Forum and maintain confidentiality of sensitive information.", icon: Lock, color: "#047857" },
  { title: "Impartiality", description: "Provide objective advice; disclose any potential conflicts of interest promptly and transparently.", icon: Scale, color: "#10B981" },
  { title: "Ethical Conduct", description: "Do not pursue personal gain at the expense of the Forum; actively enhance its reputation.", icon: Award, color: "#047857" },
  { title: "Non-discrimination", description: "Refrain from engaging in discriminatory practices in any professional activities.", icon: Ban, color: "#047857" },
  { title: "Continuous Development", description: "Commit to lifelong learning and actively seek opportunities to develop skills and knowledge.", icon: RefreshCw, color: "#10B981" },
  { title: "Professionalism", description: "Adhere to recognised professional standards; offer services diligently within areas of expertise.", icon: BadgeCheck, color: "#047857" },
];

/* ââ Disciplinary Procedure Steps ââââââââââââââââââââââââââââââââ */
const disciplinarySteps = [
  { step: "Written complaint submitted to the Management Committee", outcome: "Complaint received" },
  { step: "Investigation by Committee with authority to summon relevant members", outcome: "Investigation begins" },
  { step: "If misconduct is determined, member given 7 days to respond", outcome: "Right to respond" },
  { step: "Disciplinary actions: caution, reprimand, suspension, or expulsion", outcome: "Decision issued" },
  { step: "If complaint lacks merit, complainant is duly informed", outcome: "Matter closed" },
  { step: "Formal proceedings arranged for a fair hearing of the charges", outcome: "Fair hearing" },
  { step: "Right to appeal within 7 days with a written appeal", outcome: "Appeal submitted" },
  { step: "Executive Committee reviews appeal; verdict is final and non-negotiable", outcome: "Final decision" },
];

/* ââ Legal Protections âââââââââââââââââââââââââââââââââââââââââââ */
const legalProtections = [
  {
    title: "Governing Law",
    description: "These Terms shall be governed by and construed in accordance with the laws of England and Wales.",
    icon: Scale,
    color: "#047857",
  },
  {
    title: "Limitation of Liability",
    description: "UPTIB shall not be liable for any indirect, incidental, or consequential losses arising from membership, to the maximum extent permitted by law.",
    icon: Shield,
    color: "#10B981",
  },
  {
    title: "Intellectual Property",
    description: "All intellectual property related to the UPTIB website, branding, content, and services are owned by UPTIB or its licensors.",
    icon: Lock,
    color: "#047857",
  },
  {
    title: "Data Protection",
    description: "Personal data is processed in accordance with GDPR. Members have the right to access, update, or delete their personal data at any time.",
    icon: Eye,
    color: "#047857",
  },
  {
    title: "Dispute Resolution",
    description: "Disputes shall be resolved through the UPTIB Arbitration Framework or in the courts located within England and Wales.",
    icon: Globe2,
    color: "#10B981",
  },
  {
    title: "Force Majeure",
    description: "Neither party shall be held responsible for any delay or failure to perform due to events beyond their reasonable control.",
    icon: AlertTriangle,
    color: "#047857",
  },
];

/* ââ FAQs ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
const faqs = [
  {
    q: "Who is eligible for UPTIB membership?",
    a: "Membership is available to individuals aged 24 years or older, or entities who meet UPTIB's membership criteria. By becoming a member, you confirm that you meet the age requirement.",
  },
  {
    q: "What membership tiers are available?",
    a: "UPTIB offers different membership tiers, each with associated benefits. Details of membership tiers and their specific benefits are provided at the time of application.",
  },
  {
    q: "How do I apply for membership?",
    a: "Complete the registration online, provide all required information, and agree to the Terms & Conditions. Once approved, you will receive confirmation and gain access to membership services.",
  },
  {
    q: "How long does membership last?",
    a: "Membership is valid for a term of one year from the date of registration, unless terminated earlier. Membership will be automatically renewed at the end of the term, and you will be notified in advance.",
  },
  {
    q: "What happens if I breach the Code of Conduct?",
    a: "The Management Committee will investigate. If misconduct is found, you will have 7 days to respond. Disciplinary actions range from caution and reprimand to suspension or expulsion. You retain the right to appeal within 7 days.",
  },
  {
    q: "How can I terminate my membership?",
    a: "You may terminate your membership at any time by giving written notice to UPTIB. Upon termination, access to services will cease.",
  },
  {
    q: "Is the non-solicitation clause enforceable?",
    a: "Yes. During membership and for 36 months after termination, you agree not to solicit or hire any UPTIB employees, contractors, or personnel.",
  },
  {
    q: "How is my personal data protected?",
    a: "Your personal data is processed in accordance with the UK GDPR and Data Protection Act 2018. You have the right to access, update, or delete your personal data at any time. See our Privacy Policy for full details.",
  },
];

export default function MembershipTermsClient() {
  return (
    <div className="content-body">
      {/* ââ HERO âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <PageHero
        label="Policy Document"
        title={
          <>
            Membership Terms
            <br />
            &amp; Conditions
          </>
        }
        subtitle="By applying for or maintaining membership with the UK–Pakistan Trades & Investment Board (UPTIB), you agree to be bound by these Terms and Conditions."
        particleNetwork
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Apply Now</ShinyButton>
          <DownloadButton href="/documents/UPTIB-Membership-Terms-and-Conditions.pdf" filename="UPTIB-Membership-Terms-and-Conditions.pdf">
            Download PDF
          </DownloadButton>
        </div>
      </PageHero>

      {/* ââ Stats / Trust Bar ââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, i) => (
            <div key={stat.label} className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative h-full text-center bg-white rounded-xl p-6">
                <p className="font-heading font-extrabold text-2xl sm:text-3xl mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-[#5A5F72] text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ââ Scope & Purpose ââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader label="Introduction" title="Scope & Purpose" color="blue" />
              <p className="text-[#3D4152] text-lg leading-relaxed mb-5">
                These Terms and Conditions govern your membership with the UK–Pakistan Trades & Investment Board (UPTIB). By using this website and/or applying to register as a member, you agree to abide by these Conditions.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                These Conditions apply to all membership tiers, services, and benefits provided by UPTIB. If you do not agree to these Conditions, you must not use the website or apply for membership.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                All members are required to give an undertaking that they would abide by the UPTIB Code of Conduct. Adherence to the Code is mandatory for all members, ensuring consistency, integrity, and professionalism in our collective endeavours.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#04785710", border: "1px solid #04785720" }}>
                    <FileText className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">Key Points</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-3">
                  {[
                    "Membership is non-transferable",
                    "Annual term with automatic renewal",
                    "Governed by the laws of England and Wales",
                    "GDPR and Data Protection Act 2018 compliant",
                    "Code of Conduct is binding on all members",
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#5A5F72] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Core Terms (Steps) âââââââââââââââââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader label="Core Terms" title="Membership Terms" subtitle="The fundamental terms governing your membership, responsibilities, and termination rights." color="red" dark />

          <div className="space-y-6">
            {coreTerms.map((term, i) => {
              const Icon = term.icon;
              return (
                <div key={term.number} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:shadow-md hover:shadow-white/5 transition-shadow duration-300">
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${term.color}, ${term.color}40)` }} />
                  <div className="p-7 lg:p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold border-2" style={{ background: `linear-gradient(135deg, ${term.color}30, ${term.color}10)`, borderColor: `${term.color}60`, color: term.color }}>
                        {term.number}
                      </div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${term.color}08` }}>
                        <Icon className="w-5 h-5" style={{ color: term.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-white text-xl">{term.title}</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-0 lg:ml-[104px]">
                      {term.items.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: term.color }} strokeWidth={2} />
                          <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Code of Conduct ââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Code of Conduct" title="Member Code of Conduct" subtitle="All members are required to uphold these principles. The Code of Conduct is issued under the authority of the UPTIB Constitution and is binding on all members." color="blue" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conductPrinciples.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}60)` }} />
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: `${p.color}10`, border: `1px solid ${p.color}20` }}>
                        <Icon className="w-6 h-6" style={{ color: p.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{p.title}</h3>
                      <p className="text-[#5A5F72] text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Disciplinary Procedure â DARK ââââââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader label="Enforcement" title="Disciplinary Procedure" color="green" dark />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-5">
                All members of the Forum are expected to adhere to the Code of Conduct. In the event of a violation, the following disciplinary procedure applies. Members retain the right to appeal any decision.
              </p>

              <div className="space-y-3">
                {disciplinarySteps.map((item, i) => (
                  <div key={item.step} className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center text-xs font-bold text-[#10B981]">{i + 1}</span>
                      <span className="text-white text-sm font-medium">{item.step}</span>
                    </div>
                    <span className="text-xs font-bold text-[#10B981] bg-[#10B981]/8 px-2.5 py-1 rounded-full whitespace-nowrap">{item.outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#04785710", border: "1px solid #04785720" }}>
                  <AlertTriangle className="w-5 h-5 text-[#F9A8B4]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">Disciplinary Actions</h3>
              </div>
              <div className="h-px bg-white/10 mb-5" />
              <ul className="space-y-4">
                {[
                  { action: "Caution", desc: "Formal warning issued. Details circulated to members without disclosing the member's identity." },
                  { action: "Reprimand", desc: "Formal reprimand recorded. Circumstances communicated confidentially." },
                  { action: "Suspension", desc: "Temporary suspension of membership privileges. Forum may inform members at its discretion." },
                  { action: "Expulsion", desc: "Permanent removal from membership. Forum may inform members confidentially at its discretion." },
                ].map((item, i) => (
                  <li key={item.action} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center" style={{ background: i < 2 ? "#EAB30820" : "#04785720" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: i < 2 ? "#EAB308" : "#047857" }} />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-sm">{item.action}</span>
                      <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-white/50 text-xs leading-relaxed">
                  <span className="font-semibold text-white/70">Right to Appeal:</span> Affected members retain the right to appeal the committee&apos;s decision within 7 days by submitting a written appeal. The Executive Committee will review the appeal, and the verdict shall be final and non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Legal Protections â DARK âââââââââââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader label="Legal" title="Legal Protections & Compliance" subtitle="Your rights and our legal obligations under UK law." color="green" dark />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalProtections.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group relative h-full rounded-2xl border border-white/10 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
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
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Additional Provisions ââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Provisions" title="Additional Provisions" color="blue" />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-7">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Membership Rules</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <ul className="space-y-3">
                {[
                  { label: "Non-Exclusive", desc: "Membership is non-exclusive; you may participate in other programmes or services at your discretion." },
                  { label: "No Partnership", desc: "Nothing in these Terms creates a partnership, joint venture, or agency relationship between you and UPTIB." },
                  { label: "Non-Solicitation", desc: "During membership and for 36 months after termination, you agree not to solicit or hire UPTIB employees, contractors, or personnel." },
                  { label: "Assignment", desc: "UPTIB may assign or transfer its rights and obligations. You may not assign or transfer without prior written consent." },
                  { label: "Survival", desc: "Provisions related to confidentiality, intellectual property, and indemnity survive termination of membership." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <div>
                      <span className="font-semibold text-[#1C1F2E] text-sm">{item.label}</span>
                      <p className="text-[#5A5F72] text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-7">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Website & Communication</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <ul className="space-y-3">
                {[
                  { label: "Restrictions on Use", desc: "You agree not to misuse our services, including unauthorised use of intellectual property, unlawful activities, or spamming." },
                  { label: "Cookies", desc: "Our website uses cookies to improve your experience and analyse traffic. Continued use constitutes consent." },
                  { label: "Third-Party Links", desc: "Our website may contain links to third-party websites. UPTIB is not responsible for third-party content." },
                  { label: "Marketing Consent", desc: "By joining, you consent to receiving marketing communications. You can opt-out at any time via the unsubscribe link." },
                  { label: "Amendments", desc: "UPTIB may update these Terms from time to time. Members will be notified of material changes; continued use constitutes acceptance." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <div>
                      <span className="font-semibold text-[#1C1F2E] text-sm">{item.label}</span>
                      <p className="text-[#5A5F72] text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ FAQs â DARK ââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader label="FAQs" title="Frequently Asked Questions" color="red" dark />

          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="font-heading font-bold text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Acceptance âââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader label="Acceptance" title="Agreement & Acceptance" color="green" />
            <p className="text-[#5A5F72] text-lg leading-relaxed mb-6">
              By submitting an application for membership or maintaining membership, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions, including the Code of Conduct, Disciplinary Procedure, and all associated policies.
            </p>
            <p className="text-[#5A5F72] text-base leading-relaxed mb-8">
              These Terms and Conditions, along with our{" "}
              <Link href="/privacy" className="text-[#047857] hover:underline">Privacy Policy</Link>,{" "}
              <Link href="/code-of-conduct" className="text-[#047857] hover:underline">Code of Conduct</Link>, and{" "}
              <Link href="/arbitration/framework" className="text-[#047857] hover:underline">Arbitration Framework</Link>,
              constitute the entire agreement between you and UPTIB regarding your membership.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ShinyButton href="/membership#apply">Apply for Membership</ShinyButton>
              <Button href="/contact" variant="ghost" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ Contact ââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#5A5F72] text-sm leading-relaxed">
              <span className="font-semibold text-[#1C1F2E]">UK–Pakistan Trades & Investment Board (UPTIB)</span>
              <br />
              134-136 Westbourne Terrace, London, W2 6QB, United Kingdom
              <br />
              For any questions about these Terms, please contact{" "}
              <a href="mailto:info@ukpaktrade.org.uk" className="text-[#047857] hover:underline">info@ukpaktrade.org.uk</a>
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ââ CTA ââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <GlobalCTA
        label="Join UPTIB"
        title="Ready to Become a Member?"
        subtitle="Apply for membership and join the UK-Pakistan technology corridor. Our team will review your application within 5 business days."
        primaryButtonText="Apply Now"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Membership Overview"
        secondaryButtonLink="/membership"
      />
    </div>
  );
}
