import type { Metadata } from "next";
import { Cookie } from "lucide-react";
import { PolicyHero } from "@/components/PolicyHero";
import { PolicyDoc, PolicySection, PolicySub } from "@/components/PolicyDoc";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "How Pakistan Textile Partners uses cookies and similar technologies on this website.",
  alternates: { canonical: "/cookies" },
};

const toc = [
  { id: "about", label: "About Our Cookies" },
  { id: "links", label: "Links to Other Websites" },
  { id: "categories", label: "Cookies We Use" },
  { id: "details", label: "Additional Details" },
  { id: "browser", label: "Browser Settings" },
  { id: "rights", label: "Your Rights" },
  { id: "changes", label: "Changes & Review" },
  { id: "contact", label: "Contact" },
];

const cookieTypes = [
  { title: "Necessary", desc: "These cookies are necessary in order to allow the Site to work correctly. They enable you to access the Site, move around, and access different services, features, and tools. Examples include remembering previous actions (e.g. entered text) when navigating back to a page in the same session. These cookies cannot be disabled." },
  { title: "Functionality", desc: "These cookies remember your settings and preferences and the choices you make (such as language or regional preferences) in order to help us personalize your experience and offer you enhanced functionality and content." },
  { title: "Security", desc: "These cookies can help us identify and prevent security risks. They may be used to store your session information to prevent others from changing your password without your login information." },
  { title: "Performance", desc: "These cookies can help us collect information to help us understand how you use our Site, for example whether you have viewed messages or specific pages and how long you spent on each page. This helps us improve the performance of our Site." },
  { title: "Analytics", desc: "These cookies collect information regarding your activity on our Site to help us learn more about which features are popular with our users and how our Site can be improved." },
  { title: "Advertising", desc: "These cookies are placed in order to deliver content, including ads relevant and meaningful to you and your interests. They may also be used to deliver targeted advertising or to limit the number of times you see an advertisement. This can help us track how efficient advertising campaigns are, both for our own Services and for other websites. Such cookies may track your browsing habits and activity when visiting our Site and those of third parties." },
];

const additionalDetails = [
  { title: "User Preference", desc: "We set these to customize your website preferences, for example dismissing a popup not to show again in your browser or setting your live chat preferences." },
  { title: "Analytics", desc: "We use these to understand how the website is being used in order to improve the user experience. Your user data is all anonymous. You can find out more about Google’s position on privacy as regards its analytics service at http://www.google.co.uk/intl/en/analytics/privacyoverview.html" },
  { title: "AdWords", desc: "Using Google AdWords code, we are able to see which pages helped lead to contact form submissions. This allows us to make better use of our paid search budget. We also log when users view specific pages, allowing us to provide targeted advertising in the future." },
  { title: "LinkedIn", desc: "We use LinkedIn advertising conversion tracking and re-targeting pixels, which allows us to collect or receive information from your website and elsewhere on the internet and use that information to provide measurement services and target future advertising." },
  { title: "CRM", desc: "We use HubSpot as our CRM and cookies are set by it to log user preferences and activity." },
  { title: "Third Party Cookies", desc: "We use a number of external web services. For example, to display slideshows we sometimes use SlideShare; to show videos we use YouTube and Vimeo, to encourage social shares we use social media like and share buttons. We cannot prevent these sites, or external domains, from setting their own cookies and collecting information on your usage. If you are not logged in to these external services then they will not know who you are but are likely to gather anonymous usage information e.g. number of views, plays, loads etc." },
];

const rights = [
  { title: "Right to Access", desc: "Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them and if so, exactly what data is being collected, how, where, and for what purposes. This data can be manually requested via info@ukpaktrade.org.uk and provided in an electronic format free of charge." },
  { title: "Right to Be Forgotten", desc: "Should data subjects at any time wish to withdraw their consent and no longer allow UK–Pakistan Trade and Investment Board Ltd (UPTIB) to store their personal data, this request can be manually made via info@ukpaktrade.org.uk. Please be sure to include the full name (including any prefixes) and email address of whom the data is in reference too, so that all data relating to the data subject in question can be accurately removed." },
  { title: "Data Portability", desc: "Similar to the Right to Access, Data Portability requires that data subjects are able to request, obtain, and/or transfer possession of collected data at any time. As mentioned above, this data can be manually requested via info@ukpaktrade.org.uk and provided in an electronic format free of charge. Should the data subject wish to transfer the possession of the data stored by UK–Pakistan Trade and Investment Board Ltd (UPTIB), please be sure to also include the full name (including any prefixes) and the relevant contact information relating to the individual or organization whom you wish the data to be transferred to." },
  { title: "Breach Notification", desc: "Should UK–Pakistan Trade and Investment Board Ltd (UPTIB) encounter a breach/unauthorized access of personal data that is likely to “result in a risk for the rights and freedoms of individuals”, UK–Pakistan Trade and Investment Board Ltd (UPTIB) will ensure that a notification is made within 72 hours of becoming aware of the breach." },
];

export default function CookiesPage() {
  return (
    <div>
      <PolicyHero
        eyebrow="Data & Privacy"
        breadcrumb="Cookies Policy"
        title="Cookies Policy"
        subtitle="How we use cookies and similar technologies on our website."
        icon={Cookie}
      />

      <PolicyDoc toc={toc}>
        <PolicySection id="about" eyebrow="Overview" title="About Our Cookies">
          <p>
            Our website uses cookies, which identify technologies that your computer receives when you
            visit certain websites. We do not match or correlate this information with any customer
            information that you submit to UK–Pakistan Trade and Investment Board Ltd (UPTIB).
          </p>
          <p>
            Some of our web pages utilize “cookies” and other tracking technologies. Cookies are small
            pieces of data, stored in text files, that are stored on your computer or other devices when
            websites are loaded in a browser. They are widely used to ‘remember’ you and your
            preferences, either for a single visit (through a ‘session cookie’) or for multiple repeat
            visits (using a ‘persistent cookie’). They ensure consistent and efficient experience for
            visitors and perform essential functions such as allowing users to register and remain logged
            in. Cookies may be set by the site that you are visiting (known as ‘first-party cookies’), or
            by other websites who serve up content on that site (‘third party cookies’).
          </p>
          <p>
            Tracking technologies may record information such as Internet domain and host names; Internet
            protocol (IP) addresses; browser software and operating system types; clickstream patterns;
            and dates and times that our site is accessed. Our use of cookies and other tracking
            technologies allows us to improve our web site and your web experience. We may also analyze
            information that does not contain personal information for trends and statistics.
          </p>
          <p>
            Cookies are text files placed on your computer to collect standard internet log information
            and visitor behavior information. This information is used to track visitor use of the website
            and to compile statistical reports on website activity. For further information visit{" "}
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2F7549] underline underline-offset-2">www.aboutcookies.org</a>{" "}
            or{" "}
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2F7549] underline underline-offset-2">www.allaboutcookies.org</a>.
          </p>
          <p>
            You can set your browser not to accept cookies, and the above websites tell you how to remove
            cookies from your browser. However, in a few cases, some of our website features may not
            function as a result.
          </p>
        </PolicySection>

        <PolicySection id="links" eyebrow="External Links" title="Links to Other Websites">
          <p>
            Our website may contain links to other websites run by other organizations. This policy
            applies only to our website, so we encourage you to read the privacy statements on the other
            websites you visit. We cannot be responsible for the privacy policies and practices of other
            websites even if you access them using links from our website.
          </p>
          <p>
            In addition, if you linked to our website from a third-party site, we cannot be responsible
            for the privacy policies and practices of the owners and operators of that third party site
            and recommend that you check the privacy policy of that third party site.
          </p>
        </PolicySection>

        <PolicySection id="categories" eyebrow="Cookie Categories" title="The Cookies We Use">
          <div className="space-y-7">
            {cookieTypes.map((c) => (
              <PolicySub key={c.title} title={c.title}>
                <p>{c.desc}</p>
              </PolicySub>
            ))}
          </div>
        </PolicySection>

        <PolicySection id="details" eyebrow="Detailed Information" title="Additional Cookie Details">
          <p>
            The specific names and types of cookies, web beacons, and other similar technologies we use
            may change from time to time. However, the cookies we use generally fall into one of the
            following categories:
          </p>
          <div className="space-y-7 pt-2">
            {additionalDetails.map((c) => (
              <PolicySub key={c.title} title={c.title}>
                <p>{c.desc}</p>
              </PolicySub>
            ))}
          </div>
        </PolicySection>

        <PolicySection id="browser" eyebrow="Cookie Management" title="Browser Settings">
          <p>
            Your web browser may be set to accept cookies automatically but can be changed to decline
            them. If you don’t want to receive cookies, you can modify your browser so that it notifies
            you when cookies are sent to it or you can refuse cookies altogether. You can also delete
            cookies that have already been set. The Help section of the toolbar on most browsers will tell
            you how to set your browser to prevent new cookies or disable cookies altogether, or you
            should browse the site using your browser’s anonymous usage setting (called “Incognito” in
            Chrome, “InPrivate” for Internet Explorer, “Private Browsing” in Firefox and Safari). For more
            help,{" "}
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2F7549] underline underline-offset-2">www.aboutcookies.org</a>{" "}
            contains information on how to do this on a wide variety of desktop browsers.
          </p>
        </PolicySection>

        <PolicySection id="rights" eyebrow="GDPR Compliance" title="Data Subject Rights">
          <p>
            GDPR compliance requires data subjects to be granted certain rights. What follows is not an
            exhaustive list, but those rights that are relevant to the collection, processing, and storage
            of personal data on{" "}
            <a href="https://www.ukpaktrade.org.uk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2F7549] underline underline-offset-2">www.ukpaktrade.org.uk</a>.
          </p>
          <div className="space-y-6 pt-2">
            {rights.map((r) => (
              <div key={r.title}>
                <h3 className="font-heading text-[1.05rem] font-semibold text-[#16291E]">{r.title}</h3>
                <p className="mt-1.5">{r.desc}</p>
              </div>
            ))}
          </div>
        </PolicySection>

        <PolicySection id="changes" eyebrow="Policy Updates" title="Changes, Review & General">
          <div className="space-y-7">
            <PolicySub title="Changes to this Policy">
              <p>
                Pakistan Textile Partners reserves the right to modify or amend this policy at any time and
                for any reason, as permitted by applicable law. If there are material changes, we will post
                those changes here.
              </p>
            </PolicySub>
            <PolicySub title="Review">
              <p>We keep this policy under regular review.</p>
            </PolicySub>
            <PolicySub title="General">
              <p>
                You may not transfer any of your rights under this policy to any other person. We may
                transfer our rights under this policy where we believe your rights will not be affected. We
                may transfer your personal information to a third party as part of the sale of some or all
                assets. We would take steps to ensure your privacy rights continue to be protected.
              </p>
            </PolicySub>
          </div>
        </PolicySection>

        <PolicySection id="contact" eyebrow="Get in Touch" title="Contact">
          <p>
            For any questions about this Cookies Policy or our treatment of your Personal Information,
            please contact{" "}
            <a href="mailto:info@ukpaktrade.org.uk" className="font-medium text-[#2F7549] underline underline-offset-2">info@ukpaktrade.org.uk</a>.
          </p>
        </PolicySection>
      </PolicyDoc>
    </div>
  );
}
