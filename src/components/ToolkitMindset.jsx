import React, { useState } from 'react';
import { 
  Eye, 
  Lightbulb, 
  Brain, 
  Zap, 
  Bot, 
  Palette, 
  Users, 
  MessageSquare, 
  Rocket, 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles, 
  Video, 
  Terminal 
} from 'lucide-react';

export default function ToolkitMindset() {
  const [activeCategory, setActiveCategory] = useState('all');

  const principles = [
    { icon: Eye, title: 'OBSERVANT', desc: 'I notice friction and inefficiencies in everyday human routines.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { icon: Lightbulb, title: 'CURIOUS', desc: 'I naturally ask why something works the way it does.', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { icon: Brain, title: 'PRODUCT-MINDED', desc: 'I design for users, workflows and outcomes—not just buttons.', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { icon: Zap, title: 'EXPERIMENTAL', desc: 'I learn fastest by building, prototyping, and testing live.', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { icon: Bot, title: 'AI-NATIVE', desc: 'I leverage AI models as creative multipliers and logic copilot.', color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { icon: Palette, title: 'CREATIVE', desc: 'I use visual thinking to bring abstract ideas into crystal focus.', color: 'text-pink-400', bg: 'bg-pink-500/10' },
    { icon: Users, title: 'COLLABORATIVE', desc: 'I thrive when uniting designers, coders, and organizers.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { icon: MessageSquare, title: 'COMMUNICATIVE', desc: 'Years of stage emceeing shaped my clear, empathetic delivery.', color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { icon: Rocket, title: 'EXECUTION-ORIENTED', desc: 'I despise leaving ideas on paper; I take them to working software.', color: 'text-rose-400', bg: 'bg-rose-500/10' },
  ];

  const toolkitGroups = [
    {
      category: 'Product Design',
      icon: Layers,
      color: 'text-cyan-400',
      items: ['UX/UI Design', 'User Flows', 'Interactive Prototyping', 'Product Architecture', 'Problem Framing', 'Design Systems']
    },
    {
      category: 'Frontend & Build',
      icon: Code2,
      color: 'text-sky-400',
      items: ['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Firebase / Firestore', 'Appwrite', 'SQL & Supabase']
    },
    {
      category: 'AI & Intelligence',
      icon: Cpu,
      color: 'text-violet-400',
      items: ['Google Gemini', 'ChatGPT', 'AI API Integration', 'ElevenLabs Voice', 'Prompt Engineering', 'AI Automation']
    },
    {
      category: 'Visual & Brand Design',
      icon: Palette,
      color: 'text-pink-400',
      items: ['Figma', 'Canva Pro', 'Adobe Express', 'Brand Identity', 'Presentation Systems', 'Visual Storytelling']
    },
    {
      category: 'Content & Media',
      icon: Video,
      color: 'text-amber-400',
      items: ['CapCut', 'Adobe Premiere Pro', 'Event Campaigns', 'Social Strategy', 'Stage Direction', 'Anchoring Scripts']
    },
    {
      category: 'Programming Core',
      icon: Terminal,
      color: 'text-emerald-400',
      items: ['Python', 'C', 'C++', 'Data Structures', 'REST APIs', 'Git / GitHub']
    },
  ];

  return (
    <section id="toolkit" className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">07 — MINDSET & ARSENAL</span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-4">
            How I Work & What I Bring
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light">
            Tools change constantly. What remains constant is the depth of observation, analytical rigor, and passion for execution.
          </p>
        </div>

        {/* Mindset: How I Work Grid */}
        <div className="mb-20">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>HOW I THINK & OPERATE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:scale-[1.01] group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${p.bg} ${p.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Toolkit Categorized Arsenal */}
        <div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-violet-400" />
            <span>MY TOOLKIT & TECHNICAL CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolkitGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                      <div className={`p-2 rounded-xl bg-white/5 ${group.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-xl text-xs font-mono bg-black/40 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/30 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
