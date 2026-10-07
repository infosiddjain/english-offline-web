import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import DictionarySearch from './DictionarySearch';
import { dictionaryWords, translationSentences } from '../data/dictionary';

export const metadata: Metadata = {
  title: 'English to Hindi Dictionary — Word Meaning, Pronunciation & Translation',
  description:
    'Find English word meanings in Hindi and Hindi words in English. Listen to how each word is pronounced, read examples in both languages, and translate everyday sentences.',
  alternates: { canonical: '/dictionary' },
};

export default function DictionaryPage() {
  return (
    <div className="min-h-screen bg-ivory text-walnut-deep flex flex-col overflow-x-clip">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <PageHeader
          eyebrow="Dictionary · शब्दकोश"
          title="English ↔ Hindi Dictionary"
          hindi="शब्द का मतलब, सही उच्चारण और अनुवाद"
          intro={
            <>
              Search {dictionaryWords.length} everyday words and {translationSentences.length} common sentences. Tap{' '}
              <strong>Listen</strong> to hear the pronunciation, or <strong>Slow</strong> to hear it at a slower speed.
            </>
          }
        />
        <DictionarySearch />
      </main>

      <Footer />
    </div>
  );
}
