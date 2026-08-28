import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  Sparkles, 
  Download, 
  Search, 
  Check, 
  ShieldCheck, 
  Trash2, 
  User, 
  Briefcase, 
  GraduationCap, 
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  Zap,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ProjectsGallery() {
  const [activeProject, setActiveProject] = useState('fusionfest');
  
  // Fusion Fest Interactive Simulator States
  const [certName, setCertName] = useState('Manpreet Kaur');
  const [certRoll, setCertRoll] = useState('2201099');
  const [isSearching, setIsSearching] = useState(false);
  const [certFound, setCertFound] = useState(false);

  // Resume Forge Interactive Prototype States (matching screenshot)
  const [resumeViewMode, setResumeViewMode] = useState('interactive'); // 'interactive' | 'screenshot'
  const [resumeTemplate, setResumeTemplate] = useState('Modern');
  const [resumeTab, setResumeTab] = useState('Personal');
  const [zoomLevel, setZoomLevel] = useState(90);
  
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: 'Driven product builder and AI enthusiast with experience shipping user-centric web applications and managing real-world events.'
  });

  const handleCertSearch = (e) => {
    e.preventDefault();
    if (!certName || !certRoll) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setCertFound(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#06b6d4']
      });
    }, 600);
  };

  const handleClearResume = () => {
    setFormData({
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      github: '',
      summary: ''
    });
  };

  const handleDownloadPDF = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#8b5cf6', '#38bdf8', '#d946ef']
    });
    alert(`Generating & downloading ${formData.fullName || 'Candidate'}_Resume.pdf in ${resumeTemplate} layout!`);
  };

  const isFormFilled = formData.fullName || formData.jobTitle || formData.email;

  return (
    <section id="work" className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">02 & 03 — SELECTED WORK</span>
              <div className="h-[1px] w-12 bg-cyan-500/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              From Real-World Friction to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                Automated Digital Experiences.
              </span>
            </h2>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveProject('fusionfest')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeProject === 'fusionfest'
                  ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>02. Fusion Fest</span>
            </button>
            <button
              onClick={() => setActiveProject('resumeforge')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeProject === 'resumeforge'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>03. Resume Forge</span>
            </button>
          </div>
        </div>

        {/* Project 02: Fusion Fest */}
        {activeProject === 'fusionfest' && (
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-violet-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-in fade-in duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/30">
                    EVENT AUTOMATION PLATFORM
                  </span>
                  <span className="text-xs font-mono text-slate-400">FIRST-YEAR INITIATIVE</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Fusion Fest E-Certificates: <br />
                  <span className="text-violet-300">Removing Unnecessary Distribution Steps.</span>
                </h3>

                {/* Problem -> Idea Box */}
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="text-xs font-mono text-rose-400 uppercase tracking-wider">The Problem</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    After major events, distributing hundreds of certificates manually is painfully repetitive:
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 py-1 overflow-x-auto">
                    <span className="px-2 py-1 bg-white/5 rounded">Find participant</span>
                    <span>→</span>
                    <span className="px-2 py-1 bg-white/5 rounded">Verify</span>
                    <span>→</span>
                    <span className="px-2 py-1 bg-white/5 rounded">Locate cert</span>
                    <span>→</span>
                    <span className="px-2 py-1 bg-white/5 rounded">Send</span>
                  </div>
                </div>

                <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                  <p>
                    <strong className="text-white">The Idea:</strong> What if participants could simply look up and fetch their own verified certificate in 5 seconds without waiting for an organizer?
                  </p>
                  <p>
                    I engineered an API-driven certificate generation platform where students enter their Name and University Roll Number to immediately preview and download high-resolution verified credentials.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['UX', 'Automation', 'API Integration', 'Event Tech', 'JavaScript', 'Tailwind CSS'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Insight Quote */}
                <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/30 text-xs text-slate-300 italic">
                  “Good design isn't always about adding more. Sometimes it's about removing steps.”
                </div>
              </div>

              {/* Right: Interactive Certificate Lookup Simulator */}
              <div className="lg:col-span-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-black/70 border border-white/10 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-violet-400" />
                      <span className="text-sm font-bold text-white">Live Certificate Portal Demo</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Interactive</span>
                  </div>

                  <form onSubmit={handleCertSearch} className="space-y-4 mb-6">
                    <div>
                      <label className="text-xs text-slate-300 mb-1 block">Participant Name</label>
                      <input
                        type="text"
                        value={certName}
                        onChange={(e) => setCertName(e.target.value)}
                        className="w-full bg-[#07101F] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-violet-400"
                        placeholder="e.g. Manpreet Kaur"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 mb-1 block">Roll Number / ID</label>
                      <input
                        type="text"
                        value={certRoll}
                        onChange={(e) => setCertRoll(e.target.value)}
                        className="w-full bg-[#07101F] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-violet-400"
                        placeholder="e.g. 2201099"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSearching}
                      className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                    >
                      {isSearching ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Querying API database...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4" />
                          <span>Fetch & Verify Certificate</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Certificate Preview Mockup */}
                  {certFound && (
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1424] to-[#150e26] border border-violet-500/40 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <Check className="w-3.5 h-3.5" />
                          <span>AUTHENTICATED CREDENTIAL #FF-2024-884</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">PDF / 300 DPI</span>
                      </div>

                      <div className="text-center py-4 px-2">
                        <div className="text-xs font-mono uppercase text-violet-400 tracking-widest mb-1">
                          Certificate of Excellence
                        </div>
                        <div className="text-lg font-bold text-white mb-1">
                          {certName}
                        </div>
                        <div className="text-xs text-slate-400 mb-2">
                          Roll: {certRoll} • Fusion Fest Tech & Innovation
                        </div>
                        <div className="text-[11px] text-slate-300 max-w-sm mx-auto">
                          Recognized for outstanding contribution & technical leadership in festival workflows.
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                          <ShieldCheck className="w-3 h-3 text-cyan-400" />
                          <span>Verified via SHA-256</span>
                        </div>
                        <button
                          onClick={() => alert(`Downloading verified certificate for ${certName}!`)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-violet-500 hover:bg-violet-400 text-white flex items-center gap-1.5 shadow-md"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {!certFound && (
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/15 text-center text-xs text-slate-400">
                      Enter details and click "Fetch & Verify" to test the real-time retrieval flow.
                    </div>
                  )}

                </div>
              </div>

            </div>

          </div>
        )}

        {/* Project 03: Resume Forge (Exact Replicant of Screenshot) */}
        {activeProject === 'resumeforge' && (
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-violet-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-in fade-in duration-300">
            
            {/* Top Showcase Frame Bar & Mode Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>resumeforge.app / builder</span>
                </div>
              </div>

              {/* Mode Switcher */}
              <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setResumeViewMode('interactive')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    resumeViewMode === 'interactive'
                      ? 'bg-violet-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Interactive Prototype
                </button>
                <button
                  onClick={() => setResumeViewMode('screenshot')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    resumeViewMode === 'screenshot'
                      ? 'bg-violet-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Original UI Screenshot
                </button>
              </div>
            </div>

            {/* View Mode 1: Exact Interactive ResumeForge Application */}
            {resumeViewMode === 'interactive' ? (
              <div className="rounded-2xl border border-white/15 bg-[#1e2238] overflow-hidden shadow-2xl font-sans">
                
                {/* Top Nav Bar (Exact Match to Screenshot) */}
                <div className="bg-[#181b2e] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
                  {/* Brand */}
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-base">⚡</span>
                    <span className="text-base font-bold text-white tracking-tight">ResumeForge</span>
                  </div>

                  {/* Template Pills */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">TEMPLATE</span>
                    <div className="flex items-center gap-1 bg-[#121424] p-1 rounded-xl border border-white/10">
                      {['Modern', 'Classic', 'Minimal'].map((tpl) => (
                        <button
                          key={tpl}
                          onClick={() => setResumeTemplate(tpl)}
                          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                            resumeTemplate === tpl
                              ? 'bg-violet-600 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {tpl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleClearResume}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                    <button
                      onClick={handleDownloadPDF}
                      className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>

                {/* Main Workspace: Left Editor & Right Live Preview */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                  
                  {/* Left Column: Form Editor */}
                  <div className="lg:col-span-6 bg-[#1b1f35] p-5 sm:p-6 border-r border-white/10 flex flex-col justify-between">
                    <div>
                      {/* Form Tabs */}
                      <div className="flex items-center gap-4 border-b border-white/10 pb-2.5 mb-5 text-xs font-medium">
                        {[
                          { id: 'Personal', icon: User },
                          { id: 'Summary', icon: FileText },
                          { id: 'Experience', icon: Briefcase },
                          { id: 'Education', icon: GraduationCap },
                        ].map((t) => {
                          const Icon = t.icon;
                          const isActive = resumeTab === t.id;
                          return (
                            <button
                              key={t.id}
                              onClick={() => setResumeTab(t.id)}
                              className={`flex items-center gap-1.5 pb-2 -mb-2.5 transition-all ${
                                isActive
                                  ? 'border-b-2 border-violet-400 text-violet-300 font-bold'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                              <span>{t.id}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="text-sm font-bold text-white mb-4">Personal Information</div>

                      {/* Photo Upload Box */}
                      <div className="p-4 rounded-xl border border-dashed border-white/15 bg-[#14172a] text-center mb-4 cursor-pointer hover:border-violet-400/50 transition-colors">
                        <ImageIcon className="w-6 h-6 text-slate-500 mx-auto mb-1" />
                        <div className="text-xs font-medium text-slate-300">Click to upload photo</div>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">JPG, PNG or GIF - max 5 MB</div>
                      </div>

                      {/* Fields Grid */}
                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                            FULL NAME
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Priya Sharma"
                            className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                            JOB TITLE / ROLE
                          </label>
                          <input
                            type="text"
                            value={formData.jobTitle}
                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                            placeholder="e.g. Senior Software Engineer"
                            className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                              EMAIL
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="priya@example.com"
                              className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                              PHONE
                            </label>
                            <input
                              type="text"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                              LOCATION
                            </label>
                            <input
                              type="text"
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              placeholder="Mumbai, India"
                              className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                              WEBSITE / PORTFOLIO
                            </label>
                            <input
                              type="text"
                              value={formData.website}
                              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                              placeholder="https://priya.dev"
                              className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                              LINKEDIN
                            </label>
                            <input
                              type="text"
                              value={formData.linkedin}
                              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                              placeholder="linkedin.com/in/priya"
                              className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                              GITHUB
                            </label>
                            <input
                              type="text"
                              value={formData.github}
                              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                              placeholder="github.com/priya"
                              className="w-full bg-[#14172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                      <span>Live Sync: Enabled</span>
                      <span className="text-violet-400">ATS Optimized</span>
                    </div>
                  </div>

                  {/* Right Column: Live Sheet Preview */}
                  <div className="lg:col-span-6 bg-[#16182a] p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      {/* Live Preview Header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                        <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                          LIVE PREVIEW
                        </span>
                        <div className="flex items-center gap-1.5 bg-[#101220] px-2.5 py-1 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                          <button onClick={() => setZoomLevel(Math.max(60, zoomLevel - 10))} className="hover:text-white">-</button>
                          <span>{zoomLevel}%</span>
                          <button onClick={() => setZoomLevel(Math.min(130, zoomLevel + 10))} className="hover:text-white">+</button>
                        </div>
                      </div>

                      {/* White Resume Sheet Mockup */}
                      <div
                        className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 text-slate-900 min-h-[420px] transition-all"
                        style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                      >
                        {isFormFilled ? (
                          <div>
                            <div className="border-b border-slate-200 pb-3 mb-3">
                              <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                                {formData.fullName || 'Priya Sharma'}
                              </h4>
                              <div className="text-xs font-semibold text-violet-700 mt-0.5">
                                {formData.jobTitle || 'Senior Software Engineer'}
                              </div>
                              <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 mt-2 font-mono">
                                {formData.email && <span>{formData.email}</span>}
                                {formData.phone && <span>• {formData.phone}</span>}
                                {formData.location && <span>• {formData.location}</span>}
                                {formData.website && <span>• {formData.website}</span>}
                              </div>
                            </div>

                            <div className="mb-3">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-1">
                                Professional Summary
                              </div>
                              <p className="text-[11px] text-slate-600 leading-relaxed">
                                {formData.summary}
                              </p>
                            </div>

                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-1">
                                Core Competencies
                              </div>
                              <div className="flex flex-wrap gap-1 text-[10px] text-slate-700 font-mono">
                                <span className="px-1.5 py-0.5 bg-slate-100 rounded">React</span>
                                <span className="px-1.5 py-0.5 bg-slate-100 rounded">Product Thinking</span>
                                <span className="px-1.5 py-0.5 bg-slate-100 rounded">UI/UX Systems</span>
                                <span className="px-1.5 py-0.5 bg-slate-100 rounded">AI Workflows</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Exact Blank State matching Screenshot */
                          <div className="flex flex-col items-center justify-center text-center py-20 px-4">
                            <div className="w-10 h-12 rounded border-2 border-slate-300 flex items-center justify-center text-slate-400 mb-3">
                              <FileText className="w-5 h-5" />
                            </div>
                            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                              Start filling in your details on the left and your resume will appear here!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-center pt-3 text-[10px] text-slate-500 font-mono">
                      Real-time interactive canvas preview
                    </div>
                  </div>

                </div>

              </div>
            ) : (
              /* View Mode 2: High Resolution Screenshot Display */
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#07101F] relative">
                <img
                  src="/assets/resumeforge-screenshot.png"
                  alt="ResumeForge Interface Screenshot"
                  className="w-full h-auto object-contain max-h-[640px] mx-auto"
                />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-200 bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                    Exact ResumeForge Builder Workspace UI
                  </span>
                  <span className="text-xs font-mono text-violet-300 bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                    Designed & Engineered by Manpreet Kaur
                  </span>
                </div>
              </div>
            )}

            {/* Resume Forge Story Recap */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
              <div>
                <strong className="text-white block mb-1">Where I Started Thinking Beyond Interfaces:</strong>
                <p className="text-slate-400 leading-relaxed">
                  Before building real-world solutions around campus workflows, Resume Forge served as an early sandbox for testing how AI can structure messy inputs into clean, ATS-compliant formats.
                </p>
              </div>
              <div>
                <strong className="text-white block mb-1">Key Takeaway:</strong>
                <p className="text-slate-400 leading-relaxed italic">
                  “It wasn't my most complex engineering project. But it was one of the projects that permanently changed how I thought about building with AI.”
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
