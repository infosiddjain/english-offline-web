import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WordOfTheDay from './components/WordOfTheDay';
import ConceptExplorer from './components/ConceptExplorer';
import Features from './components/Features';
import CourseLevels from './components/CourseLevels';
import DeveloperProfile from './components/DeveloperProfile';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Interactive Word of the Day Feature */}
      <WordOfTheDay />

      {/* Core Features Overview */}
      <Features />

      {/* Interactive 10k+ Concept Search Library */}
      <ConceptExplorer />

      {/* Course Levels Overview */}
      <CourseLevels />

      {/* Developer Profile Spotlight */}
      <DeveloperProfile />

      {/* Footer */}
      <Footer />
    </main>
  );
}
