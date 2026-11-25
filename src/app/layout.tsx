import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fintoo.in"),
  title: {
    default: "Fintoo Executive | Wealth Planning for Corporate Leaders",
    template: "%s | Fintoo Executive",
  },
  description:
    "SEBI-Registered Fiduciary Wealth Advisory for CXOs, VPs, and Startup Founders. Decode RSUs, ESOPs, Surcharges & Concentration Risk with 100% Zero-Commission Independent CFPs.",
  keywords: [
    "Wealth Planning for Corporate Leaders",
    "RSU Tax Optimization",
    "ESOP Liquidity Planning",
    "CXO Wealth Management",
    "SEBI RIA Fiduciary",
    "Executive Tax Planning",
    "Schedule FA Compliance",
    "Single Stock Concentration Risk",
    "Fintoo Wealth",
  ],
  authors: [{ name: "Fintoo Wealth Private Limited", url: "https://www.fintoo.in" }],
  creator: "Fintoo Wealth",
  publisher: "Fintoo Wealth",
  alternates: {
    canonical: "/wealth-planning-for-corporate-leaders",
  },
  openGraph: {
    title: "Fintoo Executive | Wealth Planning for Corporate Leaders",
    description:
      "Bespoke wealth architecture for CXOs, VPs, and Startup Founders. De-risk company equity and legally optimize 39% peak tax brackets.",
    url: "https://www.fintoo.in/wealth-planning-for-corporate-leaders",
    siteName: "Fintoo Executive Wealth",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintoo Executive | Wealth Planning for Corporate Leaders",
    description:
      "SEBI-Registered Fee-Only Wealth Advisory for Senior Executives, CXOs, and Founders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data Schema for Google Search
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Fintoo Executive Wealth Advisory",
  legalName: "Fintoo Wealth Private Limited",
  description:
    "SEBI-Registered Fiduciary Investment Adviser providing comprehensive wealth planning, RSU dual-tax optimization, ESOP liquidity guidance, and single-stock concentration risk management for corporate leaders.",
  url: "https://www.fintoo.in/wealth-planning-for-corporate-leaders",
  telephone: "+91-9699-800-600",
  email: "executive@fintoo.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Times Square Building, Andheri East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400059",
    addressCountry: "IN",
  },
  priceRange: "Fee-Only Fiduciary",
  areaServed: "IN",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "SEBI Registered Investment Adviser",
    recognizedBy: {
      "@type": "Organization",
      name: "Securities and Exchange Board of India (SEBI)",
    },
    identifier: "INA000015523",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
