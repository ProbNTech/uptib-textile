import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Mail, MapPin, Phone, Clock, Headset, Globe,
  Package, Handshake, UserPlus, MessageCircle,
  Facebook, Instagram, Linkedin,
} from "lucide-react";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact: let's talk",
  description:
    "Tell us what you need, whether to source products from Pakistan, sell globally, a service, or a quote, and we'll route you to the right person. Offices in London and Lahore.",
  alternates: { canonical: "/contact" },
};

const heroBadges = [
  { icon: Clock, title: "Quick Response", desc: "We reply within 24 hours" },
  { icon: Headset, title: "Expert Support", desc: "Get help from our industry experts" },
  { icon: Globe, title: "Global Network", desc: "Connecting Pakistan to the world" },
];

const offices = [
  {
    label: "UK Office",
    lines: ["134 to 136 Westbourne Terrace", "London W2 6QB", "United Kingdom"],
    phone: "0207 402 4071",
    phoneHref: "tel:+442074024071",
    map: "https://www.google.com/maps/search/?api=1&query=136+Westbourne+Terrace,+London+W2+6QB",
    sketch: "/image/london-skyline-sketch.png",
  },
  {
    label: "Pakistan Office",
    lines: ["Office 108 to 110 Urooj Center", "Farid Court Road, Lahore", "Pakistan"],
    phone: "0092 42 37235280",
    phoneHref: "tel:+924237235280",
    map: "https://www.google.com/maps/search/?api=1&query=Urooj+Center+Farid+Court+Road+Lahore",
    sketch: "/image/minarepakistan-sketch.png",
  },
];

const socials = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com/ukpaktrade" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/ukpaktrade" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ukpaktrade" },
];

const reasons = [
  { icon: Package, title: "Product & Services", desc: "Learn more about our products, services and how we can help." },
  { icon: Handshake, title: "Partnerships", desc: "Explore collaboration opportunities and strategic partnerships." },
  { icon: UserPlus, title: "Membership", desc: "Join our network and unlock exclusive member benefits." },
  { icon: MessageCircle, title: "General Enquiries", desc: "Have a question? We're happy to assist you." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative z-[2] w-full overflow-hidden bg-[#394F73] min-h-[600px] md:min-h-[640px] lg:min-h-[700px] flex items-center">
        {/* Background image */}
        <Image
          src="/image/hero-bg/pexels-jan-van-der-wolf-11680885-29298932.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Full-hero dark overlay — left-weighted for content legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(57, 81, 115,0.92) 0%, rgba(57, 81, 115,0.78) 38%, rgba(57, 81, 115,0.5) 68%, rgba(57, 81, 115,0.3) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20">
          {/* Localized shade behind the text only (no full-hero overlay) */}
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
              Contact
            </p>
            <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-5">
              Let&apos;s start a{" "}
              <span className="text-[#394F73]">conversation</span>
            </h1>
            <p className="text-white/95 text-base md:text-lg leading-relaxed max-w-md mb-10">
              Whether you have a question, need assistance, or want to explore opportunities, we&apos;re here to help.
            </p>

            {/* Trust badges — single row */}
            <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-6 sm:gap-0">
              {heroBadges.map((b, i) => (
                <div
                  key={b.title}
                  className={`flex items-start gap-3 ${
                    i > 0 ? "sm:pl-5 sm:ml-5 sm:border-l sm:border-white/15" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#78899B]/15 border border-[#78899B]/25 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-[#394F73]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm leading-tight">{b.title}</p>
                    <p className="text-white/90 text-xs mt-1 leading-snug max-w-[130px]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-gradient-to-r from-[#78899B] via-[#78899B] to-[#78899B]" />
      </section>

      <Section variant="light" pattern>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form — heading block matches the one opposite so the form card
              and the first office card start on the same line. */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-heading font-extrabold text-[#1A1A1A] text-2xl mb-1">Send us a message</h2>
              <p className="text-[#6B7280] text-sm">Fill out the form and our team will get back to you.</p>
            </div>
            <ContactForm />
            <p className="text-[#6B7280] text-sm rounded-card border border-[#E5E7EB] bg-[#FBFBFA] px-5 py-4">
              Ready to work with us?{" "}
              <Link href="/register" className="font-semibold text-[#394F73] underline underline-offset-2">
                Register your company
              </Link>{" "}
              instead, and we&apos;ll match you to the right service and team.
            </p>
          </div>

          {/* Offices + contact */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-heading font-extrabold text-[#1A1A1A] text-2xl mb-1">Our offices</h2>
              <p className="text-[#6B7280] text-sm">We&apos;re on the ground to support you better.</p>
            </div>
            {offices.map((o) => (
              <div key={o.label} className="relative overflow-hidden rounded-card border border-[#E5E7EB] bg-white p-6">
                {/* Landmark sketch */}
                <Image
                  src={o.sketch}
                  alt=""
                  width={1024}
                  height={1536}
                  aria-hidden="true"
                  unoptimized
                  className="pointer-events-none absolute right-2 bottom-0 h-[92%] w-auto object-contain object-bottom"
                />
                <div className="relative flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F6F2EA] border border-[#ECE5D8] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#394F73]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#1A1A1A]">{o.label}</p>
                    <address className="not-italic text-[#3D4152] text-sm mt-1 leading-relaxed">
                      {o.lines.map((l) => (<span key={l} className="block">{l}</span>))}
                    </address>
                    <a href={o.phoneHref} className="flex items-center gap-2 mt-3 text-sm font-medium text-[#3D4152] hover:text-[#394F73] transition-colors">
                      <Phone className="w-4 h-4 text-[#394F73] flex-shrink-0" />
                      {o.phone}
                    </a>
                    <a href={o.map} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm font-semibold text-[#394F73] hover:text-[#394F73]">
                      View on map →
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Email */}
            <div className="rounded-card border border-[#E5E7EB] p-6">
              <a href="mailto:info@pak-textiles.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-[#F6F2EA] border border-[#ECE5D8] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#394F73]" />
                </div>
                <div>
                  <p className="text-[#6B7280] text-xs uppercase tracking-wide font-bold">Email</p>
                  <p className="text-[#1A1A1A] font-medium group-hover:text-[#394F73] transition-colors break-all">info@pak-textiles.com</p>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div className="rounded-card border border-[#E5E7EB] p-6 flex items-center justify-between gap-4">
              <p className="font-heading font-bold text-[#1A1A1A]">Connect with us</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#394F73] hover:bg-[#78899B] hover:text-white hover:border-[#78899B] transition-colors"
                  >
                    <s.icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why get in touch */}
      <Section variant="light">
        <div className="rounded-card bg-gradient-to-br from-[#394F73] to-[#394F73] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Title + description */}
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#B3AA98] mb-3">Why get in touch?</p>
              <h2 className="font-heading font-extrabold text-white text-2xl lg:text-3xl leading-tight mb-4">
                We&apos;re here to support your global growth
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Whether you&apos;re sourcing from Pakistan or selling globally, our team is ready to help at every step.
              </p>
            </div>

            {/* Reasons — one row */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                {reasons.map((r, i) => (
                  <div
                    key={r.title}
                    className={
                      i > 0
                        ? "relative lg:before:content-[''] lg:before:absolute lg:before:-left-3 lg:before:top-[8%] lg:before:h-[84%] lg:before:w-px lg:before:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.25),transparent)]"
                        : ""
                    }
                  >
                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                      <r.icon className="w-5 h-5 text-[#B3AA98]" />
                    </div>
                    <p className="font-heading font-bold text-white mb-1.5">{r.title}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
