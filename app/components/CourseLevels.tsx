'use client';

import React from 'react';
import { Layers, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import { courseLevels } from '../data/appData';

export default function CourseLevels() {
  return (
    <section id="levels" className="py-20 bg-ivory border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-soft border border-bronze/30 text-bronze text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-bronze" />
            <span>Structured Learning Pathway</span>
          </div>
          <h2 className="text-[1.75rem] leading-tight sm:text-4xl font-serif font-semibold text-walnut-deep tracking-tight">
            Curriculum Tailored to Your Level
          </h2>
          <p className="text-walnut text-sm sm:text-base leading-relaxed">
            From absolute basics to advanced English fluency, follow our structured offline levels.
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courseLevels.map((lvl) => (
            <div
              key={lvl.id}
              className={`bg-paper border ${lvl.borderColor} rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}
            >
              {/* Top Accent Gradient */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${lvl.gradient}`} />

              <div className="space-y-4">
                {/* Badge & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-ivory text-bronze border border-line">
                    {lvl.badge}
                  </span>
                  <Award className="w-5 h-5 text-bronze-dark" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-walnut-deep group-hover:text-burgundy transition-colors">
                    {lvl.title}
                  </h3>
                  <p className="text-xs font-semibold text-bronze-dark mt-1">
                    {lvl.tagline}
                  </p>
                </div>

                <p className="text-xs text-walnut leading-relaxed">
                  {lvl.description}
                </p>

                {/* Modules & Exercises Count */}
                <div className="flex items-center justify-between text-xs font-semibold py-2 px-3 bg-ivory rounded-xl border border-line text-walnut">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-bronze" />
                    {lvl.modulesCount} Core Modules
                  </span>
                  <span className="text-success">
                    {lvl.exercisesPerModule}
                  </span>
                </div>

                {/* Topic Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-walnut/80 uppercase tracking-wider">
                    Key Topics Covered:
                  </div>
                  <ul className="space-y-2">
                    {lvl.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2 text-xs text-walnut-deep">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-line text-center">
                <span className="text-xs font-semibold text-walnut/80 group-hover:text-burgundy transition-colors flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-bronze" />
                  Available 100% Offline in App
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
