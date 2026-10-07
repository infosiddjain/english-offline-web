'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck, Download, Layers, GraduationCap, Mail, Languages, MessageCircle, Feather } from 'lucide-react';
import { appStats } from '../data/appData';
import Logo from './Logo';

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
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Learn in Hindi', href: '/#learn', icon: GraduationCap },
    { name: 'Dictionary', href: '/dictionary', icon: Languages },
    { name: 'Conversations', href: '/conversations', icon: MessageCircle },
    { name: 'Poems', href: '/poems', icon: Feather },
    { name: 'Features', href: '/#features', icon: ShieldCheck },
    { name: 'Levels', href: '/#levels', icon: Layers },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md border-b border-line shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size={40} className="group-hover:scale-105 transition-transform duration-200" />
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg text-walnut-deep tracking-tight leading-tight">
                English Offline
              </span>
              <span className="text-xs text-bronze-dark font-medium font-hindi">अंग्रेज़ी सीखें, हिंदी में</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-paper/80 backdrop-blur-sm border border-line p-1.5 rounded-full">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold text-walnut hover:text-burgundy hover:bg-burgundy-soft rounded-full transition-colors duration-150"
                >
                  <Icon className="w-3.5 h-3.5 text-bronze" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3 ml-auto xl:ml-0 shrink-0">
            <a
              href={appStats.playStoreDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-ivory bg-burgundy rounded-full shadow-md shadow-burgundy/20 hover:bg-burgundy-dark active:scale-95 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5 text-bronze-soft" />
              <span>Get on Play Store</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={appStats.playStoreDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ivory bg-burgundy rounded-lg sm:hidden"
              aria-label="Download"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-walnut hover:text-burgundy hover:bg-ivory-deep rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-paper border-b border-line px-4 pt-4 pb-6 mt-2 space-y-1 shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-walnut-deep hover:bg-burgundy-soft hover:text-burgundy transition-colors"
              >
                <Icon className="w-4 h-4 text-bronze" />
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
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-success hover:bg-success-soft transition-colors text-left"
          >
            <ShieldCheck className="w-4 h-4" />
            Privacy Policy
          </Link>
          <div className="pt-3">
            <a
              href={appStats.playStoreDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-ivory bg-burgundy rounded-xl shadow-md"
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
