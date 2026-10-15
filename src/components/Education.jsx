import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-violet font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-violet" />
              <span>04 // Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Education & Milestones
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-sm md:text-right">
            Rigorous engineering curriculum, core CS subjects, and structured coursework.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Glowing Timeline Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 ${
                  item.isCurrent
                    ? 'border-electric-cyan bg-midnight-950 shadow-lg shadow-electric-cyan/50 ring-4 ring-electric-cyan/20'
                    : 'border-slate-500 bg-midnight-950'
                }`}
              />

              {/* Milestone Content Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel hover:border-white/20 transition-all space-y-5">
                
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-electric-cyan mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.yearRange}</span>
                      {item.isCurrent && (
                        <span className="bg-electric-cyan/15 text-electric-cyan px-2 py-0.5 rounded-full text-[10px] font-semibold border border-electric-cyan/30">
                          Current Milestone
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-0.5">
                      {item.field} • <span className="text-slate-400">{item.institution}</span>
                    </p>
                  </div>

                  {item.gradeOrStatus && (
                    <div className="text-xs font-mono text-slate-400 bg-midnight-950/80 px-3 py-1.5 rounded-xl border border-white/10">
                      {item.gradeOrStatus}
                    </div>
                  )}
                </div>

                {/* Coursework Modules */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-electric-violet" />
                    Key Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-mono px-3 py-1 rounded-xl bg-midnight-950/80 text-slate-300 border border-white/5 hover:border-electric-violet/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights / Academic Notes */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-4 border-t border-white/5 space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
