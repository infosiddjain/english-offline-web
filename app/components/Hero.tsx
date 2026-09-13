'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ShieldCheck, Sparkles, WifiOff, CheckCircle2, Zap, ArrowRight, Flame, BookOpen } from 'lucide-react';
import { appStats } from '../data/appData';

interface HeroProps {
  onOpenPrivacy?: () => void;
}

export default function Hero({ onOpenPrivacy }: HeroProps) {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold shadow-inner">
              <WifiOff className="w-3.5 h-3.5 text-cyan-400" />
              <span>100% Offline Learning Engine</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Master English <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Completely Offline.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore over <strong className="text-white font-semibold">10,000+ offline grammar rules</strong>, 
              1,000+ high-frequency vocabulary words, daily spoken phrases & interactive exercises. 
              <span className="text-teal-300 font-medium"> Zero internet required. Zero data tracking. 100% free.</span>
            </p>

            {/* Key Value Pill Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>10,000+ Concepts</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>100% Local Privacy</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Zero Ads</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Daily Practice Streaks</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={appStats.playStoreDevUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download on Google Play</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <Link
                href="/privacy"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-full hover:bg-slate-800/80 transition-all duration-200"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Privacy Guarantee</span>
              </Link>
            </div>

            {/* Developer Trust Badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 font-medium">
                Created by <strong className="text-slate-200">Siddharth Gauri</strong>
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Version {appStats.version}</span>
            </div>
          </div>

          {/* Right Column: Interactive Mobile Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
              
              {/* App Phone Container */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4">
                
                {/* App Screen Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-inner border border-slate-700">
                      <Image
                        src="/logo.jpeg"
                        alt="Logo"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">English Offline</h3>
                      <p className="text-[10px] text-teal-400 font-medium">10,250+ Offline Items</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full text-amber-400 text-xs font-bold">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" />
                    <span>7 Day Streak</span>
                  </div>
                </div>

                {/* Featured Word of the Day App Card */}
                <div className="bg-gradient-to-br from-indigo-900/90 to-slate-900 border border-indigo-700/40 rounded-2xl p-4 space-y-2 text-left relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] text-amber-300 font-semibold uppercase tracking-wider">
                    <span>Word of the Day</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-xl font-bold text-white tracking-wide">Diligent</h4>
                    <span className="text-xs text-indigo-300 font-mono">/ˈdɪl.ə.dʒənt/</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400">
                    मेहनती (Mehnati)
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    "Showing care and effort in work or duties."
                  </p>
                  <div className="pt-1">
                    <span className="inline-block text-[11px] bg-indigo-950/80 border border-indigo-700/50 text-indigo-200 px-2 py-0.5 rounded-md font-mono">
                      Example: Priya is a diligent student.
                    </span>
                  </div>
                </div>

                {/* Quick App Modules List */}
                <div className="space-y-2 text-left">
                  <div className="text-xs font-semibold text-slate-400 px-1 uppercase tracking-wider">
                    Course Modules
                  </div>

                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Beginner Level</div>
                        <div className="text-[10px] text-slate-400">Articles, Tenses & Basic Vocab</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                      Ready
                    </span>
                  </div>

                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">10,000+ Concept Library</div>
                        <div className="text-[10px] text-slate-400">Instant offline search</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">
                      Offline
                    </span>
                  </div>
                </div>

                {/* Bottom App Footer Indicator */}
                <div className="pt-2 text-center text-[10px] text-slate-500 font-medium border-t border-slate-800/80">
                  🔒 100% Local Storage • Zero Remote Servers
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
