import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck, Users, Globe2, Clock,
  ClipboardList, PhoneCall, Handshake, ListChecks,
  Factory, ShoppingCart, BadgeCheck, Lock,
} from "lucide-react";
import { Section } from "@/components/Section";
import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Register: join our network",
  description:
    "Register with Pak Textiles Global Partners to source Pakistani textiles or to sell globally. Tell us about your company, the services you need and your requirement, and we'll match you to the right team.",
  alternates: { canonical: "/register" },
};

const heroBadges = [
  { icon: Clock, title: "Reviewed in 48 Hours", desc: "A named account manager gets back to you" },
  { icon: ShieldCheck, title: "Vetted Network", desc: "Every supplier is checked before matching" },
  { icon: Globe2, title: "Global Reach", desc: "Buyers and factories across 20+ markets" },
];

const whoFor = [
  {
    icon: ShoppingCart,
    title: "Buyers & importers",
    desc: "Brands, retailers and wholesalers sourcing textiles from Pakistan with quality control and logistics handled.",
  },
  {
    icon: Factory,
    title: "Manufacturers & exporters",
    desc: "Pakistani mills, factories and exporters looking for qualified buyers and routes into global markets.",
  },
  {
    icon: BadgeCheck,
    title: "Prospective members",
    desc: "Companies that want the credibility, matchmaking and market intelligence that membership brings.",
  },
];

const benefits = [
  "A named contact who knows your category",
  "Matched to vetted factories or verified buyers",
  "Quality control, compliance and freight handled end to end",
  "Market intelligence and pricing guidance for your sector",
  "Priority access to trade fairs, delegations and buyer alerts",
];

const checklist = [
  "Your company registration or NTN number",
  "The product categories you buy, make or sell",
  "Typical order volumes or monthly capacity",
  "Any certifications you hold or require",
];

const faqs = [
  {
    q: "Does registering cost anything?",
    a: "No. Registration is free and puts you in front of the right team. Membership is separate and optional.",
  },
  {
    q: "Do I have to be a member first?",
    a: "No. Anyone can register. If membership suits you, we will explain the tiers when we speak.",
  },
  {
    q: "What if my requirement changes?",
    a: "Tell your account manager. Your services, categories and volumes can all be updated after registration.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Complete the form",
    desc: "Tell us who you are, what you need and the categories you work in. It takes about five minutes.",
  },
  {
    icon: PhoneCall,
    step: "02",
    title: "We review and call",
    desc: "Our team checks your details and gets in touch within 2 to 3 business days to confirm your requirement.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "You get matched",
    desc: "We introduce you to the right suppliers, buyers or service line and set your account up.",
  },
];

export default function RegisterPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative z-[2] w-full overflow-hidden bg-[#394F73] min-h-[600px] md:min-h-[640px] lg:min-h-[700px] flex items-center">
        <Image
          src="/image/hero-bg/closeup-view-handshake-two-businessmen-suits-shaking-hands.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Full-hero overlay, left-weighted for content legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(57, 81, 115,0.92) 0%, rgba(57, 81, 115,0.78) 38%, rgba(57, 81, 115,0.5) 68%, rgba(57, 81, 115,0.3) 100%)",
          }}
        />

        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-8 left-0 w-[min(48rem,92%)] rounded-[2.5rem]"
            style={{
              background:
                "radial-gradient(ellipse 80% 78% at 32% 50%, rgba(57, 81, 115,0.84) 0%, rgba(57, 81, 115,0.56) 45%, rgba(57, 81, 115,0.2) 75%, rgba(57, 81, 115,0) 100%)",
            }}
          />
          <div className="relative max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white mb-4">
              Register
            </p>
            <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-5">
              Join the network behind Pakistan&apos;s textile trade
            </h1>
            <p className="text-white/95 text-base md:text-lg leading-relaxed max-w-md mb-10">
              Register your company once and we&apos;ll route you to the right team, whether you&apos;re sourcing from Pakistan or selling to the world.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-6 sm:gap-0">
              {heroBadges.map((b, i) => (
                <div
                  key={b.title}
                  className={`flex items-start gap-3 ${
                    i > 0 ? "sm:pl-5 sm:ml-5 sm:border-l sm:border-white/15" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#78899B]/15 border border-[#78899B]/25 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm leading-tight">{b.title}</p>
                    <p className="text-white/90 text-xs mt-1 leading-snug max-w-[150px]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-gradient-to-r from-[#78899B] via-[#78899B] to-[#78899B]" />
      </section>

      {/* ── Form + sidebar ───────────────────────────────────── */}
      <Section variant="light" pattern id="form">
        {/* Heading sits above both columns so the form card and the sidebar
            cards start on the same line. */}
        <div className="sec-head">
          <h2 className="font-heading font-extrabold text-[#1A1A1A] text-2xl mb-1">
            Registration form
          </h2>
          <p className="text-[#6B7280] text-sm">
            Seven quick steps. The more you tell us, the better we can match you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-8">
            <RegistrationForm />
          </div>

          {/* Sidebar — runs the full height of the form */}
          <aside className="lg:col-span-4">
            <div className="space-y-5">
              {/* Who registers */}
              <div className="rounded-card border border-[#E5E7EB] bg-white p-6">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#394F73] mb-1.5">
                  Who registers
                </p>
                <p className="font-heading font-extrabold text-[#1A1A1A] text-lg leading-snug mb-5">
                  Built for both sides of the trade
                </p>
                <ul className="space-y-5">
                  {whoFor.map((w) => (
                    <li key={w.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#F6F2EA] border border-[#ECE5D8] flex items-center justify-center flex-shrink-0">
                        <w.icon className="w-[18px] h-[18px] text-[#394F73]" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-[#1A1A1A] text-sm">{w.title}</p>
                        <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before you start */}
              <div className="rounded-card border border-[#E5E7EB] bg-[#FBFBFA] p-6">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#394F73] mb-3">
                  Before you start
                </p>
                <p className="text-[#6B7280] text-sm mb-3.5 leading-relaxed">
                  Have these to hand and the form takes about five minutes:
                </p>
                <ul className="space-y-2.5">
                  {checklist.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[#3D4152] text-sm leading-relaxed">
                      <ListChecks className="w-4 h-4 text-[#394F73] flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What happens next */}
              <div className="rounded-card border border-[#E5E7EB] bg-white p-6">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#394F73] mb-4">
                  What happens next
                </p>
                <ol className="space-y-5">
                  {steps.map((s) => (
                    <li key={s.step} className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#F6F2EA] border border-[#ECE5D8] flex items-center justify-center">
                          <s.icon className="w-[18px] h-[18px] text-[#394F73]" />
                        </div>
                      </div>
                      <div>
                        <p className="font-heading font-bold text-[#1A1A1A] text-sm">
                          <span className="text-[#9CA3AF] mr-1.5">{s.step}</span>
                          {s.title}
                        </p>
                        <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefits */}
              <div className="rounded-card bg-[#394F73] p-6">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#B3AA98] mb-3">
                  What you get
                </p>
                <ul className="space-y-2.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-white/90 text-sm leading-relaxed">
                      <BadgeCheck className="w-4 h-4 text-[#B3AA98] flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common questions */}
              <div className="rounded-card border border-[#E5E7EB] bg-white p-6">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#394F73] mb-4">
                  Common questions
                </p>
                <dl className="space-y-4">
                  {faqs.map((f) => (
                    <div key={f.q} className="border-b border-[#F0EFED] pb-4 last:border-0 last:pb-0">
                      <dt className="font-heading font-bold text-[#1A1A1A] text-sm">{f.q}</dt>
                      <dd className="text-[#6B7280] text-sm mt-1 leading-relaxed">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Privacy + contact fallback */}
              <div className="rounded-card border border-[#E5E7EB] bg-white p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F6F2EA] border border-[#ECE5D8] flex items-center justify-center flex-shrink-0">
                    <Lock className="w-[18px] h-[18px] text-[#394F73]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#1A1A1A] text-sm">Your details stay private</p>
                    <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">
                      We use your information only to process your registration. Read our{" "}
                      <Link href="/privacy" className="font-semibold text-[#394F73] underline underline-offset-2">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-[#F0EFED] pt-5">
                  <div className="w-10 h-10 rounded-full bg-[#F6F2EA] border border-[#ECE5D8] flex items-center justify-center flex-shrink-0">
                    <Users className="w-[18px] h-[18px] text-[#394F73]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#1A1A1A] text-sm">Just have a question?</p>
                    <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">
                      You don&apos;t need to register to talk to us.{" "}
                      <Link href="/contact" className="font-semibold text-[#394F73] underline underline-offset-2">
                        Contact the team
                      </Link>{" "}
                      instead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
