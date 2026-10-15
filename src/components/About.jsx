import React from 'react';
import { Compass, Lightbulb, Target, Rocket, GraduationCap, Laptop } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-cyan" />
              <span>01 // Discover</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              My Story, Not Just My Bio
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-xs md:text-right">
            Curious by nature. Driven by logic and engineering impact.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            <div className="p-8 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel relative overflow-hidden space-y-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-violet/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-display font-semibold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-electric-cyan" />
                Why Information Technology?
              </h3>

              {personal.bioIntro.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-electric-cyan" /> Problem Solver
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-electric-violet" /> Python Enthusiast
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Continuous Learner
                </span>
              </div>
            </div>

            {/* Guiding Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-midnight-900/40 border border-white/10 hover:border-electric-cyan/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-electric-cyan/10 flex items-center justify-center text-electric-cyan mb-3">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Curiosity-Led Development</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Always asking how systems work behind the abstractions, from low-level memory in C to Python standard libraries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-midnight-900/40 border border-white/10 hover:border-electric-violet/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-electric-violet/10 flex items-center justify-center text-electric-violet mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Clarity & Precision</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Writing clean, well-commented code with methodical unit testing and structured algorithm design.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Snapshot Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Profile Photo & Bio Snapshot Card */}
            <div className="p-6 rounded-2xl bg-midnight-900/80 border border-white/10 glass-panel flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-electric-violet/40 shrink-0 shadow-lg shadow-electric-violet/10">
                <img 
                  src="/shravanikale_img.jpeg" 
                  alt="Shravani Kale"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase text-electric-cyan tracking-wider">
                  Engineer & Builder
                </span>
                <h4 className="text-base font-display font-bold text-white truncate">
                  Shravani Ravi Kale
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Latur, MH • 8.98 CGPA
                </p>
              </div>
            </div>

            {/* Current Academic Status Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-midnight-900/80 to-midnight-850/80 border border-white/10 glass-panel">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-electric-violet tracking-wider">
                    Academic Standing
                  </span>
                  <h3 className="text-lg font-display font-semibold text-white mt-1">
                    {personal.educationYear}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {personal.degree} in {personal.major}
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-electric-violet/10 text-electric-violet">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Currently Exploring / Lab Snapshot */}
            <div className="p-6 rounded-2xl bg-midnight-900/60 border border-white/10 glass-panel space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-display font-semibold text-white flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-electric-cyan" />
                  Currently Exploring
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-midnight-950/60 border border-white/5">
                  <p className="text-xs font-semibold text-slate-200">Backend Development with Python & Flask</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Creating RESTful microservices and database ORM integrations.</p>
                </div>

                <div className="p-3 rounded-xl bg-midnight-950/60 border border-white/5">
                  <p className="text-xs font-semibold text-slate-200">Data Structures & Competitive Problem Solving</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Practicing tree traversals, dynamic programming, and complexity optimization.</p>
                </div>

                <div className="p-3 rounded-xl bg-midnight-950/60 border border-white/5">
                  <p className="text-xs font-semibold text-slate-200">Modern Frontend & UI Craft</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Responsive design, React state architecture, and accessible micro-interactions.</p>
                </div>
              </div>
            </div>

            {/* Professional Aspirations Card */}
            <div className="p-6 rounded-2xl bg-midnight-900/60 border border-white/10 glass-panel">
              <h3 className="text-sm font-display font-semibold text-white flex items-center gap-2 mb-2">
                <Laptop className="w-4 h-4 text-amber-400" />
                Aspirations & Future Direction
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aspiring to join dynamic engineering teams Software Engineering or Backend Developer Intern, where I can contribute to mission-critical codebases, learn from experienced mentors, and turn complex real-world requirements into clean, scalable software.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
