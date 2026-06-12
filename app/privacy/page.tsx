import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { PolicyHero } from "@/components/PolicyHero";
import { PolicyDoc, PolicySection, PolicySub, PolicyList } from "@/components/PolicyDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pakistan Textile Partners collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const toc = [
  { id: "introduction", label: "Introduction" },
  { id: "collection", label: "How We Collect" },
  { id: "info-type", label: "Information Collected" },
  { id: "how-used", label: "How It’s Used" },
  { id: "retention", label: "Retention" },
  { id: "access", label: "Who Has Access" },
  { id: "lawful", label: "Lawful Processing" },
  { id: "marketing", label: "Marketing" },
  { id: "rights", label: "Your Rights" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact" },
];

const usage = [
  "providing you with the services and information you asked for.",
  "processing orders, such as event attendance, that you have submitted.",
  "carrying out our obligations under any contracts entered between you and us.",
  "keeping a record of your relationship with us.",
  "conducting analysis so we can understand how we can improve our services;",
  "checking for updated contact details against third party sources, such as LinkedIn so we can stay in touch if you move.",
  "seeking your views or comments on the services we provide.",
  "notifying you of changes to our services.",
  "sending you communications which you have requested or that may be of interest to you.",
];

const retention = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended" },
  { category: "Prospects", period: "Up to 24 months from last contact" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended" },
];

const access = [
  "We do not sell or rent your information to third parties.",
  "We do not share your information with third parties for marketing purposes.",
  "We may pass your information to our associates for the purpose of completing tasks on your behalf.",
  "We have secure cloud service providers to manage our customer details and service records.",
];

const rights = [
  {
    title: "Right of Access",
    desc: "You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email: info@ukpaktrade.org.uk",
  },
  {
    title: "Right to Correction",
    desc: "We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected.",
  },
  {
    title: "Right to Restrict Use",
    desc: "You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we’re not lawfully allowed to use it.",
  },
  {
    title: "Right of Erasure",
    desc: "You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it.",
  },
  {
    title: "Right to Data Portability",
    desc: "If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format.",
  },
  {
    title: "Right to Object",
    desc: "You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes.",
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <PolicyHero
        eyebrow="Data Protection"
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        icon={Shield}
      />

      <PolicyDoc toc={toc}>
        <PolicySection id="introduction" eyebrow="Privacy Notice" title="Introduction">
          <p>
            Pakistan Textile Partners is the textile division of the UK–Pakistan Trade and Investment
            Board Ltd (UPTIB), connecting Pakistan’s textile manufacturers and exporters with buyers
            worldwide. We are committed to protecting the privacy of your Personal Information. This
            policy sets out how we collect, use and transfer your Personal Information, the security
            measures we employ to protect such data and your rights and choices with regards to access
            or use of such data.
          </p>
          <p>
            This policy explains when and why we collect personal information about you, how we use it,
            the conditions under which we may disclose it to others, how we keep it safe and secure and
            your rights and choices in relation to your information.
          </p>
        </PolicySection>

        <PolicySection id="collection" eyebrow="Data Collection" title="How Do We Collect Information from You?">
          <p>We obtain information about you in the following ways:</p>
          <div className="space-y-8 pt-2">
            <PolicySub title="Information You Give Us Directly">
              <p>
                For example, we may obtain information about you when you decide to become a member,
                partner or key stakeholder of Pakistan Textile Partners or take part in one of our
                events, or when you register to receive one of our newsletters. Pakistan Textile
                Partners collects information directly from individuals or from the parent companies of
                the individuals. The information could be collected through emails, phone calls, online
                registration forms, event registration forms and face-to-face meetings. Pakistan Textile
                Partners collects personal data about individuals when there is a legitimate basis, a
                contract or when such information is provided on a voluntary basis.
              </p>
            </PolicySub>

            <PolicySub title="Third-Party Referrals & Networking">
              <p>
                Your information may be shared with us by third parties (i.e. a referral from an existing
                member or a referral as part of a contract we are delivering) or by one of our Partners.
                In all cases the person sharing your information should be already known to you and have
                obtained your permission.
              </p>
              <p>
                We also receive data through networking (e.g. by you giving us a business card or by you
                attending one of our events) and we will add these details, if relevant, onto our
                internal CRM management system.
              </p>
              <p>
                If you contact us using the Contact Form on our website, we will email you in response to
                that request and if relevant records that information in our CRM system.
              </p>
            </PolicySub>

            <PolicySub title="When You Visit Our Website">
              <p>We, like many companies, automatically collect the following information:</p>
              <PolicyList
                items={[
                  "Technical information, including the type of device you’re using, the IP address, browser and operating system being used to connect your computer to the internet.",
                  "Information about your visit to this website, for example we collect information about pages you visit and how you navigate the website, i.e. length of visits to certain pages, services you viewed and searched for, referral sources (e.g. how you arrived at our website).",
                ]}
              />
            </PolicySub>

            <PolicySub title="Social Media">
              <p>
                When you interact with us on social media platforms such as LinkedIn and Twitter we may
                obtain information about you (for example, when you publicly tag us in an event photo).
                The information we receive will depend on the privacy preferences you have set on those
                types of platforms.
              </p>
            </PolicySub>
          </div>
        </PolicySection>

        <PolicySection id="info-type" eyebrow="Data Types" title="What Type of Information Is Collected from You?">
          <p>The personal information we collect, store and use might include:</p>
          <p>
            Your name and contact details (including postal address, email address and telephone
            number). The name of the organization you work for and the events you attend. We do not
            collect sensitive data about you, other than dietary / any special access requirements for
            the purposes of event planning.
          </p>
        </PolicySection>

        <PolicySection id="how-used" eyebrow="Data Usage" title="How and Why Is Your Information Used?">
          <p>We may use your information for a number of different purposes, which may include:</p>
          <PolicyList items={usage} />
        </PolicySection>

        <PolicySection id="retention" eyebrow="Retention Periods" title="How Long Is Your Information Kept For?">
          <p>
            We keep your information for no longer than is necessary for the purposes it was collected
            for. The length of time we retain your personal information is determined by operational and
            legal considerations. For example, we are legally required to hold some types of information
            to fulfil our statutory and regulatory obligations (e.g. health/safety and tax/accounting
            purposes). We review our retention periods on a regular basis:
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

        <PolicySection id="access" eyebrow="Data Access" title="Who Has Access to Your Information?">
          <PolicyList items={access} />
        </PolicySection>

        <PolicySection id="lawful" eyebrow="Legal Basis" title="Lawful Processing">
          <p>
            Data protection law requires us to rely on one or more lawful grounds to process your
            personal information. We consider the following grounds to be relevant:
          </p>
          <div className="space-y-8 pt-2">
            <PolicySub title="Performance of a Contract">
              <p>
                Where we are entering into a contract with you or performing our obligations under it,
                for example when you became a ‘paying’ member of our network.
              </p>
            </PolicySub>
            <PolicySub title="Legal Obligation">
              <p>Where necessary, we can comply with a legal or regulatory obligation to which we are subject.</p>
            </PolicySub>
            <PolicySub title="Legitimate Interests">
              <p>
                Where it is reasonably necessary to achieve our legitimate interests, i.e. those required
                for running Pakistan Textile Partners as a textile trade platform connecting Pakistani
                manufacturers and exporters with buyers worldwide. For example, to:
              </p>
              <PolicyList
                items={[
                  "broker connections between manufacturers and buyers where there is mutual benefit in doing so",
                  "send postal communications which we think will be of interest to you;",
                  "conduct research to better understand the priorities of our membership and to represent accurately the UK–Pakistan textile trade community.",
                  "contact you to seek your views or comments on emerging trade and market developments.",
                  "enhance, modify, personalize, or otherwise improve our services / communications for the benefit of our members, partners and stakeholders; and understand better how people interact with our website.",
                  "invite you to event(s), trade delegations or exhibitions that we may think are relevant to you in your professional capacity.",
                ]}
              />
              <p className="border-l-2 border-[#3E8F5E]/40 pl-5 text-[#5A5F72]">
                When we legitimately process your personal information in this way, we consider and
                balance any potential impact on you (both positive and negative), and your rights under
                data protection laws. We will not use your personal information where our interests are
                overridden by the impact on you, for example, where use would be excessively intrusive
                (unless, for instance, we are otherwise required or permitted to by law).
              </p>
            </PolicySub>
            <PolicySub title="Specific Consent">
              <p>
                Where you have provided specific consent to us using your personal information in a
                certain way, such as to send you email, text and/or contact via telephone.
              </p>
            </PolicySub>
          </div>
        </PolicySection>

        <PolicySection id="marketing" eyebrow="Communications" title="Marketing Communications">
          <p>
            We may use your contact details to provide you with information about the work we do for the
            UK–Pakistan textile trade community and additional opportunities to work together, if we
            think it may be of interest to you.
          </p>
          <div className="space-y-8 pt-2">
            <PolicySub title="Email">
              <p>
                You may opt out of our marketing communications at any time by clicking the unsubscribed
                link at the end of our marketing emails.
              </p>
            </PolicySub>
            <PolicySub title="Post">
              <p>
                We may occasionally send you marketing communications by post unless you have told us that
                you would prefer not to hear from us, under your access rights request (details listed
                below).
              </p>
            </PolicySub>
            <PolicySub title="Building Profiles">
              <p>
                We may analyze your personal information to create a profile of your interests and
                preferences so that we can tailor and target our communications in a way that is timely
                and relevant to you – an example of this would be where interest in a particular product
                category or export market has been expressed by you. This allows us to be more focused,
                efficient, and cost effective with our resources and reduces the risk of someone receiving
                information they may find inappropriate or irrelevant.
              </p>
              <p>We’re committed to putting you in control of your data, please refer to your rights, below.</p>
              <p>We may also use your personal information to detect and reduce fraud and credit risk.</p>
            </PolicySub>
          </div>
        </PolicySection>

        <PolicySection id="rights" eyebrow="Data Subject Rights" title="Your Rights">
          <p>
            Under UK data protection law, you have certain rights over the personal information that we
            hold about you. Here is a summary of the rights that we think apply:
          </p>
          <div className="space-y-6 pt-2">
            {rights.map((r) => (
              <div key={r.title}>
                <h3 className="font-heading text-[1.05rem] font-semibold text-[#16291E]">{r.title}</h3>
                <p className="mt-1.5">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="pt-2">
            If you want to exercise any of the above rights, please email us at{" "}
            <a href="mailto:info@ukpaktrade.org.uk" className="font-medium text-[#2F7549] underline underline-offset-2">
              info@ukpaktrade.org.uk
            </a>{" "}
            and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for
            further information and/or evidence of identity. We will endeavor to respond fully to all
            requests within 10 working days of your request, however if we are unable to do so we will
            contact you with reasons for the delay.
          </p>
          <p>
            Please note that exceptions apply to a number of these rights, and not all rights will be
            applicable in all circumstances. For more details we recommend you consult the guidance
            published by the UK’s Information Commissioner’s Office,{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2F7549] underline underline-offset-2"
            >
              https://ico.org.uk
            </a>
            .
          </p>
        </PolicySection>

        <PolicySection id="security" eyebrow="Data Protection" title="Keeping Your Information Safe">
          <div className="space-y-8">
            <PolicySub title="Technical & Organisational Controls">
              <p>
                When you give us personal information, we take steps to ensure that appropriate technical
                and organizational controls are in place to protect it.
              </p>
              <p>
                Any sensitive information such as credit or debit card details is encrypted and protected
                with the following software 128 Bit encryption on SSL. When you are on a secure page, a
                lock icon will appear on the bottom of web browsers such as Microsoft Internet Explorer.
                This information will be stored by a third party. We have carried out due diligence with
                the organization.
              </p>
            </PolicySub>
            <PolicySub title="Security">
              <p>
                Pakistan Textile Partners uses reasonable measures to safeguard personal information. We
                have put in place appropriate security measures to prevent your personal data from being
                accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In
                addition, we limit access to your personal data to only those employees, contractors or
                agents who have a legitimate business need to have access to that data. The employees,
                contractors or agents will process your personal data in accordance with our instructions.
                They will be subject to a duty of confidentiality and due care with respect to handling
                personal data. We have put in place procedures to deal with any suspected data security
                breach and will notify you and any applicable regulator of a suspected breach where we
                are legally required to do so.
              </p>
              <p>
                Emails are transmitted normally over the Internet, and this can never be guaranteed to be
                100% secure. As a result, while we strive to protect your personal information, we cannot
                guarantee the security of any information you transmit to us, and you do so at your own
                risk. Once we receive your information, we will make our best effort to ensure its
                security on our systems. Where we have given (or where you have chosen) a password which
                enables you to access certain parts of our website, you are responsible for keeping this
                password confidential. We ask you not to share your password with anyone.
              </p>
            </PolicySub>
          </div>
        </PolicySection>

        <PolicySection id="contact" eyebrow="Get in Touch" title="Contact">
          <p>
            For any questions about this Privacy Policy or our treatment of your Personal Information,
            please contact{" "}
            <a href="mailto:info@ukpaktrade.org.uk" className="font-medium text-[#2F7549] underline underline-offset-2">
              info@ukpaktrade.org.uk
            </a>
            .
          </p>
        </PolicySection>
      </PolicyDoc>
    </div>
  );
}
