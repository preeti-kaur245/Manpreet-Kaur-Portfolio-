import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import RIMTifyCaseStudy from './components/RIMTifyCaseStudy';
import ProjectsGallery from './components/ProjectsGallery';
import AiExperiments from './components/AiExperiments';
import JourneyTimeline from './components/JourneyTimeline';
import EventsLeadership from './components/EventsLeadership';
import RaftaarSection from './components/RaftaarSection';
import ToolkitMindset from './components/ToolkitMindset';
import MilestonesUpcoming from './components/MilestonesUpcoming';
import QuoteSection from './components/QuoteSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050812] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom Trailing Glowing Cursor */}
      <CustomCursor />

      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <RIMTifyCaseStudy />
        <ProjectsGallery />
        <AiExperiments />
        <JourneyTimeline />
        <EventsLeadership />
        <RaftaarSection />
        <ToolkitMindset />
        <MilestonesUpcoming />
        <QuoteSection />
      </main>

      {/* Contact & Footer */}
      <ContactFooter />
    </div>
  );
}
