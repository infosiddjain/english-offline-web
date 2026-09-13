'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Download, Heart, ExternalLink, Globe, Mail } from 'lucide-react';
import { appStats } from '../data/appData';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export default function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md border border-slate-800">
                <Image
                  src="/logo.jpeg"
                  alt="English Offline Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight">English Offline</h3>
                <p className="text-xs text-teal-400 font-semibold">10,000+ Grammar Rules & Vocab</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An offline-first educational application designed to make learning English fast, intuitive, and 100% accessible without internet access or data collection.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Local Privacy Guarantee</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#overview" className="hover:text-cyan-400 transition-colors">App Overview</Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-cyan-400 transition-colors">Offline Features</Link>
              </li>
              <li>
                <Link href="/#concepts" className="hover:text-cyan-400 transition-colors">10,000+ Concept Explorer</Link>
              </li>
              <li>
                <Link href="/#levels" className="hover:text-cyan-400 transition-colors">Course Levels</Link>
              </li>
              <li>
                <Link href="/#developer" className="hover:text-cyan-400 transition-colors">Developer Profile</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors text-left block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer & App Store */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-white text-sm">Developer & Downloads</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Created with passion by <strong className="text-slate-200">Siddharth Gauri</strong>.
            </p>
            <div className="space-y-2">
              <a
                href={appStats.playStoreDevUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold text-xs shadow-md hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4" />
                <span>Get App on Play Store</span>
              </a>
              <a
                href={appStats.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Visit Developer Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} English Offline. Created by Siddharth Gauri. All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <span>•</span>
            <a href={`mailto:${appStats.developerEmail}`} className="hover:text-slate-300">
              Contact
            </a>
            <span>•</span>
            <span className="text-emerald-400">100% Free & Offline</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
