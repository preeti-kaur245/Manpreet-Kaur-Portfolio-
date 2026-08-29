import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight, 
  Mail, 
  Home, 
  Briefcase, 
  Compass, 
  Users, 
  Send,
  Code2,
  Cpu,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon, GithubIcon } from './SocialIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Core Editorial Android Menu Navigation Structure
  const mobileEditorialLinks = [
    {
      num: '01',
      name: 'HOME',
      desc: 'The introduction & vision',
      href: '#home',
      icon: Home,
      accent: 'from-cyan-500 to-blue-500',
      badge: 'Start'
    },
    {
      num: '02',
      name: 'WORK',
      desc: 'Things I’ve built & architected',
      href: '#work',
      icon: Briefcase,
      accent: 'from-blue-500 to-indigo-500',
      badge: 'Projects'
    },
    {
      num: '03',
      name: 'JOURNEY',
      desc: 'How I got here & milestones',
      href: '#journey',
      icon: Compass,
      accent: 'from-violet-500 to-purple-500',
      badge: 'Timeline'
    },
    {
      num: '04',
      name: 'RAFTAAR',
      desc: 'The multidisciplinary team I build with',
      href: '#raftaar',
      icon: Users,
      accent: 'from-pink-500 to-rose-500',
      badge: 'Founder'
    },
    {
      num: '05',
      name: 'CONTACT',
      desc: 'Let’s collaborate & create something',
      href: '#contact',
      icon: Send,
      accent: 'from-amber-500 to-cyan-500',
      badge: 'Connect'
    },
  ];

  // Desktop Links
  const desktopNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'RIMTify', href: '#rimtify' },
    { name: 'Work', href: '#work' },
    { name: 'AI Sandbox', href: '#experiments' },
    { name: 'Journey', href: '#journey' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'RAFTAAR', href: '#raftaar' },
    { name: 'Toolkit', href: '#toolkit' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['home', 'philosophy', 'rimtify', 'work', 'experiments', 'journey', 'leadership', 'raftaar', 'toolkit', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile full-screen sheet is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ======================================================== */}
      {/* TOP HEADER (DESKTOP & ANDROID MOBILE APP BAR) */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 py-3 transition-all duration-300">
        <nav
          className={`w-full max-w-6xl mx-auto rounded-full px-3.5 sm:px-5 py-2 transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? 'glass-panel border-white/10 bg-[#050812]/85 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl'
              : 'bg-[#050812]/40 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Brand Avatar & Identity */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group active:scale-95 transition-transform"
            aria-label="Manpreet Kaur Portfolio Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#050812] rounded-full flex items-center justify-center">
                <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  MK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Manpreet Kaur
              </span>
              <span className="text-[9px] text-cyan-400 font-mono tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI Product Design
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
            {desktopNavLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Trigger */}
          <div className="flex items-center gap-2">
            {/* Desktop Connect Button */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:scale-[1.02] active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Android Mobile Menu Trigger (48dp Touch Target) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Sheet"
              className="lg:hidden w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white flex items-center justify-center active:scale-90 transition-all shadow-md"
            >
              <Menu className="w-5 h-5 text-cyan-400" />
            </button>
          </div>
        </nav>
      </header>

      {/* ======================================================== */}
      {/* FULL-SCREEN ANDROID GLASSMORPHISM NAVIGATION SHEET */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] lg:hidden bg-[#030611]/95 backdrop-blur-3xl flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
          style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 24px) + 24px)' }}
        >
          {/* Top Bar inside sheet */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1.5px]">
                <div className="w-full h-full bg-[#050812] rounded-full flex items-center justify-center">
                  <span className="text-xs font-black text-cyan-400">MK</span>
                </div>
              </div>
              <div>
                <span className="text-sm font-bold text-white block">MANPREET KAUR</span>
                <span className="text-[10px] text-slate-400 font-mono">Mobile Navigation</span>
              </div>
            </div>

            {/* Close Button (48dp Touch Target) */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Sheet"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/15 text-slate-200 flex items-center justify-center active:scale-90 transition-transform"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Middle Editorial Menu List */}
          <div className="my-auto py-6 space-y-3">
            {mobileEditorialLinks.map((item, index) => {
              const Icon = item.icon;
              const isCurrent = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleMobileNavClick(item.href)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group active:scale-[0.98] ${
                    isCurrent
                      ? 'bg-white/[0.08] border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-sm font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.accent}`}>
                      {item.num}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors font-display">
                          {item.name}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Quick Contact & Socials Bar */}
          <div className="pt-4 border-t border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between gap-3">
              <a
                href="https://www.linkedin.com/in/manpreet-kaur-221061370"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-medium active:scale-95 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/preeti_.studio"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-pink-500/30 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-medium active:scale-95 transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href="mailto:preetistudiorimt@gmail.com"
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white flex items-center justify-center gap-2 text-xs font-bold active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

            <p className="text-center text-[10px] text-slate-300 font-mono">
              OBSERVE → QUESTION → DESIGN → ENGINEER → ITERATE
            </p>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ANDROID FLOATING BOTTOM QUICK DOCK (THUMB ZONE) */}
      {/* ======================================================== */}
      <div 
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden w-[90%] max-w-sm pointer-events-auto"
        style={{ bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))' }}
      >
        <div className="bg-[#071022]/90 backdrop-blur-2xl border border-white/15 rounded-full px-3 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex items-center justify-around">
          
          <a
            href="#home"
            aria-label="Home"
            className={`p-2 rounded-full transition-all active:scale-90 flex flex-col items-center gap-0.5 ${
              activeSection === 'home' ? 'text-cyan-400 bg-cyan-500/15' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="text-[9px] font-mono">Home</span>
          </a>

          <a
            href="#work"
            aria-label="Work"
            className={`p-2 rounded-full transition-all active:scale-90 flex flex-col items-center gap-0.5 ${
              activeSection === 'work' || activeSection === 'rimtify' ? 'text-cyan-400 bg-cyan-500/15' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-[9px] font-mono">Work</span>
          </a>

          <a
            href="#experiments"
            aria-label="AI Sandbox"
            className={`p-2 rounded-full transition-all active:scale-90 flex flex-col items-center gap-0.5 ${
              activeSection === 'experiments' ? 'text-violet-400 bg-violet-500/15' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span className="text-[9px] font-mono">AI Labs</span>
          </a>

          <a
            href="#raftaar"
            aria-label="Raftaar"
            className={`p-2 rounded-full transition-all active:scale-90 flex flex-col items-center gap-0.5 ${
              activeSection === 'raftaar' ? 'text-pink-400 bg-pink-500/15' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="text-[9px] font-mono">Raftaar</span>
          </a>

          <a
            href="#contact"
            aria-label="Contact"
            className={`p-2 rounded-full transition-all active:scale-90 flex flex-col items-center gap-0.5 ${
              activeSection === 'contact' ? 'text-emerald-400 bg-emerald-500/15' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Send className="w-4 h-4" />
            <span className="text-[9px] font-mono">Chat</span>
          </a>

        </div>
      </div>
    </>
  );
}
