import React, { useState } from 'react';
import { Eye, HelpCircle, Palette, Code2, RefreshCw, Brain, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Philosophy() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 'observe',
      num: '01',
      title: 'OBSERVE',
      subtitle: 'Spot the hidden friction',
      icon: Eye,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
      activeBorder: 'border-cyan-400',
      description: 'Look at daily routines and spot repetitive, exhausting, or awkward friction points that most people accept as normal.',
      question: 'What is silently draining time or energy here?',
    },
    {
      id: 'question',
      num: '02',
      title: 'QUESTION',
      subtitle: 'Deconstruct assumptions',
      icon: HelpCircle,
      color: 'text-violet-400',
      border: 'border-violet-500/30',
      bg: 'bg-violet-500/10',
      activeBorder: 'border-violet-400',
      description: 'Dig beneath the surface. Challenge why legacy workflows exist and whether they are still necessary.',
      question: 'Why does it work this way? Can it be radically simpler?',
    },
    {
      id: 'design',
      num: '03',
      title: 'DESIGN',
      subtitle: 'Craft intuitive interfaces',
      icon: Palette,
      color: 'text-pink-400',
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
      activeBorder: 'border-pink-400',
      description: 'Translate user workflows into clean, intentional interfaces where every interaction feels natural and effortless.',
      question: 'How do we remove every unnecessary tap and cognitive load?',
    },
    {
      id: 'engineer',
      num: '04',
      title: 'ENGINEER',
      subtitle: 'Build intelligent software',
      icon: Code2,
      color: 'text-blue-400',
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/10',
      activeBorder: 'border-blue-400',
      description: 'Harness modern AI models, APIs, and responsive architectures to engineer robust, lightning-fast digital products.',
      question: 'How can modern AI & engineering deliver zero-friction reliability?',
    },
    {
      id: 'iterate',
      num: '05',
      title: 'ITERATE',
      subtitle: 'Learn & elevate continuously',
      icon: RefreshCw,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
      activeBorder: 'border-emerald-400',
      description: 'Test live with real people, uncover edge cases, and refine typography, animations, and speed until it feels magical.',
      question: 'How do we turn a utility into a tool people genuinely love?',
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">01 — MY APPROACH</span>
          <div className="h-[1px] w-12 bg-cyan-500/30" />
        </div>

        {/* Big Editorial Headline */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display max-w-4xl">
            I don't start with code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400">
              I start with a problem.
            </span>
          </h2>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I'm naturally curious about how people interact with everyday digital and physical systems around them.
            </p>
            <p>
              When I notice something unnecessarily complicated, repetitive or frustrating, I don't just work around it. I ask:
            </p>

            <div className="space-y-2.5 pl-4 border-l-2 border-cyan-500/50 py-1 my-3">
              <div className="text-white font-medium flex items-center gap-2 text-base sm:text-lg">
                <span className="text-cyan-400 font-bold">?</span> Why does it work this way?
              </div>
              <div className="text-white font-medium flex items-center gap-2 text-base sm:text-lg">
                <span className="text-violet-400 font-bold">?</span> Can it be simpler?
              </div>
              <div className="text-white font-medium flex items-center gap-2 text-base sm:text-lg">
                <span className="text-pink-400 font-bold">?</span> Can AI make this experience 10x better?
              </div>
            </div>

            <p className="text-slate-400 text-sm">
              Instead of building projects just to add a bullet point, <span className="text-white font-semibold">I build because I see something worth fixing.</span>
            </p>
          </div>

          {/* Right: Interactive Pipeline Visualizer */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">Interactive Pipeline</span>
                <span className="text-xs font-mono text-cyan-400 font-semibold">STAGE 0{activeStep + 1} OF 05</span>
              </div>

              {/* Steps Tab Pills (Touch Friendly 48dp) */}
              <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-5">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      aria-label={`Step ${step.num}: ${step.title}`}
                      className={`min-h-[48px] flex flex-col items-center justify-center p-1.5 rounded-xl text-center transition-all active:scale-95 ${
                        isActive
                          ? `${step.bg} ${step.border} border-2 shadow-lg scale-[1.03]`
                          : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:bg-white/[0.06]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? step.color : 'text-slate-400'}`} />
                      <span className="text-[9px] font-mono font-bold mt-1 tracking-tight truncate max-w-full">
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Details */}
              <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${processSteps[activeStep].bg} ${processSteps[activeStep].border} border`}>
                    {React.createElement(processSteps[activeStep].icon, {
                      className: `w-5 h-5 ${processSteps[activeStep].color}`,
                    })}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                      {processSteps[activeStep].num} — {processSteps[activeStep].title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {processSteps[activeStep].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {processSteps[activeStep].description}
                </p>

                <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2">
                  <span className="text-[11px] font-mono text-cyan-400 shrink-0 mt-0.5">Core Question:</span>
                  <span className="text-xs text-slate-200 italic font-sans leading-snug">
                    "{processSteps[activeStep].question}"
                  </span>
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/5">
                <button
                  onClick={() => setActiveStep((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))}
                  className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % processSteps.length)}
                  className="min-h-[44px] px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <span>Next Stage</span>
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
