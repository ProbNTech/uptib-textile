import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "UPTIB Textile — Pakistan's finest textiles, sourced & sold for the UK",
    template: "%s · UPTIB Textile",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "UK Pakistan textile trade",
    "Pakistani textile manufacturers",
    "textile buying house",
    "bedding and linen",
    "sportswear manufacturing",
    "healthcare textiles",
    "GSP+ textiles",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title:
      "UPTIB Textile — Pakistan's finest textiles, sourced & sold for the UK",
    description: site.description,
    url: site.url,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPTIB Textile",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/assets/uptib-logo.webp`,
  description: site.description,
  address: site.offices.map((office) => ({
    "@type": "PostalAddress",
    name: office.label,
    streetAddress: office.address,
  })),
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Script
          id="org-jsonld"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
