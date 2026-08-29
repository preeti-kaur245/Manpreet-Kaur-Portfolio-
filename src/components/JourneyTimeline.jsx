import React, { useState } from 'react';
import { Compass, Lightbulb, Eye, Laptop, Zap, Bot, Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

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
      takeaway: 'Eliminated hours of manual certificate verification.'
    },
    {
      step: '06',
      title: 'AI PRODUCT PIVOT',
      subtitle: 'Google Gemini Challenges & LLMs',
      icon: Bot,
      color: 'text-pink-400',
      border: 'border-pink-500/40',
      bg: 'bg-pink-500/10',
      desc: 'Secured 3× first positions in Gemini AI challenges, building AI voice mentors and generative toolsets.',
      takeaway: 'AI is not just a feature; it is an intelligent design layer.'
    },
    {
      step: '07',
      title: 'TODAY & BEYOND',
      subtitle: 'Product Design · AI · Engineering',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      desc: 'Leading RAFTAAR, crafting human-centered AI products, and engineering solutions with relentless intention.',
      takeaway: 'I design with curiosity, build with technology, and solve with intention.'
    }
  ];

  return (
    <section id="journey" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">03 — EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-3">
            HOW I GOT HERE
          </h2>
          <p className="text-slate-300 text-xs sm:text-base font-light">
            A continuous progression from early creative curiosity to intentional product engineering.
          </p>
        </div>

        {/* Interactive Timeline Track */}
        <div className="relative mb-8 sm:mb-12">
          
          {/* Horizontal Snap Scroll on Mobile */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-7 gap-2.5 sm:gap-3 overflow-x-auto pb-3 sm:pb-0 no-scrollbar snap-x snap-mandatory">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={m.step}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`min-w-[150px] sm:min-w-0 min-h-[48px] p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between shrink-0 snap-start active:scale-95 ${
                    isSelected
                      ? `${m.bg} ${m.border} border shadow-[0_0_25px_rgba(56,189,248,0.25)] scale-[1.02]`
                      : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.06]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{m.step}</span>
                      <div className={`p-1.5 rounded-lg ${isSelected ? m.bg : 'bg-white/5'}`}>
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? m.color : 'text-slate-400'}`} />
                      </div>
                    </div>
                    <div className="text-xs font-bold text-white tracking-tight leading-snug mb-1">
                      {m.title}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1.5 truncate">
                    {m.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Expanded Focus Card for Selected Milestone */}
        <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 mb-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl ${milestones[selectedMilestone].bg} ${milestones[selectedMilestone].border} border`}>
                {React.createElement(milestones[selectedMilestone].icon, {
                  className: `w-5 h-5 sm:w-6 sm:h-6 ${milestones[selectedMilestone].color}`
                })}
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  MILESTONE {milestones[selectedMilestone].step}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {milestones[selectedMilestone].title}
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 self-start sm:self-auto">
              {milestones[selectedMilestone].subtitle}
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
            {milestones[selectedMilestone].desc}
          </p>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase whitespace-nowrap">Core Takeaway:</span>
            <span className="text-xs sm:text-sm text-slate-200 italic">
              "{milestones[selectedMilestone].takeaway}"
            </span>
          </div>

          {/* Quick Prev / Next Controls for Mobile */}
          <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/5">
            <button
              onClick={() => setSelectedMilestone((prev) => (prev === 0 ? milestones.length - 1 : prev - 1))}
              className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Milestone</span>
            </button>

            <button
              onClick={() => setSelectedMilestone((prev) => (prev + 1) % milestones.length)}
              className="min-h-[44px] px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 active:scale-95 transition-all"
            >
              <span>Next Milestone</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
