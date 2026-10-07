import React from 'react';
import Link from 'next/link';
import { ArrowRight, Languages, MessageCircle, Feather } from 'lucide-react';
import { dictionaryWords, translationSentences } from '../data/dictionary';
import { conversationLevels } from '../data/conversations';
import { poems } from '../data/poems';

const conversationCount = conversationLevels.reduce((n, l) => n + l.conversations.length, 0);

const CARDS = [
  {
    href: '/dictionary',
    icon: Languages,
    title: 'English ↔ Hindi Dictionary',
    hindi: 'शब्द का मतलब और उच्चारण',
    text: `Meanings of ${dictionaryWords.length} everyday words, with audio, and ${translationSentences.length} sentences translated into Hindi.`,
  },
  {
    href: '/conversations',
    icon: MessageCircle,
    title: 'Conversations in Hindi',
    hindi: 'बेसिक से एडवांस तक बातचीत',
    text: `${conversationCount} real-life dialogues across ${conversationLevels.length} levels — basic, medium, hard and advanced.`,
  },
  {
    href: '/poems',
    icon: Feather,
    title: 'English & Hindi Poems',
    hindi: 'कविताएँ और दोहे, अनुवाद के साथ',
    text: `${poems.length} short poems and dohe with a line-by-line translation and the difficult words explained.`,
  },
];

export default function ExploreMore() {
  return (
    <section id="explore" className="py-16 bg-ivory scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="font-serif text-[1.75rem] leading-tight sm:text-4xl font-semibold text-walnut-deep tracking-tight">
            Practise for free, right here
          </h2>
          <p className="font-hindi text-lg text-bronze-dark font-semibold">सुनें, पढ़ें और समझें — हिंदी में</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {CARDS.map(({ href, icon: Icon, title, hindi, text }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-3xl border border-line bg-paper p-6 shadow-sm hover:shadow-lg hover:border-burgundy/40 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-bronze-soft flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-bronze-dark" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-walnut-deep group-hover:text-burgundy transition-colors">{title}</h3>
              <p className="font-hindi text-sm text-bronze-dark font-semibold">{hindi}</p>
              <p className="text-sm text-walnut mt-2 leading-relaxed">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-burgundy">
                Open <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
