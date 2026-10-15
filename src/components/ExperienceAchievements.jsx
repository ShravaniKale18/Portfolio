// src/components/ExperienceAchievements.jsx
import React, { useState, useRef } from 'react';
import {
  Calendar,
  Trophy,
  Briefcase,
  ExternalLink,
  Code2,
  CheckCircle2,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceAchievements = () => {
  const { experiencesAndAchievements } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isPaused, setIsPaused] = useState(false); // keeps pause button UI for consistency
  const [centerIdx, setCenterIdx] = useState(0); // index of the panel in focus
  const [modalItem, setModalItem] = useState(null); // item displayed in expanded view

  // touch handling refs
  const touchStartX = useRef(null);

  // -------------------------------------------------
  // Filter items based on category
  // -------------------------------------------------
  const filteredItems = experiencesAndAchievements.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Internships')
      return item.type.toLowerCase().includes('internship');
    if (selectedFilter === 'Hackathons')
      return item.type.toLowerCase().includes('hackathon');
    return true;
  });

  // Guard against empty data
  if (!filteredItems.length) {
    return null;
  }

  // -------------------------------------------------
  // Helper: badge icon based on type
  // -------------------------------------------------
  const getItemIcon = (type) => {
    const lower = (type || '').toLowerCase();
    if (lower.includes('hackathon'))
      return <Trophy className="w-3.5 h-3.5 text-amber-400" />;
    if (lower.includes('internship'))
      return <Briefcase className="w-3.5 h-3.5 text-electric-cyan" />;
    return <Trophy className="w-3.5 h-3.5 text-electric-violet" />;
  };

  // -------------------------------------------------
  // Navigation helpers (circular)
  // -------------------------------------------------
  const prev = () =>
    setCenterIdx((i) => (i - 1 + filteredItems.length) % filteredItems.length);
  const next = () =>
    setCenterIdx((i) => (i + 1) % filteredItems.length);

  // -------------------------------------------------
  // Touch event handlers (mobile swipe)
  // -------------------------------------------------
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  };

  // -------------------------------------------------
  // Render three panels (left, center, right) based on current index
  // -------------------------------------------------
  const getPanelIdx = (offset) =>
    (centerIdx + offset + filteredItems.length) % filteredItems.length;

  const renderPanel = (item, position) => {
    const isCenter = position === 'center';
    const isHackathon = item.type.toLowerCase().includes('hackathon');
    const isInternship = item.type.toLowerCase().includes('internship');
    const badgeClass = isHackathon
      ? 'text-amber-400 bg-amber-400/10 border-amber-400/30'
      : isInternship
      ? 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/30'
      : 'text-electric-violet bg-electric-violet/10 border-electric-violet/30';
    const barGradient = isHackathon
      ? 'bg-gradient-to-r from-amber-400 via-electric-violet to-transparent'
      : isInternship
      ? 'bg-gradient-to-r from-electric-cyan via-blue-500 to-transparent'
      : 'bg-gradient-to-r from-electric-violet via-pink-500 to-transparent';

    return (
      <article
        key={item.id}
        className={`panel ${position}`}
        onClick={() => setModalItem(item)}
        aria-label={`Open details for ${item.role} at ${item.organization}`}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') setModalItem(item);
        }}
      >
        {/* Top coloured bar */}
        <div className={`h-0.5 w-full rounded-full mb-3 ${barGradient}`} />
        {/* Badge + period */}
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${badgeClass}`}
          >
            {getItemIcon(item.type)}
            <span>{item.badge || item.type}</span>
          </span>
          <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <Calendar className="w-3 h-3" />
            {item.period}
          </span>
        </div>
        {/* Role & organization */}
        <h3 className="text-lg sm:text-xl font-display font-bold text-white">
          {item.role}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-violet shrink-0" />
          {item.organization}
        </p>
        {/* Short description (first two bullets) */}
        <ul className="mt-3 space-y-2 text-xs text-slate-300">
          {item.description.slice(0, 2).map((d, i) => (
            <li key={i} className="flex items-start gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan shrink-0 mt-0.5" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        {/* Links */}
        {(item.projectLink || item.githubUrl) && (
          <div className="mt-3 flex gap-2">
            {item.projectLink && (
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-electric-cyan/15 hover:bg-electric-cyan/25 text-electric-cyan hover:text-white text-[11px] font-mono transition-colors border border-electric-cyan/30"
              >
                <ExternalLink className="w-3 h-3" />
                Live
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
                GitHub
              </a>
            )}
          </div>
        )}
      </article>
    );
  };

  // -------------------------------------------------
  // Modal for expanded details
  // -------------------------------------------------
  const Modal = ({ item, onClose }) => {
    const isHackathon = item.type.toLowerCase().includes('hackathon');
    const isInternship = item.type.toLowerCase().includes('internship');
    const badgeClass = isHackathon
      ? 'text-amber-400 bg-amber-400/10 border-amber-400/30'
      : isInternship
      ? 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/30'
      : 'text-electric-violet bg-electric-violet/10 border-electric-violet/30';
    const barGradient = isHackathon
      ? 'bg-gradient-to-r from-amber-400 via-electric-violet to-transparent'
      : isInternship
      ? 'bg-gradient-to-r from-electric-cyan via-blue-500 to-transparent'
      : 'bg-gradient-to-r from-electric-violet via-pink-500 to-transparent';

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true">
        <div
          className="bg-midnight-900/90 p-6 sm:p-8 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto glass-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white"
            aria-label="Close details view"
          >
            ✕
          </button>

          {/* Header */}
          <div className={`h-0.5 w-full rounded-full mb-4 ${barGradient}`} />
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${badgeClass}`}>
              {item.badge || item.type}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
              <Calendar className="w-3 h-3" />
              {item.period}
            </span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-1">{item.role}</h3>
          <p className="text-sm text-slate-300 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-violet shrink-0" />
            {item.organization}
          </p>

          {/* Full description list */}
          <ul className="space-y-2 text-slate-300">
            {item.description.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          {item.skills && item.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="mt-5 flex gap-3">
            {item.projectLink && (
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-electric-cyan/20 hover:bg-electric-cyan/30 text-electric-cyan hover:text-white transition-colors border border-electric-cyan/30"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              >
                <Code2 className="w-4 h-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  // -------------------------------------------------
  // Main render
  // -------------------------------------------------
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Heading & filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-midnight-950/80 border border-white/10 rounded-2xl p-1 shadow-inner">
              {['All', 'Internships', 'Hackathons'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${selectedFilter === tab
                    ? 'bg-electric-violet text-white font-medium shadow-md shadow-electric-violet/20'
                    : 'text-slate-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`p-2 rounded-xl text-xs transition-colors ${isPaused ? 'bg-electric-cyan/20 text-electric-cyan' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              title={isPaused ? 'Resume 3D wall' : 'Pause 3D wall'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3‑D Holographic Experience Wall */}
      <div
        className="holo-wall mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="nav-arrow left-4 md:left-8 absolute top-1/2 -translate-y-1/2 p-2 bg-midnight-950/70 rounded-full text-slate-400 hover:text-white hover:bg-midnight-800 transition-colors"
          aria-label="Previous experience"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="nav-arrow right-4 md:right-8 absolute top-1/2 -translate-y-1/2 p-2 bg-midnight-950/70 rounded-full text-slate-400 hover:text-white hover:bg-midnight-800 transition-colors"
          aria-label="Next experience"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Panels */}
        {renderPanel(filteredItems[getPanelIdx(-1)], 'left')}
        {renderPanel(filteredItems[getPanelIdx(0)], 'center')}
        {renderPanel(filteredItems[getPanelIdx(1)], 'right')}
      </div>

      {/* Footer – record count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
          <span>{filteredItems.length} {selectedFilter.toLowerCase()} records</span>
        </span>
      </div>

      {/* Expanded modal */}
      {modalItem && <Modal item={modalItem} onClose={() => setModalItem(null)} />}
    </section>
  );
};