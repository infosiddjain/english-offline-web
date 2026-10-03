import type { Metadata } from 'next';
import { Mail, Clock, ShieldCheck, Bug } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from './ContactForm';
import { appStats } from '../data/appData';

export const metadata: Metadata = {
  title: 'Contact — English Offline',
  description: 'Send feedback, report a bug or ask a question about English Offline.',
  alternates: { canonical: '/contact' },
};

const INFO = [
  { icon: Clock, title: 'Quick replies', text: 'We usually answer within 1–2 working days.' },
  { icon: Bug, title: 'Found a mistake?', text: 'Tell us the screen and the sentence — we fix content errors fast.' },
  { icon: ShieldCheck, title: 'Private', text: 'Your details are used only to reply to you.' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory text-walnut-deep flex flex-col overflow-x-clip">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 space-y-3 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-bronze-dark">Contact · संपर्क करें</p>
          <h1 className="font-serif text-[2rem] leading-tight sm:text-5xl font-semibold tracking-tight">Get in touch</h1>
          <p className="text-walnut leading-relaxed">
            Questions, feedback or a bug to report? Send us a message and we&apos;ll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 min-w-0">
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 min-w-0 space-y-4">
            {INFO.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3 rounded-2xl border border-line bg-paper p-4">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-bronze-soft flex items-center justify-center">
                  <Icon className="w-5 h-5 text-bronze-dark" />
                </span>
                <div>
                  <h2 className="text-sm font-bold">{title}</h2>
                  <p className="text-sm text-walnut leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-burgundy p-5 text-ivory">
              <h2 className="font-serif text-lg font-semibold">Prefer email?</h2>
              <a
                href={`mailto:${appStats.developerEmail}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-bronze-soft hover:underline break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {appStats.developerEmail}
              </a>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
