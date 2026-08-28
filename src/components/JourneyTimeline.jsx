import React, { useState } from 'react';
import { Compass, Lightbulb, Eye, Laptop, Zap, Bot, Sparkles, CheckCircle2 } from 'lucide-react';

export default function JourneyTimeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(3);

  const milestones = [
    {
      step: '01',
      title: 'STARTED WITH CURIOSITY',
      subtitle: 'Exploration Phase',
      icon: Compass,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-500/10',
      desc: 'Began diving deep into graphic design, interface aesthetics, typography, and frontend technologies.',
      takeaway: 'Discovered the power of visual communication.'
    },
    {
      step: '02',
      title: 'STARTED BUILDING',
      subtitle: 'Hands-on Experiments',
      icon: Laptop,
      color: 'text-sky-400',
      border: 'border-sky-500/40',
      bg: 'bg-sky-500/10',
      desc: 'Built my first websites, small JavaScript utilities, experimental interfaces, and interactive prototypes.',
      takeaway: 'Learned by breaking, coding, and deploying.'
    },
    {
      step: '03',
      title: 'STARTED OBSERVING',
      subtitle: 'Problem-First Awakening',
      icon: Eye,
      color: 'text-indigo-400',
      border: 'border-indigo-500/40',
      bg: 'bg-indigo-500/10',
      desc: 'Shifted focus from "building for the sake of code" to noticing daily friction in campus routines and user habits.',
      takeaway: 'Realized that great products begin with deep observation.'
    },
    {
      step: '04',
      title: 'RIMTify',
      subtitle: 'Real Campus Problem → Working Product',
      icon: Sparkles,
      color: 'text-violet-400',
      border: 'border-violet-500/40',
      bg: 'bg-violet-500/10',
      desc: 'Transformed faculty attendance workflow from a painful manual task into a seamless 1-tap live session with analytics.',
      takeaway: 'Delivered tangible utility to actual daily users.'
    },
    {
      step: '05',
      title: 'EVENT AUTOMATION',
      subtitle: 'Fusion Fest Certificate System',
      icon: Zap,
      color: 'text-purple-400',
      border: 'border-purple-500/40',
      bg: 'bg-purple-500/10',
      desc: 'Automated high-volume e-certificate delivery for festival attendees using an API query architecture.',
      takeaway: 'Good design removes unnecessary operational steps.'
    },
    {
      step: '06',
      title: 'AI EXPERIMENTATION',
      subtitle: 'Conversational & Voice Agents',
      icon: Bot,
      color: 'text-pink-400',
      border: 'border-pink-500/40',
      bg: 'bg-pink-500/10',
      desc: 'Pioneered AI-assisted mentors, ElevenLabs voice agents, and prompt workflows to guide interactive learning.',
      takeaway: 'Interfaces are evolving into intelligent collaborators.'
    },
    {
      step: '07',
      title: 'TODAY & BEYOND',
      subtitle: 'Product Designer • AI Creative',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      desc: 'Leading RAFTAAR, crafting human-centered AI products, and engineering solutions with relentless intention.',
      takeaway: 'I design with curiosity, build with technology, and solve with intention.'
    }
  ];

  return (
    <section id="journey" className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">05 — EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-3">
            HOW I GOT HERE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A continuous progression from early creative curiosity to intentional product engineering.
          </p>
        </div>

        {/* Interactive Timeline Track */}
        <div className="relative mb-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 -translate-y-1/2 -z-10 opacity-30" />

          {/* Timeline Milestones Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={m.step}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? `${m.bg} ${m.border} border shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.03]`
                      : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.06]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{m.step}</span>
                      <div className={`p-1.5 rounded-lg ${isSelected ? m.bg : 'bg-white/5'}`}>
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? m.color : 'text-slate-400'}`} />
                      </div>
                    </div>
                    <div className="text-xs font-bold text-white tracking-tight leading-snug mb-1">
                      {m.title}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-2 truncate">
                    {m.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Expanded Focus Card for Selected Milestone */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl ${milestones[selectedMilestone].bg} ${milestones[selectedMilestone].border} border`}>
                {React.createElement(milestones[selectedMilestone].icon, {
                  className: `w-6 h-6 ${milestones[selectedMilestone].color}`
                })}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  MILESTONE {milestones[selectedMilestone].step}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {milestones[selectedMilestone].title}
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 self-start sm:self-auto">
              {milestones[selectedMilestone].subtitle}
            </span>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            {milestones[selectedMilestone].desc}
          </p>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase whitespace-nowrap">Core Takeaway:</span>
            <span className="text-xs sm:text-sm text-slate-200 italic">
              "{milestones[selectedMilestone].takeaway}"
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
