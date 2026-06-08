"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { GovernanceSection } from "@/components/GovernanceSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Crown,
  Briefcase,
  Shield,
  Target,
  Award,
  Network,
  BookOpen,
  Building2,
  Layers,
  ArrowRight,
  FileText,
  Wallet,
  Settings,
  Megaphone,
  Zap,
  UserCheck,
} from "lucide-react";

/* ── Data ───────────────────────────────────────────────────────── */

const brandColors = ["#047857", "#047857", "#10B981"];

const orgChart = [
  {
    title: "Chairman",
    icon: Crown,
    level: "Executive Leadership",
    responsibilities: [
      "Provide strategic oversight and governance for UPTIB",
      "Chair Board meetings and ensure effective governance",
      "Approve major partnerships, initiatives, and strategic decisions",
      "Ensure compliance with the Constitution and governance policies",
      "Serve as a senior ambassador for UPTIB in formal settings",
    ],
  },
  {
    title: "President",
    icon: Shield,
    level: "Executive Leadership",
    responsibilities: [
      "Provide strategic direction and vision for UPTIB",
      "Lead day-to-day operations and strategic execution",
      "Represent UPTIB at the highest levels with governments and international bodies",
      "Drive membership growth and stakeholder engagement",
      "Oversee programme delivery and service quality",
      "Serve as the principal ambassador for the Forum",
    ],
  },
  {
    title: "Vice President",
    icon: UserCheck,
    level: "Executive Leadership",
    responsibilities: [
      "Direct and execute strategic and functional strategies domestically",
      "Achieve organisational goals through tactical leadership",
      "Support the President in day-to-day strategic execution",
      "Bridge communication between executive leadership and operational teams",
      "Drive key initiatives and functional programmes forward",
    ],
  },
  {
    title: "Senior Vice Chairman",
    icon: Award,
    level: "Senior Management",
    responsibilities: [
      "Act as a key leader and deputy to the Chairman",
      "Support the Chairman in their duties and represent the organisation",
      "Chair meetings and ensure effective governance",
      "Take on specific responsibilities including overseeing bilateral programmes",
      "Ensure alignment between departments and strategic objectives",
    ],
  },
  {
    title: "Vice Chairman",
    icon: Briefcase,
    level: "Senior Management",
    responsibilities: [
      "Assist the Chairman in providing strategic direction and vision",
      "Guide Forum activities toward fulfilling its mission and goals",
      "Manage specific functional areas and departmental operations",
      "Drive innovation and process improvement within departments",
      "Report on departmental performance and milestones",
    ],
  },
  {
    title: "Chief Operating Officer (CEO)",
    icon: Zap,
    level: "Executive Leadership",
    responsibilities: [
      "Responsible for overall operations and company performance",
      "Implement the goals, targets, and strategic objectives and direction",
      "Motivate employees and drive change within the organisation",
      "Report to the Board of Directors on organisational performance",
      "Oversee cross-functional coordination and operational excellence",
    ],
  },
  {
    title: "General Secretary",
    icon: BookOpen,
    level: "Operations",
    responsibilities: [
      "Maintain official records, minutes, and documentation",
      "Manage internal and external communications",
      "Coordinate meetings, agendas, and follow-up actions",
      "Ensure compliance with legal and regulatory requirements",
      "Oversee membership records and administrative processes",
    ],
  },
  {
    title: "Treasurer",
    icon: Network,
    level: "Operations",
    responsibilities: [
      "Manage financial accounts and budgets",
      "Oversee financial reporting and audit processes",
      "Ensure transparency and accountability in financial matters",
      "Advise the Board on financial strategy and sustainability",
      "Manage membership fee collection and financial systems",
    ],
  },
  {
    title: "Regional Directors",
    icon: Users,
    level: "Regional Leadership",
    responsibilities: [
      "Lead UPTIB activities and membership engagement in assigned regions",
      "Coordinate local events, meetups, and networking sessions",
      "Identify and develop regional partnerships and opportunities",
      "Report on regional performance and member feedback",
      "Represent UPTIB at regional forums and conferences",
    ],
  },
  {
    title: "Joint Secretary",
    icon: FileText,
    level: "Operations",
    responsibilities: [
      "Manage all types of administrative matters for assigned areas",
      "Handle internal communications and correspondence",
      "Arrange meetings, documentation, and logistics",
      "Support the General Secretary in cross-organisational coordination",
    ],
  },
  {
    title: "Finance Secretary",
    icon: Wallet,
    level: "Operations",
    responsibilities: [
      "Plan, manage, execute, and record all organisational financial matters",
      "Prepare financial reports and budget forecasts",
      "Coordinate with the Treasurer on audit and compliance",
      "Manage expense approvals and financial documentation",
    ],
  },
  {
    title: "Operations Secretary",
    icon: Settings,
    level: "Operations",
    responsibilities: [
      "Execute functional operations by leading teams across channels",
      "Coordinate day-to-day operational workflows and deliverables",
      "Ensure alignment between operational teams and strategic goals",
      "Monitor and report on operational performance metrics",
    ],
  },
  {
    title: "Media Coordinator",
    icon: Megaphone,
    level: "Operations",
    responsibilities: [
      "Maintain and manage social media channels and online presence",
      "Coordinate with external media teams for coverage and PR",
      "Create and curate content for digital platforms",
      "Support event promotion and communications campaigns",
    ],
  },
];

const operatingProcedures = [
  { title: "Board Meetings", desc: "Regular meetings shall be held bi-weekly to review performance, approve budgets, and set strategic direction. Meetings will be documented for record purposes." },
  { title: "General Assembly", desc: "An Annual General Meeting (AGM) is held for all members to review the year's progress, elect officers, and vote on major resolutions." },
  { title: "Committee Formation", desc: "Standing and ad-hoc committees are formed for specific functions such as events, membership, technology, and governance. Each committee has a defined terms of reference." },
  { title: "Decision Making", desc: "Decisions at Board level require a simple majority. Constitutional amendments require a two-thirds majority at a General Assembly." },
  { title: "Financial Procedures", desc: "All expenditures above a defined threshold require dual authorisation. Annual accounts are independently audited and presented at the AGM." },
  { title: "Membership Processes", desc: "Applications are reviewed within 5 working days. Approved members receive onboarding materials, access to the portal, and are assigned to relevant committees and regional groups." },
  { title: "Management Committee", desc: "The Management Committee is composed of the Vice President, General Secretary, Joint Secretary, and Operational Executive. Other members shall be brought on board based on mutual consent per requirement." },
  { title: "Special Meetings", desc: "Special meetings may be called by the Chairman or President with the approval of the Executive Committee." },
  { title: "Quorum", desc: "A quorum shall consist of top officials and two-thirds (2/3) of the members." },
];

const levelColors: Record<string, string> = {
  "Executive Leadership": "#047857",
  "Senior Management": "#10B981",
  "Governance": "#047857",
  Operations: "#047857",
  "Regional Leadership": "#10B981",
};

const procedureColors = ["#047857", "#10B981", "#047857", "#047857", "#10B981", "#047857", "#047857", "#10B981", "#047857"];

const governanceCards = [
  { id: "governance-structure", title: "Governance Structure", desc: "Our framework for accountability, transparency, and ethical oversight.", tags: ["Ethics", "Accountability"], colorIdx: 0 },
  { id: "board-of-directors", title: "Board of Directors", desc: "Strategic oversight and decision-making at the highest level.", tags: ["Oversight", "Strategy"], colorIdx: 1 },
  { id: "advisory-forum", title: "Advisory Forum", desc: "Expert guidance and strategic counsel from industry leaders.", tags: ["Expertise", "Guidance"], colorIdx: 2 },
  { id: "executive-leadership", title: "Executive Leadership", desc: "Day-to-day operations and strategic execution of UPTIB initiatives.", tags: ["Execution", "Operations"], colorIdx: 0 },
];

const stats = [
  { value: "13", label: "Leadership Roles", color: "#047857" },
  { value: "5", label: "Governance Levels", color: "#047857" },
  { value: "9", label: "Operating Procedures", color: "#10B981" },
  { value: "100%", label: "Transparency", color: "#047857" },
];

/* ── Component ──────────────────────────────────────────────────── */

export default function ManagementTeamPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      if (hash) setActiveSection(hash);
    }
  }, []);

  useEffect(() => {
    if (!activeSection) return;
    const element = document.getElementById(activeSection);
    if (!element) return;
    const timeout = setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <PageHero
        label="Management Team"
        title="Leadership &amp; Management"
        subtitle="A transparent governance framework that ensures accountability, effectiveness, and member representation at every level."
        image="/image/banners/leadership.jpg"
      >
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="backdrop-blur-md rounded-lg p-4 text-center relative overflow-hidden" style={{ background: `${stat.color}CC`, borderBottom: `3px solid ${stat.color}` }}>
              <p className="font-heading font-extrabold text-white text-2xl mb-0.5">{stat.value}</p>
              <p className="text-base font-bold tracking-[0.15em] uppercase text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Governance Overview */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our Framework" title="Organisational Structure" subtitle="UPTIB operates through a clearly defined hierarchy with defined roles, responsibilities, and reporting lines." color="blue" />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#047857]/20 to-transparent" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#047857]/10 border border-[#047857]/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#047857]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Governance Model</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-[#3D4152] text-base leading-relaxed mb-4">
                Our organisational structure combines strategic leadership with operational excellence. Each role has clearly defined responsibilities, and all office bearers are accountable to the Board and the membership through transparent reporting and regular review.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                The structure ensures that decisions are made collaboratively, resources are managed responsibly, and every member has a voice in the direction of the Forum.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Governance Levels</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <div className="space-y-3">
                {Object.entries(levelColors).map(([level, color]) => (
                  <div key={level} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-base text-[#5A5F72] font-medium">{level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Governance Navigation Grid */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Our structure" title="Governance Framework" subtitle="Click any area to navigate to that section." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {governanceCards.map((card) => (
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="text-left bg-white rounded-lg p-7 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                style={{ borderTop: `3px solid ${brandColors[card.colorIdx]}` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2" style={{ background: `radial-gradient(circle, ${brandColors[card.colorIdx]}08, transparent 70%)` }} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">{card.title}</h3>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" style={{ color: brandColors[card.colorIdx] }} />
                  </div>
                  <p className="text-[#3D4152] text-base leading-relaxed mb-4">{card.desc}</p>
                  <div className="flex gap-3">
                    {card.tags.map((tag) => (
                      <span key={tag} className="text-base font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ color: brandColors[card.colorIdx], background: `${brandColors[card.colorIdx]}10` }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Key Positions & Responsibilities */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Leadership Roles" title="Key Positions &amp; Responsibilities" subtitle="Each role within UPTIB has defined responsibilities and accountability lines." color="red" />
          <div className="grid md:grid-cols-2 gap-5">
            {orgChart.map((role, i) => {
              const Icon = role.icon;
              const color = levelColors[role.level] || "#047857";
              return (
                <motion.div
                  key={role.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative bg-white rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}10`, border: `1px solid ${color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-[#1C1F2E]">{role.title}</h3>
                        <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color }}>{role.level}</span>
                      </div>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <ul className="space-y-2.5">
                      {role.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} strokeWidth={2} />
                          <span className="text-base text-[#3D4152] leading-relaxed">{item}</span>
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

      {/* Governance Detail Sections */}
      <GovernanceSection
        id="governance-structure" variant="alt" title="Governance Structure"
        desc="A comprehensive framework ensuring accountability, transparency, and ethical decision-making across all UPTIB operations."
        image="/image/Leadership%20Governance/Governance_Structure.webp" imageAlt="UPTIB Governance Structure" imageLeft={false}
        responsibilities={["Establish and maintain ethical standards", "Oversee strategic direction and planning", "Ensure legal and regulatory compliance", "Provide transparent reporting", "Manage conflicts of interest", "Facilitate stakeholder engagement"]}
        colorIdx={0}
      />
      <GovernanceSection
        id="board-of-directors" variant="light" title="Board of Directors"
        desc="Strategic oversight and governance at the highest level, ensuring UPTIB's mission and values guide all decisions."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=90&auto=format&fit=crop" imageAlt="UPTIB Board of Directors in a professional boardroom meeting" imageLeft={true}
        responsibilities={["Approve strategic plans and major initiatives", "Oversee financial management and resources", "Appoint and evaluate executive leadership", "Ensure compliance with governance policies", "Review and approve annual reports", "Provide strategic guidance on partnerships"]}
        colorIdx={1}
      />
      <GovernanceSection
        id="advisory-forum" variant="alt" title="Advisory Forum"
        desc="Expert guidance and strategic counsel from distinguished leaders across technology, business, and policy."
        image="/image/Leadership%20Governance/Advisory_Council.webp" imageAlt="UPTIB Advisory Forum" imageLeft={false}
        responsibilities={["Provide expert guidance on technology trends", "Offer strategic counsel on program development", "Facilitate connections with key stakeholders", "Review and provide feedback on initiatives", "Serve as ambassadors for UPTIB's mission", "Contribute to thought leadership"]}
        colorIdx={2}
      />
      <GovernanceSection
        id="executive-leadership" variant="light" title="Executive Leadership"
        desc="Day-to-day operations and strategic execution of UPTIB's programs, initiatives, and member services."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=90&auto=format&fit=crop" imageAlt="UPTIB Executive Leadership team collaborating" imageLeft={true}
        responsibilities={["Execute strategic plans and initiatives", "Manage day-to-day operations and delivery", "Build and maintain stakeholder partnerships", "Oversee financial management and resources", "Provide regular reporting to the Board", "Ensure compliance with policies and procedures"]}
        colorIdx={0}
      />

      {/* Operating Procedures */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="How We Operate" title="Operating Procedures" subtitle="Key processes and procedures that ensure transparent and effective operations." color="green" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {operatingProcedures.map((item, i) => {
              const color = procedureColors[i];
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative bg-white rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}10`, border: `1px solid ${color}20` }}>
                        <span className="text-sm font-bold tabular-nums" style={{ color }}>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#1C1F2E]">{item.title}</h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-base text-[#5A5F72] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Get Involved"
        title="Transparent Governance, Collective Impact"
        subtitle="Our structure ensures every member has a voice. Learn more about how you can contribute to UPTIB's mission."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership"
        secondaryButtonText="Code of Conduct"
        secondaryButtonLink="/code-of-conduct"
      />
    </div>
  );
}
