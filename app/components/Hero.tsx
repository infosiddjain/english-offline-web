'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ShieldCheck, WifiOff, CheckCircle2, ArrowRight, Flame, BookOpen, GraduationCap, Gamepad2, Lock } from 'lucide-react';
import { appStats } from '../data/appData';
import Logo from './Logo';

interface HeroProps {
  onOpenPrivacy?: () => void;
}

const TIMELINE = [
  { label: 'Past', hi: 'भूतकाल', en: 'I played', hin: 'मैंने खेला' },
  { label: 'Present', hi: 'वर्तमान', en: 'I play', hin: 'मैं खेलता हूँ' },
  { label: 'Future', hi: 'भविष्य', en: 'I will play', hin: 'मैं खेलूँगा' },
];

export default function Hero({ onOpenPrivacy }: HeroProps) {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Soft brand glows */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-bronze/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-burgundy/10 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-rise">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-line text-walnut text-xs font-semibold shadow-sm">
              <WifiOff className="w-3.5 h-3.5 text-bronze" />
              <span>100% offline · Hindi explanations</span>
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-walnut-deep leading-[1.08]">
              Learn English,
              <br />
              <span className="text-burgundy">explained in Hindi.</span>
            </h1>
            <p className="font-hindi text-xl sm:text-2xl text-bronze-dark font-semibold">अंग्रेज़ी सीखें, हिंदी में</p>

            <p className="text-base sm:text-lg text-walnut max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              All 12 tenses with Hindi notes and formulas, grammar basics from parts of speech to modal verbs, a tense
              game, and {appStats.vocabularyCount.toLocaleString()}+ vocabulary words.{' '}
              <span className="text-burgundy font-semibold">No internet, no ads, no tracking.</span>
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1 text-xs font-semibold text-walnut">
              {[
                { icon: GraduationCap, label: '12 tense notes' },
                { icon: BookOpen, label: 'Grammar basics in Hindi' },
                { icon: Gamepad2, label: 'Tense game' },
                { icon: ShieldCheck, label: '100% local privacy' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper border border-line">
                  <Icon className="w-4 h-4 text-bronze" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href={appStats.playStoreDevUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold text-ivory bg-burgundy rounded-full shadow-lg shadow-burgundy/25 hover:bg-burgundy-dark active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download on Google Play</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/#learn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-walnut-deep bg-paper border border-line hover:border-bronze rounded-full transition-all duration-200"
              >
                <GraduationCap className="w-4 h-4 text-bronze" />
                <span>Try a free lesson</span>
              </Link>
            </div>

            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-walnut/80">
              <span className="whitespace-nowrap">
                Created by <strong className="text-walnut-deep">{appStats.developerName}</strong>
              </span>
              <span>•</span>
              <span className="text-bronze-dark font-semibold whitespace-nowrap">Version {appStats.version}</span>
            </div>
          </div>

          {/* Right Column: App mockup */}
          <div className="lg:col-span-5 flex justify-center animate-rise [animation-delay:150ms]">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 bg-bronze/20 rounded-[2.5rem] blur-2xl" />
              <div className="relative bg-paper border border-line rounded-[2rem] p-5 shadow-2xl shadow-walnut/15 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-3">
                    <Logo size={36} />
                    <div>
                      <h3 className="font-serif font-semibold text-sm text-walnut-deep">English Offline</h3>
                      <p className="text-[10px] text-bronze-dark font-hindi font-semibold">सुप्रभात · Good morning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-bronze-soft border border-bronze/30 px-2.5 py-1 rounded-full text-bronze-dark text-xs font-bold">
                    <Flame className="w-3.5 h-3.5 fill-bronze text-bronze" />
                    <span>7</span>
                  </div>
                </div>

                <div className="bg-burgundy rounded-2xl p-4 space-y-1.5 text-left">
                  <div className="text-[10px] text-ivory/80 font-bold uppercase tracking-wider">Word of the day · आज का शब्द</div>
                  <h4 className="font-serif text-2xl font-bold text-ivory">Diligent</h4>
                  <div className="text-sm font-semibold text-bronze font-hindi">मेहनती</div>
                  <p className="text-xs text-ivory/85 leading-snug">Showing care and effort in work or duties.</p>
                </div>

                <div className="rounded-2xl border border-line p-4">
                  <div className="text-[10px] font-bold text-walnut/70 uppercase tracking-wider mb-3">Tenses · काल</div>
                  <div className="relative grid grid-cols-3 gap-2 text-center">
                    <div className="absolute top-[7px] left-[16%] right-[16%] h-0.5 bg-stone" />
                    {TIMELINE.map((t, i) => (
                      <div key={t.label} className="relative flex flex-col items-center">
                        <span className={`w-4 h-4 rounded-full border-[3px] border-paper ${i === 1 ? 'bg-burgundy' : 'bg-bronze'}`} />
                        <span className="mt-1.5 text-xs font-bold text-walnut-deep">{t.label}</span>
                        <span className="text-[10px] text-bronze-dark font-hindi">{t.hi}</span>
                        <span className="mt-2 text-[11px] font-semibold text-burgundy">{t.en}</span>
                        <span className="text-[10px] text-walnut font-hindi">{t.hin}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-ivory-deep p-3">
                  <div className="w-9 h-9 rounded-xl bg-burgundy flex items-center justify-center">
                    <Gamepad2 className="w-4 h-4 text-bronze" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-xs font-bold text-walnut-deep">Tense Challenge</div>
                    <div className="text-[10px] text-walnut font-hindi">10 सवाल · tense पहचानें</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>

                <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] text-walnut/70 font-medium">
                  <Lock className="w-3 h-3" />
                  100% local storage · no remote servers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
