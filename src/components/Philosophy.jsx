import React, { useState } from 'react';
import { Eye, HelpCircle, Brain, Palette, Hammer, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function Philosophy() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 'observe',
      title: 'OBSERVE',
      subtitle: 'Spot the friction',
      icon: Eye,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
      description: 'Look at daily routines and spot repetitive, exhausting, or awkward friction points that most people ignore.',
      question: 'What is silently draining time or attention here?',
    },
    {
      id: 'question',
      title: 'QUESTION',
      subtitle: 'Deconstruct assumptions',
      icon: HelpCircle,
      color: 'text-blue-400',
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/10',
      description: 'Dig beneath the surface. Challenge why legacy workflows exist and whether they are still necessary.',
      question: 'Why does it work this way? Can it be radically simpler?',
    },
    {
      id: 'understand',
      title: 'UNDERSTAND',
      subtitle: 'Empathize with users',
      icon: Brain,
      color: 'text-indigo-400',
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-500/10',
      description: 'Step into the exact shoes of the faculty, student, or coordinator under real-world pressure.',
      question: 'What does success feel like in their actual daily context?',
    },
    {
      id: 'design',
      title: 'DESIGN',
      subtitle: 'Craft clear mental models',
      icon: Palette,
      color: 'text-violet-400',
      border: 'border-violet-500/30',
      bg: 'bg-violet-500/10',
      description: 'Translate user workflows into clean, intentional interfaces where every click has high utility.',
      question: 'How do we remove every unnecessary step from the path?',
    },
    {
      id: 'build',
      title: 'BUILD',
      subtitle: 'Code functional products',
      icon: Hammer,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
      description: 'Harness modern tech (React, Next.js, Firebase, AI APIs) to engineer robust, real-time working software.',
      question: 'How can modern engineering deliver zero-friction reliability?',
    },
    {
      id: 'test',
      title: 'TEST',
      subtitle: 'Validate with real users',
      icon: CheckCircle2,
      color: 'text-pink-400',
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
      description: 'Observe real people using the tool live to uncover hidden edge cases and workflow nuances.',
      question: 'Where do people hesitate, and how do we make it seamless?',
    },
    {
      id: 'improve',
      title: 'IMPROVE',
      subtitle: 'Refine & elevate',
      icon: Sparkles,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
      description: 'Iterate continuously based on actual usage, polishing performance, animations, and outcomes.',
      question: 'How do we turn a utility into a tool people genuinely love?',
    },
  ];

  return (
    <section id="philosophy" className="py-24 px-4 md:px-8 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">01 — MY APPROACH</span>
          <div className="h-[1px] w-12 bg-cyan-500/30" />
        </div>

        {/* Big Editorial Headline */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display max-w-4xl">
            I don't start with technology. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400">
              I start with a problem.
            </span>
          </h2>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I'm naturally curious about how people interact with the systems around them.
            </p>
            <p>
              When I notice something unnecessarily complicated, repetitive or frustrating, I don't just work around it. I start asking:
            </p>

            <div className="space-y-3 pl-4 border-l-2 border-cyan-500/50 py-1 my-4">
              <div className="text-white font-medium flex items-center gap-2 text-lg">
                <span className="text-cyan-400">?</span> Why does it work this way?
              </div>
              <div className="text-white font-medium flex items-center gap-2 text-lg">
                <span className="text-violet-400">?</span> Can it be simpler?
              </div>
              <div className="text-white font-medium flex items-center gap-2 text-lg">
                <span className="text-pink-400">?</span> Can technology make this experience better?
              </div>
            </div>

            <p className="text-slate-400 text-base">
              That's where most of my projects begin. Instead of building products just to add another line to a resume, <span className="text-white font-semibold">I build because I see something worth improving.</span>
            </p>
          </div>

          {/* Right: Interactive Pipeline Visualizer */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">My Thinking Process</span>
                <span className="text-xs font-mono text-cyan-400">STEP 0{activeStep + 1} OF 07</span>
              </div>

              {/* Steps Tab Pills */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 mb-6">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl text-center transition-all ${
                        isActive
                          ? `${step.bg} ${step.border} border shadow-lg scale-105`
                          : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:bg-white/[0.06]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? step.color : 'text-slate-400'}`} />
                      <span className="text-[9px] font-mono font-semibold mt-1 tracking-tighter truncate max-w-full">
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Details */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${processSteps[activeStep].bg} ${processSteps[activeStep].border} border`}>
                    {React.createElement(processSteps[activeStep].icon, {
                      className: `w-5 h-5 ${processSteps[activeStep].color}`,
                    })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {processSteps[activeStep].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {processSteps[activeStep].description}
                </p>

                <div className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400">Guiding Question:</span>
                  <span className="text-xs text-slate-200 italic font-sans">
                    "{processSteps[activeStep].question}"
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <span className="text-xs text-slate-400">Click any stage above to inspect</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % processSteps.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
