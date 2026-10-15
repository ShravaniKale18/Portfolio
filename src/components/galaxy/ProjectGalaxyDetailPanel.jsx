import React from 'react';
import { 
  X, 
  ExternalLink, 
  ChevronRight, 
  Shield, 
  Zap, 
  Cpu, 
  Brain, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { Icons } from '../SocialIcons';

/**
 * ProjectGalaxyDetailPanel displays authentic project metadata in a polished,
 * glassmorphic floating overlay beside or over the 3D galaxy scene.
 */
export const ProjectGalaxyDetailPanel = ({
  project,
  onClose,
  onOpenCaseStudy,
  isMobile
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Selected Project: ${project.title}`}
      className={`absolute z-30 transition-all duration-300 animate-in fade-in zoom-in-95 ${
        isMobile
          ? 'bottom-0 left-0 right-0 max-h-[75vh] rounded-t-3xl border-t'
          : 'top-6 right-6 bottom-6 w-full max-w-md rounded-3xl border'
      } bg-midnight-950/90 border-white/15 glass-panel shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl`}
    >
      {/* Top Banner & Header */}
      <div className="p-6 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-mono uppercase text-electric-cyan tracking-wider font-semibold">
              {project.category}
            </span>
            {project.timeline && (
              <span className="text-[11px] font-mono text-slate-400">
                • {project.timeline}
              </span>
            )}
            {project.stats && (
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                {project.stats.metric}
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-snug">
            {project.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors shrink-0"
          aria-label="Back to galaxy overview"
          title="Back to Galaxy (Esc)"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Project Overview Content */}
      <div className="p-6 space-y-5 overflow-y-auto font-sans flex-1">
        
        {/* Short Description */}
        <div>
          <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
            Overview
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed font-light">
            {project.shortDescription}
          </p>
        </div>

        {/* Problem vs Solution Split */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-midnight-900/80 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-1 font-semibold">
              <Shield className="w-3.5 h-3.5" /> Problem Addressed
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {project.problemSolved}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-midnight-900/80 border border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-1 font-semibold">
              <Zap className="w-3.5 h-3.5" /> Engineered Solution
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {project.solution || project.implementationDetails?.[0]}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Highlights */}
        {project.keyFeatures && (
          <div>
            <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
              Key Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 font-light">
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* Footer Controls & Actions */}
      <div className="p-6 pt-4 border-t border-white/10 bg-midnight-950/90 space-y-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-electric-violet to-electric-indigo text-white font-medium text-xs shadow-md shadow-electric-violet/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Full Case Study</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
              aria-label="View on GitHub"
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
              className="p-2.5 rounded-xl bg-electric-cyan/15 hover:bg-electric-cyan/25 text-electric-cyan border border-electric-cyan/30 transition-colors"
              aria-label="Launch Live Preview"
              title="Launch Live Preview"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-1.5 text-[11px] font-mono text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Galaxy Orbit</span>
        </button>
      </div>
    </div>
  );
};
