"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Factory,
  Scissors,
  FileSignature,
  SearchCheck,
  BadgeCheck,
  Ship,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

/* The seven stages every order passes through.
   This section exists to give buyers something concrete behind the service
   claims made elsewhere on the page. Each stage describes work we actually
   carry out; no volumes, timelines or outcomes are claimed here, because
   those vary by order and would need to be substantiated per client. */
const stages = [
  {
    icon: ClipboardList,
    title: "Your brief",
    desc: "You tell us the product, specification, quantity, target price and destination. If a specification is not settled yet, we help you write one buyers and factories can both work from.",
  },
  {
    icon: Factory,
    title: "Factory shortlist",
    desc: "We match the brief to manufacturers in our network by capability, category and capacity, then shortlist the ones genuinely equipped to make it, not simply the ones available.",
  },
  {
    icon: Scissors,
    title: "Sampling and approval",
    desc: "Samples are produced against your specification and sent for review. Nothing moves to bulk until you have approved a physical sample as the production standard.",
  },
  {
    icon: FileSignature,
    title: "Pricing and order confirmation",
    desc: "Costings, lead times and payment terms are agreed in writing before production is booked. Our commission is included in the price you are quoted.",
  },
  {
    icon: SearchCheck,
    title: "In-line and final inspection",
    desc: "Independent inspection on the ground against your approved sample, in-line during production and again pre-shipment, to your agreed AQL.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance and documentation",
    desc: "Certification evidence, social and technical compliance, labelling, packing lists and full export documentation prepared for your market's requirements.",
  },
  {
    icon: Ship,
    title: "Freight and delivery",
    desc: "Consolidation, freight booking, customs documentation and delivery to your destination, with the GSP+ duty position reflected in your landed cost where it applies.",
  },
];

export default function HowAnOrderRuns() {
  return (
    <section
      className="relative z-[1] sec-y overflow-hidden bg-white"
      aria-labelledby="order-process-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A1A 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <SectionLabel
            label="How we work"
            title="What actually happens when you place an order"
            body="Sourcing claims are easy to make, so here is the process behind ours: the seven stages every order runs through, and who is accountable at each one."
            color="#394F73"
            align="center"
          />

          <ol className="relative mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.li
                  key={stage.title}
                  className="relative flex h-full flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(45,64,97,0.25)] transition-shadow duration-300 hover:shadow-[0_16px_38px_-18px_rgba(45,64,97,0.35)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl"
                    style={{ background: "linear-gradient(to right, #394F73, transparent)" }}
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#78899B]/10">
                      <Icon className="size-5 text-[#394F73]" strokeWidth={1.8} />
                    </span>
                    <span className="font-heading text-2xl font-extrabold leading-none text-[#78899B]/45 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold leading-tight text-[#1A1A1A]">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A5F72]">{stage.desc}</p>
                </motion.li>
              );
            })}

            {/* Closing tile: the same grid cell, carrying the call to action. */}
            <motion.li
              className="relative flex h-full flex-col justify-between rounded-2xl border border-[#394F73]/15 bg-[#F6F2EA] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: stages.length * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <h3 className="font-heading text-lg font-bold leading-tight text-[#1A1A1A]">
                  One accountable partner, start to finish
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A5F72]">
                  The same team stays with your order from the first brief to delivery, so there is one point of contact and one party answerable for it.
                </p>
              </div>
              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#394F73]"
              >
                Send us a brief
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </motion.li>
          </ol>
        </AnimatedSection>
      </div>
    </section>
  );
}
