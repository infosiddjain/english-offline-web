'use client';

import React from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, HardDrive, Cpu, Mail, ExternalLink } from 'lucide-react';
import { appStats } from '../data/appData';

interface PrivacyPolicyProps {
  isOpen?: boolean;
  onClose?: () => void;
  isStandaloneSection?: boolean;
}

export default function PrivacyPolicyModal({
  isOpen = false,
  onClose,
  isStandaloneSection = false,
}: PrivacyPolicyProps) {

  const privacyContent = (
    <div className="space-y-6 text-left">
      {/* Privacy Guarantee Highlight Box */}
      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
          <ShieldCheck className="w-5 h-5" />
          <span>100% Local Privacy Guarantee</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Your privacy is our top priority. English Offline is an offline-first application engineered to operate completely without internet access or remote cloud servers.
        </p>
      </div>

      {/* Section 1 */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
          <Lock className="w-4 h-4 text-cyan-400" />
          <span>1. Data Collection</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          We do <strong>NOT</strong> collect, store, transmit, or share any personal data, usage analytics, location information, contacts, or device identifiers. You can use English Offline with complete peace of mind.
        </p>
      </div>

      {/* Section 2 */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
          <HardDrive className="w-4 h-4 text-indigo-400" />
          <span>2. Local Storage Usage</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          All learning progress (completed lessons, quiz scores, daily streak counter, and selected color theme) is stored strictly on your local device via local mobile storage (<code className="bg-slate-950 px-1.5 py-0.5 rounded text-cyan-300 font-mono text-xs">AsyncStorage</code>). Clearing app data or uninstalling the application permanently erases this local data.
        </p>
      </div>

      {/* Section 3 */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
          <Cpu className="w-4 h-4 text-purple-400" />
          <span>3. Third-Party Services</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          This application contains zero third-party tracking SDKs, ad networks, social logins, or external cloud telemetry services.
        </p>
      </div>

      {/* Section 4 */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
        <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
          <Mail className="w-4 h-4 text-emerald-400" />
          <span>4. Developer & Contact Information</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          If you have any questions or feedback regarding this Privacy Policy or English Offline, please contact the developer directly:
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
          <a
            href={`mailto:${appStats.developerEmail}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300 hover:text-white font-semibold"
          >
            <Mail className="w-3.5 h-3.5" />
            {appStats.developerEmail}
          </a>
          <a
            href={appStats.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-semibold"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Developer Portfolio
          </a>
        </div>
      </div>
    </div>
  );

  // Standalone Page Section View
  if (isStandaloneSection) {
    return (
      <section id="privacy" className="py-20 bg-slate-900/90 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Transparent & Clear</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Official Privacy Policy
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Version 1.0.0 • Last Updated September 2026
            </p>
          </div>

          {privacyContent}
        </div>
      </section>
    );
  }

  // Pop-up Modal View
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative text-left">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
              <p className="text-xs text-slate-400">English Offline Mobile App</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            aria-label="Close Privacy Policy Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {privacyContent}

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full hover:scale-105 transition-all"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
}
