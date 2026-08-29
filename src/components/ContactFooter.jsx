import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Sparkles, 
  MessageSquare,
  ArrowUp
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Project Collaboration'
  });

  const email = 'preetistudiorimt@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/manpreet-kaur-221061370';
  const instagramUrl = 'https://www.instagram.com/preeti_.studio?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.9 },
      colors: ['#38bdf8', '#818cf8', '#c084fc']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#c084fc']
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-10 border-t border-white/[0.08] bg-[#03050a] pt-20 sm:pt-28 pb-16 px-4 sm:px-6 md:px-8">
      
      {/* Background Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 sm:mb-24 items-start">

          {/* Left Column: Vision & Social Connect */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INITIATE A CONVERSATION</span>
              </div>

              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display mb-4 sm:mb-6 leading-[1.05]">
                SEE A PROBLEM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                  WORTH SOLVING?
                </span>
              </h2>

              <div className="space-y-2.5 sm:space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                <p>Maybe it starts with an early idea.</p>
                <p>Maybe it's a frustrating workflow draining hours from your day.</p>
                <p>Maybe it's something that simply shouldn't be this complicated.</p>
                <p className="text-white font-semibold pt-1 sm:pt-2">Let's turn it into something better.</p>
              </div>
            </div>

            {/* Direct Connect Buttons (48dp Touch Targets) */}
            <div className="space-y-3 max-w-md">

              {/* Copy Email Button */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-cyan-500/30 transition-all gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-slate-400 font-mono">DIRECT INBOX</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate font-mono">{email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/20 text-slate-200 transition-colors flex items-center gap-1.5 shrink-0 active:scale-95"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn & Instagram Direct Links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all flex items-center justify-between group active:scale-95"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all flex items-center justify-between group active:scale-95"
                >
                  <div className="flex items-center gap-2">
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-semibold text-white">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Send Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Quick Inquiry
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Response within 24h
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you {formData.name}. I've received your note and will review your message shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '', subject: 'Project Collaboration' });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl text-xs font-mono bg-white/10 text-white hover:bg-white/20"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Manav / Sarah"
                        className="w-full px-4 py-3 min-h-[48px] rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 min-h-[48px] rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Topic / Focus</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 min-h-[48px] rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="AI Product Design">AI Product Design & Prototyping</option>
                      <option value="Project Collaboration">Web App / Frontend Engineering</option>
                      <option value="RAFTAAR Initiative">RAFTAAR Collective / Event Collaboration</option>
                      <option value="General Question">General Inquiry / Coffee Chat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Message / Context</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the workflow problem you're tackling, the product you're building, or how we can collaborate..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 min-h-[48px] rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Footer Section */}
        <div className="pt-8 sm:pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div className="text-white font-bold text-sm tracking-tight">
              MANPREET KAUR
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="text-[11px] text-slate-300">Product Design · AI · UX/UI · Engineering · Rapid Prototyping</div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              LinkedIn
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              Instagram
            </a>
            <a
              href="https://github.com/preeti-kaur245"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              GitHub
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors active:scale-90"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="text-center text-[11px] text-slate-600 font-mono mt-6 sm:mt-8">
          © {new Date().getFullYear()} Manpreet Kaur. Designing ideas. Building possibilities. Creating experiences.
        </div>

      </div>
    </footer>
  );
}
