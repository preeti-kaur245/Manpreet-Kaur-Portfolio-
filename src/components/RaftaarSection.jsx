import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Flame, Users, Lightbulb, Code2, Video, Calendar, Cpu } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function RaftaarSection() {
  const [activePillar, setActivePillar] = useState('ai');

  const pillars = [
    { id: 'ai', title: 'AI & INTELLIGENCE', icon: Cpu, desc: 'Generative AI workflows, prompt architecture & intelligent agents' },
    { id: 'design', title: 'DESIGN & AESTHETICS', icon: Sparkles, desc: 'Brand identity, UI/UX systems, and high-impact visual design' },
    { id: 'code', title: 'CODE & ENGINEERING', icon: Code2, desc: 'Scalable frontend, real-time databases, and product prototypes' },
    { id: 'media', title: 'MEDIA & STORYTELLING', icon: Video, desc: 'Cinematic video production, reels, and digital campaigns' },
    { id: 'events', title: 'EVENTS & STAGING', icon: Calendar, desc: 'Live execution, stage direction, and attendee journeys' },
    { id: 'innovation', title: 'INNOVATION & LABS', icon: Lightbulb, desc: 'Turning speculative university ideas into real community impact' },
  ];

  return (
    <section id="raftaar" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 relative z-10 border-t border-white/[0.08] overflow-hidden">
      
      {/* High Energy Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Card Wrapper */}
        <div className="glass-panel p-6 sm:p-10 lg:p-14 rounded-3xl border border-red-500/30 bg-gradient-to-b from-[#0e0712] via-[#050812] to-[#07101F] shadow-[0_20px_80px_rgba(255,50,50,0.15)] relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-red-400" />
                STUDENT INNOVATION COLLECTIVE
              </span>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">FOUNDED BY MANPREET KAUR</span>
            </div>

            <a
              href="https://www.instagram.com/raftaar.rimt/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-red-400 transition-colors p-1"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>@raftaar.rimt</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-display">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-pink-500">
                  RAFTAAR
                </span>
              </h2>

              <div className="text-base sm:text-xl font-bold text-slate-200 font-display italic tracking-wide">
                “Jazba Bhi. Hunar Bhi. Raftaar Bhi.”
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                A multidisciplinary student collective bringing together <strong className="text-white">AI, Design, Code, Media, Events, and Innovation</strong> under one unified creative roof.
              </p>

              {/* Founder Profile Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-red-500/20 space-y-1.5">
                <div className="text-[11px] font-mono text-red-400 uppercase tracking-widest">Leadership Role</div>
                <div className="text-lg sm:text-xl font-bold text-white">Manpreet Kaur</div>
                <div className="text-xs font-mono text-slate-400">Founder • Creative & Innovation Lead</div>
                <p className="text-xs sm:text-sm text-slate-300 pt-2 leading-relaxed">
                  Directing creative initiatives, initiating real-world builds, and rallying passionate students across diverse technical disciplines to turn ambitious ideas into actual execution.
                </p>
              </div>

              {/* Instagram CTA Button (Mobile 48dp Touch Target) */}
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/raftaar.rimt/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full text-sm font-bold text-white bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 hover:from-red-500 hover:to-pink-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300 active:scale-95 text-center"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Explore RAFTAAR on Instagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: 3D RAFTAAR Logo Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-52 sm:w-72 md:w-80 aspect-square flex items-center justify-center group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/30 to-orange-500/20 blur-3xl group-hover:scale-110 transition-transform duration-500" />
                <div className="relative w-full h-full p-3 flex items-center justify-center">
                  <img
                    src="/assets/raftaar-logo.png"
                    alt="RAFTAAR 3D Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(255,60,60,0.5)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Multidisciplinary Team Expertise Grid */}
          <div className="pt-6 sm:pt-8 border-t border-white/10">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-4 sm:mb-6">
              Our Core Expertise Matrix
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-red-500/40 hover:bg-black/60 transition-all text-center flex flex-col items-center justify-between"
                  >
                    <div className="p-2 sm:p-2.5 rounded-xl bg-red-500/10 text-red-400 mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-white mb-1 tracking-tight">
                      {p.title}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 leading-snug">
                      {p.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
