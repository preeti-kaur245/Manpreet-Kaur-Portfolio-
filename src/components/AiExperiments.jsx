import React, { useState } from 'react';
import { 
  Bot, 
  Mic, 
  Sparkles, 
  Send, 
  Volume2, 
  PhoneCall, 
  PhoneOff, 
  BookOpen, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Radio, 
  ShieldCheck,
  Zap,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AiExperiments() {
  const [activeViewMode, setActiveViewMode] = useState('interactive'); // 'interactive' | 'screenshot'
  const [isCalling, setIsCalling] = useState(false);
  const [activeStudyTool, setActiveStudyTool] = useState('flashcards');
  const [activeSubject, setActiveSubject] = useState('Operating Systems');
  const [callDuration, setCallDuration] = useState(0);

  // Chat/Audio interaction log
  const [userQuery, setUserQuery] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      sender: 'preeti',
      text: "Hi! I'm Preeti, your AI Mentor. Let's master Operating Systems together. What concept are you reviewing today—Process Scheduling, Deadlocks, or Virtual Memory?",
    }
  ]);

  const toggleCall = () => {
    const nextState = !isCalling;
    setIsCalling(nextState);
    if (nextState) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#06b6d4', '#e5c378']
      });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const query = userQuery;
    setUserQuery('');

    const newLog = [...chatLog, { sender: 'user', text: query }];
    setChatLog(newLog);

    setTimeout(() => {
      let reply = "Great question! Let's break it down step-by-step: First, why do we need context switching here? What happens to the CPU registers?";
      if (query.toLowerCase().includes('deadlock')) {
        reply = "Deadlock happens when processes hold resources while waiting for others in a cycle. Remember the 4 Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait!";
      } else if (query.toLowerCase().includes('scheduling') || query.toLowerCase().includes('round robin')) {
        reply = "Round Robin gives every process an equal time quantum! If the quantum is too large, it degrades to FCFS; if too small, context switching overhead spikes. How would you choose the ideal slice?";
      }
      setChatLog([...newLog, { sender: 'preeti', text: reply }]);
    }, 600);
  };

  return (
    <section id="experiments" className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">04 — AI PRODUCT & EXPERIMENTATION</span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-display mb-4">
            Before I built products, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300">
              I built intelligent mentor experiences.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light">
            “What if software could act like an empathetic tutor who explains, quizzes, and guides—24/7?”
          </p>
        </div>

        {/* Prototype & Screenshot Showcase Frame */}
        <div className="glass-panel rounded-3xl border border-emerald-500/30 p-4 sm:p-6 lg:p-8 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Top Browser Bar & Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>rimtmentor.ai / preeti-tutor</span>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveViewMode('interactive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeViewMode === 'interactive'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive Prototype
              </button>
              <button
                onClick={() => setActiveViewMode('screenshot')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeViewMode === 'screenshot'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Original UI Screenshot
              </button>
            </div>
          </div>

          {/* View Mode 1: Exact Interactive Prototype */}
          {activeViewMode === 'interactive' ? (
            <div className="rounded-2xl border border-white/10 bg-[#080B0F] p-6 sm:p-10 relative overflow-hidden shadow-2xl font-sans">
              
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#e5c378_1px,transparent_1px)] [background-size:24px_24px]" />

              {/* Prototype Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                      <span>RIMT Mentor AI</span>
                    </div>
                    <div className="text-[10px] text-amber-400/80 font-mono uppercase tracking-wider">
                      INTELLIGENT LEARNING PLATFORM
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
                  <span className="hover:text-amber-300 cursor-pointer">FEATURES</span>
                  <span className="hover:text-amber-300 cursor-pointer">STUDY TOOLS</span>
                  <span className="text-amber-400 font-bold cursor-pointer">PREETI</span>
                  <span className="hover:text-amber-300 cursor-pointer">HOW IT WORKS</span>
                </div>

                <button
                  onClick={toggleCall}
                  className={`px-4 py-2 rounded-full text-xs font-bold font-mono transition-all flex items-center gap-2 shadow-lg ${
                    isCalling
                      ? 'bg-rose-500 hover:bg-rose-400 text-white animate-pulse'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>{isCalling ? 'End Call' : '● Call Preeti'}</span>
                </button>
              </div>

              {/* Hero Banner Area */}
              <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 mb-6">
                  <span>AI-POWERED EDUCATION & TUTORING</span>
                </div>

                <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-6">
                  Learn Smarter with <br />
                  <span className="italic text-[#E5C378] font-serif">Preeti</span>, Your AI Mentor
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-8 font-light">
                  RIMT Mentor AI gives you a real-time voice tutor who creates flashcards, reviews your notes, quizzes you, and guides you through every subject — 24/7.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={toggleCall}
                    className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{isCalling ? 'Voice Session Connected' : 'Call Preeti Now'}</span>
                  </button>

                  <button
                    onClick={() => setActiveStudyTool(activeStudyTool === 'flashcards' ? 'quiz' : 'flashcards')}
                    className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 transition-all flex items-center gap-1.5"
                  >
                    <span>Study Tools →</span>
                  </button>
                </div>
              </div>

              {/* Active Voice/Tutor Simulation Box */}
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 max-w-2xl mx-auto relative z-10">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white font-mono">
                      {isCalling ? 'Live Voice Call Active (ElevenLabs Audio Link)' : 'Conversational Tutor Interface'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400">PEDAGOGY: EXPLAIN → ASK → TEACH</span>
                </div>

                {/* Animated Waveform if calling */}
                {isCalling && (
                  <div className="flex items-center justify-center gap-1 py-4 mb-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl">
                    {[40, 70, 90, 60, 100, 45, 80, 65, 95, 50, 85, 30].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-emerald-400 rounded-full animate-pulse"
                        style={{
                          height: `${h * 0.4}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                    <span className="text-xs text-emerald-300 font-mono ml-3">Preeti is speaking...</span>
                  </div>
                )}

                {/* Messages Feed */}
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 mb-4">
                  {chatLog.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 items-start ${
                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {msg.sender === 'preeti' && (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs flex-shrink-0 shadow-md">
                          P
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-2xl max-w-md text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-emerald-600/30 border border-emerald-500/40 text-white rounded-tr-none'
                            : 'bg-white/[0.04] border border-white/10 text-slate-200 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.sender === 'user' && (
                        <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                          You
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    placeholder="Ask Preeti about Deadlocks, Round Robin, or Virtual Memory..."
                    className="flex-1 bg-black/50 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                  >
                    <span>Ask</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>

              {/* Floating Voice FAB Icon (Matching Screenshot) */}
              <button
                onClick={toggleCall}
                className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-20"
                title="Call Preeti"
              >
                <Phone className="w-6 h-6" />
              </button>

            </div>
          ) : (
            /* View Mode 2: High Resolution Screenshot Display */
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#07101F] relative">
              <img
                src="/assets/mentorai-screenshot.png"
                alt="RIMT Mentor AI Interface Screenshot"
                className="w-full h-auto object-contain max-h-[640px] mx-auto"
              />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-200 bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  Exact RIMT Mentor AI Web Platform
                </span>
                <span className="text-xs font-mono text-emerald-300 bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  Designed & Engineered by Manpreet Kaur
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
