import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Sparkles, 
  Brain, 
  Code2, 
  Layout, 
  Cpu, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

/**
 * Hero Component — "Personal Orbit"
 * Features Shravani's authentic profile photograph framed within
 * concentric cyan & violet orbital rings, subtle satellite nodes,
 * an illuminated cybernetic base, and floating technology markers (AI/ML, Web Dev, Python, Systems).
 */
export const Hero = () => {
  const { personal } = PORTFOLIO_DATA;

  // Gentle pointer-responsive parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const orbitRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      if (!orbitRef.current) return;
      const rect = orbitRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized delta from center (-1 to 1) with dampening
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setMousePos({
        x: Math.max(Math.min(deltaX * 12, 14), -14),
        y: Math.max(Math.min(deltaY * 12, 14), -14)
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glow & atmospheric depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-electric-violet/15 via-electric-indigo/15 to-electric-cyan/20 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[420px] h-[420px] bg-electric-cyan/10 blur-[130px] -z-10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Identity, Headline, Supporting Copy & Functional CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left z-10">
            
            {/* Top Row: Availability Badge & Compact Category Tag */}
            <div className="flex flex-wrap items-center gap-3">
              {personal.statusBadge?.isAvailable && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900/90 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-400">
                    {personal.statusBadge.status}
                  </span>
                </div>
              )}

              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 tracking-wider">
                B.TECH IT · AI · SOFTWARE
              </span>
            </div>

            {/* Headline and Identity */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-electric-cyan">
                <span className="w-6 h-[1px] bg-electric-cyan" />
                <span>SHRAVANI KALE</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
                I turn <span className="text-gradient-electric">curiosity</span> into code.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-light">
              Exploring AI, building intelligent applications, and creating meaningful digital experiences.
            </p>

            {/* Functional Call To Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-electric-violet to-electric-indigo text-white font-medium text-sm shadow-lg shadow-electric-violet/25 hover:shadow-electric-violet/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-midnight-900/80 hover:bg-midnight-850 text-slate-200 hover:text-white font-medium text-sm border border-white/15 backdrop-blur-md hover:border-white/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-electric-cyan" />
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-3 py-3 text-xs font-mono text-slate-400 hover:text-electric-cyan transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>View Tech Stack</span>
              </a>
            </div>

            {/* Minimal Verified Academic & Track Summary */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-white">B.Tech IT</p>
                <p className="text-[11px] font-mono text-slate-400">Third Year • TE</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-electric-cyan">CGPA 8.98</p>
                <p className="text-[11px] font-mono text-slate-400">Distinction</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold text-electric-violet">83+ DSA</p>
                <p className="text-[11px] font-mono text-slate-400">LeetCode Solved</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: "PERSONAL ORBIT" INTERACTIVE PORTRAIT EXPERIENCE */}
          <div 
            ref={orbitRef}
            className="lg:col-span-5 flex items-center justify-center relative select-none"
            style={{
              transform: `perspective(1000px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* The Central Orbital Stage Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">

              {/* Ambient radial halo behind portrait */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-violet/25 via-electric-indigo/20 to-electric-cyan/25 blur-3xl rounded-full pointer-events-none" />

              {/* OUTER ORBITAL RING 1 (Cyan / Elliptical Celestial Orbit) */}
              <div 
                className="absolute w-[330px] h-[330px] sm:w-[410px] sm:h-[410px] rounded-full border border-electric-cyan/25 border-dashed animate-orbit-slow pointer-events-none"
              >
                {/* Traveling Satellite Node 1 (Cyan Pulsar) */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-electric-cyan/30 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-electric-cyan shadow-lg shadow-electric-cyan" />
                </div>

                {/* Satellite Node 2 (Opposite Node) */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-electric-cyan/70 shadow-sm shadow-electric-cyan" />
                </div>
              </div>

              {/* INNER ORBITAL RING 2 (Violet / Counter-rotating Orbit) */}
              <div 
                className="absolute w-[275px] h-[275px] sm:w-[340px] sm:h-[340px] rounded-full border border-electric-violet/30 animate-orbit-reverse pointer-events-none"
              >
                {/* Traveling Satellite Node 3 (Violet Pulsar) */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-electric-violet/40 animate-ping absolute" />
                  <div className="w-2.5 h-2.5 rounded-full bg-electric-violet shadow-md shadow-electric-violet" />
                </div>

                {/* Traveling Satellite Node 4 (Left Node) */}
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-electric-indigo/80" />
                </div>
              </div>

              {/* FINE CELESTIAL AXIS / DECORATIVE RETICLE */}
              <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none animate-pulse-subtle" />

              {/* PROMINENT CIRCULAR PORTRAIT FRAME (Shravani Kale's photograph) */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1.5 bg-gradient-to-br from-electric-cyan/60 via-electric-indigo/30 to-electric-violet/60 shadow-2xl shadow-electric-violet/20 z-10 group">
                
                {/* Inner Glow Rim */}
                <div className="w-full h-full rounded-full overflow-hidden bg-midnight-950 border-2 border-white/20 relative shadow-inner">
                  
                  <img
                    src="/shravanikale_img.jpeg"
                    alt="Shravani Kale - Profile Portrait"
                    className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    onError={(e) => {
                      // Graceful fallback to src/assets if public path fails
                      if (!e.currentTarget.dataset.fallbackTried) {
                        e.currentTarget.dataset.fallbackTried = "true";
                        e.currentTarget.src = "/src/assets/shravanikale_img.jpeg";
                      }
                    }}
                  />

                  {/* Gentle gradient overlay on image border */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* Orbit Core Aura */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-electric-cyan/20 to-electric-violet/20 blur-md -z-10 group-hover:blur-lg transition-all duration-500" />
              </div>

              {/* ILLUMINATED CYBERNETIC GROUNDING PLATFORM (Below the portrait) */}
              <div 
                className="absolute -bottom-8 sm:-bottom-10 w-[240px] sm:w-[300px] h-12 rounded-[100%] bg-gradient-to-t from-electric-cyan/20 via-electric-violet/10 to-transparent blur-md pointer-events-none" 
                aria-hidden="true"
              />
              <div 
                className="absolute -bottom-6 sm:-bottom-7 w-[200px] sm:w-[260px] h-6 rounded-[100%] border border-electric-cyan/30 pointer-events-none" 
                aria-hidden="true"
              />

              {/* ============================================================== */}
              {/* 4 FLOATING TECHNOLOGY MARKERS (Carefully positioned outside face) */}
              {/* ============================================================== */}

              {/* 1. TOP-RIGHT: AI / ML */}
              <div 
                className="absolute -top-1 sm:top-2 right-0 sm:-right-4 z-20 transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`
                }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-midnight-950/90 border border-electric-cyan/40 backdrop-blur-md shadow-lg shadow-electric-cyan/15 group/tag cursor-default">
                  <div className="p-1 rounded-lg bg-electric-cyan/15 text-electric-cyan">
                    <Brain className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 leading-tight">Focus</span>
                    <span className="block text-xs font-mono font-semibold text-electric-cyan leading-tight">AI / ML</span>
                  </div>
                </div>
              </div>

              {/* 2. TOP-LEFT: Web Development */}
              <div 
                className="absolute top-4 sm:top-6 -left-3 sm:-left-6 z-20 transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `translate3d(${-mousePos.x * 0.7}px, ${-mousePos.y * 0.7}px, 0)`
                }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-midnight-950/90 border border-electric-violet/40 backdrop-blur-md shadow-lg shadow-electric-violet/15 group/tag cursor-default">
                  <div className="p-1 rounded-lg bg-electric-violet/15 text-electric-violet">
                    <Layout className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 leading-tight">Stack</span>
                    <span className="block text-xs font-mono font-semibold text-electric-violet leading-tight">Web Development</span>
                  </div>
                </div>
              </div>

              {/* 3. BOTTOM-LEFT: Python */}
              <div 
                className="absolute bottom-6 sm:bottom-8 -left-4 sm:-left-8 z-20 transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `translate3d(${mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px, 0)`
                }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-midnight-950/90 border border-sky-400/40 backdrop-blur-md shadow-lg shadow-sky-400/15 group/tag cursor-default">
                  <div className="p-1 rounded-lg bg-sky-400/15 text-sky-400">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 leading-tight">Core</span>
                    <span className="block text-xs font-mono font-semibold text-sky-400 leading-tight">Python</span>
                  </div>
                </div>
              </div>

              {/* 4. BOTTOM-RIGHT: Systems */}
              <div 
                className="absolute bottom-4 sm:bottom-6 right-0 sm:-right-4 z-20 transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `translate3d(${-mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`
                }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-midnight-950/90 border border-emerald-400/40 backdrop-blur-md shadow-lg shadow-emerald-400/15 group/tag cursor-default">
                  <div className="p-1 rounded-lg bg-emerald-400/15 text-emerald-400">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 leading-tight">Engineering</span>
                    <span className="block text-xs font-mono font-semibold text-emerald-400 leading-tight">Systems</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="pt-14 sm:pt-20 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-electric-cyan transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-electric-cyan transition-colors">
              Explore My Journey
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-electric-cyan transition-colors">
              <div className="w-1.5 h-2 bg-electric-cyan rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
