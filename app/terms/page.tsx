"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { ChevronDown, FileText, Mail } from "lucide-react";
import { DownloadButton } from "@/components/DownloadButton";

/* ─────────────────────────────────────────────────────────────────────────────
   Terms & Conditions Data — Client's exact wording preserved verbatim
   ───────────────────────────────────────────────────────────────────────────── */

const termsSections = [
  {
    id: "definitions",
    number: "1",
    title: "Definitions and Interpretation",
    content: [
      "1.1 In these Terms and Conditions, unless the context otherwise requires, the following expressions have the following meanings:",
      "1.2 \u201CContent\u201D means any and all text, images, audio, video, scripts, code, software, databases and any other form of information capable of being stored on a computer that appears on, or forms part of, Our Site; and",
      "1.3 \u201CWe\u201D or \u201CUs\u201D or \u201COur\u201D means UK-PAKISTAN TECH FORUM LTD (UPTIB), a company registered in England under ____, whose registered address is 5 Bishopsbourne, 134 Westbourne Terrace, London W2 6QB, United Kingdom",
    ],
  },
  {
    id: "about-us",
    number: "2",
    title: "Information About Us",
    content: [
      "2.1 Our Site, www.ukpaktrade.org.uk, is owned and operated by UK-PAKISTAN TECH FORUM LTD (UPTIB), a company registered in England under ____, whose registered address is, 134 Westbourne Terrace, London W2 6QB, United Kingdom",
    ],
  },
  {
    id: "obligations",
    number: "3",
    title: "Your Obligations and Conditions / Access to Our Site",
    content: [
      "3.1 Access to Our Site is free of charge.",
      "3.2 It is your responsibility to make any and all arrangements necessary in order to access Our Site.",
      "3.3 Access to Our Site is provided \u201Cas is\u201D and on an \u201Cas available\u201D basis. We may alter, suspend or discontinue Our Site (or any part of it) at any time and without notice. We will not be liable to you in any way if Our Site (or any part of it) is unavailable at any time and for any period.",
      "3.4 In consideration of Your use of the Website, You agree to: (a) provide accurate, current, and complete information about You as may be prompted by a registration form on the Website (the \u201CRegistration Data\u201D); (b) maintain the security of your password and identification; (c) maintain and promptly update the Registration Data, and any information You provide to UK-PAKISTAN TECH FORUM LTD (UPTIB), to keep it accurate, current and complete; and (d) accept all risks of unauthorized access to information and Registration Data. You have sole responsibility for adequate protection and backup of data and/or equipment used in connection with the Website.",
      "3.5 You agree that You will not use the Website to: (a) transmit spam, bulk or unsolicited communications; (b) pretend to be UK-PAKISTAN TECH FORUM LTD (UPTIB) or someone else, or spoof UK-PAKISTAN TECH FORUM LTD (UPTIB) or someone else\u2019s identity; (c) forge headers or otherwise manipulate identifiers (including URLs) in order to disguise the origin of any Content transmitted through the Services; (d) misrepresent your affiliation with a person or entity; (e) disrupt the normal flow of dialogue or otherwise act in a manner that negatively affects other users\u2019 ability to use the Website; (f) engage in activities that would violate any fiduciary relationship, any applicable local, state, national or international law, or any regulations having the force of law, including but not limited to attempting to compromise the security of any networked account or site, operating an illegal lottery or gambling operation, stalking, or making threats of harm; or (g) collect or store personal data about other users unless specifically authorized by such users.",
    ],
  },
  {
    id: "confidentiality",
    number: "4",
    title: "Confidentiality of UK-PAKISTAN TECH FORUM LTD (UPTIB) Information",
    content: [
      "4.1 You may obtain direct access via the Website to certain confidential information of UK-PAKISTAN TECH FORUM LTD (UPTIB) and its suppliers, including without limitation technical, contractual, product, program, pricing, marketing and other valuable information that should reasonably be understood as confidential (\u201CConfidential Information\u201D). You must hold Confidential Information in strict confidence. Title to Confidential Information remains with UK-PAKISTAN TECH FORUM LTD (UPTIB) and its suppliers.",
      "4.2 Your obligations regarding Confidential Information expire five (5) years after the date of disclosure. Upon termination of the Terms or UK-PAKISTAN TECH FORUM LTD (UPTIB) written request, you must cease use of Confidential Information and return or destroy it.",
    ],
  },
  {
    id: "links",
    number: "5",
    title: "Content Provided Via Links",
    content: [
      "5.1 You may find links to other Internet sites or resources on the Website. You acknowledge and agree that UK-PAKISTAN TECH FORUM LTD (UPTIB) is not responsible for the availability of such external sites or resources and does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources. UK-PAKISTAN TECH FORUM LTD (UPTIB) will not be responsible or liable, directly or indirectly, for any actual or alleged damage or loss caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.",
    ],
  },
  {
    id: "intellectual-property",
    number: "6",
    title: "Intellectual Property Rights",
    content: [
      "6.1 All Content included on Our Site and the copyright and other intellectual property rights subsisting in that Content, unless specifically labelled otherwise, belongs to or has been licensed by Us. All Content is protected by applicable United Kingdom and international intellectual property laws and treaties.",
      "6.2 Subject to sub-Clauses 4.3 and 4.6 you may not reproduce, copy, distribute, sell, rent, sub-licence, store, or in any other manner re-use Content from Our Site unless given express written permission to do so by Us.",
      "You may:",
      "6.3 Access, view and use Our Site in a web browser (including any web browsing capability built into other types of software or app);",
      "6.4 Download Our Site (or any part of it) for caching;",
      "6.5 Print page from Our Site;",
      "6.6 Download extracts from pages on Our Site; and",
      "6.7 Save pages from Our Site for later and/or offline viewing.",
      "6.8 Our status as the owner and author of the Content on Our Site (or that of identified licensors, as appropriate) must always be acknowledged.",
      "6.9 You may not use any Content saved or downloaded from Our Site for commercial purposes without first obtaining a licence from Us (or our licensors, as appropriate) to do so. This does not prohibit the normal access, viewing and use of Our Site for general information purposes whether by business users or consumers.",
      "6.10 Nothing in these Terms and Conditions limits or excludes the provisions of Chapter III of the Copyrights, Designs and Patents Act 1988 \u2018Acts Permitted in Relation to Copyright Works\u2019, covering in particular the making of temporary copies; research and private study; the making of copies for text and data analysis for non-commercial research; criticism, review, quotation and news reporting; caricature, parody or pastiche; and the incidental inclusion of copyright.",
      "6.11 Except as expressly authorized by UK-PAKISTAN TECH FORUM LTD (UPTIB) or by Content providers, You agree not to reproduce, modify, rent, lease, loan, sell, distribute, mirror, frame, republish, download, transmit, or create derivative works of the Content of others, in whole or in part, by any means. You must not modify, decompile, or reverse engineer any software UK-PAKISTAN TECH FORUM LTD (UPTIB) discloses to You, and You must not remove or modify any copyright or trademark notice, or other notice of ownership.",
      "6.12 UK-PAKISTAN TECH FORUM LTD (UPTIB) is committed to respecting others\u2019 intellectual property rights, and we ask our users to do the same. If You believe that Your work has been copied in a way that constitutes copyright infringement on our website, please contact us.",
    ],
  },
  {
    id: "privacy-policy",
    number: "7",
    title: "UK-PAKISTAN TECH FORUM LTD (UPTIB) Privacy Policy",
    content: [
      "7.1 You consent to the collection, processing and storage by UK-PAKISTAN TECH FORUM LTD (UPTIB) of Your personal information in accordance with the terms of UK-PAKISTAN TECH FORUM LTD (UPTIB) Privacy Policy. You agree to comply with all applicable laws and regulations, and the terms of UK-PAKISTAN TECH FORUM LTD (UPTIB) Privacy Policy, with respect to any access, use and/or submission by You of any personal information in connection with this Website.",
    ],
  },
  {
    id: "general-terms",
    number: "8",
    title: "General Terms",
    content: [
      "8.1 The Terms constitute the entire agreement between You and UK-PAKISTAN TECH FORUM LTD (UPTIB) relating to their subject matter and cancel and supersede any prior versions of the Terms. No modification to the Terms will be binding, unless in writing and signed by an authorized UK-PAKISTAN TECH FORUM LTD (UPTIB) representative. You must not assign or otherwise transfer the Terms or any right granted hereunder. You also may be subject to additional terms and conditions that may apply when You use UK-PAKISTAN TECH FORUM LTD (UPTIB) or third-party products or services.",
      "8.2 You agree that any material breach of Sections 1, 2, 3, 4, 5 and 6 of the Terms will result in irreparable harm to UK-PAKISTAN TECH FORUM LTD (UPTIB) for which damages would be an inadequate remedy and, therefore, in addition to its rights and remedies otherwise available at law, UK-PAKISTAN TECH FORUM LTD (UPTIB) will be entitled to equitable relief, including both a preliminary and permanent injunction, if such a breach occurs. You waive any requirement for the posting of a bond or other security if UK-PAKISTAN TECH FORUM LTD (UPTIB) seeks such an injunction.",
      "8.3 Rights and obligations under the Terms which by their nature should survive will remain in full effect after termination or expiration of the Terms.",
      "8.4 The Website may contain forward-looking statements within the meaning of the Private Securities Litigation Reform Act of 1995. Such forward-looking statements may include statements regarding market expectations and opportunities, expectations about financials, research and development and strategies, statements concerning UK-PAKISTAN TECH FORUM LTD (UPTIB) roadmaps, market share growth, and product and service development and introduction, and our continuous evaluation of the competitiveness of our product and service offerings. These forward-looking statements are just predictions and involve risks and uncertainties. Actual results may differ materially from results discussed in the forward-looking statements. Factors that may cause such a difference include risks related to adverse changes in general economic conditions, failure to reduce costs, lack of success in technical advancements, the timely development, production and acceptance of new products and services, and UK-PAKISTAN TECH FORUM LTD (UPTIB) ability to compete in a highly competitive and rapidly changing marketplace.",
      "8.5 Any express waiver or failure to exercise promptly any right under the Terms will not create a continuing waiver or any expectation of non-enforcement. If any provision of the Terms is held invalid by any law or regulation of any government, or by any court or arbitrator, the parties agree that such provision will be replaced with a new provision that accomplishes the original business purpose, and the other provisions of the Terms will remain in full force and effect.",
      "8.6 Framing or embedding of Our Site on other websites is not permitted without Our express written permission. Please contact Us at info@ukpaktrade.org.uk for further information.",
      "8.7 You may not link to Our Site from any other site the main content of which contains material that:",
    ],
    listItems: [
      "is sexually explicit.",
      "is obscene, deliberately offensive, hateful or otherwise inflammatory.",
      "promotes violence.",
      "promotes or assists in any form of unlawful activity.",
      "discriminates against, or is in any way defamatory of, any person, group or class of persons, race, sex, religion, nationality, disability, sexual orientation, or age.",
      "is intended or is otherwise likely to threaten, harass, annoy, alarm, inconvenience, upset, or embarrass another person.",
      "is calculated or is otherwise likely to deceive another person.",
      "is intended or is otherwise likely to infringe (or to threaten to infringe) another person\u2019s privacy.",
      "misleadingly impersonates any person or otherwise misrepresents the identity or affiliation of a particular person in a way that is calculated to deceive (obvious parodies are not included in this definition provided that they do not fall within any of the other provisions of this sub-Clause 5.4);",
      "implies any form of affiliation with Us where none exists.",
      "infringes, or assists in the infringement of, the intellectual property rights (including, but not limited to, copyright, trademarks and database rights) of any other party; or",
      "is made in breach of any legal duty owed to a third party including, but not limited to, contractual duties and duties of confidence.",
    ],
    afterList: [
      "8.8 Nothing on Our Site constitutes advice on which you should rely. It is provided for general information purposes only.",
      "8.9 Insofar as is permitted by law, we make no representation, warranty, or guarantee that Our Site will meet your requirements, that it will not infringe the rights of third parties, that it will be compatible with all software and hardware, or that it will be secure.",
      "8.10 We make reasonable efforts to ensure that the Content on Our Site is complete, accurate, and up to date. We do not, however, make any representations, warranties or guarantees (whether express or implied) that the Content is complete, accurate, or up to date.",
    ],
  },
  {
    id: "liability",
    number: "9",
    title: "Our Liability",
    content: [
      "9.7 To the fullest extent permissible by law, We accept no liability to any user for any loss or damage, whether foreseeable or otherwise, in contract, tort (including negligence), for breach of statutory duty, or otherwise, arising out of or in connection with the use of (or inability to use) Our Site or the use of or reliance upon any Content included on Our Site.",
      "9.8 To the fullest extent permissible by law, we exclude all representations, warranties, and guarantees (whether express or implied) that may apply to Our Site or any Content included on Our Site.",
      "9.9 If you are a business user, we accept no liability for loss of profits, sales, business or revenue; loss of business opportunity, goodwill or reputation; loss of anticipated savings; business interruption; or for any indirect or consequential loss or damage.",
      "9.10 We exercise all reasonable skill and care to ensure that Our Site is free from viruses and other malware. We accept no liability for any loss or damage resulting from a virus or other malware, a distributed denial of service attack, or other harmful material or event that may adversely affect your hardware, software, data or other material that occurs as a result of your use of Our Site (including the downloading of any Content from it) or any other site referred to on Our Site.",
      "9.11 We neither assume nor accept responsibility or liability arising out of any disruption or non-availability of Our Site resulting from external causes including, but not limited to, ISP equipment failure, host equipment failure, communications network failure, natural events, acts of war, or legal restrictions and censorship.",
      "9.12 Nothing in these Terms and Conditions excludes or restricts Our liability for fraud or fraudulent misrepresentation, for death or personal injury resulting from negligence, or for any other forms of liability which cannot be excluded or restricted by law. For full details of consumers\u2019 legal rights, including those relating to digital content, please contact your local Citizens\u2019 Advice Bureau or Trading Standards Office.",
    ],
  },
  {
    id: "viruses",
    number: "10",
    title: "Viruses, Malware and Security",
    content: [
      "10.7 We exercise all reasonable skill and care to ensure that Our Site is secure and free from viruses and other malware.",
      "10.8 You are responsible for protecting your hardware, software, data and other material from viruses, malware, and other internet security risks.",
      "10.9 You must not deliberately introduce viruses or other malware, or any other material which is malicious or technologically harmful either to or via Our Site.",
      "10.10 You must not attempt to gain unauthorized access to any part of Our Site, the server on which Our Site is stored, or any other server, computer, or database connected to Our Site.",
      "10.11 You must not attack Our Site by means of a denial-of-service attack, a distributed denial of service attack, or by any other means.",
      "10.12 By breaching the provisions of sub-Clauses 9.3 to 9.5 you may be committing a criminal offence under the Computer Misuse Act 1990. Any and all such breaches will be reported to the relevant law enforcement authorities, and We will cooperate fully with those authorities by disclosing your identity to them. Your right to use Our Site will cease immediately in the event of such a breach.",
    ],
  },
  {
    id: "acceptable-usage",
    number: "11",
    title: "Acceptable Usage Policy",
    content: [
      "11.7 You may only use Our Site in a manner that is lawful. Specifically:",
      "11.7.1 You must ensure that you comply fully with any and all local, national or international laws and/or regulations.",
      "11.7.2 You must not use Our Site in any way, or for any purpose, that is unlawful or fraudulent.",
      "11.7.3 You must not use Our Site to knowingly send, upload, or in any other way transmit data that contains any form of virus or other malware, or any other code designed to adversely affect computer hardware, software, or data of any kind; and",
      "11.7.4 you must not use Our Site in any way, or for any purpose, that is intended to harm any person or person in any way.",
      "11.8 We reserve the right to suspend or terminate your access to Our Site if you materially breach the provisions of this Clause 10 or any of the other provisions of these Terms and Conditions. Specifically, we may take one or more of the following actions:",
      "11.8.1 suspend, whether temporarily or permanently, your right to access Our Site.",
      "11.8.2 issue you with a written warning.",
      "11.8.3 take legal proceedings against you for reimbursement of any and all relevant costs on an indemnity basis resulting from your breach.",
      "11.8.4 Take further legal action against you as appropriate.",
      "11.8.5 disclose such information to law enforcement authorities as required or as We deem reasonably necessary; and/or",
      "11.8.6 any other actions which We deem reasonably appropriate (and lawful).",
      "11.9 We hereby exclude any and all liability arising out of any actions (including but not limited to those set out above) that We may take in response to breaches of these Terms and Conditions.",
    ],
  },
  {
    id: "privacy-cookies",
    number: "12",
    title: "Privacy and Cookies",
    content: [
      "12.7 Use of Our Site is also governed by Our Cookie and Privacy Policies, available from /cookie-policy/ and /privacy-policy/. These policies are incorporated into these Terms and Conditions by this reference.",
    ],
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to these Terms and Conditions",
    content: [
      "13.7 We may alter these Terms and Conditions at any time. Any such changes will become binding on you upon your first use of Our Site after the changes have been implemented. You are therefore advised to check this page from time to time.",
      "13.8 In the event of any conflict between the current version of these Terms and Conditions and any previous version(s), the provisions current and in effect shall prevail unless it is expressly stated otherwise.",
    ],
  },
  {
    id: "contacting-us",
    number: "14",
    title: "Contacting Us",
    content: [
      "14.7 To contact Us, please email Us at info@ukpaktrade.org.uk or using any of the methods provided on Our contact page.",
    ],
  },
  {
    id: "communications",
    number: "15",
    title: "Communications from Us",
    content: [
      "15.7 If We have your contact details, we may from time to time send you important notices by email. Such notices may relate to matters including, but not limited to, service changes and changes to these Terms and Conditions.",
      "15.8 We will never send you marketing emails of any kind without your express consent. If you do give such consent, you may opt out at any time. All marketing emails sent by Us include an unsubscribe link. If you opt out of receiving emails from Us at any time, it may take up to 10 business days for Us to comply with your request. During that time, you may continue to receive emails from Us.",
      "15.9 For questions or complaints about communications from Us (including, but not limited to marketing emails), please contact Us at info@ukpaktrade.org.uk",
    ],
  },
  {
    id: "data-protection",
    number: "16",
    title: "Data Protection",
    content: [
      "16.7 Any and all personal information that We may collect will be collected, used and held in accordance with the provisions of the Data Protection Act 1998 and your rights and Our obligations under that Act.",
      "16.8 We may use your personal information to:",
      "16.8.1 Reply to any communications you send to Us.",
      "16.8.2 Send you important notices, as detailed in Clause 14.",
      "16.9 We will not pass on your personal information to any third parties without your consent.",
    ],
  },
  {
    id: "law-jurisdiction",
    number: "17",
    title: "Law and Jurisdiction",
    content: [
      "17.7 These Terms and Conditions, and the relationship between you and Us (whether contractual or otherwise) shall be governed by and construed in accordance with the law of England & Wales.",
      "17.8 If you are a consumer, you will benefit from any mandatory provisions of the law in your country of residence. Nothing in Sub-Clause 16.1 above takes away or reduces your rights as a consumer to rely on those provisions.",
      "17.9 If you are a consumer, any dispute, controversy, proceedings or claim between you and Us relating to these Terms and Conditions, or the relationship between you and Us (whether contractual or otherwise) shall be subject to the jurisdiction of the courts of England, Wales, Scotland, or Northern Ireland, as determined by your residency.",
      "17.10 If you are a business, any disputes concerning these Terms and Conditions, the relationship between you and Us, or any matters arising therefrom or associated therewith (whether contractual or otherwise) shall be subject to the exclusive jurisdiction of the courts of England & Wales.",
    ],
  },
];

/* Section accent colours — cycle through palette */
const sectionAccents = [
  "#2F7549", "#3E8F5E", "#2F7549", "#2F7549", "#3E8F5E",
  "#2F7549", "#2F7549", "#3E8F5E", "#2F7549", "#2F7549",
  "#3E8F5E", "#2F7549", "#2F7549", "#3E8F5E", "#2F7549",
  "#2F7549", "#3E8F5E",
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────────────────────────────────────── */

export default function TermsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenSections(new Set(termsSections.map((s) => s.id)));
  };

  const collapseAll = () => {
    setOpenSections(new Set());
  };

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        label="Legal"
        title="Acceptance of Terms of Use for This Website"
        subtitle="These Terms and Conditions, together with any and all other documents referred to herein, set out the terms of use under which you may use this website."
        image="/image/banners/banner21.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <DownloadButton href="/documents/UPTIB-Terms-and-Conditions.pdf" filename="UPTIB-Terms-and-Conditions.pdf">
            Download PDF
          </DownloadButton>
        </div>
      </PageHero>

      <div className="content-body">
      {/* ── Background Notice — Light section ──────────────────────── */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div>
              <SectionHeader label="Important Notice" title="Terms & Conditions" color="blue" />

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center flex-shrink-0">
                    <FileText
                      className="w-5 h-5 text-[#2F7549]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-[#5A5F72] text-base leading-relaxed pt-2">
                    These Terms and Conditions, together with any and all other
                    documents referred to herein, set out the terms of use under
                    which you may use this website, www.ukpaktrade.org.uk ({"\u201C"}Our
                    Site{"\u201D"}). Please read these Terms and Conditions
                    carefully and ensure that you understand them. Your agreement
                    to comply with and be bound by these Terms and Conditions is
                    deemed to occur upon your first use of Our Site. If you do
                    not agree to comply with and be bound by these Terms and
                    Conditions, you must stop using Our Site immediately.
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Expand / Collapse Controls + Section Nav — Light alt ─── */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label={`${termsSections.length} Sections`} title="Quick Navigation" subtitle="Click any section below to jump directly, or use the expand/collapse controls." color="blue" />

            {/* Expand / Collapse buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={expandAll}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2F7549]/10 border border-[#2F7549]/20 text-[#2F7549] text-base font-semibold hover:bg-[#2F7549]/20 transition-colors duration-200"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#5A5F72] text-base font-semibold hover:bg-white transition-colors duration-200"
              >
                Collapse All
              </button>
            </div>

            {/* Section nav grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {termsSections.map((section, i) => {
                const color = sectionAccents[i];
                return (
                  <motion.button
                    key={section.id}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 12 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    onClick={() => {
                      const el = document.getElementById(`terms-${section.id}`);
                      if (el) {
                        const offset =
                          el.getBoundingClientRect().top +
                          window.pageYOffset -
                          100;
                        window.scrollTo({ top: offset, behavior: "smooth" });
                      }
                      setOpenSections((prev) => {
                        const next = new Set(prev);
                        next.add(section.id);
                        return next;
                      });
                    }}
                    className="group text-left bg-white border border-[#D8D5CF] rounded-xl p-4 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 shadow-sm"
                  >
                    <span
                      className="text-base font-bold tabular-nums block mb-1.5"
                      style={{ color }}
                    >
                      {section.number.padStart(2, "0")}
                    </span>
                    <h3 className="font-heading font-semibold text-[#3D4152] text-base sm:text-base leading-snug group-hover:text-[#16291E] transition-colors duration-200 line-clamp-2">
                      {section.title}
                    </h3>
                  </motion.button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Accordion Sections — Light background ────── */}
      <section className="relative overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20py-10">
          <AnimatedSection>
            <SectionHeader label="Full Terms" title="Terms & Conditions" color="green" />

            <div className="space-y-3 max-w-5xl">
              {termsSections.map((section, index) => {
                const isOpen = openSections.has(section.id);
                const color = sectionAccents[index];

                return (
                  <motion.div
                    key={section.id}
                    id={`terms-${section.id}`}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 8 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className={`bg-white border overflow-hidden rounded-xl transition-all duration-300 scroll-mt-28 shadow-sm ${
                      isOpen
                        ? "border-[#D8D5CF] shadow-md"
                        : "border-[#D8D5CF] hover:border-[#D8D5CF]"
                    }`}
                    style={
                      isOpen
                        ? { borderLeft: `3px solid ${color}` }
                        : {}
                    }
                  >
                    {/* Accordion button */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
                    >
                      <span
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold transition-colors duration-300"
                        style={
                          isOpen
                            ? {
                                background: color,
                                color: "#fff",
                              }
                            : {
                                background: `${color}10`,
                                color,
                              }
                        }
                      >
                        {section.number.padStart(2, "0")}
                      </span>
                      <span className="font-heading font-semibold text-base flex-1 text-[#16291E] transition-colors duration-200">
                        {section.title}
                      </span>
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                        style={
                          isOpen
                            ? { background: `${color}10` }
                            : { background: "transparent" }
                        }
                      >
                        <ChevronDown
                          className="w-4.5 h-4.5 transition-transform duration-300"
                          style={{
                            color: isOpen ? color : "#9A9EAF",
                            transform: isOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </div>
                    </button>

                    {/* Accordion content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 lg:px-6 pb-6 lg:pb-8 pl-[4.75rem] lg:pl-[5.25rem]">
                            <div className="h-px bg-[#D8D5CF] mb-5" />
                            <div className="space-y-4">
                              {section.content.map((paragraph, pIdx) => {
                                /* Sub-clause numbers like 3.4, 6.3, 11.7.1 etc. */
                                const isSubClause = /^\d+\.\d/.test(paragraph);
                                const isHeader =
                                  paragraph === "You may:";

                                return (
                                  <p
                                    key={pIdx}
                                    className={`text-base leading-[1.8] ${
                                      isHeader
                                        ? "text-[#3D4152] font-semibold mt-2"
                                        : isSubClause
                                        ? "text-[#7A7E8F] pl-0"
                                        : "text-[#5A5F72]"
                                    }`}
                                  >
                                    {isSubClause && (
                                      <span
                                        className="font-semibold mr-1"
                                        style={{ color: `${color}cc` }}
                                      >
                                        {paragraph.split(" ")[0]}
                                      </span>
                                    )}
                                    {isSubClause
                                      ? paragraph.substring(
                                          paragraph.indexOf(" ") + 1
                                        )
                                      : paragraph}
                                  </p>
                                );
                              })}

                              {/* Numbered list items (for section 8.7) */}
                              {"listItems" in section &&
                                section.listItems && (
                                  <ol className="space-y-2 mt-3 pl-4">
                                    {(
                                      section.listItems as string[]
                                    ).map((item, lIdx) => (
                                      <li
                                        key={lIdx}
                                        className="flex items-start gap-3 text-base text-[#7A7E8F] leading-[1.8]"
                                      >
                                        <span
                                          className="text-base font-bold tabular-nums pt-1 flex-shrink-0 min-w-[20px]"
                                          style={{ color }}
                                        >
                                          {lIdx + 1}.
                                        </span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ol>
                                )}

                              {/* After-list paragraphs (8.8, 8.9, 8.10) */}
                              {"afterList" in section &&
                                section.afterList &&
                                (section.afterList as string[]).map(
                                  (paragraph, aIdx) => {
                                    const isSubClause =
                                      /^\d+\.\d/.test(paragraph);
                                    return (
                                      <p
                                        key={`after-${aIdx}`}
                                        className="text-base leading-[1.8] text-[#7A7E8F] mt-3"
                                      >
                                        {isSubClause && (
                                          <span
                                            className="font-semibold mr-1"
                                            style={{ color: `${color}cc` }}
                                          >
                                            {paragraph.split(" ")[0]}
                                          </span>
                                        )}
                                        {isSubClause
                                          ? paragraph.substring(
                                              paragraph.indexOf(" ") + 1
                                            )
                                          : paragraph}
                                      </p>
                                    );
                                  }
                                )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      </div>

      {/* ── CTA — Gradient dark section ──────────────────────────── */}
      <section
        className="relative overflow-hidden py-12"
        style={{
          background:
            "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F7549]/30 to-transparent" />
        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #2F7549, transparent 50%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7549]/10 border border-[#2F7549]/20 flex items-center justify-center">
                    <Mail
                      className="w-5 h-5 text-[#2F7549]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-base font-bold tracking-[0.2em] uppercase text-[#2F7549]">
                    Questions?
                  </p>
                </div>
                <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                  Need Clarification?
                </h2>
                <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                  To contact Us, please email Us at{" "}
                  <a
                    href="mailto:info@ukpaktrade.org.uk"
                    className="text-[#2F7549] hover:text-[#8FD3AE] transition-colors"
                  >
                    info@ukpaktrade.org.uk
                  </a>{" "}
                  or using any of the methods provided on Our contact page.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  showArrow
                >
                  Contact Us
                </Button>
                <Button
                  href="/membership#apply"
                  variant="glass"
                  size="lg"
                  showArrow
                >
                  Apply for Membership
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
