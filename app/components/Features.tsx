'use client';

import React from 'react';
import Link from 'next/link';
import { WifiOff, ShieldCheck, Flame, BookOpen, Ban, Sparkles, CheckCircle2 } from 'lucide-react';

interface FeaturesProps {
  onOpenPrivacy?: () => void;
}

export default function Features({ onOpenPrivacy }: FeaturesProps) {
  const featureList = [
    {
      icon: WifiOff,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
      title: '100% Offline Engine',
      description: 'Zero Wi-Fi or mobile data needed. Access all 10,250+ grammar rules, vocabulary words, and exercises anywhere—even in remote areas or flight mode.',
    },
    {
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      title: '100% Local Data Privacy',
      description: 'Zero data tracking, zero cloud logins, and zero external analytics SDKs. Your learning progress stays strictly on your personal device.',
    },
    {
      icon: Flame,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      title: 'Daily Streak & Practice Habits',
      description: 'Built-in streak tracking motivates you to complete 10 daily exercises, ensuring consistent long-term memory retention.',
    },
    {
      icon: BookOpen,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
      title: 'Bilingual Context & Hindi Meanings',
      description: 'Designed specifically for learners in India with authentic Hindi meanings, phonetic guides, and localized sentence examples.',
    },
    {
      icon: Sparkles,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
      title: '10,000+ Concept Library',
      description: 'Comprehensive repository of Definite/Indefinite Articles, Perfect Tenses, Prepositions, Modal Verbs, Idioms, and Common Error fixes.',
    },
    {
      icon: Ban,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20',
      title: 'Zero Distractions & Zero Ads',
      description: 'Enjoy a clean, focused educational experience with no intrusive banner ads, video popups, or hidden paywalls.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built For Offline Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Learners Choose English Offline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Unlike web-dependent apps, English Offline puts the entire dictionary, grammar engine, and exercise suite straight into your phone's storage.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 rounded-3xl p-6 transition-all duration-200 hover:shadow-xl space-y-4 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${feat.bg} border flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-gradient-to-r from-indigo-950/90 via-slate-900 to-teal-950/90 border border-indigo-700/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Want to check our complete data policy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We operate under a strict 100% Local Data Protection policy. Read our transparent privacy guarantee.
            </p>
          </div>
          <Link
            href="/privacy"
            className="px-6 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full shadow-lg hover:scale-105 transition-all whitespace-nowrap"
          >
            Read Privacy Policy
          </Link>
        </div>

      </div>
    </section>
  );
}
