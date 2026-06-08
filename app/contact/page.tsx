import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — let's talk",
  description:
    "Tell us what you need — source products from Pakistan, sell globally, a service, or a quote — and we'll route you to the right person. Offices in London and Lahore.",
  alternates: { canonical: "/contact" },
};

const offices = [
  {
    label: "UK Office",
    lines: ["134–136 Westbourne Terrace", "London W2 6QB", "United Kingdom"],
    map: "https://www.google.com/maps/search/?api=1&query=136+Westbourne+Terrace,+London+W2+6QB",
  },
  {
    label: "Pakistan Office",
    lines: ["Office 108–110 Urooj Center", "Farid Court Road, Lahore", "Pakistan"],
    map: "https://www.google.com/maps/search/?api=1&query=Urooj+Center+Farid+Court+Road+Lahore",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk"
        subtitle="Tell us a little about what you need — a product, a service, or a quote — and we'll point you to the right person."
        video="banner"
      />

      <Section variant="light" pattern>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl mb-6">Send an enquiry</h2>
            <ContactForm />
          </div>

          {/* Offices + contact */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl mb-2">Our offices</h2>
            {offices.map((o) => (
              <div key={o.label} className="rounded-card border border-[#E5E7EB] bg-[#F8FAF9] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#047857]" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#1C1F2E]">{o.label}</p>
                    <address className="not-italic text-[#3D4152] text-sm mt-1 leading-relaxed">
                      {o.lines.map((l) => (<span key={l} className="block">{l}</span>))}
                    </address>
                    <a href={o.map} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm font-semibold text-[#047857] hover:text-[#065F46]">
                      View on map →
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-card border border-[#E5E7EB] p-6 space-y-4">
              <a href="tel:+447920550000" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#047857]" />
                </div>
                <div>
                  <p className="text-[#6B7280] text-xs uppercase tracking-wide font-bold">Telephone</p>
                  <p className="text-[#1C1F2E] font-medium group-hover:text-[#047857] transition-colors">0044 7920 55 0000</p>
                </div>
              </a>
              <a href="mailto:info@ukpaktrade.org.uk" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#047857]" />
                </div>
                <div>
                  <p className="text-[#6B7280] text-xs uppercase tracking-wide font-bold">Email</p>
                  <p className="text-[#1C1F2E] font-medium group-hover:text-[#047857] transition-colors break-all">info@ukpaktrade.org.uk</p>
                </div>
              </a>
              <p className="text-[#6B7280] text-sm pt-2 border-t border-[#E5E7EB]">
                Connect on <a href="https://facebook.com/ukpaktrade" className="text-[#047857] font-medium">Facebook</a>,{" "}
                <a href="https://instagram.com/ukpaktrade" className="text-[#047857] font-medium">Instagram</a> and{" "}
                <a href="https://linkedin.com/company/ukpaktrade" className="text-[#047857] font-medium">LinkedIn</a> — @ukpaktrade
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
