"use client";

import { useState, useMemo } from "react";
import { HelpCircle, ChevronDown, Search, X } from "lucide-react";
import { PolicyHero } from "@/components/PolicyHero";

const faqCategories = [
  {
    category: "General",
    faqs: [
      { question: "What is Pakistan Textile Partners?", answer: "Pakistan Textile Partners is a London-based platform for UK–Pakistan textile trade. We trade quality Pakistani textiles and run the services that move them — buying, outsourced procurement, marketing and warehousing — connecting Pakistan’s manufacturers with buyers worldwide." },
      { question: "Who is behind Pakistan Textile Partners?", answer: "We are the textile division of UK–Pakistan Trade and Investment Board Ltd (UPTIB), a company registered in England & Wales (no. 15417151), with offices in London and Lahore." },
      { question: "What products can I source from Pakistan?", answer: "Four main categories: Home Textile (bed linen, towels, hotel linen, curtains), Apparel & Accessories (private-label fashion, denim, knitwear, uniforms), Sportswear & Activewear (gymwear and teamwear from the Sialkot hub), and Healthcare Textile (scrubs, gowns and hospital linen)." },
      { question: "How can I get involved?", answer: "Buyers can request a quote or sourcing support; Pakistani manufacturers and exporters can apply for membership to reach global buyers. Visit our membership or contact page to start." },
    ],
  },
  {
    category: "Membership",
    faqs: [
      { question: "Who can become a member?", answer: "Membership is open to Pakistani textile manufacturers and exporters who want to reach international buyers, as well as buyers sourcing dependable Pakistani product. Both individuals and companies can apply." },
      { question: "What benefits do members receive?", answer: "A profile in the membership directory, B2B matchmaking with global buyers, market intelligence, priority handling and preferential rates on our services, and invitations to relevant trade delegations and exhibitions." },
      { question: "How do I apply for membership?", answer: "Apply through our website. Complete the application form, and our team will review your application and get back to you, typically within 5–10 business days." },
      { question: "Can I cancel my membership?", answer: "Yes, you can cancel your membership at any time by contacting our membership team at info@ukpaktrade.org.uk." },
    ],
  },
  {
    category: "Sourcing & Buying",
    faqs: [
      { question: "How does your Buying service work?", answer: "We take you from first enquiry and quotation through to delivery — sourcing finished textiles from vetted Pakistani factories, with quality controlled to your agreed AQL and one accountable partner throughout." },
      { question: "What are your minimum order quantities (MOQs)?", answer: "MOQs vary by product and factory. Pakistan offers low-MOQ partners for private-label apparel and sportswear as well as full-container programmes for home and institutional textiles — tell us your volume and we’ll match you to the right factory." },
      { question: "Can I get samples before placing an order?", answer: "Yes. Sample approval is a standard step in our Outsourcing service: we arrange samples, confirm specification and colourways, and only proceed to bulk once you sign off." },
      { question: "How do I get a quote?", answer: "Send us your product, specification and target volume via the contact page and we’ll come back with a quote. The more detail you provide, the faster and more accurate the quotation." },
    ],
  },
  {
    category: "Selling & Marketing",
    faqs: [
      { question: "How can Pakistani exporters reach global buyers?", answer: "Our Marketing service makes manufacturers visible, credible and reachable to buyers worldwide — through B2B matchmaking, a directory profile, market intelligence, and introductions at trade delegations and exhibitions." },
      { question: "Do you help exporters sell online or on Amazon?", answer: "Yes. Our Warehousing service provides warehousing, e-commerce and Amazon market access, so exporters can store stock close to their customers and sell directly to consumers in global marketplaces." },
      { question: "Which markets do you reach?", answer: "Pakistani textiles ship worldwide — the EU (with GSP+ duty-free access), the United States, the United Kingdom, the Middle East, Africa and Latin America. We help match your product to the right destination markets." },
      { question: "Can you support our branding and private label?", answer: "Yes. Pakistan offers strong OEM and private-label capability across woven and knit, with design, sampling and finishing so you can sell under your own brand." },
    ],
  },
  {
    category: "Quality & Logistics",
    faqs: [
      { question: "How do you guarantee quality?", answer: "We run independent, multi-stage inspection to your agreed AQL — not just the factory’s word — covering pre-production, in-line and final-random checks before goods ship." },
      { question: "What certifications are available?", answer: "Depending on category and factory, our network offers GOTS, OEKO-TEX, BCI, WRAP, Sedex and ISO, plus CE / AAMI / ISO 13485 awareness for healthcare textiles. Tell us what your buyers require." },
      { question: "How are textiles shipped, and what about customs?", answer: "We handle export documentation, shipping and customs as part of our Outsourcing service, coordinating freight to your agreed Incoterms so you receive goods on-spec and on-time." },
      { question: "What is the GSP+ advantage?", answer: "Qualifying Pakistani textiles enter the EU duty-free under the GSP+ scheme — a preferential tariff advantage we build into your landed price." },
    ],
  },
];

export default function FAQsPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqCategories;
    return faqCategories
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [query]);

  return (
    <div>
      <PolicyHero
        eyebrow="Help Centre"
        breadcrumb="FAQs"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Pakistan Textile Partners, membership, sourcing, selling, quality and logistics."
        icon={HelpCircle}
      />

      <div className="bg-white">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            {/* Search */}
            <div className="relative mb-12">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AC]" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(null);
                }}
                placeholder="Search questions…"
                className="w-full rounded-full border border-[#E2E2DC] bg-white py-3 pl-11 pr-10 text-[15px] text-[#16291E] outline-none transition-colors duration-150 placeholder:text-[#9AA0AC] focus:border-[#2F7549]"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA0AC] hover:text-[#16291E]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <p className="text-[15.5px] text-[#5A5F72]">
                No results found. Try a different search term.
              </p>
            ) : (
              filtered.map((cat) => (
                <section key={cat.category} className="mb-14 last:mb-0">
                  <h2 className="font-heading text-[1.4rem] font-bold leading-tight text-[#16291E]">
                    {cat.category}
                  </h2>
                  <div className="mt-3 mb-5 h-px w-12 bg-[#3E8F5E]" />
                  <div className="border-t border-[#ECECE6]">
                    {cat.faqs.map((f, i) => {
                      const key = `${cat.category}-${i}`;
                      const isOpen = open === key;
                      return (
                        <div key={key} className="border-b border-[#ECECE6]">
                          <button
                            onClick={() => setOpen(isOpen ? null : key)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-4 py-5 text-left"
                          >
                            <span className="font-heading text-[1.02rem] font-semibold text-[#16291E]">
                              {f.question}
                            </span>
                            <ChevronDown
                              className={`h-5 w-5 flex-shrink-0 text-[#2F7549] transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <p className="-mt-1 pb-6 pr-8 text-[15.5px] leading-[1.85] text-[#4B5563]">
                              {f.answer}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
