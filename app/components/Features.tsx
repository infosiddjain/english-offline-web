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
      color: 'text-bronze',
      bg: 'bg-bronze-soft border-bronze/30',
      title: '100% Offline Engine',
      description: 'Zero Wi-Fi or mobile data needed. Access all 10,250+ grammar rules, vocabulary words, and exercises anywhere—even in remote areas or flight mode.',
    },
    {
      icon: ShieldCheck,
      color: 'text-success',
      bg: 'bg-success-soft border-success/30',
      title: '100% Local Data Privacy',
      description: 'Zero data tracking, zero cloud logins, and zero external analytics SDKs. Your learning progress stays strictly on your personal device.',
    },
    {
      icon: Flame,
      color: 'text-bronze-dark',
      bg: 'bg-bronze-soft border-bronze/30',
      title: 'Daily Streak & Practice Habits',
      description: 'Built-in streak tracking motivates you to complete 10 daily exercises, ensuring consistent long-term memory retention.',
    },
    {
      icon: BookOpen,
      color: 'text-bronze',
      bg: 'bg-bronze-soft border-bronze/30',
      title: 'Bilingual Context & Hindi Meanings',
      description: 'Designed specifically for learners in India with authentic Hindi meanings, phonetic guides, and localized sentence examples.',
    },
    {
      icon: Sparkles,
      color: 'text-bronze',
      bg: 'bg-bronze-soft border-bronze/30',
      title: '10,000+ Concept Library',
      description: 'Comprehensive repository of Definite/Indefinite Articles, Perfect Tenses, Prepositions, Modal Verbs, Idioms, and Common Error fixes.',
    },
    {
      icon: Ban,
      color: 'text-danger',
      bg: 'bg-bronze-soft border-bronze/30',
      title: 'Zero Distractions & Zero Ads',
      description: 'Enjoy a clean, focused educational experience with no intrusive banner ads, video popups, or hidden paywalls.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-soft border border-success/30 text-success text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-success" />
            <span>Built For Offline Excellence</span>
          </div>
          <h2 className="text-[1.75rem] leading-tight sm:text-4xl font-serif font-semibold text-walnut-deep tracking-tight">
            Why Learners Choose English Offline
          </h2>
          <p className="text-walnut text-sm sm:text-base leading-relaxed">
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
                className="bg-ivory-deep/60 border border-line hover:border-line rounded-3xl p-6 transition-all duration-200 hover:shadow-xl space-y-4 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${feat.bg} border flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className="text-lg font-bold text-walnut-deep group-hover:text-burgundy transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-walnut leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-paper border border-bronze/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-walnut-deep">
              Want to check our complete data policy?
            </h3>
            <p className="text-xs sm:text-sm text-walnut max-w-xl">
              We operate under a strict 100% Local Data Protection policy. Read our transparent privacy guarantee.
            </p>
          </div>
          <Link
            href="/privacy"
            className="px-6 py-3 text-xs font-bold text-ivory bg-burgundy rounded-full shadow-lg hover:scale-105 transition-all whitespace-nowrap"
          >
            Read Privacy Policy
          </Link>
        </div>

      </div>
    </section>
  );
}
