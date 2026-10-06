import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ShieldCheck,
  Lock,
  HardDrive,
  Cpu,
  Mail,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  FileText,
  UserCheck
} from 'lucide-react';
import { appStats } from '../data/appData';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Official 100% local data privacy policy for English Offline. Learn how your data remains 100% private, on-device, and secure with zero tracking or ads.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ivory text-walnut-deep flex flex-col relative overflow-x-clip">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10">
        {/* Background Subtle Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[min(500px,90vw)] h-[250px] bg-success/10 blur-[130px] rounded-full pointer-events-none" aria-hidden />
        <div className="absolute top-60 right-10 w-[300px] h-[300px] bg-bronze/10 blur-[120px] rounded-full pointer-events-none" aria-hidden />

        {/* Top Breadcrumb & Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper border border-line text-xs font-semibold text-walnut hover:text-burgundy hover:border-line transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 text-bronze group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-walnut/80">
            <Link href="/" className="hover:text-walnut-deep">
              Home
            </Link>
            <span>/</span>
            <span className="text-success font-semibold">Privacy Policy</span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="bg-paper border border-line rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-success-soft border border-success/30 flex items-center justify-center text-success shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-soft border border-success/30 text-success text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                <span>100% On-Device Data Privacy</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-walnut-deep tracking-tight">
                Official Privacy Policy
              </h1>
              <p className="text-walnut text-sm sm:text-base leading-relaxed max-w-2xl">
                English Offline is engineered strictly as an offline-first learning platform. Your data never leaves your personal device.
              </p>
              <div className="pt-2 text-xs font-mono text-walnut/80 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-bronze" />
                <span>Version 1.0.0 • Last Updated September 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Content Cards */}
        <div className="space-y-6">
          {/* Main Privacy Guarantee Highlight */}
          <div className="bg-paper border border-success/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
            <div className="flex items-center gap-3 text-success font-bold text-lg">
              <ShieldCheck className="w-6 h-6" />
              <h2>Our Uncompromising Privacy Guarantee</h2>
            </div>
            <p className="text-sm sm:text-base text-walnut-deep leading-relaxed">
              Your privacy is fundamental to English Offline. We believe educational software should respect user confidentiality completely. Because English Offline is built to operate entirely offline without internet connectivity, we have no mechanism, server, or code to track, capture, or transmit any user information.
            </p>
          </div>

          {/* Section 1: Data Collection */}
          <div className="bg-paper border border-line rounded-3xl p-6 sm:p-8 space-y-4 hover:border-line transition-colors">
            <div className="flex items-center gap-3 text-walnut-deep font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-bronze-soft border border-bronze/30 flex items-center justify-center text-bronze">
                <Lock className="w-5 h-5" />
              </div>
              <h2>1. Zero Personal Data Collection</h2>
            </div>
            <p className="text-xs sm:text-sm text-walnut leading-relaxed">
              English Offline does <strong>NOT</strong> collect, request, log, or store any personal data. This includes:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-walnut pt-1">
              <li className="flex items-center gap-2 bg-ivory border border-line p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>No names, email addresses, or phone numbers</span>
              </li>
              <li className="flex items-center gap-2 bg-ivory border border-line p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>No location or IP address tracking</span>
              </li>
              <li className="flex items-center gap-2 bg-ivory border border-line p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>No device identifiers or IMEI numbers</span>
              </li>
              <li className="flex items-center gap-2 bg-ivory border border-line p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>No usage telemetry or behavioral analytics</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Local Storage */}
          <div className="bg-paper border border-line rounded-3xl p-6 sm:p-8 space-y-4 hover:border-line transition-colors">
            <div className="flex items-center gap-3 text-walnut-deep font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-bronze-soft border border-bronze/30 flex items-center justify-center text-bronze">
                <HardDrive className="w-5 h-5" />
              </div>
              <h2>2. On-Device Local Storage</h2>
            </div>
            <p className="text-xs sm:text-sm text-walnut leading-relaxed">
              All learning progress—including your completed grammar modules, quiz scores, daily streak counters, bookmarked vocabulary, and theme preferences—is saved strictly on your local mobile device via secure local storage (<code className="bg-ivory px-2 py-0.5 rounded text-bronze font-mono text-xs border border-line">AsyncStorage</code>).
            </p>
            <p className="text-xs sm:text-sm text-walnut/80 leading-relaxed bg-ivory border border-line p-4 rounded-2xl">
              💡 <strong>Note on Data Removal:</strong> Because your data exists only on your device, clearing app storage in system settings or uninstalling English Offline permanently deletes all stored progress. No cloud backup is created or maintained.
            </p>
          </div>

          {/* Section 3: Third-Party SDKs */}
          <div className="bg-paper border border-line rounded-3xl p-6 sm:p-8 space-y-4 hover:border-line transition-colors">
            <div className="flex items-center gap-3 text-walnut-deep font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-bronze-soft border border-bronze/30 flex items-center justify-center text-bronze">
                <Cpu className="w-5 h-5" />
              </div>
              <h2>3. Third-Party Services & Advertisements</h2>
            </div>
            <p className="text-xs sm:text-sm text-walnut leading-relaxed">
              English Offline contains zero third-party advertising SDKs, zero social media logins, and zero remote analytics integrations (e.g., no Google Analytics, no Firebase Telemetry, no Facebook SDK).
            </p>
            <div className="flex items-center gap-3 text-xs text-bronze font-semibold bg-bronze-soft border border-bronze/30 px-4 py-3 rounded-2xl">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Ad-Free & Distraction-Free Learning Environment</span>
            </div>
          </div>

          {/* Section 4: Developer Contact */}
          <div className="bg-paper border border-bronze/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-walnut-deep font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-success-soft border border-success/30 flex items-center justify-center text-success">
                <UserCheck className="w-5 h-5" />
              </div>
              <h2>4. Developer Information & Inquiries</h2>
            </div>
            <p className="text-xs sm:text-sm text-walnut leading-relaxed">
              If you have any questions, suggestions, or privacy inquiry regarding English Offline, please feel free to reach out directly to the application developer:
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${appStats.developerEmail}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-burgundy hover:bg-burgundy-dark text-ivory font-bold text-xs shadow-lg shadow-burgundy/20 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Contact via Email ({appStats.developerEmail})</span>
              </a>

              <a
                href={appStats.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-paper border border-line hover:border-bronze text-walnut-deep font-semibold text-xs transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 text-bronze" />
                <span>Developer Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold text-ivory bg-burgundy rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Landing Page</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
