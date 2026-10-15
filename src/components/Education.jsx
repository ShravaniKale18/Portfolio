import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Compass, 
  Layers, 
  Cpu, 
  Terminal, 
  Brain,
  Code2,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/**
 * Academic Journey Timeline Component
 * A premium, futuristic editorial timeline with constellation-inspired backdrop,
 * asymmetric visual hierarchy (B.Tech hero vs. foundational Diploma),
 * glowing nodes, interactive expandable coursework, and full keyboard accessibility.
 */
export const Education = () => {
  const { education } = PORTFOLIO_DATA;

  // Track expanded state for coursework per milestone
  const [expandedCards, setExpandedCards] = useState({
    0: true,  // B.Tech expanded by default for immediate rich content visibility
    1: false  // Diploma collapsed by default for elegant asymmetric balance
  });

  const [activeHoverNode, setActiveHoverNode] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Subtle Constellation & Atmospheric Glow Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Soft radial nebula blooms */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-electric-violet/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-electric-cyan/10 blur-[140px] rounded-full" />
        
        {/* Constellation SVG Grid with fine connecting lines and glowing stars */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-35" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="timelineConstellationLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background constellation trajectory lines */}
          <path
            d="M 120 180 L 260 280 L 420 220 L 580 340 L 780 260 L 960 380 L 1120 300"
            fill="none"
            stroke="url(#timelineConstellationLine)"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <path
            d="M 260 280 L 320 480 L 520 540 L 720 490 L 880 620"
            fill="none"
            stroke="url(#timelineConstellationLine)"
            strokeWidth="0.6"
            strokeDasharray="2 4"
          />

          {/* Ambient constellation star nodes */}
          {[
            { cx: 120, cy: 180, r: 1.8 },
            { cx: 260, cy: 280, r: 2.5 },
            { cx: 420, cy: 220, r: 1.6 },
            { cx: 580, cy: 340, r: 2.2 },
            { cx: 780, cy: 260, r: 1.8 },
            { cx: 960, cy: 380, r: 2.6 },
            { cx: 1120, cy: 300, r: 2.0 },
            { cx: 320, cy: 480, r: 1.5 },
            { cx: 520, cy: 540, r: 2.4 },
            { cx: 720, cy: 490, r: 1.7 },
            { cx: 880, cy: 620, r: 2.2 },
          ].map((star, i) => (
            <g key={i}>
              <circle cx={star.cx} cy={star.cy} r={star.r * 2.8} fill="url(#starGlow)" />
              <circle cx={star.cx} cy={star.cy} r={star.r} fill="#e2e8f0" />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2.5">
              <span className="w-8 h-[1px] bg-electric-cyan" />
              <span>04 // ACADEMIC EXPEDITION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Academic Journey & Milestones
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2 max-w-xl">
              Foundational computer engineering evolving into advanced algorithmic problem solving and AI engineering.
            </p>
          </div>

          {/* Quick status summary chip */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-midnight-950/80 border border-white/10 flex items-center gap-3 text-xs font-mono shadow-inner">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-cyan" />
              </span>
              <span className="text-slate-300">Third Year B.Tech • CGPA 8.98</span>
            </div>
          </div>
        </div>

        {/* Central / Asymmetric Timeline Container */}
        <div className="relative">
          
          {/* Glowing vertical trajectory spine */}
          <div 
            className="absolute left-4 sm:left-8 top-3 bottom-8 w-[2px] bg-gradient-to-b from-electric-cyan via-electric-violet/60 to-transparent" 
            aria-hidden="true"
          />

          <div className="space-y-16 sm:space-y-20 ml-4 sm:ml-8 pl-8 sm:pl-12">
            
            {/* MILESTONE 1: B.TECH (PRIMARY HERO MILESTONE) */}
            {education[0] && (
              <div 
                className="relative group transition-all duration-300"
                onMouseEnter={() => setActiveHoverNode(0)}
                onMouseLeave={() => setActiveHoverNode(null)}
              >
                {/* Glowing Milestone Orbital Node */}
                <div 
                  className="absolute -left-[41px] sm:-left-[57px] top-6 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {/* Orbit pulse rings */}
                  <div className="w-8 h-8 rounded-full bg-electric-cyan/20 animate-ping absolute" />
                  <div className="w-6 h-6 rounded-full border border-electric-cyan/60 bg-midnight-950 shadow-lg shadow-electric-cyan/40 flex items-center justify-center relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-electric-cyan shadow-sm shadow-electric-cyan" />
                  </div>
                </div>

                {/* Primary B.Tech Milestone Card - Rich Editorial Layout */}
                <article 
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden relative glass-panel ${
                    activeHoverNode === 0 
                      ? 'border-electric-cyan/50 bg-midnight-900/90 shadow-2xl shadow-electric-cyan/10 translate-y-[-2px]' 
                      : 'border-white/15 bg-midnight-900/70 hover:border-white/25 shadow-xl'
                  }`}
                  aria-labelledby="btech-degree-heading"
                >
                  {/* Ambient top accent border */}
                  <div className="h-1 w-full bg-gradient-to-r from-electric-cyan via-electric-indigo to-electric-violet" />

                  <div className="p-6 sm:p-10 space-y-8">
                    
                    {/* Header Row: Timeline, Current Badge & Status */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-cyan/15 text-electric-cyan font-semibold border border-electric-cyan/30 shadow-sm shadow-electric-cyan/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            CURRENT MILESTONE
                          </span>
                          
                          <span className="inline-flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            {education[0].yearRange}
                          </span>
                          
                          <span className="text-slate-600 hidden sm:inline">•</span>
                          <span className="text-slate-400">{education[0].currentYear}</span>
                        </div>

                        <h3 
                          id="btech-degree-heading"
                          className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight"
                        >
                          {education[0].degree}
                        </h3>

                        <div className="text-sm sm:text-base font-medium text-electric-cyan flex items-center gap-2">
                          <span>{education[0].field}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed flex items-start gap-1.5">
                          <span className="text-slate-500 font-mono text-xs uppercase tracking-wider">Institution:</span>
                          <span className="text-slate-200">{education[0].institution}</span>
                        </p>
                      </div>

                      {/* Primary Grade Highlight Badge */}
                      <div className="flex flex-col sm:items-end">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-electric-cyan/15 to-transparent border border-electric-cyan/30 text-center sm:text-right shadow-lg">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-electric-cyan block font-semibold">
                            ACADEMIC STANDING
                          </span>
                          <span className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5 block tracking-tight">
                            CGPA: 8.98 <span className="text-xs font-mono text-slate-400 font-normal">/ 10</span>
                          </span>
                          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 justify-center sm:justify-end mt-1">
                            <CheckCircle2 className="w-3 h-3" />
                            First Class with Distinction
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Academic Highlights & Research Focus Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      {education[0].highlights.map((highlight, hIdx) => {
                        const icons = [
                          <Award className="w-4 h-4 text-electric-cyan" />,
                          <Code2 className="w-4 h-4 text-electric-violet" />,
                          <Brain className="w-4 h-4 text-emerald-400" />
                        ];
                        const labels = [
                          'Academic Standing',
                          'Competitive Coding',
                          'Research & AI Focus'
                        ];

                        return (
                          <div 
                            key={hIdx} 
                            className="p-4 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-2 flex flex-col justify-between"
                          >
                            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                              <span className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                                {icons[hIdx % icons.length]}
                              </span>
                              <span className="text-[11px] uppercase tracking-wider font-medium text-slate-300">
                                {labels[hIdx % labels.length]}
                              </span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-light">
                              {highlight}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Coursework Expandable Matrix */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-electric-cyan" />
                          <h4 className="text-xs sm:text-sm font-mono text-white font-semibold uppercase tracking-wider">
                            Curriculum & Core Computer Science Coursework
                          </h4>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleExpand(0)}
                          aria-expanded={expandedCards[0]}
                          aria-controls="btech-coursework-container"
                          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-electric-cyan hover:text-white transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-electric-cyan"
                        >
                          <span>{expandedCards[0] ? 'Compact View' : `View All (${education[0].coursework.length})`}</span>
                          {expandedCards[0] ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Coursework Tags */}
                      <div 
                        id="btech-coursework-container"
                        className="transition-all duration-300"
                      >
                        <div className="flex flex-wrap gap-2">
                          {(expandedCards[0] 
                            ? education[0].coursework 
                            : education[0].coursework.slice(0, 4)
                          ).map((course) => (
                            <span
                              key={course}
                              className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-midnight-950/90 text-slate-200 border border-white/10 hover:border-electric-cyan/40 hover:text-white transition-colors flex items-center gap-1.5 shadow-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                              {course}
                            </span>
                          ))}
                          {!expandedCards[0] && education[0].coursework.length > 4 && (
                            <button
                              type="button"
                              onClick={() => toggleExpand(0)}
                              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20 hover:bg-electric-cyan/20 transition-colors"
                            >
                              +{education[0].coursework.length - 4} more subjects
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </article>
              </div>
            )}

            {/* MILESTONE 2: DIPLOMA (COMPLEMENTARY FOUNDATIONAL MILESTONE) */}
            {education[1] && (
              <div 
                className="relative group transition-all duration-300"
                onMouseEnter={() => setActiveHoverNode(1)}
                onMouseLeave={() => setActiveHoverNode(null)}
              >
                {/* Milestone Orbital Node (Refined, complementary) */}
                <div 
                  className="absolute -left-[39px] sm:-left-[55px] top-6 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-5 h-5 rounded-full border border-electric-violet/50 bg-midnight-950 shadow-md shadow-electric-violet/30 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-electric-violet" />
                  </div>
                </div>

                {/* Foundational Diploma Card - Refined & Asymmetric Complement */}
                <article 
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden relative glass-panel ${
                    activeHoverNode === 1 
                      ? 'border-electric-violet/50 bg-midnight-900/90 shadow-xl shadow-electric-violet/10 translate-y-[-2px]' 
                      : 'border-white/10 bg-midnight-900/50 hover:border-white/20'
                  }`}
                  aria-labelledby="diploma-degree-heading"
                >
                  <div className="h-0.5 w-full bg-gradient-to-r from-electric-violet/70 to-transparent" />

                  <div className="p-6 sm:p-8 space-y-6">
                    
                    {/* Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-electric-violet/15 text-electric-violet font-medium border border-electric-violet/30">
                            FOUNDATIONAL MILESTONE
                          </span>
                          <span className="text-slate-400">
                            {education[1].yearRange}
                          </span>
                          <span className="text-slate-600 hidden sm:inline">•</span>
                          <span className="text-emerald-400 font-medium">Completed</span>
                        </div>

                        <h3 
                          id="diploma-degree-heading"
                          className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight"
                        >
                          {education[1].degree}
                        </h3>

                        <p className="text-sm text-slate-300 font-medium">
                          {education[1].field}
                        </p>

                        <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mr-1.5">Institution:</span>
                          {education[1].institution}
                        </p>
                      </div>

                      {/* Grade Badge */}
                      <div className="p-3.5 rounded-2xl bg-midnight-950/80 border border-white/10 text-left sm:text-right">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                          FINAL MERIT
                        </span>
                        <span className="text-lg sm:text-xl font-display font-bold text-emerald-400 mt-0.5 block">
                          93.65%
                        </span>
                        <span className="text-[10px] font-mono text-slate-300">
                          Distinction Standing
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    {education[1].highlights && education[1].highlights.length > 0 && (
                      <div className="p-4 rounded-2xl bg-midnight-950/50 border border-white/5 space-y-2">
                        {education[1].highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric-violet shrink-0 mt-0.5" />
                            <span className="font-light">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Expandable Coursework */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-electric-violet" />
                          Core Technical Foundations
                        </h4>

                        <button
                          type="button"
                          onClick={() => toggleExpand(1)}
                          aria-expanded={expandedCards[1]}
                          aria-controls="diploma-coursework-container"
                          className="text-xs font-mono text-electric-violet hover:text-white flex items-center gap-1 transition-colors focus:outline-none focus:underline"
                        >
                          <span>{expandedCards[1] ? 'Show Less' : `Show Subjects (${education[1].coursework.length})`}</span>
                          {expandedCards[1] ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <div 
                        id="diploma-coursework-container"
                        className="transition-all duration-300"
                      >
                        <div className="flex flex-wrap gap-2">
                          {(expandedCards[1] 
                            ? education[1].coursework 
                            : education[1].coursework.slice(0, 3)
                          ).map((course) => (
                            <span
                              key={course}
                              className="text-xs font-mono px-3 py-1 rounded-xl bg-midnight-950/80 text-slate-300 border border-white/5 hover:border-electric-violet/30 transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                          {!expandedCards[1] && education[1].coursework.length > 3 && (
                            <button
                              type="button"
                              onClick={() => toggleExpand(1)}
                              className="text-xs font-mono px-2.5 py-1 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors"
                            >
                              +{education[1].coursework.length - 3} more
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </article>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
