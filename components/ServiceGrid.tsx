"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Store, Megaphone, Plane, Users, Briefcase, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const services = [
  {
    icon: Network,
    title: "Business Networks",
    description:
      "Access the world's largest business network with strategic connections, partners, and tailored market advice.",
    href: "/services/business-networks",
  },
  {
    icon: Store,
    title: "SME Hub",
    description:
      "Your one-stop shop for generating sales, accessing finance, finding talent, and unlocking member-only offers.",
    href: "/services/sme-hub",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Hub",
    description:
      "Promote your software solutions and tech services across the UK, Europe, Middle East and Africa.",
    href: "/services/digital-marketing",
  },
  {
    icon: Plane,
    title: "Overseas Employment",
    description:
      "Contract employment opportunities connecting skilled tech professionals with international employers.",
    href: "/services/overseas-employment",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Connect with experienced entrepreneurs and industry experts who guide startups from idea to scale.",
    href: "/services/mentorship",
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description:
      "Company registration, legal & accounting, IP protection, investment documents, and data rooms.",
    href: "/services/business-support",
  },
  {
    icon: Search,
    title: "Research & Innovation",
    description:
      "Cost-effective research services from Pakistan — technology research, data analytics, academic support, and more.",
    href: "/services/research-innovation",
  },
];

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(6px)" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={service.href} className="block h-full">
        <div className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <GlowingEffect
            spread={40}
            glow
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
          />
          <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 p-6">
            {/* Animated bottom border on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#047857] via-[#10B981] to-[#047857] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 border bg-[#047857]/5 border-[#047857]/15 group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-6 h-6 text-[#047857]" />
            </div>

            <h3 className="font-heading font-semibold text-xl mb-3 text-[#064E3B] group-hover:text-[#047857] transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-[#475569] mb-6 leading-relaxed text-base">
              {service.description}
            </p>

            <div className="inline-flex items-center gap-2 text-base font-semibold text-[#047857]">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServiceGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} isInView={isInView} />
      ))}
    </div>
  );
}
