"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Users, Briefcase, Banknote, Calendar, Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import { GlobalCTA } from "@/components/GlobalCTA";

const categoryIcons: Record<string, typeof HelpCircle> = {
  General: HelpCircle,
  Membership: Users,
  "Programs & Services": Briefcase,
  "Funding & Grants": Banknote,
  "Events & Networking": Calendar,
};

const categoryMeta: Record<string, { color: string; desc: string }> = {
  General: { color: "#2F7549", desc: "Learn about Pakistan Textile Partners, our mission, and how to get involved." },
  Membership: { color: "#3E8F5E", desc: "Tiers, benefits, application process, and cancellation policy." },
  "Programs & Services": { color: "#2F7549", desc: "Training, mentorship, incubation, and business support." },
  "Funding & Grants": { color: "#6366F1", desc: "Investment stages, eligibility criteria, and application timelines." },
  "Events & Networking": { color: "#EAB308", desc: "Conferences, sponsorship, speaking opportunities, and networking." },
};

const faqCategories = [
  {
    category: "General",
    faqs: [
      { question: "What is Pakistan Textile Partners?", answer: "Pakistan Textile Partners (UK\u2013Pakistan Tech Forum) is a strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan. We connect companies, investors, professionals, and policymakers across both ecosystems." },
      { question: "Who can join Pakistan Textile Partners?", answer: "Pakistan Textile Partners is open to technology companies, startups, investors, professionals, researchers, and organisations with an interest in the UK\u2013Pakistan technology corridor. Both individuals and companies can apply for membership." },
      { question: "Where is Pakistan Textile Partners based?", answer: "Pakistan Textile Partners operates across both the UK and Pakistan, with presence in London and Islamabad. Our programmes and events take place in both countries and online." },
      { question: "How can I get involved?", answer: "You can get involved by becoming a member, attending our events, applying for our programmes, or partnering with us. Visit our membership page or contact us to learn more." },
    ],
  },
  {
    category: "Membership",
    faqs: [
      { question: "What are the membership tiers?", answer: "We offer individual and corporate membership tiers, each with different levels of access to resources, events, programmes, and networking opportunities. Contact us for the latest membership structure." },
      { question: "What benefits do members receive?", answer: "Members receive access to exclusive events, networking opportunities, business support services, mentorship programmes, funding guidance, trade delegations, and discounts on partner services." },
      { question: "How do I apply for membership?", answer: "You can apply for membership through our website. Complete the application form, and our team will review your application and get back to you within 5\u201310 business days." },
      { question: "Can I cancel my membership?", answer: "Yes, you can cancel your membership at any time by contacting our membership team." },
    ],
  },
  {
    category: "Programs & Services",
    faqs: [
      { question: "What programmes does Pakistan Textile Partners offer?", answer: "We offer AI & Tech Programs, Skill Development Centre training, Incubation & Collective Startups support, mentorship, business networks, digital marketing hub services, overseas employment facilitation, and business support services." },
      { question: "Are programmes free for members?", answer: "Many core programmes are included in membership. Some premium services, specialised training, and intensive accelerator programmes may have additional fees. Members always receive preferential rates." },
      { question: "How do I apply for a programme?", answer: "Applications for specific programmes are accepted through our website or during open application windows. Check individual programme pages for current availability and application deadlines." },
      { question: "Can non-members access services?", answer: "Some events and resources are available to non-members. However, full access to programmes, mentorship, and business support services requires active membership." },
    ],
  },
  {
    category: "Funding & Grants",
    faqs: [
      { question: "What types of funding are available?", answer: "We offer pre-seed and seed investment, Series A/B growth capital facilitation, R&D grants, innovation grants, and bilateral project funding. The type of funding depends on your stage, sector, and project objectives." },
      { question: "How long does the funding application process take?", answer: "Initial applications are reviewed within 2\u20134 weeks. The full process \u2014 including due diligence and funding decision \u2014 typically takes 6\u201312 weeks depending on the funding type and complexity of the proposal." },
      { question: "What are the eligibility criteria?", answer: "Eligible projects should be technology-focused with clear innovation potential, demonstrate alignment with UK\u2013Pakistan partnership objectives, and have a viable business model or research proposal with an experienced team." },
      { question: "Can I apply for multiple funding streams?", answer: "Yes, you can apply for multiple funding streams simultaneously, provided you meet the eligibility criteria for each. Our team can advise on the most appropriate funding mix." },
    ],
  },
  {
    category: "Events & Networking",
    faqs: [
      { question: "What types of events does Pakistan Textile Partners host?", answer: "We host conferences, roundtables, webinars, trade delegations, networking events, awards ceremonies, workshops, and hackathons across the UK and Pakistan." },
      { question: "Are events open to non-members?", answer: "Some events are open to the public, while others are exclusive to Pakistan Textile Partners members. Event listings indicate whether registration is open to all or members only." },
      { question: "How can I speak at a Pakistan Textile Partners event?", answer: "If you are interested in speaking, moderating, or presenting at a Pakistan Textile Partners event, please contact our events team with your topic, bio, and any relevant materials. We welcome proposals from industry leaders and experts." },
      { question: "Can my company sponsor an event?", answer: "Yes, we offer sponsorship opportunities for our events and programmes. Sponsorship packages include branding, speaking slots, exhibition space, and delegate access. Contact us for details." },
    ],
  },
];

const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

export default function FAQsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    let cats = faqCategories;

    if (activeCategory !== "All") {
      cats = cats.filter((c) => c.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      cats = cats
        .map((cat) => ({
          ...cat,
          faqs: cat.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(q) ||
              faq.answer.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.faqs.length > 0);
    }

    return cats;
  }, [activeCategory, searchQuery]);

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    setSearchQuery("");
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div>
      <PageHero
        label="Help Centre"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Pakistan Textile Partners, membership, programmes, funding, and more."
        image="/image/banners/faq.jpg"
      />

      {/* Stats Bar */}
      <section className="relative py-10 lg:py-14 bg-white">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: String(faqCategories.length), label: "Categories", color: "#2F7549" },
                { value: String(totalQuestions), label: "Questions Answered", color: "#3E8F5E" },
                { value: "24/7", label: "Online Access", color: "#2F7549" },
                { value: "5\u201310", label: "Days Response Time", color: "#6366F1" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-center flex flex-col items-center gap-1"
                >
                  <p className="font-heading font-extrabold text-4xl lg:text-5xl" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-sm sm:text-base text-[#5A5F72] font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Search + Filter Bar */}
      <section className="sticky top-[120px] sm:top-[150px] z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] py-4">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-10 pr-9 py-2.5 text-sm rounded-lg border border-[#E5E7EB] bg-[#f7f8fa] focus:bg-white focus:border-[#2F7549] focus:ring-2 focus:ring-[#2F7549]/20 outline-none transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#16291E] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-200 ${
                  activeCategory === "All"
                    ? "bg-[#16291E] text-white border-[#16291E]"
                    : "bg-white text-[#5A5F72] border-[#E5E7EB] hover:border-[#16291E]/30"
                }`}
              >
                All ({totalQuestions})
              </button>
              {faqCategories.map((cat) => {
                const meta = categoryMeta[cat.category];
                const isActive = activeCategory === cat.category;
                return (
                  <button
                    key={cat.category}
                    onClick={() => scrollToCategory(cat.category)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-200"
                    style={{
                      background: isActive ? meta.color : "#fff",
                      color: isActive ? "#fff" : "#5A5F72",
                      borderColor: isActive ? meta.color : "#E5E7EB",
                    }}
                  >
                    {cat.category} ({cat.faqs.length})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 lg:py-20 bg-[#f7f8fa]">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          {filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((cat) => {
                const Icon = categoryIcons[cat.category] || HelpCircle;
                const meta = categoryMeta[cat.category];
                const sectionId = `faq-${cat.category.toLowerCase().replace(/[^a-z]/g, "-")}`;

                return (
                  <div key={cat.category} id={sectionId} className="scroll-mt-48">
                    <AnimatedSection animation="blur-in">
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${meta.color}12`, border: `1.5px solid ${meta.color}25` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: meta.color }} strokeWidth={1.8} />
                        </div>
                        <div>
                          <h2 className="font-heading font-extrabold text-[#16291E] text-2xl sm:text-3xl leading-tight">
                            {cat.category}
                          </h2>
                          <p className="text-sm text-[#5A5F72] mt-0.5">{meta.desc}</p>
                        </div>
                        <span
                          className="hidden sm:inline-flex ml-auto text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                          style={{ background: `${meta.color}10`, color: meta.color }}
                        >
                          {cat.faqs.length} questions
                        </span>
                      </div>

                      {/* Accordion */}
                      <FAQAccordion
                        faqs={cat.faqs}
                        shouldReduceMotion={shouldReduceMotion}
                        color={meta.color}
                        searchQuery={searchQuery}
                      />
                    </AnimatedSection>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-[#D1D5DB] mx-auto mb-4" />
              <p className="text-lg font-semibold text-[#16291E] mb-2">No results found</p>
              <p className="text-sm text-[#5A5F72] mb-6">Try a different search term or browse all categories.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="px-5 py-2.5 text-sm font-bold text-[#2F7549] bg-[#2F7549]/10 rounded-lg hover:bg-[#2F7549]/20 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <GlobalCTA
        label="Still Have Questions?"
        title="We're Here to Help"
        subtitle="Can't find the answer you're looking for? Our team is ready to assist with any questions about Pakistan Textile Partners, membership, programmes, or partnerships."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Apply for Membership"
        secondaryButtonLink="/membership#apply"
        image="/image/healthcare-h.jpg"
      />
    </div>
  );
}

/* ─── Highlight matching text ─── */
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const q = query.trim();
  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200/60 text-inherit rounded px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function FAQAccordion({
  faqs,
  shouldReduceMotion,
  color,
  searchQuery,
}: {
  faqs: { question: string; answer: string }[];
  shouldReduceMotion: boolean | null;
  color: string;
  searchQuery: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={faq.question}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <div
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "shadow-lg"
                  : "shadow-sm border border-[#E5E7EB] hover:shadow-md hover:border-[#D1D5DB]"
              }`}
              style={isOpen ? { boxShadow: `0 0 0 1px ${color}30, 0 10px 15px -3px rgb(0 0 0 / 0.1)`, borderLeft: `3px solid ${color}` } : {}}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center gap-4 p-5 lg:p-6 text-left group"
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300"
                  style={
                    isOpen
                      ? { background: color, color: "#fff" }
                      : { background: `${color}0D`, color }
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`font-heading font-bold text-base sm:text-[17px] flex-1 leading-snug transition-colors duration-200 ${isOpen ? "text-[#16291E]" : "text-[#3D4152] group-hover:text-[#16291E]"}`}>
                  <HighlightText text={faq.question} query={searchQuery} />
                </span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: isOpen ? `${color}10` : "transparent" }}
                >
                  <ChevronDown
                    className="w-4.5 h-4.5 transition-transform duration-300"
                    style={{ color: isOpen ? color : "#9CA3AF", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 lg:px-6 pb-6 pl-[4.25rem] lg:pl-[4.75rem]">
                      <div className="h-px bg-[#E5E7EB] mb-4" />
                      <p className="text-[#5A5F72] text-[15px] leading-[1.85]">
                        <HighlightText text={faq.answer} query={searchQuery} />
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
