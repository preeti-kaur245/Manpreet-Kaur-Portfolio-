import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Sparkles, Compass, Lightbulb, Code2, Users, Cpu, Layers } from 'lucide-react';
import InteractiveNodeCanvas from './InteractiveNodeCanvas';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['AI PRODUCT DESIGNER & AI ENGINEER', 'PROBLEM SOLVER'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Interactive Node Canvas */}
      <InteractiveNodeCanvas />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Staggered Label Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <div className="flex items-center gap-1.5 text-xs font-mono tracking-wider text-slate-300">
              <span className="text-cyan-400 font-semibold">{steps[activeStep]}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">PORTFOLIO</span>
            </div>
          </div>

          {/* Main Statement Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white uppercase mb-6 font-display">
            <span className="block text-slate-100">I NOTICE.</span>
            <span className="block text-slate-200">I QUESTION.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500">
              I BUILD.
            </span>
          </h1>

          {/* Subtitle & Core Philosophy */}
          <p className="text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed mb-4">
            I notice problems people experience every day, understand why they happen, and turn those observations into simple digital solutions people actually enjoy using.
          </p>

          <p className="text-sm md:text-base text-slate-400 font-mono mb-8 flex items-center gap-2">
            <span className="text-cyan-400 font-bold">↳</span>
            From everyday frustrations to working products — I design, experiment and build.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#rimtify"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-95 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#philosophy"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white glass-panel hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>My Approach</span>
              <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
            </a>
          </div>

          {/* Micro Stats / Attributes Strip */}
          <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10 w-full max-w-lg">
            <div>
              <div className="text-2xl font-bold text-white font-mono">3×</div>
              <div className="text-xs text-slate-400">Gemini Challenge Winner</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 font-mono">100%</div>
              <div className="text-xs text-slate-400">Real-World Problem Focus</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-400 font-mono">3+ Yrs</div>
              <div className="text-xs text-slate-400">Events & Leadership</div>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Portrait & Floating System Nodes */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Main Visual Container with Parallax Tilt */}
          <div
            className="relative w-full max-w-[420px] aspect-square flex items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${-mousePos.y * 0.8}deg) rotateY(${mousePos.x * 0.8}deg)`,
            }}
          >
            {/* Glowing Multi-Ring System */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-violet-500/25 animate-pulse-slow" />
            <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />

            {/* Glowing Central Disc Aura */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-violet-600/30 blur-2xl -z-10" />

            {/* Portrait Image Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_60px_rgba(56,189,248,0.3)] overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#07101F]">
                <img
                  src="/assets/manpreet-hero-face.png"
                  alt="Manpreet Kaur - Product Designer & AI Creative"
                  className="w-full h-full object-cover object-top scale-100 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Orbiting Pills with Depth */}
            <div
              className="absolute -top-3 left-4 glass-badge px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-float"
              style={{
                transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
                animationDelay: '0s',
              }}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold text-white tracking-wide">PRODUCT</span>
            </div>

            <div
              className="absolute top-12 -right-4 glass-badge px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-float"
              style={{
                transform: `translate(${-mousePos.x * 1.2}px, ${-mousePos.y * 1.2}px)`,
                animationDelay: '1.2s',
              }}
            >
              <Cpu className="w-3.5 h-3.5 text-violet-400" />
              <span className="text-xs font-semibold text-white tracking-wide">AI NATIVE</span>
            </div>

            <div
              className="absolute bottom-16 -left-6 glass-badge px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-float"
              style={{
                transform: `translate(${mousePos.x * 1.4}px, ${-mousePos.y * 1.4}px)`,
                animationDelay: '2.4s',
              }}
            >
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs font-semibold text-white tracking-wide">BUILD</span>
            </div>

            <div
              className="absolute -bottom-4 right-8 glass-badge px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-float"
              style={{
                transform: `translate(${-mousePos.x * 1.6}px, ${mousePos.y * 1.6}px)`,
                animationDelay: '3.6s',
              }}
            >
              <Users className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-xs font-semibold text-white tracking-wide">LEADERSHIP</span>
            </div>

            {/* Corner Process Badge */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#07101F]/90 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-mono text-slate-300 flex items-center gap-2 shadow-xl whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>OBSERVE → DESIGN → ENGINEER → BUILD → ITERATE </span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors">
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
