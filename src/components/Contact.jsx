import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  ArrowUpRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Icons } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    setTimeout(() => {
      setStatus('ready_to_send');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (err) {
        // silent fallback
      }

      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-cyan" />
              <span>08 // Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Have an idea? Let's build something meaningful.
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-sm md:text-right">
            Open for internships, mentorship conversations, and technical collaborations.
          </p>
        </div>

        {/* Split Contact Form & Direct Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connect & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-electric-violet uppercase tracking-wider">
                  Direct Communication
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  Let's Connect Directly
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Feel free to reach out regarding student internship opportunities, Python and backend projects, or just to say hello.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 rounded-2xl bg-midnight-950/80 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Status Info */}
              <div className="space-y-3 pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Based in {personal.location} (IST / UTC +5:30)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 ml-1 mr-1 animate-pulse" />
                  <span>Available for 2024–2025 Engineering Internships</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono transition-colors"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono transition-colors"
                >
                  <Icons.Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-400">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Aditi Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-electric-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-400">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="aditi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-electric-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-electric-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-electric-cyan transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Please fill in your name, email, and message.</span>
                  </div>
                )}

                {status === 'ready_to_send' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Opening your default email client with your message pre-filled...</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-sm font-semibold shadow-lg shadow-electric-violet/25 hover:shadow-electric-violet/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
