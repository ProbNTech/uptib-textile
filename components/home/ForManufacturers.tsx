"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  Check,
  CheckCircle2,
  Factory,
  Handshake,
  Layers,
  Receipt,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { membershipTiers } from "@/data/membership-tiers";
import { cn } from "@/lib/utils";

/* Tier icons, mapped by name. The tier content itself is shared with the
   membership page via data/membership-tiers.ts. */
const tierIcons: Record<string, LucideIcon> = {
  Basic: Factory,
  Professional: Building2,
  Premium: Award,
};

/* Supply-side content.
   The rest of the homepage speaks to international buyers. This section
   answers the question a Pakistani manufacturer actually has, which is
   whether joining is worth it, and states plainly how we are paid. */

const returns = [
  {
    icon: Target,
    title: "You are put in front of real demand",
    desc: "Members sit in the supplier pool we source from when a buyer sends us a live brief, so enquiries come to you matched to what you actually make.",
  },
  {
    icon: Handshake,
    title: "You are represented, not just listed",
    desc: "A directory listing waits to be found. We put your capability to buyers directly, and stay accountable for the order once it lands.",
  },
  {
    icon: CheckCircle2,
    title: "You become easier to buy from",
    desc: "We work with you on the things that lose orders: specification, certification evidence, labelling, packaging, documentation and export readiness.",
  },
  {
    icon: Layers,
    title: "You start at the level that suits you",
    desc: "Three tiers, Basic, Professional and Premium. A first-time exporter can start small and move up as the return justifies it.",
  },
];

export default function ForManufacturers() {
  return (
    <section
      className="relative z-[1] sec-y overflow-hidden bg-[#F6F2EA]"
      aria-labelledby="for-manufacturers-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A1A 0.5px, transparent 0.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
            {/* Left: the case for joining */}
            <div>
              <SectionLabel
                label="For Pakistani manufacturers"
                title="Should you join, and what do you get back?"
                body="Membership is a two-sided product, so here is the supply-side answer, in plain terms."
                color="#394F73"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {returns.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="rounded-2xl border border-[#E7DCC6] bg-white/70 p-5 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#78899B]/12">
                        <Icon className="size-5 text-[#394F73]" strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-3 font-heading text-base font-bold leading-snug text-[#1A1A1A]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#5A5F72]">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Right: how we are paid — the commercial model, disclosed */}
            <div className="lg:pt-2">
              <div className="rounded-2xl border border-[#394F73]/15 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(45,64,97,0.4)] sm:p-8">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3
                    id="business-model-heading"
                    className="font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl"
                  >
                    How we are paid
                  </h3>
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#78899B]">
                    <Banknote className="size-5 text-white" strokeWidth={1.8} aria-hidden />
                  </span>
                </div>

                <p className="text-[15px] leading-relaxed text-[#5A5F72]">
                  We are paid in two ways, and both are agreed up front.
                </p>

                <ul className="mt-5 divide-y divide-[#E5E7EB]">
                  <li className="flex items-start gap-3.5 py-4 first:pt-0">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#78899B]/12">
                      <Receipt className="size-4 text-[#394F73]" strokeWidth={1.9} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Membership fees, from suppliers</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A5F72]">
                        Pakistani manufacturers and exporters pay a membership fee, tiered as Basic, Professional or Premium, covering their place in the supplier pool we source from and the services attached to that tier.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5 py-4 last:pb-0">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#78899B]/12">
                      <Handshake className="size-4 text-[#394F73]" strokeWidth={1.9} aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Commission, on orders we source</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A5F72]">
                        On orders we source or broker for international buyers, we earn an agreed commission. It is included in the price you are quoted, so there is no separate charge on top.
                      </p>
                    </div>
                  </li>
                </ul>

                <p className="mt-5 rounded-xl bg-[#F6F2EA] px-4 py-3.5 text-[13px] leading-relaxed text-[#5A5F72]">
                  Membership pricing is provided on request, and any commission is agreed in writing before an order is placed.
                </p>
              </div>
            </div>
          </div>

          {/* ── Tier comparison strip ──────────────────────────────────
              The three tiers were previously named on this page without
              anything explaining what separates them, so a prospective
              member could not self-qualify without contacting the team. */}
          <div className="mt-12 lg:mt-14">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#78899B]/12">
                  <Layers className="size-5 text-[#394F73]" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                    The three tiers, side by side
                  </h3>
                  <p className="mt-1 text-sm text-[#5A5F72]">
                    Each tier includes everything in the one before it. Pricing is on request.
                  </p>
                </div>
              </div>
              <Link
                href="/membership#tiers"
                className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#394F73]"
              >
                Compare tiers in full
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 items-stretch">
              {membershipTiers.map((tier, i) => {
                const Icon = tierIcons[tier.name] ?? Factory;
                return (
                  <motion.div
                    key={tier.name}
                    className={cn(
                      "relative flex flex-col rounded-2xl border p-6",
                      tier.featured
                        ? "border-[#78899B] bg-gradient-to-b from-[#78899B] to-[#8C9AAB] text-white shadow-[0_24px_60px_-28px_rgba(57,79,115,0.7)]"
                        : "border-[#E7DCC6] bg-white shadow-sm",
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {tier.featured && (
                      <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#394F73] px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                        <Star className="size-3.5" aria-hidden /> Most popular
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
                          tier.featured ? "bg-white/10 text-[#F6F2EA]" : "bg-[#78899B]/10 text-[#394F73]",
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h4
                        className={cn(
                          "font-heading text-lg font-bold",
                          tier.featured ? "text-white" : "text-[#1A1A1A]",
                        )}
                      >
                        {tier.name}
                      </h4>
                    </div>

                    <p
                      className={cn(
                        "mt-3 text-[13px] leading-snug",
                        tier.featured ? "text-white/75" : "text-[#6B7280]",
                      )}
                    >
                      {tier.suits}
                    </p>

                    <p
                      className={cn(
                        "mt-4 border-b pb-4 font-heading text-base font-extrabold",
                        tier.featured ? "border-white/15 text-[#F6F2EA]" : "border-[#E5E7EB] text-[#394F73]",
                      )}
                    >
                      Pricing on request
                    </p>

                    <ul className="mt-4 flex-1 space-y-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[13px]">
                          <Check
                            className={cn(
                              "mt-0.5 size-3.5 shrink-0",
                              tier.featured ? "text-[#F6F2EA]" : "text-[#394F73]",
                            )}
                            aria-hidden
                          />
                          <span className={tier.featured ? "text-white/90" : "text-[#3D4152]"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/membership"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#394F73] px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#2E4061]"
              >
                See what membership includes
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/membership/apply"
                className="text-sm font-bold text-[#394F73] underline underline-offset-4 hover:text-[#2E4061]"
              >
                Apply to join
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
