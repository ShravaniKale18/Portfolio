import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior});
  };

  return (
    <footer className="border-t border-white/10 bg-midnight-950/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Monogram Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-violet to-electric-cyan p-[1px]">
              <div className="w-full h-full bg-midnight-950 rounded-[7px] flex items-center justify-center font-display font-bold text-sm text-white">
                S
              </div>
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-white">{personal.name}</p>
              <p className="text-[11px] font-mono text-slate-400">{personal.title}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-electric-cyan transition-colors p-2 rounded-lg bg-white/5 border border-white/10"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Designed & built with curiosity & precision</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
