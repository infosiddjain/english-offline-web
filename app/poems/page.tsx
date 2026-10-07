import type { Metadata } from 'next';
import { Feather } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import SpeakButton from '../components/SpeakButton';
import { poems, type Poem } from '../data/poems';

export const metadata: Metadata = {
  title: 'Short English Poems with Hindi Meaning & Kabir Ke Dohe in English',
  description:
    'Read famous short English poems with line-by-line Hindi meaning, and Kabir and Rahim dohe with English translation. Listen to every line and learn new words.',
  alternates: { canonical: '/poems' },
};

const LEVEL_STYLES: Record<Poem['level'], string> = {
  Easy: 'bg-success-soft text-success border-success/30',
  Medium: 'bg-bronze-soft text-bronze-dark border-bronze/30',
  Hard: 'bg-burgundy-soft text-burgundy border-burgundy/30',
};

function PoemCard({ poem }: { poem: Poem }) {
  const original: 'en' | 'hi' = poem.original;
  const translated: 'en' | 'hi' = original === 'en' ? 'hi' : 'en';
  const fullText = poem.stanzas.flat().map((l) => l[original]).join(' ');

  return (
    <article id={poem.id} className="rounded-3xl border border-line bg-paper shadow-md scroll-mt-28 overflow-hidden">
      <header className="p-5 sm:p-6 border-b border-line bg-ivory/60 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className={`text-xl sm:text-2xl font-semibold text-walnut-deep ${original === 'hi' ? 'font-hindi' : 'font-serif'}`}>
            {poem.title}
          </h3>
          <p className={`text-sm font-semibold text-bronze-dark ${translated === 'hi' ? 'font-hindi' : ''}`}>{poem.titleTranslated}</p>
          <p className="text-xs text-walnut mt-1">
            {poem.poet} · {poem.year}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${LEVEL_STYLES[poem.level]}`}>
            {poem.level}
          </span>
          <SpeakButton text={fullText} lang={original} label="Listen to poem" size="md" />
        </div>
      </header>

      <div className="p-5 sm:p-6 space-y-6">
        {poem.stanzas.map((stanza, si) => (
          <ol key={si} className="space-y-3">
            {stanza.map((line, li) => (
              <li key={li} className="grid gap-1 sm:grid-cols-2 sm:gap-6">
                <div className="flex items-start gap-2">
                  <p className={`flex-1 text-walnut-deep font-medium leading-relaxed ${original === 'hi' ? 'font-hindi text-lg' : 'font-serif text-lg italic'}`}>
                    {line[original]}
                  </p>
                  <SpeakButton text={line[original]} lang={original} />
                </div>
                <div className="flex items-start gap-2 sm:border-l sm:border-line sm:pl-6">
                  <p className={`flex-1 text-sm leading-relaxed text-bronze-dark ${translated === 'hi' ? 'font-hindi' : ''}`}>
                    {line[translated]}
                  </p>
                  <SpeakButton text={line[translated]} lang={translated} />
                </div>
              </li>
            ))}
          </ol>
        ))}
      </div>

      <footer className="px-5 sm:px-6 pb-6 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-bold text-walnut-deep mb-2">Words to know · कठिन शब्द</h4>
          <ul className="space-y-1.5">
            {poem.words.map((w) => (
              <li key={w.word} className="flex items-start gap-2 text-sm">
                <SpeakButton text={w.word} />
                <span>
                  <strong className="text-burgundy">{w.word}</strong>
                  <span className="text-walnut"> — </span>
                  <span className="font-hindi text-walnut-deep">{w.meaning}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-bronze-soft/60 p-4 self-start">
          <h4 className="text-sm font-bold text-walnut-deep mb-1">What it teaches · सीख</h4>
          <p className="text-sm text-walnut-deep">{poem.lesson}</p>
          <p className="font-hindi text-sm text-bronze-dark mt-1">{poem.lessonHi}</p>
        </div>
      </footer>
    </article>
  );
}

export default function PoemsPage() {
  const englishPoems = poems.filter((p) => p.original === 'en');
  const hindiPoems = poems.filter((p) => p.original === 'hi');

  const sections = [
    {
      id: 'english-poems',
      title: 'English poems with Hindi meaning',
      hindi: 'अंग्रेज़ी कविताएँ — हिंदी अर्थ के साथ',
      items: englishPoems,
    },
    {
      id: 'hindi-dohe',
      title: 'Hindi dohe with English meaning',
      hindi: 'कबीर और रहीम के दोहे — अंग्रेज़ी अनुवाद के साथ',
      items: hindiPoems,
    },
  ];

  return (
    <div className="min-h-screen bg-ivory text-walnut-deep flex flex-col overflow-x-clip">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <PageHeader
          eyebrow="Poetry · कविता"
          title="English & Hindi Poems"
          hindi="छोटी कविताएँ, हर पंक्ति का अनुवाद"
          intro="Short, classic poems with a simple translation under every line. Listen to each line, learn the difficult words, and read what the poem teaches."
        />

        <nav aria-label="Poems" className="rounded-2xl border border-line bg-paper p-4 mb-10 grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <div key={s.id}>
              <a href={`#${s.id}`} className="text-sm font-bold text-burgundy hover:underline">
                {s.title}
              </a>
              <ul className="mt-2 space-y-1">
                {s.items.map((p) => (
                  <li key={p.id}>
                    <a href={`#${p.id}`} className={`text-sm text-walnut hover:text-burgundy ${p.original === 'hi' ? 'font-hindi' : ''}`}>
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-28 mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 shrink-0 rounded-xl bg-bronze-soft flex items-center justify-center">
                <Feather className="w-5 h-5 text-bronze-dark" />
              </span>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-walnut-deep">{s.title}</h2>
                <p className="font-hindi text-sm text-bronze-dark font-semibold">{s.hindi}</p>
              </div>
            </div>
            <div className="space-y-8">
              {s.items.map((p) => (
                <PoemCard key={p.id} poem={p} />
              ))}
            </div>
          </section>
        ))}

        <p className="text-xs text-walnut/80">
          All poems on this page are in the public domain. Translations are simple meanings written for learners, not
          literary translations.
        </p>
      </main>

      <Footer />
    </div>
  );
}
