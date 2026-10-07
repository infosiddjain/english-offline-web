'use client';

import React, { useMemo, useState } from 'react';
import { Search, X, BookOpen, Languages, ArrowRightLeft } from 'lucide-react';
import SpeakButton from '../components/SpeakButton';
import { dictionaryWords, translationSentences, type DictionaryWord, type TranslationSentence } from '../data/dictionary';

type Tab = 'words' | 'sentences';

const DEVANAGARI = /[ऀ-ॿ]/;

const normalize = (s: string) => s.toLowerCase().replace(/[’']/g, "'").replace(/[.,!?।]/g, '').trim();

function scoreWord(w: DictionaryWord, q: string): number {
  const word = normalize(w.word);
  if (word === q) return 100;
  if (word.startsWith(q)) return 80;
  if (normalize(w.hindi).split(/[\s/]+/).includes(q)) return 75;
  if (w.hindiRoman.split(' ').includes(q)) return 70;
  if (word.includes(q)) return 60;
  if (normalize(w.hindi).includes(q) || w.hindiRoman.includes(q)) return 50;
  if (w.synonyms.some((s) => normalize(s).includes(q))) return 40;
  if (normalize(w.meaning).includes(q)) return 20;
  return 0;
}

function matchesSentence(s: TranslationSentence, q: string) {
  return normalize(s.english).includes(q) || normalize(s.hindi).includes(q) || s.hindiRoman.includes(q);
}

const SENTENCE_TOPICS = Array.from(new Set(translationSentences.map((s) => s.topic)));

function WordCard({ w, onSearch }: { w: DictionaryWord; onSearch: (q: string) => void }) {
  return (
    <article className="rounded-2xl border border-line bg-paper p-5 space-y-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-2xl font-bold text-walnut-deep tracking-tight">{w.word}</h3>
        <SpeakButton text={w.word} label="Listen" />
        <SpeakButton text={w.word} slow label="Slow" />
        <span className="text-[11px] font-bold bg-bronze-soft text-bronze-dark border border-bronze/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
          {w.type}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="font-mono text-bronze-dark">{w.phonetic}</span>
        <span className="text-walnut">
          Say it like: <strong className="text-walnut-deep">{w.sayItLike}</strong>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <p className="font-hindi text-xl font-semibold text-burgundy">{w.hindi}</p>
        <SpeakButton text={w.hindi.split('/')[0].trim()} lang="hi" />
      </div>

      <p className="text-sm text-walnut-deep leading-relaxed">{w.meaning}</p>

      <div className="rounded-xl bg-ivory border border-line p-3 space-y-1">
        <div className="flex items-start gap-2">
          <p className="text-sm text-walnut-deep italic flex-1">“{w.example}”</p>
          <SpeakButton text={w.example} />
        </div>
        <p className="font-hindi text-sm text-bronze-dark">{w.exampleHi}</p>
      </div>

      {w.synonyms.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-walnut/80">Similar words:</span>
          {w.synonyms.map((syn) => (
            <button
              key={syn}
              type="button"
              onClick={() => onSearch(syn)}
              className="text-xs bg-paper text-walnut border border-line px-2 py-0.5 rounded-md hover:border-burgundy/40 hover:text-burgundy"
            >
              {syn}
            </button>
          ))}
        </div>
      )}
    </article>
  );
}

function SentenceRow({ s }: { s: TranslationSentence }) {
  return (
    <li className="rounded-2xl border border-line bg-paper p-4 grid gap-2 sm:grid-cols-2 sm:gap-6">
      <div className="flex items-start gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-walnut/60 pt-1 w-5 shrink-0">EN</span>
        <p className="flex-1 text-walnut-deep font-medium">{s.english}</p>
        <SpeakButton text={s.english} />
      </div>
      <div className="flex items-start gap-2 sm:border-l sm:border-line sm:pl-6">
        <span className="text-[10px] font-bold uppercase tracking-wider text-walnut/60 pt-1 w-5 shrink-0">HI</span>
        <p className="flex-1 font-hindi text-bronze-dark font-semibold">{s.hindi}</p>
        <SpeakButton text={s.hindi} lang="hi" />
      </div>
    </li>
  );
}

export default function DictionarySearch() {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<Tab>('words');
  const [topic, setTopic] = useState<string>('All');

  const q = normalize(query);
  const isHindiQuery = DEVANAGARI.test(query);

  const words = useMemo(() => {
    if (!q) return dictionaryWords;
    return dictionaryWords
      .map((w) => ({ w, score: scoreWord(w, q) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.w);
  }, [q]);

  const sentences = useMemo(() => {
    const list = q ? translationSentences.filter((s) => matchesSentence(s, q)) : translationSentences;
    return topic === 'All' ? list : list.filter((s) => s.topic === topic);
  }, [q, topic]);

  const search = (value: string) => {
    setQuery(value);
    setTab('words');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      {/* Search box */}
      <div className="rounded-3xl border border-line bg-paper p-4 sm:p-6 shadow-lg space-y-3">
        <label htmlFor="dictionary-search" className="flex items-center gap-2 text-sm font-bold text-walnut-deep">
          <ArrowRightLeft className="w-4 h-4 text-bronze" />
          Type an English or Hindi word · अंग्रेज़ी या हिंदी शब्द लिखें
        </label>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bronze pointer-events-none" />
          <input
            id="dictionary-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. knowledge, ज्ञान, mehnga, how much"
            autoComplete="off"
            className="w-full rounded-2xl border border-line bg-ivory pl-12 pr-12 py-3.5 text-base text-walnut-deep placeholder:text-walnut/50 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy/40"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-walnut hover:bg-ivory-deep"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-xs text-walnut/80">
          {isHindiQuery ? 'Hindi → English' : 'English → Hindi'} · You can also type Hindi in English letters (Hinglish), like
          “sundar” or “kitne ka hai”.
        </p>
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="Results" className="grid grid-cols-2 gap-1 p-1 rounded-2xl bg-ivory-deep max-w-md">
        {(
          [
            { id: 'words', label: 'Word meanings', icon: BookOpen, count: words.length },
            { id: 'sentences', label: 'Sentence translation', icon: Languages, count: sentences.length },
          ] as const
        ).map(({ id, label, icon: Icon, count }) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-colors ${
              tab === id ? 'bg-burgundy text-ivory shadow-md' : 'text-walnut hover:bg-paper'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label} ({count})
          </button>
        ))}
      </div>

      {tab === 'words' ? (
        words.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {words.map((w) => (
              <WordCard key={w.id} w={w} onSearch={search} />
            ))}
          </div>
        ) : (
          <EmptyState query={query} onSwitch={() => setTab('sentences')} other={sentences.length} otherLabel="sentences" />
        )
      ) : (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {['All', ...SENTENCE_TOPICS].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  topic === t ? 'bg-burgundy text-ivory border-burgundy' : 'bg-paper text-walnut border-line hover:border-burgundy/40'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          {sentences.length > 0 ? (
            <ul className="space-y-3">
              {sentences.map((s) => (
                <SentenceRow key={s.id} s={s} />
              ))}
            </ul>
          ) : (
            <EmptyState query={query} onSwitch={() => setTab('words')} other={words.length} otherLabel="words" />
          )}
        </div>
      )}
    </div>
  );
}

function EmptyState({ query, onSwitch, other, otherLabel }: { query: string; onSwitch: () => void; other: number; otherLabel: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-paper p-8 text-center space-y-2">
      <p className="font-semibold text-walnut-deep">No results for “{query}”.</p>
      <p className="text-sm text-walnut">Try a simpler word, or check the spelling.</p>
      {other > 0 && (
        <button type="button" onClick={onSwitch} className="text-sm font-semibold text-burgundy hover:underline">
          See {other} matching {otherLabel} →
        </button>
      )}
    </div>
  );
}
