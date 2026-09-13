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
  themeColor: "#1e1b4b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "English Offline — 10,000+ Grammar & Vocabulary Offline App",
  description:
    "Master English grammar, daily spoken phrases & 1,000+ high-frequency vocabulary words completely offline. 100% local privacy guarantee, zero ads, zero data tracking. Built for fast, intuitive learning.",
  keywords: [
    "english offline app",
    "learn english offline",
    "english grammar app india",
    "offline vocabulary builder",
    "spoken english offline",
    "english hindi grammar",
    "siddharth gauri english offline",
    "english offline apk",
    "offline english app download"
  ],
  authors: [{ name: "Siddharth Gauri", url: "https://portfolio-five-brown-mafnjkhjpf.vercel.app/" }],
  creator: "Siddharth Gauri",
  publisher: "Siddharth Gauri",
  metadataBase: new URL("https://english-offline.vercel.app"),
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
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: "English Offline — 10,000+ Grammar & Vocab Offline App",
    description:
      "Learn English offline anytime, anywhere. 10,000+ grammar rules, daily spoken phrases, 1,000+ vocabulary words. 100% local privacy & zero ads.",
    url: "https://english-offline.vercel.app",
    siteName: "English Offline",
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: "English Offline App Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Offline App",
    description:
      "Master English offline with 10,000+ concepts, daily practice, and 100% local data privacy.",
    images: ["/logo.jpeg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "English Offline",
  "operatingSystem": "Android, iOS",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "INR"
  },
  "description": "Offline-first English learning application with 10,000+ grammar concepts, daily spoken phrases, and high-frequency vocabulary words with 100% local data privacy.",
  "author": {
    "@type": "Person",
    "name": "Siddharth Gauri",
    "url": "https://portfolio-five-brown-mafnjkhjpf.vercel.app/"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  },
  "image": "https://english-offline.vercel.app/logo.jpeg"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
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
        className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans flex flex-col selection:bg-cyan-500 selection:text-slate-950"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
