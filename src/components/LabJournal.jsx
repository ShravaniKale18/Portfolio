import React from 'react';
import { FlaskConical, Sparkles, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LabJournal = () => {
  const { currentlyInLab } = PORTFOLIO_DATA;

  if (!currentlyInLab || currentlyInLab.length === 0) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Prototyping':
        return 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/30';
      case 'Experimenting':
        return 'text-electric-violet bg-electric-violet/10 border-electric-violet/30';
      case 'Exploring':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/30';
      default:
        return 'text-slate-400 bg-white/5 border-white/10';
    }
  };

  return (
    <section id="lab" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-cyan" />
              <span>07 // Active Research</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Currently in My Lab
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-sm md:text-right">
            A transparent window into what I am reading, testing, and tinkering with this week.
          </p>
        </div>

        {/* Experiment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyInLab.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel flex flex-col justify-between hover:border-electric-cyan/30 transition-all space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {exp.topic}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusColor(exp.currentStatus)}`}>
                    {exp.currentStatus}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white leading-snug">
                  {exp.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-1.5">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-electric-cyan" />
                    Focus Area
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {exp.whatImLearning}
                  </p>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed">
                  <span className="font-mono text-slate-400 uppercase tracking-wider text-[10px] block mb-1">Target Milestone:</span>
                  {exp.resourceOrGoal}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
