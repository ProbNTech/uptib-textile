import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { PolicyHero } from "@/components/PolicyHero";
import { PolicyDoc, PolicySection, PolicySub } from "@/components/PolicyDoc";

export const metadata: Metadata = {
  title: "GDPR Policy",
  description: "Our commitment to data protection and your rights under the General Data Protection Regulation.",
  alternates: { canonical: "/gdpr" },
};

const toc = [
  { id: "data-subject-rights", label: "Data Subject Rights" },
  { id: "your-rights", label: "Your Rights" },
  { id: "lawful", label: "Lawful Processing" },
  { id: "retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact" },
];

const dataSubjectRights = [
  { title: "Right to Access", desc: "Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them and if so, exactly what data is being collected, how, where, and for what purposes. This data can be manually requested via info@ukpaktrade.org.uk and provided in an electronic format free of charge." },
  { title: "Right to Be Forgotten", desc: "Should data subjects at any time wish to withdraw their consent and no longer allow UK–Pakistan Trade and Investment Board Ltd (UPTIB) to store their personal data, this request can be manually made via info@ukpaktrade.org.uk. Please be sure to include the full name (including any prefixes) and email address of whom the data is in reference too, so that all data relating to the data subject in question can be accurately removed." },
  { title: "Data Portability", desc: "Similar to the Right to Access, Data Portability requires that data subjects are able to request, obtain, and/or transfer possession of collected data at any time. As mentioned above, this data can be manually requested via info@ukpaktrade.org.uk and provided in an electronic format free of charge. Should the data subject wish to transfer the possession of the data stored by UK–Pakistan Trade and Investment Board Ltd (UPTIB), please be sure to also include the full name (including any prefixes) and the relevant contact information relating to the individual or organization whom you wish the data to be transferred to." },
  { title: "Breach Notification", desc: "Should UK–Pakistan Trade and Investment Board Ltd (UPTIB) encounter a breach/unauthorized access of personal data that is likely to “result in a risk for the rights and freedoms of individuals”, UK–Pakistan Trade and Investment Board Ltd (UPTIB) will ensure that a notification is made within 72 hours of becoming aware of the breach." },
];

const yourRights = [
  { title: "Right of Access", desc: "You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email: info@ukpaktrade.org.uk" },
  { title: "Right to Correction", desc: "We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected." },
  { title: "Right to Restrict Use", desc: "You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we’re not lawfully allowed to use it." },
  { title: "Right of Erasure", desc: "You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it." },
  { title: "Right to Portability", desc: "If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format." },
  { title: "Right to Object", desc: "You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes." },
];

const lawfulBases = [
  { title: "Performance of a Contract", desc: "Where we are entering into a contract with you or performing our obligations under it, for example when you became a ‘paying’ member of our network." },
  { title: "Legal Obligation", desc: "Where necessary, we can comply with a legal or regulatory obligation to which we are subject." },
  { title: "Legitimate Interests", desc: "Where it is reasonably necessary to achieve our legitimate interests, i.e. those required for running Pakistan Textile Partners as a textile trade platform connecting Pakistani manufacturers and exporters with buyers worldwide." },
  { title: "Specific Consent", desc: "Where you have provided specific consent to us using your personal information in a certain way, such as to send you email, text and/or contact via telephone." },
];

const retention = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended" },
  { category: "Prospects", period: "Up to 24 months from last contact" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended" },
];

export default function GDPRPage() {
  return (
    <div>
      <PolicyHero
        eyebrow="Data Protection"
        breadcrumb="GDPR Policy"
        title="GDPR Compliance"
        subtitle="Our commitment to data protection and your rights under the General Data Protection Regulation."
        icon={Shield}
      />

      <PolicyDoc toc={toc}>
        <PolicySection id="data-subject-rights" eyebrow="GDPR Compliance" title="Data Subject Rights">
          <p>
            GDPR compliance requires data subjects to be granted certain rights. What follows is not an
            exhaustive list, but those rights that are relevant to the collection, processing, and storage
            of personal data on{" "}
            <a href="https://www.ukpaktrade.org.uk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2F7549] underline underline-offset-2">www.ukpaktrade.org.uk</a>.
          </p>
          <div className="space-y-6 pt-2">
            {dataSubjectRights.map((r) => (
              <div key={r.title}>
                <h3 className="font-heading text-[1.05rem] font-semibold text-[#16291E]">{r.title}</h3>
                <p className="mt-1.5">{r.desc}</p>
              </div>
            ))}
          </div>
        </PolicySection>

        <PolicySection id="your-rights" eyebrow="Your Rights" title="Rights Under UK Data Protection Law">
          <p>
            Under UK data protection law, you have certain rights over the personal information that we
            hold about you. Here is a summary of the rights that we think apply:
          </p>
          <div className="space-y-6 pt-2">
            {yourRights.map((r) => (
              <div key={r.title}>
                <h3 className="font-heading text-[1.05rem] font-semibold text-[#16291E]">{r.title}</h3>
                <p className="mt-1.5">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="pt-2">
            If you want to exercise any of the above rights, please email us at{" "}
            <a href="mailto:info@ukpaktrade.org.uk" className="font-medium text-[#2F7549] underline underline-offset-2">info@ukpaktrade.org.uk</a>{" "}
            and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for
            further information and/or evidence of identity. We will endeavor to respond fully to all
            requests within 10 working days of your request, however if we are unable to do so we will
            contact you with reasons for the delay.
          </p>
          <p>
            Please note that exceptions apply to a number of these rights, and not all rights will be
            applicable in all circumstances. For more details we recommend you consult the guidance
            published by the UK’s Information Commissioner’s Office,{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2F7549] underline underline-offset-2">https://ico.org.uk</a>.
          </p>
        </PolicySection>

        <PolicySection id="lawful" eyebrow="Legal Basis" title="Lawful Processing">
          <p>
            Data protection law requires us to rely on one or more lawful grounds to process your personal
            information. We consider the following grounds to be relevant:
          </p>
          <div className="space-y-6 pt-2">
            {lawfulBases.map((b) => (
              <div key={b.title}>
                <h3 className="font-heading text-[1.05rem] font-semibold text-[#16291E]">{b.title}</h3>
                <p className="mt-1.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </PolicySection>

        <PolicySection id="retention" eyebrow="Retention Policy" title="Data Retention">
          <p>
            We keep your information for no longer than is necessary for the purposes it was collected for.
            The length of time we retain your personal information is determined by operational and legal
            considerations.
          </p>
          <dl className="mt-2 divide-y divide-[#ECECE6] border-y border-[#ECECE6]">
            {retention.map((r) => (
              <div key={r.category} className="grid gap-1 py-4 sm:grid-cols-[230px_minmax(0,1fr)] sm:gap-6">
                <dt className="font-semibold text-[#16291E]">{r.category}</dt>
                <dd>{r.period}</dd>
              </div>
            ))}
          </dl>
        </PolicySection>

        <PolicySection id="security" eyebrow="Data Security" title="Security Measures">
          <PolicySub title="Safeguarding Your Data">
            <p>
              Pakistan Textile Partners uses reasonable measures to safeguard personal information. We have
              put in place appropriate security measures to prevent your personal data from being
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In
              addition, we limit access to your personal data to only those employees, contractors or
              agents who have a legitimate business need to have access to that data.
            </p>
          </PolicySub>
        </PolicySection>

        <PolicySection id="contact" eyebrow="Get in Touch" title="Contact">
          <p>
            For any questions about this policy or our treatment of your Personal Information, please
            contact{" "}
            <a href="mailto:info@ukpaktrade.org.uk" className="font-medium text-[#2F7549] underline underline-offset-2">info@ukpaktrade.org.uk</a>.
          </p>
        </PolicySection>
      </PolicyDoc>
    </div>
  );
}
