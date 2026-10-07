import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { conversationLevels } from '../data/conversations';

export const metadata: Metadata = {
  title: 'English Conversation in Hindi — Basic to Advanced Spoken English Practice',
  description:
    'Practise spoken English with real conversations translated into Hindi. Four levels — basic, medium, hard and advanced — with audio for every line.',
  alternates: { canonical: '/conversations' },
};

export default function ConversationsPage() {
  return (
    <div className="min-h-screen bg-ivory text-walnut-deep flex flex-col overflow-x-clip">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <PageHeader
          eyebrow="Conversations · बातचीत"
          title="English Conversations in Hindi"
          hindi="रोज़ की अंग्रेज़ी बातचीत — हिंदी अनुवाद के साथ"
          intro="Real-life dialogues, line by line in English and Hindi. Start with Basic and move up when you feel confident."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {conversationLevels.map((level, i) => (
            <Link
              key={level.id}
              href={`/conversations/${level.id}`}
              className="group rounded-3xl border border-line bg-paper p-6 shadow-sm hover:shadow-lg hover:border-burgundy/40 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-dark">Level {i + 1}</span>
                <ArrowRight className="w-5 h-5 text-bronze group-hover:translate-x-1 transition-transform" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-walnut-deep group-hover:text-burgundy transition-colors">
                {level.title} <span className="font-hindi text-lg text-bronze-dark">· {level.hindiTitle}</span>
              </h2>
              <p className="text-sm font-semibold text-walnut mt-1">{level.tagline}</p>
              <p className="text-sm text-walnut/90 mt-2 leading-relaxed">{level.description}</p>
              <ul className="mt-4 space-y-1.5">
                {level.conversations.map((c) => (
                  <li key={c.id} className="flex items-center gap-2 text-sm text-walnut-deep">
                    <MessageCircle className="w-3.5 h-3.5 text-bronze shrink-0" />
                    {c.title}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
