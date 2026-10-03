'use client';

import React from 'react';
import Logo from './Logo';
import { UserCheck, Globe, Mail, Store, Code, Sparkles, ExternalLink } from 'lucide-react';
import { appStats } from '../data/appData';

export default function DeveloperProfile() {
  return (
    <section id="developer" className="py-20 bg-ivory relative border-t border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Wrapper */}
        <div className="bg-paper border border-line rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-bronze/10 blur-[100px] rounded-full pointer-events-none" aria-hidden />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Image / Badge Container */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
              <Logo size={112} className="shadow-xl" />

              <div>
                <h3 className="text-xl font-bold text-walnut-deep">Siddharth Gauri</h3>
                <p className="text-xs font-semibold text-bronze-dark">Mobile & Full-Stack Developer</p>
                <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-walnut/80 bg-ivory px-2.5 py-0.5 rounded-full border border-line">
                  <Code className="w-3 h-3 text-bronze" />
                  <span>Creator of English Offline</span>
                </div>
              </div>
            </div>

            {/* Right Details & Bio */}
            <div className="md:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-soft border border-bronze/30 text-bronze text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-bronze" />
                <span>Empowering Offline Learning in India</span>
              </div>

              <h4 className="text-2xl font-serif font-semibold text-walnut-deep tracking-tight">
                Crafted to make English education accessible to everyone.
              </h4>

              <p className="text-xs sm:text-sm text-walnut leading-relaxed font-normal">
                English Offline was designed and developed by <strong className="text-walnut-deep">Siddharth Gauri</strong> to empower students, professionals, and job seekers across India and worldwide. The goal is simple: provide a 100% offline, zero-ad, privacy-first dictionary and learning suite that works effortlessly on any phone.
              </p>

              {/* Contact & Profile Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={appStats.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-burgundy text-ivory text-xs font-bold shadow-md hover:shadow-burgundy/20 hover:scale-105 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span>Developer Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={`mailto:${appStats.developerEmail}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-paper border border-line hover:border-line text-walnut-deep hover:text-burgundy text-xs font-semibold transition-all"
                >
                  <Mail className="w-4 h-4 text-success" />
                  <span>Email Developer</span>
                </a>

                <a
                  href={appStats.playStoreDevUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-paper border border-line hover:border-line text-walnut-deep hover:text-burgundy text-xs font-semibold transition-all"
                >
                  <Store className="w-4 h-4 text-bronze-dark" />
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
