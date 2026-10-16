import React, { useState, useRef } from 'react';
import { Calendar, Trophy, Briefcase, ExternalLink, Code2, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ConstellationCanvas } from './ConstellationCanvas';

/**
 * MissionControl - Interactive 3D timeline for experiences, hackathons, and events.
 * Uses the existing ConstellationCanvas for subtle space background and CSS 3D transforms for nodes.
 */
export default function MissionControl() {
  const { experiencesAndAchievements } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [centerIdx, setCenterIdx] = useState(0);
  const [modalItem, setModalItem] = useState(null);

  // Filter items by category
  const filteredItems = experiencesAndAchievements.filter(item => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Internships') return item.type?.toLowerCase().includes('internship');
    if (selectedFilter === 'Hackathons') return item.type?.toLowerCase().includes('hackathon');
    return true;
  });

  // Circular navigation
  const prev = () => setCenterIdx(i => (i - 1 + filteredItems.length) % filteredItems.length);
  const next = () => setCenterIdx(i => (i + 1) % filteredItems.length);

  // Touch handling for mobile swipe
  const touchStartX = useRef(null);
  const onTouchStart = e => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = e => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta > 0 ? prev() : next();
    touchStartX.current = null;
  };

  const getBadgeClass = item => {
    const type = (item.type || '').toLowerCase();
    if (type.includes('hackathon')) return 'text-amber-400 bg-amber-400/10 border-amber-400/30';
    if (type.includes('internship')) return 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/30';
    return 'text-electric-violet bg-electric-violet/10 border-electric-violet/30';
  };

  const getBarGradient = item => {
    const type = (item.type || '').toLowerCase();
    if (type.includes('hackathon')) return 'bg-gradient-to-r from-amber-400 via-electric-violet to-transparent';
    if (type.includes('internship')) return 'bg-gradient-to-r from-electric-cyan via-blue-500 to-transparent';
    return 'bg-gradient-to-r from-electric-violet via-pink-500 to-transparent';
  };

  // Render a single timeline node (left, center, right)
  const renderNode = (item, position) => {
    const isCenter = position === 'center';
    const badgeClass = getBadgeClass(item);
    const barGradient = getBarGradient(item);
    const nodeClass = `timeline-node ${position} ${isCenter ? 'scale-105' : 'scale-90'} transition-all duration-300`;
    return (
      <article
        key={item.id}
        className={nodeClass}
        onClick={() => setModalItem(item)}
        role="button"
        tabIndex={0}
        onKeyPress={e => e.key === 'Enter' && setModalItem(item)}
      >
        <div className={`h-0.5 w-full rounded-full mb-2 ${barGradient}`} />
        <span className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${badgeClass}`}> {item.badge || item.type} </span>
        <h3 className="text-lg font-display font-bold text-white mt-1">{item.role}</h3>
        <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5"><Calendar className="w-3 h-3" /> {item.period}</p>
        <ul className="mt-2 space-y-1 text-xs text-slate-300">
          {item.description.slice(0, isCenter ? 4 : 2).map((d, i) => (
            <li key={i} className="flex items-start gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan shrink-0 mt-0.5" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        {(item.projectLink || item.githubUrl) && (
          <div className="mt-2 flex gap-2">
            {item.projectLink && (
              <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded bg-electric-cyan/15 text-electric-cyan text-[11px] border border-electric-cyan/30 hover:bg-electric-cyan/25 hover:text-white transition">
                <ExternalLink className="w-3 h-3" /> Live
              </a>
            )}
            {item.githubUrl && (
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-slate-300 text-[11px] border border-white/10 hover:bg-white/10 hover:text-white transition">
                <Code2 className="w-3 h-3" /> GitHub
              </a>
            )}
          </div>
        )}
      </article>
    );
  };

  // Modal for full detail view (reused from original component)
  const Modal = ({ item, onClose }) => {
    const badgeClass = getBadgeClass(item);
    const barGradient = getBarGradient(item);
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true">
        <div className="bg-midnight-900/90 p-6 sm:p-8 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto glass-panel" onClick={e => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white" aria-label="Close details view">✕</button>
          <div className={`h-0.5 w-full rounded-full mb-4 ${barGradient}`} />
          <span className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${badgeClass}`}>{item.badge || item.type}</span>
          <h3 className="text-2xl font-display font-bold text-white mt-2">{item.role}</h3>
          <p className="text-sm text-slate-300 flex items-center gap-2 mt-1"><Calendar className="w-4 h-4" /> {item.period}</p>
          <ul className="mt-4 space-y-2 text-slate-300">
            {item.description.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          {item.skills && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map(s => (
                <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">{s}</span>
              ))}
            </div>
          )}
          <div className="mt-5 flex gap-3">
            {item.projectLink && (
              <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-electric-cyan/20 hover:bg-electric-cyan/30 text-electric-cyan hover:text-white transition border border-electric-cyan/30">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {item.githubUrl && (
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition border border-white/10">
                <Code2 className="w-4 h-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-midnight-950 text-slate-100 font-sans">
      {/* 3D background */}
      <ConstellationCanvas />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-violet font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-violet" />
              <span>06 // FIELD LOG</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">Experience & Expeditions</h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2 max-w-xl">Learning. Building. Competing.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {['All', 'Internships', 'Hackathons'].map(tab => (
              <button key={tab} onClick={() => setSelectedFilter(tab)} className={`px-3 py-1.5 rounded-xl text-xs font-mono transition ${selectedFilter === tab ? 'bg-electric-violet text-white shadow-md shadow-electric-violet/20' : 'text-slate-400 hover:text-white'}`}>{tab}</button>
            ))}
          </div>
        </div>
      </div>
      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {/* Navigation arrows */}
        <button onClick={prev} className="nav-arrow left-4 md:left-8 absolute top-1/2 -translate-y-1/2 p-2 bg-midnight-950/70 rounded-full text-slate-400 hover:text-white hover:bg-midnight-800 transition-colors" aria-label="Previous">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="nav-arrow right-4 md:right-8 absolute top-1/2 -translate-y-1/2 p-2 bg-midnight-950/70 rounded-full text-slate-400 hover:text-white hover:bg-midnight-800 transition-colors" aria-label="Next">
          <ChevronRight className="w-5 h-5" />
        </button>
        {/* Nodes container */}
        <div className="flex justify-center items-center space-x-8 perspective-1000">
          {renderNode(filteredItems[(centerIdx - 1 + filteredItems.length) % filteredItems.length], 'left')}
          {renderNode(filteredItems[centerIdx], 'center')}
          {renderNode(filteredItems[(centerIdx + 1) % filteredItems.length], 'right')}
        </div>
      </div>
      {/* Modal */}
      {modalItem && <Modal item={modalItem} onClose={() => setModalItem(null)} />}
    </section>
  );
}
