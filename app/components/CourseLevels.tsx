'use client';

import React from 'react';
import { Layers, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import { courseLevels } from '../data/appData';

export default function CourseLevels() {
  return (
    <section id="levels" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/50 text-purple-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Structured Learning Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curriculum Tailored to Your Level
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From absolute basics to advanced English fluency, follow our structured offline levels.
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courseLevels.map((lvl) => (
            <div
              key={lvl.id}
              className={`bg-slate-900/80 border ${lvl.borderColor} rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}
            >
              {/* Top Accent Gradient */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${lvl.gradient}`} />

              <div className="space-y-4">
                {/* Badge & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 text-cyan-400 border border-slate-800">
                    {lvl.badge}
                  </span>
                  <Award className="w-5 h-5 text-amber-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {lvl.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-400 mt-1">
                    {lvl.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {lvl.description}
                </p>

                {/* Modules & Exercises Count */}
                <div className="flex items-center justify-between text-xs font-semibold py-2 px-3 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    {lvl.modulesCount} Core Modules
                  </span>
                  <span className="text-emerald-400">
                    {lvl.exercisesPerModule}
                  </span>
                </div>

                {/* Topic Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Topics Covered:
                  </div>
                  <ul className="space-y-2">
                    {lvl.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 text-center">
                <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
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
