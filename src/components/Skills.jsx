import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Wrench, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills = () => {
  const { skillsData } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState(skillsData[0].id);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-4 h-4 text-electric-cyan" />;
      case 'web-dev':
        return <Code2 className="w-4 h-4 text-electric-violet" />;
      case 'backend-db':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'core-concepts':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-sky-400" />;
      default:
        return <Code2 className="w-4 h-4 text-electric-cyan" />;
    }
  };

  const currentCategoryObj = skillsData.find((cat) => cat.id === selectedCategory) || skillsData[0];

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-violet font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-violet" />
              <span>02 // Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Interactive Skill Universe
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-sm md:text-right">
            Curated technologies I use in coursework, project development, and personal software builds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {skillsData.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setHoveredSkill(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-electric-violet to-electric-indigo text-white shadow-lg shadow-electric-violet/20 border border-electric-violet/50'
                    : 'bg-midnight-900/60 text-slate-300 hover:text-white hover:bg-midnight-850 border border-white/10'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{category.category}</span>
                <span className="text-[10px] font-mono opacity-70 ml-1">
                  ({category.skills.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Category Cards */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                    {getCategoryIcon(currentCategoryObj.id)}
                    {currentCategoryObj.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {currentCategoryObj.description}
                  </p>
                </div>
                <span className="hidden sm:inline-flex text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                  Hover to inspect details
                </span>
              </div>

              {/* Skill Badges Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentCategoryObj.skills.map((skill) => {
                  const isHovered = hoveredSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onClick={() => setHoveredSkill(skill)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                        isHovered
                          ? 'bg-midnight-800/90 border-electric-violet shadow-lg shadow-electric-violet/15 -translate-y-0.5'
                          : 'bg-midnight-950/60 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-semibold text-sm text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 leading-normal line-clamp-2">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Deep-Dive Inspector Panel */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-midnight-900/80 border border-white/10 glass-panel sticky top-28 space-y-5">
              
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs font-mono text-electric-cyan uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>Skill Spotlight</span>
              </div>

              {hoveredSkill ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-display font-bold text-white">
                      {hoveredSkill.name}
                    </h4>
                    {hoveredSkill.level && (
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-electric-violet/20 text-electric-violet border border-electric-violet/40">
                        {hoveredSkill.level}
                      </span>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-midnight-950/80 border border-white/10 space-y-2">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Practical Usage</p>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {hoveredSkill.description}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Included in active projects or coursework</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Maintained with authentic application experience. No arbitrary percentage bars.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                    <Code2 className="w-5 h-5 text-electric-violet" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-300">Select or hover a skill</p>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
                      See how I utilize each technology in real engineering work, scripts, or coursework.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Quick Legend */}
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-electric-cyan" /> Core Focus
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-electric-violet" /> Working Knowledge
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> Academic Foundation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Actively Exploring
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
