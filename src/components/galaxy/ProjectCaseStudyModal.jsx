import React from 'react';
import { 
  X, 
  ExternalLink, 
  Shield, 
  Zap, 
  Cpu, 
  Brain, 
  Sparkles,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { Icons } from '../SocialIcons';

/**
 * ProjectCaseStudyModal presents the complete, authentic project engineering story in order:
 * 1. Project title and concise overview
 * 2. Problem statement
 * 3. Solution and architecture
 * 4. Important key features
 * 5. Technologies and their roles
 * 6. Implementation details & challenges
 * 7. Lessons learned
 * 8. Verified GitHub and live demo links
 */
export const ProjectCaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-midnight-900 border border-white/15 rounded-3xl p-6 sm:p-8 glass-panel space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-electric-cyan uppercase tracking-wider font-semibold">
                {project.category} // {project.timeline || 'Project'}
              </span>
              {project.stats && (
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                  {project.stats.metric}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs font-mono px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 transition-colors"
            aria-label="Close case study dialog"
          >
            <span>Close</span>
            <span className="text-slate-500">(ESC)</span>
          </button>
        </div>

        {/* Narrative Content */}
        <div className="space-y-6 font-sans">
          
          {/* 1. Concise Overview */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              1. Overview & Objectives
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {project.shortDescription}
            </p>
          </div>

          {/* 2. Problem Statement vs 3. Engineered Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-midnight-950/80 border border-rose-500/20">
              <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                <Shield className="w-3.5 h-3.5" /> 2. Problem Addressed
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-midnight-950/80 border border-emerald-500/20">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                <Zap className="w-3.5 h-3.5" /> 3. Engineered Solution & Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {project.solution || project.implementationDetails?.[0]}
              </p>
            </div>
          </div>

          {/* 4. Key Architectural Features */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                4. Key Architectural Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-midnight-950/60 border border-white/5 text-xs text-slate-300 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              5. Technology Stack & Role
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-xl bg-white/5 text-slate-200 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 6. Technical Implementation Details */}
          {project.implementationDetails && (
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-electric-violet" />
                6. Technical Implementation & Algorithms
              </h4>
              <ul className="space-y-2">
                {project.implementationDetails.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-violet mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 7. What I Learned / Engineering Takeaways */}
          {project.whatILearned && (
            <div className="p-4 rounded-2xl bg-midnight-950/80 border border-electric-cyan/20">
              <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                <Brain className="w-3.5 h-3.5" />
                7. Engineering Takeaways & Lessons Learned
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {project.whatILearned}
              </p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              >
                <Icons.Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
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
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Back to Universe
          </button>
        </div>

      </div>
    </div>
  );
};
