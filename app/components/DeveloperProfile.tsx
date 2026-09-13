'use client';

import React from 'react';
import Image from 'next/image';
import { UserCheck, Globe, Mail, Store, Code, Sparkles, ExternalLink } from 'lucide-react';
import { appStats } from '../data/appData';

export default function DeveloperProfile() {
  return (
    <section id="developer" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Wrapper */}
        <div className="bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Image / Badge Container */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative w-28 h-28 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-teal-400 shadow-xl">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950">
                  <Image
                    src="/logo.jpeg"
                    alt="Developer Logo"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">Siddharth Gauri</h3>
                <p className="text-xs font-semibold text-teal-400">Mobile & Full-Stack Developer</p>
                <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800">
                  <Code className="w-3 h-3 text-cyan-400" />
                  <span>Creator of English Offline</span>
                </div>
              </div>
            </div>

            {/* Right Details & Bio */}
            <div className="md:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Empowering Offline Learning in India</span>
              </div>

              <h4 className="text-2xl font-bold text-white tracking-tight">
                Crafted to make English education accessible to everyone.
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                English Offline was designed and developed by <strong className="text-white">Siddharth Gauri</strong> to empower students, professionals, and job seekers across India and worldwide. The goal is simple: provide a 100% offline, zero-ad, privacy-first dictionary and learning suite that works effortlessly on any phone.
              </p>

              {/* Contact & Profile Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={appStats.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-xs font-bold shadow-md hover:shadow-indigo-500/25 hover:scale-105 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span>Developer Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={`mailto:${appStats.developerEmail}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Email Developer</span>
                </a>

                <a
                  href={appStats.playStoreDevUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                >
                  <Store className="w-4 h-4 text-amber-400" />
                  <span>Play Store Profile</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
