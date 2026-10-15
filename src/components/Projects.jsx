import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  FolderGit2, 
  CheckCircle, 
  ChevronRight,
  Shield,
  Layout,
  Terminal,
  Database,
  Brain,
  Sparkles,
  ChevronLeft,
  Search,
  Code2,
  Layers,
  ArrowUpRight,
  Play,
  Cpu,
  BarChart3,
  Bot,
  Zap,
  Info,
  X
} from 'lucide-react';
import { Icons } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProjects = projects.filter((p) => p.featured);

  const categories = [
    'All',
    'AI/ML',
    'Python',
    'Web Development',
    'Academic Projects',
  ];

  // Auto rotate carousel gently if not interacted with recently
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  // Keyboard accessibility for modal (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filter === 'All' ? true : p.category === filter;
    const matchesSearch = searchQuery === '' 
      ? true 
      : p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML':
        return <Brain className="w-4 h-4 text-electric-cyan" />;
      case 'Python':
        return <Terminal className="w-4 h-4 text-electric-cyan" />;
      case 'Web Development':
        return <Layout className="w-4 h-4 text-electric-violet" />;
      case 'Academic Projects':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <FolderGit2 className="w-4 h-4 text-slate-400" />;
    }
  };

  const getProjectAccent = (category) => {
    switch (category) {
      case 'AI/ML':
        return {
          glow: 'from-electric-cyan/20 to-electric-violet/10',
          border: 'hover:border-electric-cyan/40',
          tagBg: 'bg-electric-cyan/10 text-electric-cyan border-electric-cyan/20',
          dot: 'bg-electric-cyan',
          gradientText: 'from-cyan-300 via-sky-200 to-white'
        };
      case 'Python':
        return {
          glow: 'from-electric-violet/20 to-blue-500/10',
          border: 'hover:border-electric-violet/40',
          tagBg: 'bg-electric-violet/10 text-electric-violet border-electric-violet/20',
          dot: 'bg-electric-violet',
          gradientText: 'from-violet-300 via-indigo-200 to-white'
        };
      case 'Web Development':
        return {
          glow: 'from-indigo-500/20 to-purple-500/10',
          border: 'hover:border-indigo-500/40',
          tagBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
          dot: 'bg-indigo-400',
          gradientText: 'from-indigo-300 via-sky-200 to-white'
        };
      default:
        return {
          glow: 'from-emerald-500/20 to-teal-500/10',
          border: 'hover:border-emerald-500/40',
          tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          dot: 'bg-emerald-400',
          gradientText: 'from-emerald-300 via-teal-200 to-white'
        };
    }
  };

  const currentFeatured = featuredProjects[activeCarouselIndex] || featuredProjects[0];
  const featuredAccent = getProjectAccent(currentFeatured?.category);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-electric-violet/15 via-electric-indigo/10 to-electric-cyan/15 blur-[140px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-cyan/10 blur-[130px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-cyan" />
              <span>03 // Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Featured Systems & Codebases
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-sm md:text-right">
            AI/LLM pipelines, end-to-end machine learning, and full-stack software architectures.
          </p>
        </div>

        {/* 1. INTERACTIVE FEATURED SHOWCASE CAROUSEL */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-electric-cyan animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Spotlight Project Showcase
                </span>
                <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                  ({activeCarouselIndex + 1} of {featuredProjects.length})
                </span>
              </div>

              {/* Carousel navigation controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveCarouselIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
                  className="p-2 rounded-xl bg-midnight-900/80 border border-white/10 hover:border-electric-cyan/40 text-slate-300 hover:text-white transition-all"
                  aria-label="Previous spotlight project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveCarouselIndex((prev) => (prev + 1) % featuredProjects.length)}
                  className="p-2 rounded-xl bg-midnight-900/80 border border-white/10 hover:border-electric-cyan/40 text-slate-300 hover:text-white transition-all"
                  aria-label="Next spotlight project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Featured Hero Box */}
            <div className="relative rounded-3xl bg-midnight-900/80 border border-white/15 glass-panel overflow-hidden shadow-2xl transition-all duration-500 hover:border-electric-cyan/40">
              
              {/* Subtle top gradient glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${featuredAccent.glow} blur-3xl pointer-events-none`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-10 relative z-10">
                
                {/* Left side: Editorial narrative and metrics */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Badge header */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 border ${featuredAccent.tagBg}`}>
                        {getCategoryIcon(currentFeatured.category)}
                        <span>{currentFeatured.category}</span>
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                        {currentFeatured.timeline}
                      </span>
                      {currentFeatured.stats && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan font-semibold">
                          ★ {currentFeatured.stats.metric}
                        </span>
                      )}
                    </div>

                    <h3 className={`text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white mb-3 bg-gradient-to-r ${featuredAccent.gradientText} bg-clip-text`}>
                      {currentFeatured.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                      {currentFeatured.shortDescription}
                    </p>

                    {/* Storytelling: Problem & Solution Split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                      <div className="p-3.5 rounded-2xl bg-midnight-950/80 border border-white/5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-1 font-semibold">
                          <Shield className="w-3 h-3" /> The Problem
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {currentFeatured.problemSolved}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-midnight-950/80 border border-white/5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-1 font-semibold">
                          <Zap className="w-3 h-3" /> Engineered Solution
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {currentFeatured.solution || currentFeatured.implementationDetails[0]}
                        </p>
                      </div>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentFeatured.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10 hover:border-electric-cyan/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(currentFeatured)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-violet to-electric-indigo text-white font-medium text-xs shadow-md shadow-electric-violet/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Explore Full Story & Architecture</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {currentFeatured.githubUrl && (
                      <a
                        href={currentFeatured.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 transition-colors"
                      >
                        <Icons.Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>
                    )}

                    {currentFeatured.liveUrl && (
                      <a
                        href={currentFeatured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-electric-cyan/15 hover:bg-electric-cyan/25 text-electric-cyan text-xs font-mono border border-electric-cyan/30 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side: Interactive Architectural Blueprint Mockup */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="relative rounded-2xl bg-midnight-950/90 border border-white/10 p-5 font-mono text-xs shadow-inner overflow-hidden">
                    
                    {/* Terminal Window Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="text-[11px] text-slate-400 ml-2 font-mono">
                          {currentFeatured.id}.py
                        </span>
                      </div>
                      <span className="text-[10px] text-electric-cyan bg-electric-cyan/10 px-2 py-0.5 rounded border border-electric-cyan/20">
                        {currentFeatured.stats?.highlight || "Verified Pipeline"}
                      </span>
                    </div>

                    {/* Interactive Architectural Pipeline Visualization */}
                    <div className="space-y-3 font-mono">
                      <div className="p-3 rounded-xl bg-midnight-900/80 border border-white/5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                          <span className="flex items-center gap-1.5 text-electric-cyan">
                            <Bot className="w-3.5 h-3.5" />
                            <span>System Architecture</span>
                          </span>
                          <span className="text-[10px] text-emerald-400">● 100% Operational</span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed">
                          {currentFeatured.keyFeatures ? currentFeatured.keyFeatures[0] : currentFeatured.shortDescription}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-midnight-900/80 border border-white/5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                          <span className="flex items-center gap-1.5 text-electric-violet">
                            <Cpu className="w-3.5 h-3.5" />
                            <span>Core Engine Highlights</span>
                          </span>
                        </div>
                        <ul className="space-y-1.5 text-[11px] text-slate-300 font-sans">
                          {currentFeatured.keyFeatures?.slice(1, 3).map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-electric-cyan mt-1.5 shrink-0" />
                              <span className="leading-snug">{f}</span>
                            </li>
                          )) || (
                            <li className="text-slate-400">High-performance modular implementation</li>
                          )}
                        </ul>
                      </div>

                      {/* Stat Metrics Pill */}
                      {currentFeatured.stats && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                            <span className="text-[10px] text-slate-400 block uppercase">Primary Metric</span>
                            <span className="text-base font-bold text-electric-cyan">{currentFeatured.stats.metric}</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                            <span className="text-[10px] text-slate-400 block uppercase">Classification</span>
                            <span className="text-xs font-semibold text-slate-200 block truncate">{currentFeatured.stats.label}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Click preview button */}
                    <button
                      onClick={() => setSelectedProject(currentFeatured)}
                      className="w-full mt-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Info className="w-3.5 h-3.5 text-electric-cyan" />
                      <span>Inspect Deep Implementation & Metrics</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Carousel Pagination Dots */}
              <div className="px-8 py-3 bg-midnight-950/70 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {featuredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCarouselIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeCarouselIndex ? 'w-8 bg-electric-cyan' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Featured Spotlight // Switch anytime
                </span>
              </div>

            </div>
          </div>
        )}

        {/* 2. CATEGORY FILTER TABS & SEARCH BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? projects.length 
                : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                    filter === cat
                      ? 'bg-electric-cyan/15 text-electric-cyan border border-electric-cyan/40 shadow-sm'
                      : 'bg-midnight-900/60 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    filter === cat ? 'bg-electric-cyan/20 text-electric-cyan' : 'bg-white/5 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Filter Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-midnight-900/60 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/40 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3. ASYMMETRICAL & ENGAGING PROJECT GRID */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-midnight-900/40 border border-white/10 glass-panel">
            <FolderGit2 className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-white font-medium text-sm">No projects found matching criteria.</p>
            <p className="text-slate-400 text-xs mt-1">Try switching categories or clearing search.</p>
            <button
              onClick={() => { setFilter('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-electric-cyan transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            {filteredProjects.map((project, index) => {
              const accent = getProjectAccent(project.category);
              
              // Asymmetrical layout: Give the first project on 'All' view a 7-column span, next 5-column span, others balanced
              const isLeadCard = (index === 0 && filter === 'All' && !searchQuery);
              const isSecondCard = (index === 1 && filter === 'All' && !searchQuery);
              
              const colSpanClass = isLeadCard 
                ? 'lg:col-span-7' 
                : isSecondCard 
                ? 'lg:col-span-5' 
                : 'lg:col-span-6';

              return (
                <article
                  key={project.id}
                  className={`${colSpanClass} group rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel overflow-hidden flex flex-col justify-between ${accent.border} transition-all duration-300 hover:shadow-2xl hover:shadow-electric-violet/10 relative hover:-translate-y-1`}
                >
                  {/* Subtle hover gradient wash */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${accent.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* Project Top Header */}
                  <div className="p-6 sm:p-8 pb-0 relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                          {getCategoryIcon(project.category)}
                        </span>
                        <span className="text-xs font-mono text-slate-300">
                          {project.category}
                        </span>
                        {project.timeline && (
                          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                            • {project.timeline}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.stats && (
                          <span className="text-[10px] font-mono text-electric-cyan bg-electric-cyan/10 px-2 py-0.5 rounded border border-electric-cyan/20">
                            {project.stats.metric}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-electric-cyan transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 mt-2.5 leading-relaxed font-light">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Middle Section: Problem Statement & Tech Badges */}
                  <div className="p-6 sm:p-8 pt-6 space-y-4 relative z-10">
                    
                    {/* Visual Storytelling: Problem Addressed Box */}
                    <div className="p-4 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-1 group-hover:border-white/10 transition-colors">
                      <p className="text-[11px] font-mono text-electric-violet uppercase tracking-wider flex items-center gap-1.5 font-medium">
                        <Shield className="w-3.5 h-3.5" />
                        Problem Addressed
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Actions Bar */}
                  <div className="px-6 sm:px-8 py-4 bg-midnight-950/50 border-t border-white/10 flex items-center justify-between relative z-10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-electric-cyan hover:text-white flex items-center gap-1.5 transition-colors font-medium group/btn"
                    >
                      <span>Explore Case Study</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                          aria-label={`View ${project.title} repository on GitHub`}
                          title="GitHub Repository"
                        >
                          <Icons.Github className="w-4 h-4" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-electric-cyan/10 hover:bg-electric-cyan/20 text-electric-cyan hover:text-white transition-colors"
                          aria-label={`View live demo for ${project.title}`}
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        )}

      </div>

      {/* 4. CLICK-TO-EXPLORE PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-3xl bg-midnight-900 border border-white/15 rounded-3xl p-6 sm:p-8 glass-panel space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-electric-cyan uppercase tracking-wider font-semibold">
                    {selectedProject.category} // {selectedProject.timeline || 'Project'}
                  </span>
                  {selectedProject.stats && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                      {selectedProject.stats.metric}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white text-xs font-mono px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1 transition-colors"
                aria-label="Close dialog"
              >
                <span>Close</span>
                <span className="text-slate-500">(ESC)</span>
              </button>
            </div>

            {/* Modal Body: Visual Project Storytelling */}
            <div className="space-y-6 font-sans">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-electric-cyan" />
                  Overview & Purpose
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                  {selectedProject.shortDescription}
                </p>
              </div>

              {/* Problem Solved & Engineered Solution Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-midnight-950/80 border border-rose-500/20">
                  <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                    <Shield className="w-3.5 h-3.5" />
                    Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {selectedProject.problemSolved}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-midnight-950/80 border border-emerald-500/20">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    Engineered Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {selectedProject.solution || selectedProject.implementationDetails[0]}
                  </p>
                </div>
              </div>

              {/* Key Features (if provided) */}
              {selectedProject.keyFeatures && (
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Key Architectural Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-midnight-950/60 border border-white/5 text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Implementation Details */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-electric-violet" />
                  Engineering & Technical Implementation
                </h4>
                <ul className="space-y-2">
                  {selectedProject.implementationDetails.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-violet mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What I Learned */}
              {selectedProject.whatILearned && (
                <div className="p-4 rounded-2xl bg-midnight-950/80 border border-electric-cyan/20">
                  <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                    <Brain className="w-3.5 h-3.5" />
                    What I Learned & Key Takeaway
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {selectedProject.whatILearned}
                  </p>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-xl bg-white/5 text-slate-200 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                  >
                    <Icons.Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                )}

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-electric-violet hover:bg-electric-purple text-white transition-colors shadow-md shadow-electric-violet/20"
                  >
                    <span>Launch Live Preview</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                Back to Projects
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
