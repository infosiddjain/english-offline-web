'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ShieldCheck, Download, Sparkles, Layers, Search, User } from 'lucide-react';
import { appStats } from '../data/appData';

interface NavbarProps {
  onOpenPrivacy?: () => void;
}

export default function Navbar({ onOpenPrivacy }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '/#overview', icon: Sparkles },
    { name: 'Features', href: '/#features', icon: ShieldCheck },
    { name: '10k+ Concepts', href: '/#concepts', icon: Search },
    { name: 'Course Levels', href: '/#levels', icon: Layers },
    { name: 'Developer', href: '/#developer', icon: User },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-indigo-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-indigo-500/20 border border-slate-700/60 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.jpeg"
                alt="English Offline Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  English Offline
                </span>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded-full shadow-sm">
                  100% Offline
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                10,000+ Concepts & Grammar
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 p-1.5 rounded-full">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-150"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/privacy"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-all duration-150"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy Policy
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={appStats.playStoreDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 rounded-full shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5 text-teal-200" />
              <span>Get on Play Store</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={appStats.playStoreDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-indigo-600/90 rounded-lg sm:hidden"
              aria-label="Download"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/privacy"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenPrivacy) onOpenPrivacy();
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-emerald-400 hover:bg-emerald-500/10 transition-colors text-left"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Privacy Policy
          </Link>
          <div className="pt-2">
            <a
              href={appStats.playStoreDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-teal-500 rounded-xl shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
