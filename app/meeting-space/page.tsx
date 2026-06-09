"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  CheckCircle2,
  MapPin,
  Monitor,
  Wifi,
  Clock,
  Star,
  DoorOpen,
  UserCheck,
  Mail,
  ShieldCheck,
  Building2,
  BadgeCheck,
  ClipboardList,
  HeadphonesIcon,
  Palette,
  UtensilsCrossed,
} from "lucide-react";

const stats = [
  { value: "Central", label: "London Location", color: "#2F7549" },
  { value: "5+", label: "Membership Tiers", color: "#3E8F5E" },
  { value: "40hrs", label: "Top Tier Annual", color: "#2F7549" },
  { value: "Flexible", label: "Booking Options", color: "#2F7549" },
];

const uses = [
  "Board meetings and executive briefings",
  "Investor and partner discussions",
  "Policy roundtables and working groups",
  "Startup pitch sessions",
  "Delegation meetings and trade discussions",
];

const facilities = [
  { icon: Building2, title: "Fully Furnished Boardrooms", desc: "Fully furnished boardrooms and meeting rooms.", color: "#2F7549" },
  { icon: Wifi, title: "High-Speed Internet", desc: "High-speed internet connectivity.", color: "#3E8F5E" },
  { icon: Monitor, title: "Video Conferencing & AV", desc: "Video conferencing and AV facilities.", color: "#2F7549" },
  { icon: UserCheck, title: "Reception Support", desc: "Reception support (where applicable).", color: "#2F7549" },
  { icon: Clock, title: "Flexible Booking", desc: "Flexible hourly and daily booking options.", color: "#3E8F5E" },
];

const bilateralBenefits = [
  "Cost-effective access to premium business space",
  "A recognised address for formal engagements",
  "Strengthened networking and collaboration opportunities",
  "Seamless coordination of cross-border activities",
];

const memberBenefits = [
  "Preferential booking rates",
  "Allocated complimentary meeting hours (subject to membership tier)",
  "Priority access for Forum-endorsed events",
  "Administrative support for official Forum engagements",
];

const tierTableData = [
  {
    tier: "Chairman Circle",
    annualHours: "40 hours/year",
    bookingPriority: "Highest Priority",
    eventAccess: "VIP Access & Speaking Opportunities",
    policyEngagement: "Direct Advisory Roundtable Access",
    brandVisibility: "Premium Logo Placement & Event Recognition",
    highlight: true,
    color: "#2F7549",
  },
  {
    tier: "Corporate Member",
    annualHours: "24 hours/year",
    bookingPriority: "High Priority",
    eventAccess: "Priority Event Access",
    policyEngagement: "Participation in Policy Working Groups",
    brandVisibility: "Featured on Website & Publications",
    highlight: false,
    color: "#3E8F5E",
  },
  {
    tier: "SME Member",
    annualHours: "12 hours/year",
    bookingPriority: "Standard Priority",
    eventAccess: "Member Event Access",
    policyEngagement: "Industry Consultation Access",
    brandVisibility: "Listed in Member Directory",
    highlight: false,
    color: "#2F7549",
  },
  {
    tier: "Startup / Associate",
    annualHours: "6 hours/year",
    bookingPriority: "Subject to Availability",
    eventAccess: "Selected Events",
    policyEngagement: "Observer Access to Forums",
    brandVisibility: "Directory Listing",
    highlight: false,
    color: "#2F7549",
  },
  {
    tier: "Government / Institutional",
    annualHours: "By Arrangement",
    bookingPriority: "Coordinated Access",
    eventAccess: "Official Delegation Access",
    policyEngagement: "Formal Bilateral Engagement",
    brandVisibility: "Institutional Recognition",
    highlight: false,
    color: "#3E8F5E",
  },
];

const meetingSpaceTerms = [
  "Hours may be used in hourly or half-day increments",
  "Advance booking required (min 5 working days recommended)",
  "Additional hours available at preferential member rates",
  "Unused hours do not roll over to the following year",
  "Forum-endorsed events may receive priority scheduling",
];

const addOnServices = [
  { icon: ClipboardList, title: "Secretariat Support", desc: "Secretariat support for delegation visits.", color: "#2F7549" },
  { icon: HeadphonesIcon, title: "Event Coordination", desc: "Event coordination assistance.", color: "#3E8F5E" },
  { icon: Palette, title: "Meeting Space Branding", desc: "Branding within meeting space.", color: "#2F7549" },
  { icon: UtensilsCrossed, title: "Catering & Hospitality", desc: "Catering and hospitality arrangements.", color: "#2F7549" },
];

const bookingChecklist = [
  { icon: ShieldCheck, text: "Meeting facilities are available by advance booking and subject to membership tier allocations and availability." },
  { icon: Mail, text: "Contact: Membership & Operations Team, Email: info@ukpaktrade.org.uk" },
];

export default function MeetingSpacePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ââ Hero âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <PageHero
        label="Meeting Space"
        title="London Meeting Space Access â An Exclusive Member Privilege"
        subtitle="The UK–Pakistan Trades & Investment Board offers members access to professional meeting facilities in Central London, enabling high-level engagement within a credible and strategic business environment. This benefit supports our mission to strengthen bilateral Tech collaboration and provides members with the infrastructure required to conduct business effectively in the United Kingdom."
        image="/image/banners/banner77.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership#apply">Apply for Membership</ShinyButton>
          <Button href="/contact" variant="glass">Contact Us</Button>
        </div>
      </PageHero>

      {/* ââ Stats Bar ââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={`bar-${stat.label}`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-xl p-6">
                    <div
                      className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-[#5A5F72] text-base">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ââ Uses Section â What members can use facilities for ââââââââ */}
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#EEECEA" }}
      >
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Meeting Facility Uses" title="Designated Meeting Facilities" color="blue" />
            <p className="text-[#3D4152] text-base leading-relaxed mb-8">
              As part of our commitment to strengthening bilateral engagement and fostering high-level dialogue, members may utilise designated meeting facilities for:
            </p>

            {/* Uses as GlowingEffect cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {uses.map((item, i) => (
                <motion.div
                  key={item}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-xl p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base text-[#3D4152] leading-relaxed">{item}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Location card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: uses.length * 0.08 }}
              >
                <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-xl p-6 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#2F7549]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[#3D4152] font-semibold text-base">Central London location with excellent transport links</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Access & Reservations â full-width info cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {bookingChecklist.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                      <div className="relative h-full bg-white rounded-xl p-6 flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: i === 0 ? "#2F754910" : "#3E8F5E10", border: `1px solid ${i === 0 ? "#2F754920" : "#3E8F5E20"}` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: i === 0 ? "#2F7549" : "#3E8F5E" }} strokeWidth={1.5} />
                        </div>
                        <span className="text-base text-[#3D4152] leading-relaxed">{item.text}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Facilities âââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Our Facilities" title="Facilities & Amenities" subtitle="Our London meeting spaces provide a professional and secure environment equipped with:" color="blue" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                      <div className="relative h-full bg-white rounded-xl p-6">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{item.title}</h3>
                        <div className="h-px bg-[#D8D5CF] mb-3" />
                        <p className="text-base text-[#5A5F72] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Supporting Bilateral Collaboration âââââââââââââââââââââââ */}
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#EEECEA" }}
      >
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Bilateral Collaboration" title="Supporting Bilateral Collaboration" color="blue" />
            <p className="text-[#3D4152] text-base leading-relaxed mb-8">
              These facilities are designed to support our members in conducting business, hosting visiting delegations from Pakistan or the UK, and engaging with policymakers and investors in a credible and professional setting. By facilitating access to centrally located meeting infrastructure, the Forum enables:
            </p>

            {/* Bilateral benefits as GlowingEffect cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {bilateralBenefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-xl p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3E8F5E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base text-[#3D4152] leading-relaxed">{item}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Member Benefits as GlowingEffect cards */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#2F754910", border: "1px solid #2F754920" }}>
                <BadgeCheck className="w-5 h-5 text-[#2F7549]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-[#16291E] text-lg">Eligible members may receive:</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {memberBenefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-xl p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base text-[#3D4152] leading-relaxed">{item}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Membership Tier Benefits Table â Styled Grid ââââââââââââââ */}
      <section className="relative py-10 overflow-hidden bg-white">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/30 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute top-0 right-1/4 w-96 h-96 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2F7549, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2F7549, transparent 60%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Membership Tiers" title="Meeting Space Benefits by Membership Tier" color="blue" />

            {/* Desktop Table */}
            <div className="hidden lg:block">
              <div className="relative bg-white border border-[#D8D5CF] rounded-2xl shadow-sm overflow-hidden">
                {/* Top gradient accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(to right, #2F7549, #3E8F5E, #2F7549, #2F7549, #3E8F5E)",
                  }}
                />
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#D8D5CF]">
                        <th className="text-left px-6 py-4 text-base font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Tier</th>
                        <th className="text-left px-6 py-4 text-base font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Annual Hours</th>
                        <th className="text-left px-6 py-4 text-base font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Booking Priority</th>
                        <th className="text-left px-6 py-4 text-base font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Event Access</th>
                        <th className="text-left px-6 py-4 text-base font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Policy Engagement</th>
                        <th className="text-left px-6 py-4 text-base font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Brand Visibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tierTableData.map((row, index) => (
                        <motion.tr
                          key={row.tier}
                          initial={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: 10 }
                          }
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: index * 0.08 }}
                          className={`border-b border-[#E8E6E3] transition-colors duration-200 hover:bg-[#F5F4F2] ${
                            row.highlight ? "bg-emerald-50" : ""
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {row.highlight && (
                                <Star
                                  className="w-4 h-4 text-[#FBBF24] flex-shrink-0"
                                  fill="#FBBF24"
                                />
                              )}
                              <span
                                className="font-heading font-bold text-base"
                                style={{ color: row.color }}
                              >
                                {row.tier}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-base text-[#5A5F72] font-semibold">{row.annualHours}</td>
                          <td className="px-6 py-4 text-base text-[#3D4152]">{row.bookingPriority}</td>
                          <td className="px-6 py-4 text-base text-[#3D4152]">{row.eventAccess}</td>
                          <td className="px-6 py-4 text-base text-[#3D4152]">{row.policyEngagement}</td>
                          <td className="px-6 py-4 text-base text-[#3D4152]">{row.brandVisibility}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden grid gap-6">
              {tierTableData.map((row, index) => (
                <motion.div
                  key={row.tier}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-xl overflow-hidden ${
                    row.highlight
                      ? "bg-gradient-to-br from-[#2F7549]/[0.08] to-[#2F7549]/[0.05] border-2 border-[#2F7549]/40 shadow-[0_0_30px_rgba(4,120,87,0.15)]"
                      : "bg-white border border-[#D8D5CF] shadow-sm"
                  }`}
                >
                  {row.highlight && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{
                        background:
                          "linear-gradient(to right, #2F7549, #8FD3AE, #2F7549)",
                      }}
                    />
                  )}
                  {!row.highlight && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${row.color}, ${row.color}60)`,
                      }}
                    />
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {row.highlight && (
                        <Star
                          className="w-5 h-5 text-[#FBBF24]"
                          fill="#FBBF24"
                        />
                      )}
                      <h3
                        className="font-heading font-bold text-lg"
                        style={{ color: row.color }}
                      >
                        {row.tier}
                      </h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <div className="space-y-3">
                      {[
                        { label: "Annual Hours", value: row.annualHours },
                        { label: "Booking Priority", value: row.bookingPriority },
                        { label: "Event Access", value: row.eventAccess },
                        { label: "Policy Engagement", value: row.policyEngagement },
                        { label: "Brand Visibility", value: row.brandVisibility },
                      ].map((field) => (
                        <div key={field.label}>
                          <p className="text-base font-bold tracking-[0.15em] uppercase text-[#7A7E8F] mb-1">
                            {field.label}
                          </p>
                          <p className="text-base text-[#3D4152]">
                            {field.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Meeting Space Terms ââââââââââââââââââââââââââââââââââââââ */}
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#EEECEA" }}
      >
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Terms & Conditions" title="Meeting Space Terms" color="red" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetingSpaceTerms.map((term, i) => (
                <motion.div
                  key={term}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-xl p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2F7549] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base text-[#3D4152] leading-relaxed">{term}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ Optional Add-On Services (Member Rates) ââââââââââââââââââ */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Member Rates" title="Optional Add-On Services" color="green" />

            <div className="grid md:grid-cols-2 gap-6">
              {addOnServices.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                      <div className="relative h-full bg-white rounded-xl p-6 flex items-start gap-5">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading font-bold text-base text-[#16291E] mb-2">{item.title}</h3>
                          <p className="text-base text-[#5A5F72] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ââ CTA â TubesCursor âââââââââââââââââââââââââââââââââââââââ */}
      <GlobalCTA
        label="Access & Reservations"
        title="Reserve Your Meeting Space"
        subtitle="Meeting facilities are available by advance booking and subject to membership tier allocations and availability."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
