import React from 'react';
import { Sparkles, Calendar, Tag, Trophy, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceAchievements = () => {
  const { experiencesAndAchievements } = PORTFOLIO_DATA;

  // Gracefully return null if no items exist, keeping website polished
  if (!experiencesAndAchievements || experiencesAndAchievements.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-violet font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-violet" />
              <span>06 // In Action</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Experience, Hackathons & Events
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-sm md:text-right">
            Collaborative team sprints, technical events, and competitive participation.
          </p>
        </div>

        {/* Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiencesAndAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-electric-cyan bg-electric-cyan/10 px-2.5 py-1 rounded-lg border border-electric-cyan/20">
                    {item.badge || item.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {item.organization}
                  </p>
                </div>

                <ul className="space-y-2 pt-2">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-violet mt-2 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Footer */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                  >
                    {skill}
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
