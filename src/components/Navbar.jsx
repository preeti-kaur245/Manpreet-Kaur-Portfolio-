import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'RIMTify', href: '#rimtify' },
    { name: 'Work', href: '#work' },
    { name: 'Experiments', href: '#experiments' },
    { name: 'Journey', href: '#journey' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'RAFTAAR', href: '#raftaar' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto rounded-full px-5 py-2.5 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'glass-panel border-white/10 bg-[#050812]/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center p-[1px] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#050812] rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">MK</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Manpreet Kaur
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider font-mono">PRODUCT & AI</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:scale-[1.02] active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#07101F]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl z-50">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/manpreet-kaur-221061370"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-cyan-400"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/preeti_.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-pink-400"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:preetistudiorimt@gmail.com"
                  className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-violet-400"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600"
              >
                Let's Build →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
