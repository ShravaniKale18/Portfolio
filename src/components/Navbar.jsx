import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

export const Navbar = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#education' },
    { label: 'Certificates Universe', href: '#certificates' },
    { label: 'Lab', href: '#lab' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'projects', 'education', 'certificates', 'lab', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet rounded-lg"
          aria-label="Shravani Kale - Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-violet to-electric-cyan p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-midnight-950 rounded-[11px] flex items-center justify-center font-display font-bold text-lg text-white">
              S<span className="text-electric-cyan">.</span>
            </div>
          </div>
          <div className="hidden sm:block text-left">
            <span className="block font-display font-semibold text-sm tracking-tight text-white group-hover:text-electric-cyan transition-colors">
              Shravani Kale
            </span>
            <span className="block text-[11px] font-mono text-slate-400">
              IT Engineer & Builder
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-midnight-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1 text-xs font-medium tracking-wide transition-all rounded-full ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full -z-10 shadow-sm border border-white/10" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Command Palette & Connect */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-all"
            title="Command Palette (Ctrl + K)"
          >
            <Terminal className="w-3.5 h-3.5 text-electric-cyan" />
            <span className="hidden sm:inline">Commands</span>
            <kbd className="hidden lg:inline bg-black/40 text-[10px] text-slate-400 px-1.5 py-0.5 rounded border border-white/10 ml-1">
              ⌘K
            </kbd>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-electric-violet to-electric-indigo text-white shadow-md shadow-electric-violet/20 hover:shadow-electric-violet/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-midnight-950/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-electric-violet text-white"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
