import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Code2, 
  Brain, 
  Zap, 
  Lightbulb, 
  Users, 
  Target, 
  Layers, 
  Smartphone, 
  PenTool, 
  Layout, 
  Cpu, 
  Bot, 
  Mic, 
  Workflow, 
  Database, 
  Terminal, 
  Globe, 
  ShieldCheck, 
  Palette, 
  Video, 
  Megaphone, 
  MessageSquare, 
  Share2, 
  Calendar, 
  Compass,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  ArrowUpRight
} from 'lucide-react';

import {
  FigmaLogo,
  CanvaLogo,
  FigJamLogo,
  GeminiLogo,
  ChatGPTLogo,
  ClaudeLogo,
  OllamaLogo,
  ElevenLabsLogo,
  DalleLogo,
  MidjourneyLogo,
  ReactLogo,
  NextjsLogo,
  TailwindLogo,
  FirebaseLogo,
  AppwriteLogo,
  SupabaseLogo,
  PythonLogo,
  JavaScriptLogo,
  VSCodeLogo,
  GitLogo,
  GitHubLogo,
  MySQLLogo,
  PostmanLogo,
  AdobeExpressLogo,
  PremiereLogo,
  CapCutLogo,
  SQLLogo,
  AIAPILogo
} from './ToolLogos';

// Star Rating Component
function StarRating({ rating = 5, color = "text-violet-400" }) {
  return (
    <div className="flex items-center gap-0.5" title={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-[11px] transition-all hover:scale-125 ${
            star <= rating ? color : 'text-slate-700/60'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ToolkitMindset() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [activeStrength, setActiveStrength] = useState(null);

  // 6 Main Disciplines
  const disciplines = [
    {
      id: 'ai-design',
      num: '01',
      title: 'AI PRODUCT DESIGN',
      tagline: 'Turning real-world problems into usable digital products.',
      accent: 'violet',
      borderGlow: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
      badgeBg: 'bg-violet-600 text-white',
      starColor: 'text-violet-400',
      category: 'Design',
      items: [
        { name: 'UX/UI Design', rating: 5, icon: Layout },
        { name: 'Product Thinking', rating: 5, icon: Brain },
        { name: 'Problem Framing', rating: 5, icon: Target },
        { name: 'User Flows', rating: 5, icon: Workflow },
        { name: 'Interactive Prototyping', rating: 4, icon: Smartphone },
        { name: 'Product Architecture', rating: 4, icon: Layers },
        { name: 'Design Systems', rating: 4, icon: Compass },
        { name: 'Wireframing', rating: 4, icon: PenTool },
        { name: 'Interaction Design', rating: 4, icon: Sparkles },
        { name: 'Rapid Prototyping', rating: 5, icon: Zap },
      ],
      tools: [
        { name: 'Figma', Logo: FigmaLogo, desc: 'Interface Design & Systems' },
        { name: 'Canva Pro', Logo: CanvaLogo, desc: 'Visual Production' },
        { name: 'FigJam', Logo: FigJamLogo, desc: 'User Flows & Ideation' },
        { name: 'AI Design Tools', Logo: Sparkles, isLucide: true, color: 'text-violet-400', desc: 'Generative UI Workflows' },
      ]
    },
    {
      id: 'ai-intelligence',
      num: '02',
      title: 'AI & INTELLIGENCE',
      tagline: 'Building AI-powered experiences, workflows and intelligent features.',
      accent: 'cyan',
      borderGlow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
      badgeBg: 'bg-cyan-500 text-black font-semibold',
      starColor: 'text-cyan-400',
      category: 'AI',
      items: [
        { name: 'AI Product Development', rating: 5, icon: Cpu },
        { name: 'AI API Integration', rating: 4, icon: AIAPILogo, isCustomLogo: true },
        { name: 'Prompt Engineering', rating: 5, icon: MessageSquare },
        { name: 'AI-assisted Development', rating: 5, icon: Bot },
        { name: 'AI Automation', rating: 4, icon: Zap },
        { name: 'Conversational AI', rating: 4, icon: MessageSquare },
        { name: 'AI Prototyping', rating: 5, icon: Sparkles },
        { name: 'Voice AI', rating: 4, icon: Mic },
        { name: 'Local AI / LLM', rating: 3, icon: Terminal },
      ],
      tools: [
        { name: 'Gemini', Logo: GeminiLogo, desc: 'Multimodal Models & APIs' },
        { name: 'ChatGPT', Logo: ChatGPTLogo, desc: 'Reasoning & Orchestration' },
        { name: 'Claude', Logo: ClaudeLogo, desc: 'Deep Code & Complex Analysis' },
        { name: 'Ollama', Logo: OllamaLogo, desc: 'Local LLM Prototyping' },
        { name: 'ElevenLabs', Logo: ElevenLabsLogo, desc: 'Voice Synthesis' },
        { name: 'DALL·E', Logo: DalleLogo, desc: 'Visual Asset Generation' },
        { name: 'Midjourney', Logo: MidjourneyLogo, desc: 'Creative Exploration' },
        { name: 'AI APIs', Logo: AIAPILogo, desc: 'REST & Stream Integrations' },
      ]
    },
    {
      id: 'frontend-eng',
      num: '03',
      title: 'FRONTEND & PRODUCT ENGINEERING',
      tagline: 'Turning product concepts into functional experiences.',
      accent: 'blue',
      borderGlow: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
      badgeBg: 'bg-blue-600 text-white',
      starColor: 'text-blue-400',
      category: 'Engineering',
      items: [
        { name: 'React', rating: 4, icon: ReactLogo, isCustomLogo: true },
        { name: 'Next.js', rating: 3, icon: NextjsLogo, isCustomLogo: true },
        { name: 'JavaScript (ES6+)', rating: 4, icon: JavaScriptLogo, isCustomLogo: true },
        { name: 'HTML5', rating: 5, icon: Globe },
        { name: 'CSS3', rating: 5, icon: Palette },
        { name: 'Tailwind CSS', rating: 4, icon: TailwindLogo, isCustomLogo: true },
        { name: 'Responsive Design', rating: 4, icon: Smartphone },
        { name: 'REST API Integration', rating: 3, icon: AIAPILogo, isCustomLogo: true },
        { name: 'Firebase / Firestore', rating: 4, icon: FirebaseLogo, isCustomLogo: true },
        { name: 'Appwrite', rating: 4, icon: AppwriteLogo, isCustomLogo: true },
        { name: 'Supabase', rating: 3, icon: SupabaseLogo, isCustomLogo: true },
        { name: 'SQL', rating: 4, icon: SQLLogo, isCustomLogo: true },
      ],
      tools: [
        { name: 'React', Logo: ReactLogo, desc: 'Component Architecture' },
        { name: 'Next.js', Logo: NextjsLogo, desc: 'SSR & App Router' },
        { name: 'Tailwind', Logo: TailwindLogo, desc: 'Modern Utility Styling' },
        { name: 'Firebase', Logo: FirebaseLogo, desc: 'Auth & NoSQL Realtime' },
        { name: 'Appwrite', Logo: AppwriteLogo, desc: 'Backend Services' },
        { name: 'Supabase', Logo: SupabaseLogo, desc: 'PostgreSQL & Edge Functions' },
        { name: 'SQL', Logo: SQLLogo, desc: 'Relational Database Queries' },
        { name: 'Postman', Logo: PostmanLogo, desc: 'API Debugging' },
      ]
    },
    {
      id: 'programming-core',
      num: '04',
      title: 'PROGRAMMING CORE',
      tagline: 'The technical foundation behind how I think and build.',
      accent: 'emerald',
      borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
      badgeBg: 'bg-emerald-600 text-white',
      starColor: 'text-emerald-400',
      category: 'Core',
      items: [
        { name: 'Python', rating: 4, icon: PythonLogo, isCustomLogo: true },
        { name: 'C', rating: 4, icon: Code2 },
        { name: 'C++', rating: 4, icon: Code2 },
        { name: 'JavaScript', rating: 4, icon: JavaScriptLogo, isCustomLogo: true },
        { name: 'HTML', rating: 5, icon: Globe },
        { name: 'CSS', rating: 5, icon: Palette },
        { name: 'SQL', rating: 4, icon: SQLLogo, isCustomLogo: true },
        { name: 'Data Structures & Algorithms', rating: 3, icon: Layers },
        { name: 'OOP Concepts', rating: 3, icon: Brain },
        { name: 'Problem Solving', rating: 4, icon: Target },
        { name: 'Database Fundamentals', rating: 4, icon: Database },
        { name: 'REST APIs', rating: 3, icon: AIAPILogo, isCustomLogo: true },
        { name: 'Git & GitHub', rating: 4, icon: GitLogo, isCustomLogo: true },
        { name: 'Debugging', rating: 4, icon: ShieldCheck },
      ],
      tools: [
        { name: 'VS Code', Logo: VSCodeLogo, desc: 'Primary IDE' },
        { name: 'Git', Logo: GitLogo, desc: 'Version Control' },
        { name: 'GitHub', Logo: GitHubLogo, desc: 'Repositories & CI/CD' },
        { name: 'MySQL', Logo: MySQLLogo, desc: 'Relational Database' },
        { name: 'Postman', Logo: PostmanLogo, desc: 'API Testing' },
      ]
    },
    {
      id: 'visual-brand',
      num: '05',
      title: 'VISUAL & BRAND DESIGN',
      tagline: 'The visual layer that helps me communicate ideas beautifully.',
      accent: 'pink',
      borderGlow: 'hover:border-pink-500/50 hover:shadow-pink-500/10',
      badgeBg: 'bg-pink-600 text-white',
      starColor: 'text-pink-400',
      category: 'Creative',
      items: [
        { name: 'Visual Design', rating: 4, icon: Palette },
        { name: 'Brand Identity', rating: 4, icon: Sparkles },
        { name: 'Presentation Design', rating: 5, icon: Layout },
        { name: 'Social Media Design', rating: 5, icon: Share2 },
        { name: 'Editorial Design', rating: 4, icon: PenTool },
        { name: 'Creative Direction', rating: 4, icon: Compass },
        { name: 'Visual Storytelling', rating: 5, icon: Sparkles },
        { name: 'Design for Events', rating: 5, icon: Calendar },
      ],
      tools: [
        { name: 'Figma', Logo: FigmaLogo, desc: 'Vector & UI Design' },
        { name: 'Canva Pro', Logo: CanvaLogo, desc: 'Marketing & Brand Assets' },
        { name: 'Adobe Express', Logo: AdobeExpressLogo, desc: 'Rapid Creative Layouts' },
      ]
    },
    {
      id: 'content-experience',
      num: '06',
      title: 'CONTENT & EXPERIENCE',
      tagline: 'Creating communication and experiences beyond the UI.',
      accent: 'amber',
      borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
      badgeBg: 'bg-amber-500 text-black font-semibold',
      starColor: 'text-amber-400',
      category: 'Experience',
      items: [
        { name: 'Content Strategy', rating: 3, icon: MessageSquare },
        { name: 'Social Media', rating: 4, icon: Share2 },
        { name: 'Creative Campaigns', rating: 4, icon: Megaphone },
        { name: 'Event Campaigns', rating: 5, icon: Calendar },
        { name: 'Event Management', rating: 5, icon: Users },
        { name: 'Stage Direction', rating: 4, icon: Video },
        { name: 'Public Speaking', rating: 4, icon: Mic },
        { name: 'Anchoring', rating: 5, icon: Mic },
        { name: 'Anchoring Scripts', rating: 5, icon: PenTool },
        { name: 'Team Coordination', rating: 5, icon: Users },
      ],
      tools: [
        { name: 'CapCut', Logo: CapCutLogo, desc: 'Short-form Video Editing' },
        { name: 'Premiere Pro', Logo: PremiereLogo, desc: 'Video Production' },
        { name: 'Canva', Logo: CanvaLogo, desc: 'Visual Collateral' },
        { name: 'ChatGPT', Logo: ChatGPTLogo, desc: 'Scripting & Narrative Strategy' },
      ]
    },
  ];

  // Filter categories
  const tabs = [
    { id: 'all', label: 'All Capabilities', count: 6 },
    { id: 'ai-design', label: 'AI Product Design', count: 10 },
    { id: 'ai-intelligence', label: 'AI & Intelligence', count: 9 },
    { id: 'frontend-eng', label: 'Frontend Engineering', count: 12 },
    { id: 'programming-core', label: 'Programming Core', count: 14 },
    { id: 'visual-brand', label: 'Visual & Brand', count: 8 },
    { id: 'content-experience', label: 'Content & Experience', count: 10 },
  ];

  // Core Stack Tools
  const coreStack = [
    { name: 'Figma', Logo: FigmaLogo, rating: 5, category: 'Design Systems' },
    { name: 'React', Logo: ReactLogo, rating: 4, category: 'Frontend' },
    { name: 'JavaScript', Logo: JavaScriptLogo, rating: 4, category: 'Language' },
    { name: 'Python', Logo: PythonLogo, rating: 4, category: 'AI & Scripting' },
    { name: 'Firebase', Logo: FirebaseLogo, rating: 4, category: 'Cloud Backend' },
    { name: 'Appwrite', Logo: AppwriteLogo, rating: 4, category: 'BaaS' },
    { name: 'Gemini', Logo: GeminiLogo, rating: 5, category: 'AI Intelligence' },
    { name: 'ChatGPT', Logo: ChatGPTLogo, rating: 5, category: 'AI Co-pilot' },
    { name: 'Claude', Logo: ClaudeLogo, rating: 4, category: 'Analysis' },
    { name: 'GitHub', Logo: GitHubLogo, rating: 4, category: 'Version Control' },
  ];

  // Exploring Tools
  const exploringStack = [
    { name: 'Ollama', Logo: OllamaLogo, rating: 3, category: 'Local LLMs' },
    { name: 'Next.js', Logo: NextjsLogo, rating: 3, category: 'Fullstack' },
    { name: 'Supabase', Logo: SupabaseLogo, rating: 3, category: 'Postgres BaaS' },
    { name: 'ElevenLabs', Logo: ElevenLabsLogo, rating: 4, category: 'Voice Synthesis' },
    { name: 'DALL·E', Logo: DalleLogo, rating: 4, category: 'Image Gen' },
    { name: 'AI APIs', Logo: AIAPILogo, rating: 4, category: 'Agentic Workflows' },
  ];

  // Filtered Disciplines calculation
  const filteredDisciplines = useMemo(() => {
    return disciplines
      .filter((d) => activeTab === 'all' || d.id === activeTab)
      .map((d) => {
        let matchingItems = d.items;
        
        if (minRating > 0) {
          matchingItems = matchingItems.filter(item => item.rating >= minRating);
        }

        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const toolMatches = d.tools.some(t => t.name.toLowerCase().includes(query));
          if (!toolMatches) {
            matchingItems = matchingItems.filter(item => 
              item.name.toLowerCase().includes(query)
            );
          }
        }

        return {
          ...d,
          filteredItems: matchingItems
        };
      })
      .filter((d) => {
        if (!searchQuery.trim() && minRating === 0) return true;
        const query = searchQuery.toLowerCase();
        const matchesCategory = d.title.toLowerCase().includes(query) || d.tagline.toLowerCase().includes(query);
        const matchesTools = d.tools.some(t => t.name.toLowerCase().includes(query));
        return matchesCategory || matchesTools || d.filteredItems.length > 0;
      });
  }, [activeTab, searchQuery, minRating]);

  return (
    <section id="toolkit" className="py-20 px-3 sm:px-6 lg:px-8 relative z-10">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Container Dashboard */}
      <div className="max-w-[1480px] mx-auto bg-[#060b18]/95 border border-white/[0.08] rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-2xl shadow-black/80 backdrop-blur-2xl relative overflow-hidden">
        
        {/* Top Gradient Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        {/* ======================================================== */}
        {/* 1. CLEAN PROFESSIONAL HEADER & INTERACTIVE TOOLBAR */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08] mb-8">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                MY TOOLKIT & TECHNICAL EXPERTISE
              </span>
              <div className="h-[1px] w-8 bg-cyan-500/30" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Capabilities, Systems & Arsenal
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-light mt-1">
              Structured across AI design, intelligent agents, engineering fundamentals, and media experiences.
            </p>
          </div>

          {/* Interactive Search & Rating Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tools or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Proficiency Filter */}
            <div className="flex items-center gap-1 bg-black/40 border border-white/10 p-1 rounded-xl text-xs font-mono">
              <button
                onClick={() => setMinRating(0)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  minRating === 0 ? 'bg-white/10 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setMinRating(4)}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  minRating === 4 ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-violet-400">★</span> 4+
              </button>
              <button
                onClick={() => setMinRating(5)}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  minRating === 5 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-cyan-400">★</span> 5 Only
              </button>
            </div>
          </div>

        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-7 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/40 scale-[1.02]'
                    : 'bg-black/30 border border-white/5 text-slate-300 hover:text-white hover:border-white/15'
                }`}
              >
                <span>{tab.label}</span>
                {tab.id === 'all' && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-mono">
                    6
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 2. THE 6 CAPABILITY & DISCIPLINE PANELS */}
        {/* ======================================================== */}
        <div className={`grid gap-4 mb-8 ${
          activeTab === 'all' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
        }`}>
          {filteredDisciplines.map((d) => (
            <div
              key={d.id}
              className={`bg-[#080f22]/85 rounded-2xl border border-white/[0.07] p-4 flex flex-col justify-between transition-all duration-300 hover:bg-[#0c1630]/95 ${d.borderGlow} hover:-translate-y-1 shadow-lg shadow-black/40 group`}
            >
              <div>
                {/* Discipline Header Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${d.badgeBg}`}>
                    {d.num}
                  </span>
                  <h3 className="text-xs font-bold text-white tracking-tight uppercase">
                    {d.title}
                  </h3>
                </div>

                {/* Subtitle Description */}
                <p className="text-[11px] text-slate-400 leading-snug mb-3.5 h-8 line-clamp-2">
                  {d.tagline}
                </p>

                {/* Skill List with Star Ratings */}
                <div className="space-y-1.5 mb-4">
                  {(d.filteredItems || d.items).map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center justify-between gap-1 text-[11px] py-0.5 group/item"
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          {item.isCustomLogo ? (
                            <ItemIcon className="w-3.5 h-3.5 shrink-0" />
                          ) : (
                            <ItemIcon className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-white shrink-0 transition-colors" />
                          )}
                          <span className="text-slate-300 font-medium truncate group-hover/item:text-white transition-colors text-[11px]">
                            {item.name}
                          </span>
                        </div>
                        <StarRating rating={item.rating} color={d.starColor} />
                      </div>
                    );
                  })}
                  {(d.filteredItems || d.items).length === 0 && (
                    <div className="text-[11px] text-slate-400 italic py-4 text-center">
                      No matching skills found
                    </div>
                  )}
                </div>
              </div>

              {/* Tools Tray */}
              <div className="pt-3 border-t border-white/[0.06] mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                    TOOLS USED
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    {d.tools.length} Tools
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 items-center">
                  {d.tools.map((t) => {
                    const ToolLogo = t.Logo;
                    return (
                      <div
                        key={t.name}
                        className="p-1.5 rounded-lg bg-black/40 border border-white/5 hover:border-white/25 hover:bg-white/10 transition-all flex items-center justify-center cursor-default group/tool relative"
                        title={`${t.name} — ${t.desc}`}
                      >
                        {t.isLucide ? (
                          <ToolLogo className={`w-3.5 h-3.5 ${t.color || 'text-white'}`} />
                        ) : (
                          <ToolLogo className="w-3.5 h-3.5" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* 3. CORE STACK & EXPLORING SANDBOX (FOCUSED & INTERACTIVE) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Core Daily Drivers (7 cols) */}
          <div className="lg:col-span-7 bg-[#080f22]/90 rounded-2xl border border-white/[0.07] p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                    CORE DAILY ARSENAL
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Production-tested stack used daily across design & code
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                10 Core Tools
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {coreStack.map((tool) => {
                const ToolLogo = tool.Logo;
                return (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-default"
                  >
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ToolLogo className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-white block group-hover:text-cyan-300 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[9px] text-slate-400 block font-mono">
                        {tool.category}
                      </span>
                    </div>
                    <StarRating rating={tool.rating} color="text-cyan-400" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Exploring & Expanding Sandbox (5 cols) */}
          <div className="lg:col-span-5 bg-[#080f22]/90 rounded-2xl border border-white/[0.07] p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                    EXPLORING & EXPERIMENTAL
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Emerging technologies & active sandbox tools
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                Active Sandbox
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {exploringStack.map((tool) => {
                const ToolLogo = tool.Logo;
                return (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-default"
                  >
                    <div className="w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ToolLogo className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-white block group-hover:text-violet-300 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[9px] text-slate-400 block font-mono">
                        {tool.category}
                      </span>
                    </div>
                    <StarRating rating={tool.rating} color="text-violet-400" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
