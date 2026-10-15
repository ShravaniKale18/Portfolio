import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, ShieldCheck, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient gradient lights behind content */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-electric-violet/20 via-electric-indigo/20 to-electric-cyan/20 blur-[130px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-cyan/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy - Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-midnight-900/90 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {personal.statusBadge.status}
              </span>
            </div>

            {/* Greeting */}
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-electric-cyan">
                Hey, I'm {personal.name.split(' ')[0]}
              </p>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
                I turn <span className="text-gradient-electric">curiosity</span> into code, and ideas into experiences.
              </h1>
            </div>

            {/* Subtitle / Positioning */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personal.heroSubtitle}
            </p>

            {/* Call to Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-violet to-electric-indigo text-white font-medium text-sm shadow-lg shadow-electric-violet/25 hover:shadow-electric-violet/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-midnight-900/80 hover:bg-midnight-850 text-slate-200 hover:text-white font-medium text-sm border border-white/15 backdrop-blur-md hover:border-white/30 transition-all"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-electric-cyan" />
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono text-slate-400 hover:text-electric-cyan transition-colors"
              >
                <Terminal className="w-4 h-4" />
                <span>View Tech Stack</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-white">3rd Year</p>
                <p className="text-xs text-slate-400">IT Engineering</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-electric-cyan">Python & Web</p>
                <p className="text-xs text-slate-400">Core Focus</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-electric-violet">Curious</p>
                <p className="text-xs text-slate-400">Builder Mindset</p>
              </div>
            </div>

          </div>

          {/* Abstract 3D Digital Artwork & Developer Card - Right Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Glowing Orb Backdrop */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/0 shadow-2xl">
              <div className="w-full h-full rounded-[23px] bg-midnight-900/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden">
                
                {/* Decorative background grid */}
                <div className="absolute inset-0 ambient-dot-grid opacity-40 pointer-events-none" />

                {/* Top Badge: Terminal Prompt */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">shravani@portfolio:~$</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-electric-violet/20 text-electric-violet px-2 py-0.5 rounded border border-electric-violet/30">
                    Live Status
                  </span>
                </div>

                {/* Center Graphic: Digital Avatar / Geometric Core */}
                <div className="my-6 relative flex flex-col items-center justify-center text-center z-10">
                  
                  {/* Concentric rotating rings */}
                  <div className="relative w-36 h-36 rounded-full border border-dashed border-electric-violet/40 flex items-center justify-center animate-spin" style={{ animationDuration: '25s' }}>
                    <div className="w-28 h-28 rounded-full border border-electric-cyan/30 flex items-center justify-center">
                    </div>
                  </div>

                  {/* Center Monogram / Portrait Avatar */}
                  <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-midnight-800 to-midnight-950 border-2 border-electric-violet/50 shadow-inner flex flex-col items-center justify-center">
                    <Sparkles className="w-6 h-6 text-electric-cyan mb-1 animate-pulse" />
                    <span className="font-display font-bold text-sm text-white">SK.DEV</span>
                  </div>

                  <div className="mt-5 space-y-1">
                    <p className="font-display font-semibold text-lg text-white">Shravani Kale</p>
                    <p className="text-xs text-slate-400 font-mono">B.E. Information Technology</p>
                  </div>
                </div>

                {/* Bottom Stats / Floating Cards */}
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight-950/70 border border-white/10 text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Code className="w-3.5 h-3.5 text-electric-cyan" />
                      Primary Languages
                    </span>
                    <span className="text-slate-200 font-semibold">Python, C++, JS</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight-950/70 border border-white/10 text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Academic Level
                    </span>
                    <span className="text-emerald-400 font-medium">3rd Year Engineer</span>
                  </div>
                </div>

                {/* Corner ambient glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-electric-violet/30 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>

            {/* Floating micro-pill badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-3 p-3 rounded-2xl bg-midnight-900/90 border border-white/15 backdrop-blur-md shadow-xl text-xs z-20">
              <div className="p-2 rounded-xl bg-electric-cyan/20 text-electric-cyan">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium text-white">Currently Learning</p>
                <p className="text-[11px] text-slate-400 font-mono">Flask, APIs & Advanced DSA</p>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 sm:pt-20 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-electric-cyan transition-colors group"
            aria-label="Scroll to About Section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-electric-cyan transition-colors">
              Explore My Journey
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1 group-hover:border-electric-cyan transition-colors">
              <div className="w-1.5 h-2.5 bg-electric-cyan rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
