import React, { useState } from 'react';
import { Trophy, Zap, Code, Mic, Users, Palette, Lock, Unlock, Sparkles, ArrowUpRight } from 'lucide-react';

export default function MilestonesUpcoming() {
  const [unlockedCard, setUnlockedCard] = useState(null);

  const stats = [
    {
      value: '3×',
      label: 'FIRST POSITION',
      sub: 'Google Gemini Innovation Challenge',
      icon: Trophy,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/10'
    },
    {
      value: '3+ Yrs',
      label: 'EVENT LEADERSHIP',
      sub: 'Organizing, Staging & Anchoring',
      icon: Mic,
      color: 'text-violet-400',
      border: 'border-violet-500/30',
      bg: 'bg-violet-500/10'
    },
    {
      value: '15+',
      label: 'COLLABORATORS',
      sub: 'Multidisciplinary Team Alignment',
      icon: Users,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10'
    },
    {
      value: '100+',
      label: 'CREATIVE WORKS',
      sub: 'Designs, UI Systems & Campaigns',
      icon: Palette,
      color: 'text-pink-400',
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10'
    },
    {
      value: 'Founder',
      label: 'RAFTAAR',
      sub: 'Jazba Bhi. Hunar Bhi. Raftaar Bhi.',
      icon: Zap,
      color: 'text-red-400',
      border: 'border-red-500/30',
      bg: 'bg-red-500/10'
    },
    {
      value: 'Live',
      label: 'AI PRODUCT BUILDER',
      sub: 'Real-world practical software',
      icon: Code,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10'
    },
  ];

  const upcomingProjects = [
    {
      id: '01',
      tag: 'AI × PRODUCT',
      title: 'Context-Aware Workspace Copilot',
      hint: 'A zero-friction assistant for real-time academic collaboration.',
    },
    {
      id: '02',
      tag: 'AUTOMATION',
      title: 'Next-Gen Stage Run-Sheet Engine',
      hint: 'Dynamic live timeline tracker for event anchors and audio teams.',
    },
    {
      id: '03',
      tag: 'SOMETHING UNEXPECTED',
      title: 'Conversational Knowledge Graphs',
      hint: 'Exploring interactive memory models and audio-driven mentoring.',
    },
    {
      id: '04',
      tag: 'YOU’LL SEE SOON',
      title: 'Stealth AI Prototype',
      hint: 'A solution born from a new observation on everyday friction.',
    },
  ];

  return (
    <section className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 11: Milestones */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">08 — RECOGNITION & IMPACT</span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-12">
            A Few Milestones
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-white tracking-wider font-mono uppercase">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 12: Upcoming Projects */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">09 — WHAT'S NEXT?</span>
                <div className="h-[1px] w-12 bg-violet-500/30" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
                I'm Not Done Building.
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Hover or tap on any locked experiment below to glimpse what is currently in active development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProjects.map((proj) => {
              const isHovered = unlockedCard === proj.id;
              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setUnlockedCard(proj.id)}
                  onMouseLeave={() => setUnlockedCard(null)}
                  onClick={() => setUnlockedCard(unlockedCard === proj.id ? null : proj.id)}
                  className={`glass-panel p-6 rounded-3xl border transition-all duration-300 relative cursor-pointer overflow-hidden ${
                    isHovered
                      ? 'border-cyan-400/50 bg-gradient-to-b from-[#0e1628] to-[#07101F] shadow-[0_0_30px_rgba(56,189,248,0.2)] scale-[1.02]'
                      : 'border-white/10 bg-[#07101F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-500 font-bold">{proj.id} — COMING SOON</span>
                    <div className={`p-1.5 rounded-lg transition-colors ${isHovered ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-500'}`}>
                      {isHovered ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                      {proj.tag}
                    </div>
                    <h3 className={`text-lg font-bold transition-all ${isHovered ? 'text-white' : 'text-slate-400 blur-[2px]'}`}>
                      {proj.title}
                    </h3>
                  </div>

                  <p className={`text-xs text-slate-400 leading-relaxed transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-40'}`}>
                    {proj.hint}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className={isHovered ? 'text-cyan-400 font-semibold' : 'text-slate-500'}>
                      {isHovered ? '⚡ Active In Lab' : 'Locked Prototype'}
                    </span>
                    <Sparkles className={`w-3.5 h-3.5 ${isHovered ? 'text-cyan-400 animate-spin-slow' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
