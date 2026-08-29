import React from 'react';
import { Sparkles } from 'lucide-react';

export default function QuoteSection() {
  return (
    <section className="py-32 px-4 md:px-8 relative z-10 border-t border-white/[0.08] overflow-hidden">
      
      {/* Background Central Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-600/10 via-violet-600/15 to-pink-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-400 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>CORE OPERATING PHILOSOPHY</span>
        </div>

        {/* The 3-Word Signature Anthem */}
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase font-display leading-[0.95] mb-8">
          <span className="block text-slate-100 hover:text-cyan-300 transition-colors">NOTICE.</span>
          <span className="block text-slate-300 hover:text-sky-300 transition-colors">QUESTION.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
            BUILD.
          </span>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-6">
          “Notice the real friction. Question why it was accepted as normal. Build a simple digital solution that makes people's lives better.”
        </p>

        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-sm font-bold text-white tracking-widest font-mono uppercase">Manpreet Kaur</span>
          <span className="text-xs text-slate-400 font-mono">Product Design · AI · UX/UI · Engineering · Rapid Prototyping</span>
        </div>

      </div>
    </section>
  );
}
