import React, { useState } from 'react';
import { Calendar, Mic, Users, Megaphone, Clock, ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';

export default function EventsLeadership() {
  const [activeTab, setActiveTab] = useState(0);

  const roles = [
    {
      id: 'event-management',
      title: 'Event Management',
      icon: Calendar,
      tag: 'PLANNING & EXECUTION',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
      skills: ['Planning', 'Coordination', 'Execution', 'Time Management', 'Crisis Handling'],
      description: 'Orchestrated university-wide hackathons, technical fests, and multi-track conferences with hundreds of attendees.',
    },
    {
      id: 'anchoring',
      title: 'Anchoring & Emceeing',
      icon: Mic,
      tag: 'PUBLIC ENGAGEMENT',
      color: 'text-violet-400',
      border: 'border-violet-500/30',
      bg: 'bg-violet-500/10',
      skills: ['Public Speaking', 'Audience Engagement', 'Stage Presence', 'Live Improvisation', 'Communication'],
      description: 'Commanded main stages, introducing dignitaries, steering live energy, and translating complex schedules into seamless attendee journeys.',
    },
    {
      id: 'team-leadership',
      title: 'Team Leadership',
      icon: Users,
      tag: 'COLLABORATION & ALIGNMENT',
      color: 'text-pink-400',
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
      skills: ['Delegation', 'Conflict Resolution', 'Decision Making', 'Mentorship', 'Cross-Functional Sync'],
      description: 'Led multidisciplinary student cohorts across code, media, and stage crews, cultivating momentum under tight deadlines.',
    },
    {
      id: 'creative-direction',
      title: 'Creative Direction',
      icon: Megaphone,
      tag: 'EXPERIENCE BRANDING',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/10',
      skills: ['Visual Branding', 'Campaign Rollouts', 'Stage Aesthetics', 'Video Direction', 'Atmosphere'],
      description: 'Directed end-to-end visual identities for student festivals, ensuring cohesion from social teasers to live stage screens.',
    },
  ];

  const pillars = [
    { label: 'PEOPLE', desc: 'Understanding human psychology when stressed or excited.' },
    { label: 'PRESSURE', desc: 'Making crisp design decisions when stakes and time are limited.' },
    { label: 'COMMUNICATION', desc: 'Speaking clearly so complex instructions become instantly intuitive.' },
    { label: 'EXECUTION', desc: 'Turning ambitious conceptual roadmaps into reality.' },
    { label: 'EXPERIENCE', desc: 'Designing the holistic emotional arc, not just button states.' },
  ];

  return (
    <section id="leadership" className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">06 — BEYOND DIGITAL SCREENS</span>
          <div className="h-[1px] w-12 bg-cyan-500/30" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight font-display mb-6 max-w-4xl">
          I don't just build experiences. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
            I help run them.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-14 leading-relaxed font-light">
          For the last 3+ years, I've been actively involved in organizing, coordinating and anchoring major events. That experience taught me how to communicate under pressure, align diverse personalities, and make sure attendees feel inspired from start to finish.
        </p>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {roles.map((role, idx) => {
            const Icon = role.icon;
            const isActive = activeTab === idx;
            return (
              <div
                key={role.id}
                onClick={() => setActiveTab(idx)}
                className={`p-7 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? `${role.bg} ${role.border} shadow-[0_0_30px_rgba(56,189,248,0.15)] scale-[1.01]`
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-2xl bg-black/40 ${role.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {role.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {role.tag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    {role.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {role.skills.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-lg text-xs font-mono bg-black/40 border border-white/10 text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* The Crucial Product Design Connection */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0B1220] to-[#050812] shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-3">
              THE PRODUCT DESIGN CONNECTION
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug mb-4">
              Events taught me something interfaces alone never could.
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              People don't experience digital systems in calm isolation. They experience them while they are busy, under pressure, multitasking, communicating with others, and racing against the clock.
            </p>
            <p className="text-slate-400 text-sm mt-3">
              That operational perspective directly shapes how I design: prioritizing speed, cognitive clarity, and zero-confusion interactions.
            </p>
          </div>

          {/* 5 Animated Keyword Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-white/10">
            {pillars.map((pill) => (
              <div
                key={pill.label}
                className="p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-cyan-400/40 transition-all hover:scale-105 group"
              >
                <div className="text-sm font-black font-mono tracking-wider text-cyan-300 group-hover:text-cyan-400 mb-1">
                  {pill.label}
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  {pill.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
