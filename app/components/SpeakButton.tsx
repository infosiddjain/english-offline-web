'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { Volume2, Square } from 'lucide-react';

type Lang = 'en' | 'hi';

interface SpeakButtonProps {
  text: string;
  lang?: Lang;
  slow?: boolean;
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

const LANG_CODES: Record<Lang, string[]> = {
  en: ['en-IN', 'en-GB', 'en-US', 'en'],
  hi: ['hi-IN', 'hi'],
};

function pickVoice(lang: Lang): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  for (const code of LANG_CODES[lang]) {
    const match = voices.find((v) => v.lang.toLowerCase().startsWith(code.toLowerCase()));
    if (match) return match;
  }
  return undefined;
}

/** Speaks text using the browser's built-in voices (no network or API key needed). */
export function speak(text: string, lang: Lang = 'en', rate = 0.95, onEnd?: (completed: boolean) => void) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LANG_CODES[lang][0];
  const voice = pickVoice(lang);
  if (voice) utterance.voice = voice;
  utterance.rate = rate;
  if (onEnd) {
    utterance.onend = () => onEnd(true);
    // Fires with "interrupted" when another utterance cancels this one.
    utterance.onerror = () => onEnd(false);
  }
  window.speechSynthesis.speak(utterance);
  return true;
}

const noopSubscribe = () => () => {};

export default function SpeakButton({ text, lang = 'en', slow = false, label, size = 'sm', className = '' }: SpeakButtonProps) {
  const supported = useSyncExternalStore(
    noopSubscribe,
    () => 'speechSynthesis' in window,
    () => true,
  );
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    // Some browsers load voices lazily; touching the list starts the load.
    if (supported) window.speechSynthesis.getVoices();
  }, [supported]);

  if (!supported) return null;

  const handleClick = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    setSpeaking(true);
    speak(text, lang, slow ? 0.6 : 0.95, () => setSpeaking(false));
  };

  const ariaLabel = `${speaking ? 'Stop' : 'Listen to'} ${slow ? 'slow ' : ''}${lang === 'hi' ? 'Hindi' : 'English'}: ${text}`;
  const sizing = size === 'md' ? 'px-3 py-1.5 text-xs gap-1.5' : label ? 'px-2.5 py-1 text-[11px] gap-1' : 'p-1.5';
  const iconSize = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`inline-flex items-center shrink-0 rounded-full border font-semibold transition-colors ${
        speaking
          ? 'bg-burgundy text-ivory border-burgundy'
          : 'bg-paper text-bronze-dark border-bronze/30 hover:bg-bronze-soft hover:text-burgundy'
      } ${sizing} ${className}`}
    >
      {speaking ? <Square className={iconSize} /> : <Volume2 className={iconSize} />}
      {label && <span>{label}</span>}
    </button>
  );
}
