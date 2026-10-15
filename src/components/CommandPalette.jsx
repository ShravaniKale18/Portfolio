import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  FileText, 
  Mail, 
  Code2, 
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import { Icons } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'sec-about',
      title: 'Navigate to About Me',
      subtitle: 'Background & why I chose Information Technology',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-electric-violet" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-skills',
      title: 'Explore Skill Matrix',
      subtitle: 'Python, C++, Web, Backend & Core CS Concepts',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4 text-electric-cyan" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-projects',
      title: 'View Featured Projects',
      subtitle: 'PhishGuard, GitHub RAG Assistant, Multi-Agent Research, and ML systems',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-education',
      title: 'Academic Milestones & Education',
      subtitle: 'Third-Year IT Engineering degree journey',
      category: 'Navigation',
      icon: <BookOpen className="w-4 h-4 text-amber-400" />,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-certs',
      title: 'Certifications Universe',
      subtitle: 'Interactive constellation map of verified credentials',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-purple-400" />,
      action: () => {
        document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'link-github',
      title: 'Visit GitHub Profile',
      subtitle: PORTFOLIO_DATA.personal.githubUrl,
      category: 'External',
      icon: <Icons.Github className="w-4 h-4 text-white" />,
      action: () => {
        window.open(PORTFOLIO_DATA.personal.githubUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'link-linkedin',
      title: 'Connect on LinkedIn',
      subtitle: PORTFOLIO_DATA.personal.linkedinUrl,
      category: 'External',
      icon: <Icons.Linkedin className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open(PORTFOLIO_DATA.personal.linkedinUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'act-email',
      title: 'Copy Email Address',
      subtitle: PORTFOLIO_DATA.personal.email,
      category: 'Action',
      icon: <Mail className="w-4 h-4 text-electric-cyan" />,
      action: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
        alert(`Email (${PORTFOLIO_DATA.personal.email}) copied to clipboard!`);
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-midnight-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Type a command, section name, or link..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <kbd className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No results found for "{search}"
            </div>
          ) : (
            filteredActions.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-black/30 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-electric-cyan group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2.5 bg-black/30 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Navigate using Quick Actions</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
