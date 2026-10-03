'use client';

import React, { useState } from 'react';
import { GraduationCap, PlusCircle, MinusCircle, HelpCircle, Lightbulb, ChevronDown } from 'lucide-react';
import { tenseGroups, getTensesByGroup, basicConcepts, type TenseGroupId } from '../data/hindiLearning';
import TenseGame from './TenseGame';

const FORMULA_ROWS = [
  { key: 'positive', label: 'Positive', icon: PlusCircle, color: 'text-success' },
  { key: 'negative', label: 'Negative', icon: MinusCircle, color: 'text-danger' },
  { key: 'question', label: 'Question', icon: HelpCircle, color: 'text-bronze' },
] as const;

export default function LearnHindi() {
  const [groupId, setGroupId] = useState<TenseGroupId>('present');
  const [openTense, setOpenTense] = useState<string | null>('present-simple');
  const [openConcept, setOpenConcept] = useState<string | null>(basicConcepts[0].id);

  const group = tenseGroups.find((g) => g.id === groupId)!;
  const groupTenses = getTensesByGroup(groupId);

  return (
    <section id="learn" className="py-20 bg-paper border-y border-line scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze-soft border border-bronze/30 text-bronze-dark text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Free lesson preview</span>
          </div>
          <h2 className="font-serif text-[1.75rem] leading-tight sm:text-4xl font-semibold text-walnut-deep tracking-tight">Learn English in Hindi</h2>
          <p className="font-hindi text-lg text-bronze-dark font-semibold">हर नियम, हर tense — हिंदी में समझें</p>
          <p className="text-walnut text-sm sm:text-base leading-relaxed">
            These are the same notes that ship inside the app. Pick a tense, read the formula and examples, then test yourself
            in the game.
          </p>
        </div>

        {/* Tenses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 min-w-0">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-walnut-deep">Tenses</h3>
                <p className="font-hindi text-sm text-bronze-dark">काल — Past, Present, Future</p>
              </div>
            </div>

            <div role="tablist" aria-label="Tense groups" className="grid grid-cols-3 gap-1 p-1 rounded-2xl bg-ivory-deep mb-4">
              {tenseGroups.map((g) => {
                const active = g.id === groupId;
                return (
                  <button
                    key={g.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setGroupId(g.id);
                      setOpenTense(getTensesByGroup(g.id)[0].id);
                    }}
                    className={`rounded-xl py-2.5 transition-colors ${active ? 'bg-burgundy text-ivory shadow-md' : 'text-walnut hover:bg-paper'}`}
                  >
                    <span className="block text-xs sm:text-sm font-bold">{g.title.replace(' Tense', '')}</span>
                    <span className={`block text-[11px] sm:text-xs font-hindi leading-tight ${active ? 'text-bronze-soft' : 'text-walnut/70'}`}>{g.hindiTitle}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl bg-bronze-soft/60 px-4 py-3 mb-4 text-sm">
              <p className="font-hindi font-semibold text-walnut-deep">{group.summaryHi}</p>
              <p className="text-xs text-walnut mt-0.5">Helping verbs: {group.helpers}</p>
            </div>

            <div className="space-y-3">
              {groupTenses.map((t, i) => {
                const open = openTense === t.id;
                return (
                  <div key={t.id} className={`rounded-2xl border bg-paper transition-colors ${open ? 'border-burgundy/40 shadow-md' : 'border-line'}`}>
                    <button
                      onClick={() => setOpenTense(open ? null : t.id)}
                      aria-expanded={open}
                      className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 text-left"
                    >
                      <span className="w-10 h-10 shrink-0 rounded-xl bg-burgundy-soft text-burgundy font-serif font-bold text-lg flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-bold text-walnut-deep">{t.name}</span>
                        <span className="block text-sm text-bronze-dark font-hindi">{t.hindiName}</span>
                        <span className="block text-xs text-walnut truncate mt-0.5">
                          {t.anchor.en} — <span className="font-hindi">{t.anchor.hi}</span>
                        </span>
                      </span>
                      <ChevronDown className={`w-5 h-5 text-walnut/60 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </button>

                    {open && (
                      <div className="px-3 sm:px-4 pb-5 space-y-4 border-t border-line pt-4">
                        <div>
                          <p className="font-hindi font-semibold text-walnut-deep">{t.useHi}</p>
                          <p className="text-xs text-walnut mt-0.5">{t.use}</p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-burgundy text-ivory px-3 py-1 text-xs">
                          हिंदी पहचान: <strong className="font-hindi">{t.hindiClue}</strong>
                        </div>
                        <div className="rounded-xl border border-line divide-y divide-line overflow-hidden">
                          {FORMULA_ROWS.map(({ key, label, icon: Icon, color }) => (
                            <div key={key} className="flex flex-wrap items-center gap-x-3 gap-y-1 px-3 py-2.5 bg-ivory/50">
                              <Icon className={`w-4 h-4 shrink-0 ${color}`} />
                              <span className="text-[11px] uppercase tracking-wider text-walnut/70 w-16 shrink-0">{label}</span>
                              <span className="min-w-0 basis-full sm:basis-auto sm:flex-1 text-sm font-semibold text-walnut-deep break-words">{t.formula[key]}</span>
                            </div>
                          ))}
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {t.examples.map((ex) => (
                            <li key={ex.en} className="rounded-xl bg-ivory-deep px-3 py-2.5">
                              <p className="text-sm font-semibold text-walnut-deep">{ex.en}</p>
                              <p className="text-sm text-bronze-dark font-hindi">{ex.hi}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {t.signalWords.map((w) => (
                            <span key={w} className="text-xs font-semibold text-walnut bg-paper border border-line rounded-full px-2.5 py-1">
                              {w}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2 rounded-xl border-l-4 border-bronze bg-bronze-soft/50 p-3">
                          <Lightbulb className="w-4 h-4 text-bronze-dark shrink-0 mt-0.5" />
                          <p className="text-sm text-walnut-deep font-hindi leading-relaxed">{t.tip}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Game */}
          <div className="lg:col-span-5 min-w-0">
            <div className="lg:sticky lg:top-24">
              <TenseGame />
            </div>
          </div>
        </div>

        {/* Basics */}
        <div className="mt-16">
          <div className="mb-5">
            <h3 className="font-serif text-2xl font-semibold text-walnut-deep">Grammar Basics</h3>
            <p className="font-hindi text-sm text-bronze-dark">बुनियादी व्याकरण — {basicConcepts.length} notes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {basicConcepts.map((c) => {
              const open = openConcept === c.id;
              return (
                <div key={c.id} className={`min-w-0 rounded-2xl border bg-paper ${open ? 'border-burgundy/40 shadow-md md:col-span-2' : 'border-line'}`}>
                  <button
                    onClick={() => setOpenConcept(open ? null : c.id)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-3 p-4 text-left"
                  >
                    <span>
                      <span className="block font-bold text-walnut-deep">{c.title}</span>
                      <span className="block text-sm text-bronze-dark font-hindi">{c.hindiTitle}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-walnut/60 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && (
                    <div className="px-3 sm:px-4 pb-5 border-t border-line pt-4 space-y-4">
                      <p className="font-hindi text-walnut-deep leading-relaxed">{c.intro}</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {c.points.map((p) => (
                          <div key={p.label} className="rounded-xl border border-line bg-ivory/60 p-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-bold text-burgundy">{p.label}</span>
                              <span className="text-xs font-semibold font-hindi text-bronze-dark bg-bronze-soft rounded-full px-2 py-0.5">{p.hindi}</span>
                            </div>
                            <p className="text-sm text-walnut mt-1 font-hindi">{p.note}</p>
                            <p className="text-sm font-semibold text-walnut-deep mt-2">{p.example}</p>
                            <p className="text-sm text-walnut font-hindi">{p.exampleHi}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 rounded-xl border-l-4 border-bronze bg-bronze-soft/50 p-3">
                        <Lightbulb className="w-4 h-4 text-bronze-dark shrink-0 mt-0.5" />
                        <p className="text-sm text-walnut-deep font-hindi leading-relaxed">{c.tip}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
