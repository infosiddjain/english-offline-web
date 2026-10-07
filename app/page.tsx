import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WordOfTheDay from './components/WordOfTheDay';
import ExploreMore from './components/ExploreMore';
import LearnHindi from './components/LearnHindi';
import ConceptExplorer from './components/ConceptExplorer';
import Features from './components/Features';
import CourseLevels from './components/CourseLevels';
import DeveloperProfile from './components/DeveloperProfile';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-walnut-deep flex flex-col relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Dictionary, conversations and poems */}
      <ExploreMore />

      {/* English → Hindi tense & grammar notes with the tense game */}
      <LearnHindi />

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
