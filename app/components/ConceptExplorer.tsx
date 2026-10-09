'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';
import { conceptLibrarySamples, ConceptItem, appStats } from '../data/appData';

export default function ConceptExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Vocabulary', 'Grammar Rule', 'Spoken English', 'Idioms', 'Common Errors'];

  const filteredConcepts = useMemo(() => {
    return conceptLibrarySamples.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.detail.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCat && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Vocabulary':
        return <BookOpen className="w-4 h-4 text-bronze" />;
      case 'Grammar Rule':
        return <Lightbulb className="w-4 h-4 text-bronze-dark" />;
      case 'Spoken English':
        return <Sparkles className="w-4 h-4 text-bronze-dark" />;
      case 'Idioms':
        return <Sparkles className="w-4 h-4 text-bronze" />;
      case 'Common Errors':
        return <AlertTriangle className="w-4 h-4 text-danger" />;
      default:
        return <BookOpen className="w-4 h-4 text-success" />;
    }
  };

  return (
    <section id="concepts" className="py-20 bg-ivory-deep/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-soft border border-bronze/30 text-bronze text-xs font-semibold">
            <Search className="w-3 h-3 text-bronze" />
            <span>Interactive Concept Engine Preview</span>
          </div>
          <h2 className="text-[1.75rem] leading-tight sm:text-4xl font-serif font-semibold text-walnut-deep tracking-tight">
            Explore 300+ Offline Concepts & Rules
          </h2>
          <p className="text-walnut text-sm sm:text-base leading-relaxed">
            Try the live interactive offline search below. In the mobile app, every single concept, rule, idiom, and daily spoken phrase is instantly searchable without an active internet connection.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          
          {/* Search Box */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-walnut/80" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search grammar rules, tenses, articles, vocabulary or Hindi meanings..."
              className="w-full pl-11 pr-4 py-3.5 bg-ivory border border-line rounded-2xl text-sm text-walnut-deep placeholder-walnut/50 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-bronze/30 transition-all shadow-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-walnut/80 hover:text-burgundy"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-semibold text-walnut/80 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-walnut/80" />
              Filter Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-burgundy text-ivory shadow-md scale-105'
                    : 'bg-ivory border border-line text-walnut hover:border-line hover:bg-ivory-deep'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between text-xs text-walnut/80 font-medium px-2">
          <div>
            Showing <strong className="text-bronze">{filteredConcepts.length}</strong> preview items (from <strong className="text-walnut-deep">{appStats.totalOfflineConcepts.toLocaleString()}+</strong> total offline items in app)
          </div>
          <div className="hidden sm:block text-walnut/60">
            ⚡ Instant Offline Search • No Server Delay
          </div>
        </div>

        {/* Concept Cards Grid */}
        {filteredConcepts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredConcepts.map((item) => (
              <div
                key={item.id}
                className="bg-ivory border border-line hover:border-line rounded-2xl p-6 transition-all duration-200 hover:shadow-xl space-y-3 relative group"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-paper border border-line">
                      {getCategoryIcon(item.category)}
                    </span>
                    <span className="text-xs font-semibold text-walnut">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-paper text-walnut/80 border border-line">
                    {item.level}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-walnut-deep group-hover:text-burgundy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-success mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Detail */}
                <p className="text-xs text-walnut leading-relaxed font-normal">
                  {item.detail}
                </p>

                {/* Example Box */}
                <div className="bg-paper border border-line rounded-xl p-3 text-xs text-walnut font-mono leading-relaxed">
                  <span className="text-bronze-dark font-bold font-sans">Example: </span>
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-ivory border border-line rounded-2xl max-w-xl mx-auto">
            <Search className="w-8 h-8 text-walnut/60 mx-auto mb-2" />
            <p className="text-sm font-semibold text-walnut">No matching concepts found in preview.</p>
            <p className="text-xs text-walnut/60 mt-1">Try searching "Grammar", "Articles", "Diligent" or clear filters.</p>
          </div>
        )}

      </div>
    </section>
  );
}
