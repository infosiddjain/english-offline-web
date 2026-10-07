import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import ConversationCard from '../ConversationCard';
import LevelTabs from '../LevelTabs';
import { conversationLevels, getConversationLevel } from '../../data/conversations';

export const dynamicParams = false;

export function generateStaticParams() {
  return conversationLevels.map((level) => ({ level: level.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }): Promise<Metadata> {
  const { level: id } = await params;
  const level = getConversationLevel(id);
  if (!level) return {};
  return {
    title: level.seoTitle,
    description: level.seoDescription,
    alternates: { canonical: `/conversations/${level.id}` },
  };
}

export default async function ConversationLevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level: id } = await params;
  const level = getConversationLevel(id);
  if (!level) notFound();

  const index = conversationLevels.findIndex((l) => l.id === level.id);
  const next = conversationLevels[index + 1];

  return (
    <div className="min-h-screen bg-ivory text-walnut-deep flex flex-col overflow-x-clip">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <PageHeader
          eyebrow={`Conversations · ${level.title} level`}
          title={`${level.title} English Conversations in Hindi`}
          hindi={`${level.hindiTitle} स्तर — अंग्रेज़ी बातचीत, हिंदी अर्थ के साथ`}
          intro={
            <>
              {level.description} Tap 🔊 on any line to hear it, or play the whole conversation. Hide the Hindi to test
              yourself.
            </>
          }
        />

        <LevelTabs active={level.id} />

        <div className="space-y-8">
          {level.conversations.map((c) => (
            <ConversationCard key={c.id} conversation={c} />
          ))}
        </div>

        {next && (
          <Link
            href={`/conversations/${next.id}`}
            className="mt-10 flex items-center justify-between gap-4 rounded-2xl bg-burgundy p-5 text-ivory hover:bg-burgundy-dark transition-colors"
          >
            <span>
              <span className="block text-xs font-bold uppercase tracking-wider text-bronze-soft">Next level</span>
              <span className="font-serif text-xl font-semibold">
                {next.title} conversations · <span className="font-hindi">{next.hindiTitle}</span>
              </span>
            </span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
        )}
      </main>

      <Footer />
    </div>
  );
}
