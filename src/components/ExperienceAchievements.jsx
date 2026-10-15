import React, { useRef, useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Trophy, 
  Users, 
  Terminal, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Award, 
  Briefcase, 
  ExternalLink,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/**
 * ExperienceAchievements Component
 * Transformed into a dynamic, smooth running horizontal scrollable sidebar/rail.
 * Features:
 * - Continuous smooth auto-running marquee track
 * - Pause-on-hover & pause/play toggle button
 * - Manual left/right navigation controls
 * - Native touch and drag-scrollable track with hidden scrollbars
 * - Filter tabs (All, Internships, Hackathons & Competitions)
 * - Rich authentic content cards with tags, role, organization, and bullet points
 */
export const ExperienceAchievements = () => {
  const { experiencesAndAchievements } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  if (!experiencesAndAchievements || experiencesAndAchievements.length === 0) {
    return null;
  }

  // Filter items
  const filteredItems = experiencesAndAchievements.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Internships') return item.type.toLowerCase().includes('internship');
    if (selectedFilter === 'Hackathons') return item.type.toLowerCase().includes('hackathon');
    return true;
  });

  // Manual scroll buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Badge icons
  const getItemIcon = (type) => {
    const lower = (type || '').toLowerCase();
    if (lower.includes('hackathon')) return <Trophy className="w-3.5 h-3.5 text-amber-400" />;
    if (lower.includes('internship')) return <Briefcase className="w-3.5 h-3.5 text-electric-cyan" />;
    return <Award className="w-3.5 h-3.5 text-electric-violet" />;
  };

  // Duplicate list when marquee is running so loop is seamless
  const displayItems = isPaused 
    ? filteredItems 
    : [...filteredItems, ...filteredItems];

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-electric-violet/10 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-electric-cyan/10 blur-[140px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-violet font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-violet" />
              <span>06 // IN ACTION & TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Experience, Hackathons & Events
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2 max-w-xl">
              Competitive hackathons, rapid sprints, and professional industry internships.
            </p>
          </div>

          {/* Interactive Controls & Filters */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Filter buttons */}
            <div className="flex bg-midnight-950/80 border border-white/10 rounded-2xl p-1 shadow-inner">
              {['All', 'Internships', 'Hackathons'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    selectedFilter === tab
                      ? 'bg-electric-violet text-white font-medium shadow-md shadow-electric-violet/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Play/Pause & Left/Right manual buttons */}
            <div className="flex items-center gap-1.5 bg-midnight-950/80 border border-white/10 rounded-2xl p-1">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`p-2 rounded-xl text-xs transition-colors ${
                  isPaused 
                    ? 'bg-electric-cyan/20 text-electric-cyan' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <div className="w-[1px] h-4 bg-white/10 mx-0.5" />

              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Scroll Left"
                aria-label="Scroll left through experiences"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Scroll Right"
                aria-label="Scroll right through experiences"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Running Scrollable Sidebar / Carousel Rail */}
      <div className="relative w-full overflow-hidden group/track">
        
        {/* Soft edge blur masks for continuous running effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-midnight-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-midnight-950 to-transparent z-10 pointer-events-none" />

        {/* Scroll Track Container */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-6 px-6 sm:px-12 overflow-x-auto no-scrollbar scroll-smooth py-4 select-none ${
            !isPaused ? 'animate-marquee' : ''
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {displayItems.map((item, index) => {
            const isHackathon = item.type.toLowerCase().includes('hackathon');
            const isInternship = item.type.toLowerCase().includes('internship');

            return (
              <article
                key={`${item.id}-${index}`}
                className="w-[320px] sm:w-[380px] shrink-0 p-6 sm:p-7 rounded-3xl bg-midnight-900/75 border border-white/10 glass-panel flex flex-col justify-between space-y-5 hover:border-electric-cyan/40 hover:shadow-xl hover:shadow-electric-violet/10 transition-all duration-300 relative group"
              >
                {/* Subtle top indicator bar */}
                <div 
                  className={`absolute top-0 left-6 right-6 h-0.5 rounded-full ${
                    isHackathon 
                      ? 'bg-gradient-to-r from-amber-400 via-electric-violet to-transparent' 
                      : isInternship 
                      ? 'bg-gradient-to-r from-electric-cyan via-blue-500 to-transparent' 
                      : 'bg-gradient-to-r from-electric-violet via-pink-500 to-transparent'
                  }`} 
                />

                <div className="space-y-4">
                  
                  {/* Top Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span 
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
                        isHackathon
                          ? 'text-amber-400 bg-amber-400/10 border-amber-400/30'
                          : isInternship
                          ? 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/30'
                          : 'text-electric-violet bg-electric-violet/10 border-electric-violet/30'
                      }`}
                    >
                      {getItemIcon(item.type)}
                      <span>{item.badge || item.type}</span>
                    </span>

                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.period}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-electric-cyan transition-colors leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-violet shrink-0" />
                      <span>{item.organization}</span>
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-1">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Skills tags and Project Actions footer */}
                <div className="pt-3 border-t border-white/5 space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {(item.projectLink || item.githubUrl) && (
                    <div className="flex items-center gap-2 pt-1">
                      {item.projectLink && (
                        <a
                          href={item.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-electric-cyan/15 hover:bg-electric-cyan/25 text-electric-cyan hover:text-white text-[11px] font-mono transition-colors border border-electric-cyan/30"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live App</span>
                        </a>
                      )}
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] font-mono transition-colors border border-white/10"
                        >
                          <Code2 className="w-3 h-3" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </article>
            );
          })}
        </div>

      </div>

      {/* Helpful Subtitle Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
          <span>Interactive running rail • Hover or drag to pause & explore cards</span>
        </span>
        <span className="hidden sm:inline">
          {filteredItems.length} records in timeline
        </span>
      </div>

    </section>
  );
};
