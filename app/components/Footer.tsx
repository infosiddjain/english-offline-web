'use client';

import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { ShieldCheck, Download, Heart, ExternalLink, Globe, Mail } from 'lucide-react';
import { appStats } from '../data/appData';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export default function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-ivory border-t border-line pt-16 pb-12 text-walnut/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <div>
                <h3 className="font-serif font-semibold text-lg text-walnut-deep tracking-tight">English Offline</h3>
                <p className="text-xs text-bronze-dark font-semibold font-hindi">अंग्रेज़ी सीखें, हिंदी में</p>
              </div>
            </div>

            <p className="text-walnut/80 text-xs leading-relaxed max-w-sm">
              An offline-first educational application designed to make learning English fast, intuitive, and 100% accessible without internet access or data collection.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-semibold text-success bg-bronze-soft border border-success/30 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Local Privacy Guarantee</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-walnut-deep text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#overview" className="hover:text-burgundy transition-colors">App Overview</Link>
              </li>
              <li>
                <Link href="/dictionary" className="hover:text-burgundy transition-colors">English ↔ Hindi Dictionary</Link>
              </li>
              <li>
                <Link href="/conversations" className="hover:text-burgundy transition-colors">English Conversations in Hindi</Link>
              </li>
              <li>
                <Link href="/poems" className="hover:text-burgundy transition-colors">English &amp; Hindi Poems</Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-burgundy transition-colors">Offline Features</Link>
              </li>
              <li>
                <Link href="/#concepts" className="hover:text-burgundy transition-colors">Concept Explorer</Link>
              </li>
              <li>
                <Link href="/#levels" className="hover:text-burgundy transition-colors">Course Levels</Link>
              </li>
              <li>
                <Link href="/#developer" className="hover:text-burgundy transition-colors">Developer Profile</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-burgundy transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-success hover:text-success font-semibold transition-colors text-left block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer & App Store */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-walnut-deep text-sm">Developer & Downloads</h4>
            <p className="text-xs text-walnut/80 leading-relaxed">
              Created with passion by <strong className="text-walnut-deep">Siddharth Gauri</strong>.
            </p>
            <div className="space-y-2">
              <a
                href={appStats.playStoreDevUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-burgundy text-ivory font-bold text-xs shadow-md hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4" />
                <span>Get App on Play Store</span>
              </a>
              <a
                href={appStats.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-paper border border-line hover:border-line text-walnut hover:text-burgundy font-semibold text-xs transition-colors"
              >
                <Globe className="w-4 h-4 text-bronze" />
                <span>Visit Developer Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-walnut/60 text-[11px]">
          <div>
            © {new Date().getFullYear()} English Offline. Created by Siddharth Gauri. All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/privacy" className="hover:text-walnut">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-walnut">
              Contact
            </Link>
            <span>•</span>
            <span className="text-success">100% Free & Offline</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
