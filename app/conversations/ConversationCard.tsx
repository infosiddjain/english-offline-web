'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Square, Eye, EyeOff, MessageCircle } from 'lucide-react';
import SpeakButton, { speak } from '../components/SpeakButton';
import type { Conversation } from '../data/conversations';

export default function ConversationCard({ conversation }: { conversation: Conversation }) {
  const [showHindi, setShowHindi] = useState(true);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const stopped = useRef(false);

  const speakers = Array.from(new Set(conversation.lines.map((l) => l.speaker)));

  useEffect(() => {
    return () => {
      stopped.current = true;
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  const playFrom = (index: number) => {
    if (stopped.current || index >= conversation.lines.length) {
      setPlayingIndex(null);
      return;
    }
    setPlayingIndex(index);
    const started = speak(conversation.lines[index].en, 'en', 0.95, (completed) =>
      completed ? playFrom(index + 1) : setPlayingIndex(null),
    );
    if (!started) setPlayingIndex(null);
  };

  const togglePlayAll = () => {
    if (playingIndex !== null) {
      stopped.current = true;
      window.speechSynthesis.cancel();
      setPlayingIndex(null);
      return;
    }
    stopped.current = false;
    playFrom(0);
  };

  return (
    <article id={conversation.id} className="rounded-3xl border border-line bg-paper shadow-md scroll-mt-28 overflow-hidden">
      <header className="p-5 sm:p-6 border-b border-line bg-ivory/60 space-y-3">
        <div className="flex items-start gap-3">
          <span className="w-10 h-10 shrink-0 rounded-xl bg-bronze-soft flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-bronze-dark" />
          </span>
          <div className="min-w-0">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-walnut-deep">{conversation.title}</h2>
            <p className="font-hindi text-sm text-bronze-dark font-semibold">{conversation.titleHi}</p>
            <p className="text-sm text-walnut mt-1">{conversation.situation}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={togglePlayAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-ivory bg-burgundy hover:bg-burgundy-dark transition-colors"
          >
            {playingIndex !== null ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playingIndex !== null ? 'Stop' : 'Play whole conversation'}
          </button>
          <button
            type="button"
            onClick={() => setShowHindi((v) => !v)}
            aria-pressed={!showHindi}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-walnut-deep bg-paper border border-line hover:border-burgundy/40 transition-colors"
          >
            {showHindi ? <EyeOff className="w-3.5 h-3.5 text-bronze" /> : <Eye className="w-3.5 h-3.5 text-bronze" />}
            {showHindi ? 'Hide Hindi (practice mode)' : 'Show Hindi'}
          </button>
        </div>
      </header>

      <ol className="p-4 sm:p-6 space-y-3">
        {conversation.lines.map((line, i) => {
          const isRight = speakers.indexOf(line.speaker) % 2 === 1;
          const active = playingIndex === i;
          return (
            <li key={i} className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[92%] sm:max-w-[80%] rounded-2xl px-4 py-3 border transition-colors ${
                  active
                    ? 'border-burgundy bg-burgundy-soft'
                    : isRight
                      ? 'border-bronze/30 bg-bronze-soft/50'
                      : 'border-line bg-ivory'
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-walnut/70 mb-1">{line.speaker}</p>
                <div className="flex items-start gap-2">
                  <p className="flex-1 text-walnut-deep font-medium leading-relaxed">{line.en}</p>
                  <SpeakButton text={line.en} />
                </div>
                {showHindi && (
                  <div className="flex items-start gap-2 mt-1.5 pt-1.5 border-t border-line/70">
                    <p className="flex-1 font-hindi text-sm text-bronze-dark leading-relaxed">{line.hi}</p>
                    <SpeakButton text={line.hi} lang="hi" />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <footer className="px-5 sm:px-6 pb-6">
        <h3 className="text-sm font-bold text-walnut-deep mb-3">Key phrases · ज़रूरी वाक्यांश</h3>
        <ul className="grid gap-3 sm:grid-cols-3">
          {conversation.keyPhrases.map((p) => (
            <li key={p.en} className="rounded-xl border border-line bg-ivory p-3 space-y-1">
              <div className="flex items-start gap-2">
                <p className="flex-1 text-sm font-bold text-burgundy">{p.en}</p>
                <SpeakButton text={p.en.replace(/…/g, '')} />
              </div>
              <p className="font-hindi text-sm text-bronze-dark">{p.hi}</p>
              <p className="text-xs text-walnut leading-relaxed">{p.note}</p>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
