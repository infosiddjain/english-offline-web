import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
});

export const viewport: Viewport = {
  themeColor: "#6B1E2B",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://english-offline.vercel.app";
const DEVELOPER_URL = "https://portfolio-five-brown-mafnjkhjpf.vercel.app/";
const PLAY_STORE_URL = "https://play.google.com/store/apps/developer?id=Siddharth+Gauri";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Learn English in Hindi Offline — Tenses, Grammar & Vocabulary | English Offline",
    template: "%s | English Offline",
  },
  description:
    "Learn English in Hindi without internet. All 12 tenses with Hindi notes and formulas, grammar basics, a tense game and 150+ vocabulary words with Hindi examples. Free, no ads, no tracking.",
  applicationName: "English Offline",
  keywords: [
    "learn english in hindi",
    "learn english offline",
    "english tenses in hindi",
    "12 tenses in hindi with examples",
    "english grammar in hindi",
    "spoken english in hindi",
    "english vocabulary with hindi meaning",
    "english learning app without internet",
    "offline english app",
    "english offline app download",
  ],
  authors: [{ name: "Siddharth Gauri", url: DEVELOPER_URL }],
  creator: "Siddharth Gauri",
  publisher: "Siddharth Gauri",
  category: "education",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Learn English in Hindi — Fully Offline | English Offline",
    description:
      "12 tenses with Hindi notes, grammar basics, a tense game and 150+ words with Hindi meanings and examples. Works without internet. No ads, no tracking.",
    url: SITE_URL,
    siteName: "English Offline",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 500,
        alt: "English Offline — learn English in Hindi, fully offline",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn English in Hindi — Fully Offline",
    description:
      "12 tenses with Hindi notes, grammar basics, a tense game and 150+ words. No internet, no ads, no tracking.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const developer = {
  "@type": "Person",
  "@id": `${SITE_URL}/#developer`,
  "name": "Siddharth Gauri",
  "url": DEVELOPER_URL,
  "sameAs": [DEVELOPER_URL, PLAY_STORE_URL],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "English Offline",
      "inLanguage": "en-IN",
      "publisher": { "@id": `${SITE_URL}/#developer` },
    },
    developer,
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      "name": "English Offline",
      "url": SITE_URL,
      "operatingSystem": "Android",
      "applicationCategory": "EducationalApplication",
      "inLanguage": ["en", "hi"],
      "description":
        "Learn English in Hindi, fully offline: all 12 tenses with Hindi notes and formulas, grammar basics, a tense game and 150+ vocabulary words with Hindi meanings. No ads, no tracking.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
      },
      "author": { "@id": `${SITE_URL}/#developer` },
      "image": `${SITE_URL}/logo.png`,
      "screenshot": `${SITE_URL}/og-image.png`,
      "downloadUrl": PLAY_STORE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${jakarta.variable} ${devanagari.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-ivory text-walnut-deep antialiased font-sans flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
