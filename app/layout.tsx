// Pakistan Textile Partners - Main application layout
import type { Metadata } from "next";
import { Lato, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieConsent } from "@/components/CookieConsent";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

// Elegant high-contrast serif — used only for the editorial product showcase
// (the magazine-style "lookbook" sections), via the --font-playfair variable.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const BASE_URL = "https://www.ukpaktrade.org.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pakistan Textile Partners — Pakistan textile exports, worldwide",
    template: "%s | Pakistan Textile Partners",
  },
  description:
    "Pakistan Textile Partners connects Pakistan's textile manufacturing to global buyers and markets — home textile, apparel, sportswear and healthcare textiles, with sourcing, outsourcing, marketing and warehousing services.",
  keywords: [
    "Pakistan textile export",
    "textile sourcing Pakistan",
    "global textile buyers",
    "Pakistan Textile Partners",
    "bedding and linen",
    "apparel manufacturing",
    "sportswear Sialkot",
    "GSP+ textiles",
  ],
  authors: [{ name: "UK–Pakistan Trades & Investment Board" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Pakistan Textile Partners",
    title: "Pakistan Textile Partners — Pakistan textile exports, worldwide",
    description:
      "Made in Pakistan. Sold across the world. Pakistan Textile Partners connects Pakistan's textile manufacturing to global buyers — with sourcing, outsourcing, marketing and warehousing services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pakistan Textile Partners — Pakistan textile exports, worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Textile Partners — Pakistan textile exports, worldwide",
    description:
      "Made in Pakistan. Sold across the world. Pakistan's textile manufacturing, connected to global buyers and markets.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pakistan Textile Partners",
  parentOrganization: {
    "@type": "Organization",
    name: "UK–Pakistan Trades & Investment Board",
    alternateName: "UPTIB",
  },
  url: BASE_URL,
  logo: `${BASE_URL}/image/main-logo-v1.png`,
  description:
    "Pakistan Textile Partners connects Pakistan's textile manufacturing to global buyers and markets — with sourcing, outsourcing, marketing and warehousing services.",
  foundingDate: "2024",
  areaServed: { "@type": "Place", name: "Worldwide" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "134–136 Westbourne Terrace",
    addressLocality: "London",
    postalCode: "W2 6QB",
    addressCountry: "GB",
  },
  sameAs: [
    "https://facebook.com/ukpaktrade",
    "https://instagram.com/ukpaktrade",
    "https://linkedin.com/company/ukpaktrade",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general enquiry",
    email: "info@ukpaktrade.org.uk",
    telephone: "+44 7920 55 0000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} ${playfair.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-[#2F7549] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
        <BackToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
