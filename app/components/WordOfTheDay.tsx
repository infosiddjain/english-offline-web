'use client';

import React, { useState } from 'react';
import { Sparkles, RefreshCw, Volume2, Bookmark, CheckCircle, ArrowRight } from 'lucide-react';
import { vocabularyWords, VocabWord } from '../data/appData';

export default function WordOfTheDay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentWord: VocabWord = vocabularyWords[currentIndex];

  const handleNextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % vocabularyWords.length);
  };

  const handleCopyExample = () => {
    navigator.clipboard.writeText(`${currentWord.word}: ${currentWord.meaning} (${currentWord.hindi})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-slate-950 border-y border-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Interactive Featured Feature</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Daily Vocabulary Builder
            </h2>
          </div>

          <button
            onClick={handleNextWord}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-full hover:bg-slate-800 transition-all duration-150 active:scale-95 shadow-md"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Shuffle Next Word ({currentIndex + 1}/{vocabularyWords.length})</span>
          </button>
        </div>

        {/* Word Display Card */}
        <div className="bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-6 items-center">
            
            {/* Main Word Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {currentWord.word}
                </span>
                <span className="text-sm font-mono text-indigo-300 bg-indigo-950/90 border border-indigo-700/50 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  {currentWord.phonetic}
                </span>
                <span className="text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {currentWord.type}
                </span>
              </div>

              {/* Hindi Meaning Badge */}
              <div className="text-lg sm:text-xl font-semibold text-emerald-400">
                hindi: {currentWord.hindi}
              </div>

              {/* Definition */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                "{currentWord.meaning}"
              </p>

              {/* Sample Sentence Box */}
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Real-World Sentence Example:
                </div>
                <div className="text-xs sm:text-sm text-indigo-200 italic font-sans leading-normal">
                  "{currentWord.example}"
                </div>
              </div>

              {/* Synonyms */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-semibold text-slate-400">Synonyms:</span>
                {currentWord.synonyms.map((syn, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-900 text-slate-300 border border-slate-800 px-2.5 py-0.5 rounded-md"
                  >
                    {syn}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Action / Copy Card */}
            <div className="md:col-span-4 flex flex-col justify-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-center space-y-3">
                <div className="text-xs font-bold text-slate-300">
                  Daily Vocabulary Practice
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  English Offline includes 1,000+ words like this, stored 100% locally on your phone.
                </p>
                <button
                  onClick={handleCopyExample}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 rounded-xl transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied Word!</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5 text-indigo-200" />
                      <span>Copy Word Info</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
