import React, { useState } from 'react';
import {
  Compass,
  Lightbulb,
  Target,
  Rocket,
  GraduationCap,
  Laptop,
  Sparkles,
  Code2,
  Brain,
  Cpu,
  Terminal,
  Layers,
  CheckCircle2,
  ChevronRight,
  Workflow
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/**
 * About / Discover Component: "My Story, Not Just My Bio"
 * A premium, editorial narrative section blending authentic engineering storytelling,
 * interactive engineering pillar tabs, and a live technical blueprint card.
 */
export const About = () => {
  const { personal } = PORTFOLIO_DATA;

  // Active perspective tab on the right side
  const [activeTab, setActiveTab] = useState('what-i-build'); // 'what-i-build' | 'how-i-think' | 'whats-next'

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">

      {/* Subtle ambient lighting and constellation filaments */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[380px] bg-electric-violet/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/5 w-[500px] h-[350px] bg-electric-cyan/10 blur-[140px] rounded-full" />

        {/* Faint constellation connecting thread */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 100 250 Q 350 150 600 320 T 1150 200"
            fill="none"
            stroke="url(#discoverLineGradient)"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <defs>
            <linearGradient id="discoverLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2.5">
              <span className="w-8 h-[1px] bg-electric-cyan" />
              <span>01 // DISCOVER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              My Story, Not Just My Bio
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2 max-w-xl">
              Curious by nature. Driven by mathematical logic and engineering impact.
            </p>
          </div>

          {/* Quick Identity Monogram Tag */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-midnight-950/80 border border-white/10 flex items-center gap-2.5 text-xs font-mono shadow-inner">
              <span className="w-2 h-2 rounded-full bg-electric-cyan shadow-sm shadow-electric-cyan" />
              <span className="text-slate-300">Third-Year B.Tech IT • SGGSIE&T</span>
            </div>
          </div>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT COLUMN: Narrative Journey & Guiding Principles */}
          <div className="lg:col-span-7 space-y-8 text-slate-300">

            {/* The Engineering Narrative Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-midnight-900/70 border border-white/15 glass-panel relative overflow-hidden space-y-6 shadow-xl">

              {/* Subtle top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-cyan via-electric-violet/50 to-transparent" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-electric-violet/10 rounded-full blur-3xl pointer-events-none" />

              {/* Pull quote headline */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-electric-cyan flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Engineering Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                  Turning complex logic into clean, dependable software.
                </h3>
              </div>

              {/* Narrative Chapters */}
              <div className="space-y-5 text-sm sm:text-base leading-relaxed font-light text-slate-200">
                <p>
                  I am a third-year Information Technology Engineering student with an innate curiosity for how software transforms abstract mathematical models and logic into tangible, reliable tools that empower real users.
                </p>
                <p>
                  My engineering journey began with low-level systems programming in C and C++, where I developed a deep appreciation for memory safety, algorithmic complexity, and structured problem-solving. Graduating at the top of my Polytechnic department with a <strong className="text-emerald-400 font-semibold font-mono">93.65% distinction</strong> cemented my conviction to pursue computer engineering with relentless rigor.
                </p>
                <p>
                  Today, I focus heavily on <strong className="text-electric-cyan font-semibold">AI/ML architectures, LangChain RAG pipelines, and full-stack software</strong>. Whether training predictive machine learning models or designing intuitive, accessible web interfaces, I thrive at the crossroads of computational rigor and polished user experience.
                </p>
              </div>

              {/* Highlights Ribbon */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-midnight-950/80 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-electric-cyan shadow-sm shadow-electric-cyan" />
                  Problem Solver
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-midnight-950/80 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-electric-violet shadow-sm shadow-electric-violet" />
                  Python & AI Architect
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-midnight-950/80 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                  Distinction Scholar
                </span>
              </div>
            </div>

            {/* Core Guiding Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="p-6 rounded-2xl bg-midnight-900/50 border border-white/10 hover:border-electric-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/5 group">
                <div className="w-10 h-10 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan mb-4 group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-base font-display font-semibold text-white mb-1.5 group-hover:text-electric-cyan transition-colors">
                  Curiosity-Led Development
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Always asking how systems function beneath the abstraction layer—from low-level pointers and cache efficiency to high-level vector embeddings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-midnight-900/50 border border-white/10 hover:border-electric-violet/40 transition-all duration-300 hover:shadow-lg hover:shadow-electric-violet/5 group">
                <div className="w-10 h-10 rounded-xl bg-electric-violet/10 border border-electric-violet/20 flex items-center justify-center text-electric-violet mb-4 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-display font-semibold text-white mb-1.5 group-hover:text-electric-violet transition-colors">
                  Precision & Clean Architecture
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Writing clean, modular, and maintainable code with disciplined algorithmic complexity analysis, clear documentation, and structured testing.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Blueprint & Focus Matrix */}
          <div className="lg:col-span-5 space-y-6">

            {/* Engineer's Telemetry & Status Blueprint Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-midnight-900/80 border border-white/15 glass-panel relative overflow-hidden shadow-xl space-y-6">

              {/* Card Header: Live Telemetry */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-electric-cyan" />
                  <span className="text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
                    Engineer Profile & Coordinates
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Coordinates Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Current Standing</span>
                  <p className="text-sm font-display font-bold text-white">Third Year (TE)</p>
                  <p className="text-[11px] font-mono text-electric-cyan">B.Tech IT • SGGSIE&T</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Academic Merit</span>
                  <p className="text-sm font-display font-bold text-white">8.98 / 10 CGPA</p>
                  <p className="text-[11px] font-mono text-emerald-400">Distinction Standing</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Problem Solving</span>
                  <p className="text-sm font-display font-bold text-white">100+ Problems</p>
                  <p className="text-[11px] font-mono text-electric-violet">LeetCode Solved</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Location Base</span>
                  <p className="text-sm font-display font-bold text-white">Latur, MH, India</p>
                  <p className="text-[11px] font-mono text-slate-400">IST / UTC +5:30</p>
                </div>
              </div>

              {/* Core Technical Capabilities Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Core Engineering Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Python Architecture',
                    'LangChain RAG',
                    'Vector Embeddings',
                    'C & C++ Fundamentals',
                    'Data Structures & Algos',
                    'React & Modern UI',
                    'Relational DBMS',
                    'Scikit-learn'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Interactive Engineering Pillars Tabbed Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel space-y-6">

              {/* Pillar Selector Tabs */}
              <div className="flex rounded-2xl bg-midnight-950/80 p-1 border border-white/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('what-i-build')}
                  className={`flex-1 py-2 px-3 rounded-xl transition-all font-medium ${activeTab === 'what-i-build'
                    ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  What I Build
                </button>
                {/* <button
                  type="button"
                  onClick={() => setActiveTab('how-i-think')}
                  className={`flex-1 py-2 px-3 rounded-xl transition-all font-medium ${activeTab === 'how-i-think'
                      ? 'bg-electric-violet/20 text-electric-violet border border-electric-violet/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  How I Think
                </button> */}
                <button
                  type="button"
                  onClick={() => setActiveTab('whats-next')}
                  className={`flex-1 py-2 px-3 rounded-xl transition-all font-medium ${activeTab === 'whats-next'
                    ? 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  What's Next
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[160px] flex flex-col justify-between">

                {activeTab === 'what-i-build' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Brain className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">RAG Pipelines & AI Query Engines</span>
                        <p className="text-slate-400 mt-0.5 font-light leading-relaxed">
                          Intelligent systems that parse codebases and documentation using chunking, ChromaDB vector indexing, and local LLMs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Workflow className="w-4 h-4 text-electric-violet shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">Multi-Agent Workflow Orchestration</span>
                        <p className="text-slate-400 mt-0.5 font-light leading-relaxed">
                          Autonomous agent swarms executing multi-step research, validation, and structured report synthesis.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'how-i-think' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Code2 className="w-4 h-4 text-electric-violet shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">Algorithmic Rigor & Clean Abstractions</span>
                        <p className="text-slate-400 mt-0.5 font-light leading-relaxed">
                          Evaluating time and space complexity upfront. Preferring transparent, testable architectures over clever hacks.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">Full-Stack Empathy</span>
                        <p className="text-slate-400 mt-0.5 font-light leading-relaxed">
                          Understanding how backend database query performance impacts frontend responsiveness and user perceived latency.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'whats-next' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Rocket className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block">Engineering Internship Aspirations</span>
                        <p className="text-slate-400 mt-0.5 font-light leading-relaxed">
                          Seeking a Software Engineering (SDE) or AI/ML Internship to contribute to production software, learn under seasoned mentors, and solve high-impact technical problems.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-midnight-950/70 border border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300">Availability: 2026 Season</span>
                      <a
                        href="#contact"
                        className="text-electric-cyan hover:underline flex items-center gap-1 font-medium"
                      >
                        Let's Talk <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

