import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Flame, Users, Lightbulb, Code2, Video, Calendar, Cpu } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function RaftaarSection() {
  const [activePillar, setActivePillar] = useState('innovation');

  const pillars = [
    { id: 'ai', title: 'AI & INTELLIGENCE', icon: Cpu, desc: 'Generative AI workflows, prompt architecture & intelligent agents' },
    { id: 'design', title: 'DESIGN & AESTHETICS', icon: Sparkles, desc: 'Brand identity, UI/UX systems, and high-impact visual design' },
    { id: 'code', title: 'CODE & ENGINEERING', icon: Code2, desc: 'Scalable frontend, real-time databases, and product prototypes' },
    { id: 'media', title: 'MEDIA & STORYTELLING', icon: Video, desc: 'Cinematic video production, reels, and digital campaigns' },
    { id: 'events', title: 'EVENTS & STAGING', icon: Calendar, desc: 'Live execution, stage direction, and attendee journeys' },
    { id: 'innovation', title: 'INNOVATION & LABS', icon: Lightbulb, desc: 'Turning speculative university ideas into real community impact' },
  ];

  return (
    <section id="raftaar" className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08] overflow-hidden">
      
      {/* High Energy Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Card Wrapper */}
        <div className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl border border-red-500/30 bg-gradient-to-b from-[#0e0712] via-[#050812] to-[#07101F] shadow-[0_20px_80px_rgba(255,50,50,0.15)] relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-red-500/15 text-red-400 border border-red-500/30 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-red-400" />
                STUDENT INNOVATION COLLECTIVE
              </span>
              <span className="text-xs font-mono text-slate-400">FOUNDED BY MANPREET KAUR</span>
            </div>

            <a
              href="https://www.instagram.com/raftaar.rimt/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-red-400 transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>@raftaar.rimt</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-display">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-pink-500">
                  RAFTAAR
                </span>
              </h2>

              <div className="text-lg sm:text-2xl font-bold text-slate-200 font-display italic tracking-wide">
                “Jazba Bhi. Hunar Bhi. Raftaar Bhi.”
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                A multidisciplinary student collective bringing together <strong className="text-white">AI, Design, Code, Media, Events, and Innovation</strong> under one unified creative roof.
              </p>

              {/* Founder Profile Box */}
              <div className="p-6 rounded-2xl bg-black/60 border border-red-500/20 space-y-2">
                <div className="text-xs font-mono text-red-400 uppercase tracking-widest">Leadership Role</div>
                <div className="text-xl font-bold text-white">Manpreet Kaur</div>
                <div className="text-xs font-mono text-slate-400">Founder • Creative & Innovation Lead</div>
                <p className="text-sm text-slate-300 pt-2 leading-relaxed">
                  Directing creative initiatives, initiating real-world builds, and rallying passionate students across diverse technical disciplines to turn ambitious ideas into actual execution.
                </p>
              </div>

              {/* Instagram CTA Button */}
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/raftaar.rimt/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 hover:from-red-500 hover:to-pink-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Explore RAFTAAR on Instagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: 3D RAFTAAR Logo Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-80 aspect-square flex items-center justify-center group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/30 to-orange-500/20 blur-3xl group-hover:scale-110 transition-transform duration-500" />
                <div className="relative w-full h-full p-4 flex items-center justify-center">
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
          <div className="pt-8 border-t border-white/10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
              Our Core Expertise Matrix
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-red-500/40 hover:bg-black/60 transition-all text-center flex flex-col items-center justify-between"
                  >
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-white mb-1 tracking-tight">
                      {p.title}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-snug">
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
