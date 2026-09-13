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
  title: 'Privacy Policy | English Offline',
  description:
    'Official 100% local data privacy policy for English Offline. Learn how your data remains 100% private, on-device, and secure with zero tracking or ads.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10">
        {/* Background Subtle Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-60 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Top Breadcrumb & Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link href="/" className="hover:text-slate-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-400 font-semibold">Privacy Policy</span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-950/50">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% On-Device Data Privacy</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Official Privacy Policy
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                English Offline is engineered strictly as an offline-first learning platform. Your data never leaves your personal device.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Version 1.0.0 • Last Updated September 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Content Cards */}
        <div className="space-y-6">
          {/* Main Privacy Guarantee Highlight */}
          <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
            <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
              <ShieldCheck className="w-6 h-6" />
              <h2>Our Uncompromising Privacy Guarantee</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Your privacy is fundamental to English Offline. We believe educational software should respect user confidentiality completely. Because English Offline is built to operate entirely offline without internet connectivity, we have no mechanism, server, or code to track, capture, or transmit any user information.
            </p>
          </div>

          {/* Section 1: Data Collection */}
          <div className="bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Lock className="w-5 h-5" />
              </div>
              <h2>1. Zero Personal Data Collection</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              English Offline does <strong>NOT</strong> collect, request, log, or store any personal data. This includes:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
              <li className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No names, email addresses, or phone numbers</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No location or IP address tracking</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No device identifiers or IMEI numbers</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No usage telemetry or behavioral analytics</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Local Storage */}
          <div className="bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <HardDrive className="w-5 h-5" />
              </div>
              <h2>2. On-Device Local Storage</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              All learning progress—including your completed grammar modules, quiz scores, daily streak counters, bookmarked vocabulary, and theme preferences—is saved strictly on your local mobile device via secure local storage (<code className="bg-slate-950 px-2 py-0.5 rounded text-cyan-300 font-mono text-xs border border-slate-800">AsyncStorage</code>).
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl">
              💡 <strong>Note on Data Removal:</strong> Because your data exists only on your device, clearing app storage in system settings or uninstalling English Offline permanently deletes all stored progress. No cloud backup is created or maintained.
            </p>
          </div>

          {/* Section 3: Third-Party SDKs */}
          <div className="bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h2>3. Third-Party Services & Advertisements</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              English Offline contains zero third-party advertising SDKs, zero social media logins, and zero remote analytics integrations (e.g., no Google Analytics, no Firebase Telemetry, no Facebook SDK).
            </p>
            <div className="flex items-center gap-3 text-xs text-purple-300 font-semibold bg-purple-950/40 border border-purple-800/40 px-4 py-3 rounded-2xl">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Ad-Free & Distraction-Free Learning Environment</span>
            </div>
          </div>

          {/* Section 4: Developer Contact */}
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-800/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <h2>4. Developer Information & Inquiries</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If you have any questions, suggestions, or privacy inquiry regarding English Offline, please feel free to reach out directly to the application developer:
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${appStats.developerEmail}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Contact via Email ({appStats.developerEmail})</span>
              </a>

              <a
                href={appStats.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold text-xs transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Developer Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-full shadow-lg hover:scale-105 transition-all"
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
