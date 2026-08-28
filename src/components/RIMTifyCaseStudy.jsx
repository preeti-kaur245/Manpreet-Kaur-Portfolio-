import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  Layers, 
  Laptop,
  Check,
  X,
  Calendar,
  Search,
  BookOpen,
  FileText,
  User,
  LogOut,
  ChevronLeft,
  Edit3,
  Trash2,
  Save,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RIMTifyCaseStudy() {
  const [activeViewMode, setActiveViewMode] = useState('interactive'); // 'interactive' | 'screenshot'
  const [activeNav, setActiveNav] = useState('courses');
  const [activeTab, setActiveTab] = useState('attendance');
  const [selectedLecture, setSelectedLecture] = useState('L3');
  const [searchQuery, setSearchQuery] = useState('');
  const [lectureNote, setLectureNote] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Exact student list matching screenshot
  const [students, setStudents] = useState([
    { id: '1', name: 'STUDENT A', roll: 'RIMT000', status: 'PRESENT' },
    { id: '2', name: 'STUDENT B', roll: 'RIMT001', status: 'ABSENT' },
    { id: '3', name: 'STUDENT C', roll: 'RIMT003', status: 'ABSENT' },
    { id: '4', name: 'STUDENT D', roll: 'RIMT004', status: 'PRESENT' },
    { id: '5', name: 'STUDENT E', roll: 'RIMT005', status: 'PRESENT' },
  ]);

  const toggleStudentStatus = (id) => {
    setStudents((prev) =>
      prev.map((st) => {
        if (st.id === id) {
          const nextStatus = st.status === 'PRESENT' ? 'ABSENT' : 'PRESENT';
          return { ...st, status: nextStatus };
        }
        return st;
      })
    );
  };

  const presentCount = students.filter((s) => s.status === 'PRESENT').length;
  const absentCount = students.filter((s) => s.status === 'ABSENT').length;

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.roll.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSaveAttendance = () => {
    setSavedSuccess(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#3b82f6', '#10b981'],
    });
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <section id="rimtify" className="py-28 px-4 md:px-8 relative z-10 border-t border-white/[0.08] overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              01 / HERO CASE STUDY
            </span>
            <span className="text-xs font-mono text-slate-400">REAL-WORLD UNIVERSITY WORKFLOW → PRODUCT</span>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Faculty Workflow Re-Engineered</span>
          </div>
        </div>

        {/* Project Title Banner */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight uppercase font-display mb-4">
            RIMTify
          </h2>
          <p className="text-xl sm:text-2xl text-cyan-300 font-medium max-w-3xl">
            A small solution to a very real problem. Attendance app designed around the actual daily workflow of faculty members.
          </p>
        </div>

        {/* Story Section: Problem & Realization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Problem Card */}
          <div className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                THE PROBLEM
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                It wasn't really an attendance problem. <br />
                <span className="text-rose-300">It was a workflow problem.</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                During my time at university, I noticed faculty members spending a lot of effort managing attendance across sections. Updating attendance could become repetitive and exhausting.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                And sometimes, even after attendance was updated, it wasn't immediately easy to see what was happening or keep track of everything efficiently. It wasn't some massive technological problem—it was simply an everyday workflow that could be better.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Observed at RIMT University</span>
              <span className="text-xs text-rose-300 font-semibold">Repetitive & Clunky</span>
            </div>
          </div>

          {/* Realization & Idea Card */}
          <div className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#0B1220] to-[#07101F] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                THE IDEA
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                What if attendance could be <span className="text-cyan-400">radically simpler?</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                I didn't want to build an unnecessarily complicated university management system. I wanted to solve <strong>one small problem properly</strong>.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                RIMTify gives faculty quick 1-tap toggling, instant visual present/absent summary pills, lecture session tracking (L1-L8), real-time search, and clean record saving without friction.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Less repetitive work
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                More visibility
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                A simpler workflow
              </span>
            </div>
          </div>

        </div>

        {/* Prototype & Screenshot Showcase Frame */}
        <div className="glass-panel rounded-3xl border border-white/10 p-4 sm:p-6 lg:p-8 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Top Browser Bar & Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>rimtify.app / dbms / attendance</span>
              </div>
            </div>

            {/* Toggle Modes */}
            <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveViewMode('interactive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeViewMode === 'interactive'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive Prototype
              </button>
              <button
                onClick={() => setActiveViewMode('screenshot')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeViewMode === 'screenshot'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Original UI Screenshot
              </button>
            </div>
          </div>

          {/* View Mode 1: Exact Interactive Prototype matching Screenshot */}
          {activeViewMode === 'interactive' ? (
            <div className="rounded-2xl border border-white/10 bg-[#060B18] overflow-hidden flex flex-col md:flex-row min-h-[640px] shadow-2xl font-sans">
              
              {/* Left Sidebar */}
              <div className="w-full md:w-56 bg-[#040814] border-r border-white/10 p-4 flex flex-col justify-between">
                <div>
                  {/* Brand Header */}
                  <div className="flex items-center gap-2.5 mb-8 px-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                      💻
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white tracking-tight">Rimtify</div>
                      <div className="text-[10px] text-slate-400 font-mono">RIMT University</div>
                    </div>
                  </div>

                  {/* Nav Links */}
                  <div className="space-y-1">
                    {[
                      { id: 'dashboard', label: 'Dashboard', icon: Laptop },
                      { id: 'courses', label: 'Courses', icon: BookOpen },
                      { id: 'materials', label: 'Materials', icon: Layers },
                      { id: 'notes', label: 'Notes', icon: FileText },
                      { id: 'profile', label: 'Profile', icon: User },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isCoursesActive = item.id === 'courses';
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveNav(item.id)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                            isCoursesActive
                              ? 'bg-blue-600/20 text-cyan-300 border-l-2 border-cyan-400 font-semibold'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom User Card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      MK
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Manpreet Kaur</div>
                      <div className="text-[10px] text-slate-400">Associate Professor</div>
                    </div>
                  </div>
                  <button className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 transition-colors">
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Main Course Content Area */}
              <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between bg-[#060D1E]">
                <div>
                  
                  {/* Top Subject Header Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <button className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">💻 Dbms</span>
                          <span className="text-xs font-mono text-slate-400">123-3</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Sub-Tabs: Students | Attendance | History */}
                  <div className="flex items-center gap-6 border-b border-white/10 pb-3 mb-5 text-xs font-semibold">
                    <button
                      onClick={() => setActiveTab('students')}
                      className={`flex items-center gap-1.5 transition-colors ${
                        activeTab === 'students' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>Students</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('attendance')}
                      className={`flex items-center gap-1.5 pb-3 -mb-3 border-b-2 border-cyan-400 text-cyan-400 font-bold transition-colors`}
                    >
                      <Radio className="w-3.5 h-3.5" />
                      <span>Attendance</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('history')}
                      className={`flex items-center gap-1.5 transition-colors ${
                        activeTab === 'history' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>History</span>
                    </button>
                  </div>

                  {/* Search Bar */}
                  <div className="relative mb-4">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search student by name or roll no..."
                      className="w-full bg-[#081226] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Date & Lecture Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-4">
                    <div className="sm:col-span-10 p-3 rounded-xl bg-[#081226] border border-blue-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">DATE</div>
                        <div className="text-sm font-semibold text-white font-mono">08/28/2026</div>
                      </div>
                      <Calendar className="w-4 h-4 text-slate-400" />
                    </div>

                    <div className="sm:col-span-2 p-3 rounded-xl bg-[#081226] border border-blue-500/30 flex flex-col items-center justify-center text-center">
                      <div className="text-[9px] font-mono text-cyan-400 font-bold uppercase">LECTURE</div>
                      <div className="text-lg font-black text-cyan-300 font-mono">3</div>
                    </div>
                  </div>

                  {/* Lecture Topic Note */}
                  <div className="p-3 rounded-xl bg-[#081226] border border-white/10 mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={lectureNote}
                      onChange={(e) => setLectureNote(e.target.value)}
                      placeholder="Lecture note / topic covered (e.g. B-Trees & Indexing)..."
                      className="w-full bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  {/* Session Selector (L1 - L8) */}
                  <div className="mb-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      SELECT SESSION (1-8)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'].map((lec) => {
                        const isSelected = selectedLecture === lec;
                        return (
                          <button
                            key={lec}
                            onClick={() => setSelectedLecture(lec)}
                            className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                              isSelected
                                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] border border-cyan-400'
                                : 'bg-[#081226] border border-white/10 text-slate-400 hover:text-white'
                            }`}
                          >
                            <span>{lec}</span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute top-1 right-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Present / Absent Counters Pill */}
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-[#051C1C] border border-emerald-500/40 text-center">
                      <div className="text-xl font-black text-emerald-400 font-mono">{presentCount}</div>
                      <div className="text-[10px] font-bold text-emerald-300 font-mono tracking-wider">PRESENT</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#240D17] border border-rose-500/40 text-center">
                      <div className="text-xl font-black text-rose-400 font-mono">{absentCount}</div>
                      <div className="text-[10px] font-bold text-rose-300 font-mono tracking-wider">ABSENT</div>
                    </div>
                  </div>

                  <div className="text-[10px] text-center text-slate-500 mb-3 italic">
                    Tap any student row below to toggle status: Present / Absent
                  </div>

                  {/* Student List */}
                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                    {filteredStudents.map((st) => {
                      const isPresent = st.status === 'PRESENT';
                      return (
                        <div
                          key={st.id}
                          onClick={() => toggleStudentStatus(st.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            isPresent
                              ? 'bg-[#071F1F]/60 border-emerald-500/40 hover:bg-[#071F1F]'
                              : 'bg-[#260E18]/60 border-rose-500/40 hover:bg-[#260E18]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                isPresent ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
                              }`}
                            >
                              S
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">{st.name}</div>
                              <div className="text-[10px] font-mono text-slate-400">{st.roll}</div>
                            </div>
                          </div>

                          <div>
                            {isPresent ? (
                              <span className="px-3 py-1 rounded-lg text-[10px] font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                PRESENT
                              </span>
                            ) : (
                              <span className="px-3 py-1 rounded-lg text-[10px] font-bold font-mono bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                                <X className="w-3 h-3" />
                                ABSENT
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Save Attendance Action */}
                <div className="pt-4 mt-3 border-t border-white/10">
                  <button
                    onClick={handleSaveAttendance}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
                  >
                    <Save className="w-4 h-4" />
                    <span>{savedSuccess ? '✓ Attendance Saved Successfully!' : 'Save Attendance'}</span>
                  </button>
                </div>

              </div>

            </div>
          ) : (
            /* View Mode 2: High Resolution Screenshot Display */
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#07101F] relative">
              <img
                src="/assets/rimtify-screenshot.png"
                alt="RIMTify Faculty Interface Screenshot"
                className="w-full h-auto object-contain max-h-[640px] mx-auto"
              />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-200 bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  Exact RIMTify Attendance Session UI
                </span>
                <span className="text-xs font-mono text-cyan-300 bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  Designed & Engineered by Manpreet Kaur
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Feature List & Role Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Features Column */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Designed For The Person Actually Using It</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Subject-Wise Separation', desc: 'Instant access to courses (Dbms, OS, DSA) with dedicated section slots' },
                { title: 'Lecture Session Grid', desc: 'Fast 1-tap lecture slot selector (L1 through L8) with visual indicators' },
                { title: 'Interactive Attendance Toggling', desc: '1-tap Present / Absent toggling with immediate color-coded feedback' },
                { title: 'Live Counter Summary', desc: 'Real-time present and absent badges preventing miscounts' },
                { title: 'Student Search & Filter', desc: 'Find students instantly by name or roll number without manual scrolling' },
                { title: 'Simple Faculty Workflow', desc: 'Zero bloat, designed to save 15+ minutes every lecture period' },
              ].map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                  <div className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Role & Tech Column */}
          <div className="md:col-span-5 glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>My Role: End-to-End Execution</span>
              </h3>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40">
                  <span className="text-cyan-400 font-bold">Observed</span>
                  <span className="text-slate-400">Identified the friction</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40">
                  <span className="text-blue-400 font-bold">Designed</span>
                  <span className="text-slate-400">Simplified the workflow</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40">
                  <span className="text-indigo-400 font-bold">Prototyped</span>
                  <span className="text-slate-400">Designed the interface</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40">
                  <span className="text-violet-400 font-bold">Built</span>
                  <span className="text-slate-400">Developed the application</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40">
                  <span className="text-emerald-400 font-bold">Connected</span>
                  <span className="text-slate-400">Real-time cloud database</span>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'Firebase / Firestore', 'Appwrite', 'JavaScript', 'Tailwind CSS', 'AI-assisted'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* High-Impact Final Quote Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#07101F] to-violet-950/40 border border-cyan-500/30 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <span className="text-3xl text-cyan-400 font-serif leading-none block mb-2">“</span>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3">
              Sometimes innovation isn't about creating something nobody has seen before. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300">
                Sometimes it's about making something familiar work better.
              </span>
            </p>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">— Manpreet Kaur</span>
          </div>
        </div>

      </div>
    </section>
  );
}
