import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  GraduationCap,
  MapPin,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Rocket,
  Compass
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const ORBIT = { cx: 200, cy: 148, rx: 168, ry: 64 };

const nodePoint = (deg) => {
  const t = (deg * Math.PI) / 180;
  return {
    x: ORBIT.cx + ORBIT.rx * Math.cos(t),
    y: ORBIT.cy + ORBIT.ry * Math.sin(t),
    depth: (Math.sin(t) + 1) / 2,
  };
};

const NODE_LAYOUT = {
  foundation: nodePoint(205),
  now: nodePoint(90),
  next: nodePoint(335),
};

const ScoreRing = ({ percent, value, suffix, label, accent }) => {
  const r = 38;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, percent));
  const stroke = accent === 'cyan' ? '#06b6d4' : accent === 'violet' ? '#8b5cf6' : '#34d399';

  return (
    <div className="relative w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={stroke}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * clamped) / 100}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="font-display text-lg font-bold text-white leading-none">{value}</p>
        {suffix ? <p className="text-[9px] font-mono text-slate-500 mt-0.5">{suffix}</p> : null}
        <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500 mt-1">{label}</p>
      </div>
    </div>
  );
};

export const Education = () => {
  const { education, personal } = PORTFOLIO_DATA;
  const current = education.find((item) => item.isCurrent) || education[0];
  const foundation = education.find((item) => !item.isCurrent);

  const nodes = useMemo(
    () => [
      {
        id: 'foundation',
        step: '01',
        kicker: 'Foundation',
        title: foundation?.degree ?? 'Diploma',
        field: foundation?.field,
        era: foundation?.yearRange,
        institution: foundation?.institution,
        campus: foundation?.campus,
        scoreValue: foundation?.scoreValue,
        scoreSuffix: foundation?.scoreSuffix || 'Distinction',
        scoreLabel: foundation?.scoreLabel,
        scorePercent: 93.65,
        accent: 'violet',
        icon: Compass,
        highlights: foundation?.highlights ?? [],
        coursework: foundation?.coursework ?? [],
        hint: 'Where the systems thinking started.',
      },
      {
        id: 'now',
        step: '02',
        kicker: 'Now',
        title: current?.degree ?? 'B.Tech',
        field: current?.field,
        era: current?.yearRange,
        institution: current?.institution,
        campus: current?.campus,
        scoreValue: current?.scoreValue,
        scoreSuffix: current?.scoreSuffix,
        scoreLabel: current?.scoreLabel,
        scorePercent: 89.8,
        accent: 'cyan',
        icon: GraduationCap,
        highlights: current?.highlights ?? [],
        coursework: current?.coursework ?? [],
        hint: 'Building AI systems while finishing the degree.',
        href: personal.leetcodeUrl,
      },
      {
        id: 'next',
        step: '03',
        kicker: 'Next',
        title: 'SDE · Python · AI/ML internships',
        field: 'Production software, not just demos',
        era: 'Looking ahead',
        institution: personal.statusBadge?.status,
        campus: personal.location,
        scoreValue: '→',
        scoreSuffix: '',
        scoreLabel: 'Aim',
        scorePercent: 28,
        accent: 'emerald',
        icon: Rocket,
        highlights: [
          'Contribute to production Python, SDE, or AI/ML teams.',
          'Learn from strong mentors and ship work that outlives a demo.',
          'Keep climbing DSA — 83+ LeetCode, aiming for 200+.',
        ],
        coursework: ['LangChain / RAG', 'Backend APIs', 'ML systems', 'Clean UI'],
        hint: 'The orbit continues — internships and real products.',
      },
    ],
    [current, foundation, personal]
  );

  const [activeId, setActiveId] = useState('now');
  const [peekCourses, setPeekCourses] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef(null);
  const active = nodes.find((n) => n.id === activeId) || nodes[1];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        x: Math.max(Math.min(nx * 14, 12), -12),
        y: Math.max(Math.min(ny * 10, 8), -8),
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setPeekCourses(false);
  }, [activeId]);

  const accentText =
    active.accent === 'cyan'
      ? 'text-electric-cyan'
      : active.accent === 'violet'
        ? 'text-electric-violet'
        : 'text-emerald-400';
  const accentBorder =
    active.accent === 'cyan'
      ? 'border-electric-cyan/40 bg-electric-cyan/10'
      : active.accent === 'violet'
        ? 'border-electric-violet/40 bg-electric-violet/10'
        : 'border-emerald-400/40 bg-emerald-400/10';
  const panelBorder =
    active.accent === 'cyan'
      ? 'border-electric-cyan/30 shadow-[0_24px_80px_-32px_rgba(6,182,212,0.55)]'
      : active.accent === 'violet'
        ? 'border-electric-violet/30 shadow-[0_24px_80px_-32px_rgba(139,92,246,0.5)]'
        : 'border-emerald-400/30 shadow-[0_24px_80px_-32px_rgba(52,211,153,0.4)]';

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-20 left-[18%] w-[28rem] h-52 bg-electric-violet/12 blur-[130px] rounded-full" />
        <div className="absolute bottom-16 right-[12%] w-[22rem] h-44 bg-electric-cyan/12 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-electric-cyan" />
              <span>04 // Education</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Academic Orbit
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Three chapters on one path. Select a world — details unfold only for that milestone.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Academic chapters">
            {nodes.map((node) => {
              const isActive = node.id === activeId;
              return (
                <button
                  key={node.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(node.id)}
                  className={`px-3.5 py-2 rounded-full text-[11px] font-mono uppercase tracking-widest border transition-colors ${isActive
                    ? `${accentBorder} ${accentText}`
                    : 'border-white/10 text-slate-500 hover:text-slate-200 hover:border-white/20'
                    }`}
                >
                  {node.step} · {node.kicker}
                </button>
              );
            })}
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          <div
            ref={stageRef}
            className="xl:col-span-5 relative rounded-3xl border border-white/10 bg-midnight-900/40 overflow-hidden min-h-[320px] sm:min-h-[380px]"
            style={{ perspective: '1200px' }}
          >
            <div
              className="absolute inset-0 opacity-70 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 70% 55% at 50% 58%, rgba(6,182,212,0.16), transparent 70%)',
              }}
            />

            <div
              className="relative h-full min-h-[320px] sm:min-h-[380px] transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${8 + tilt.y * 0.4}deg) rotateY(${tilt.x * 0.5}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="orbitStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
                  </linearGradient>
                  <linearGradient id="orbitInner" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.12" />
                  </linearGradient>
                  <filter id="orbitGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <ellipse
                  cx={ORBIT.cx}
                  cy={ORBIT.cy}
                  rx={ORBIT.rx}
                  ry={ORBIT.ry}
                  fill="none"
                  stroke="url(#orbitStroke)"
                  strokeWidth="2.2"
                  filter="url(#orbitGlow)"
                />
                <ellipse
                  cx={ORBIT.cx}
                  cy={ORBIT.cy}
                  rx={ORBIT.rx - 22}
                  ry={ORBIT.ry - 14}
                  fill="none"
                  stroke="url(#orbitInner)"
                  strokeWidth="1"
                  strokeDasharray="5 10"
                  className="animate-academic-travel motion-reduce:animate-none origin-center"
                  style={{ transformOrigin: `${ORBIT.cx}px ${ORBIT.cy}px` }}
                />
                <ellipse
                  cx={ORBIT.cx}
                  cy={ORBIT.cy + 4}
                  rx={ORBIT.rx}
                  ry={10}
                  fill="rgba(6,182,212,0.08)"
                />
              </svg>

              <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <div className="mx-auto mb-1 w-16 h-16 rounded-full bg-gradient-to-b from-electric-cyan/30 to-electric-violet/10 blur-md" />
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-slate-500 -mt-12">Chapter</p>
                <p className="font-display text-3xl font-bold text-white leading-none">{active.step}</p>
                <p className={`mt-1 text-[11px] font-mono uppercase tracking-widest ${accentText}`}>
                  {active.kicker}
                </p>
              </div>

              {nodes.map((node) => {
                const layout = NODE_LAYOUT[node.id];
                const isActive = node.id === activeId;
                const scale = 0.82 + layout.depth * 0.28;
                const sphere =
                  node.accent === 'cyan'
                    ? 'from-electric-cyan to-electric-indigo shadow-[0_0_28px_rgba(6,182,212,0.55)]'
                    : node.accent === 'violet'
                      ? 'from-electric-violet to-electric-indigo shadow-[0_0_24px_rgba(139,92,246,0.5)]'
                      : 'from-emerald-400 to-teal-600 shadow-[0_0_24px_rgba(52,211,153,0.45)]';

                return (
                  <button
                    key={node.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(node.id)}
                    className="absolute z-10 -ml-7 -mt-7 focus:outline-none"
                    style={{
                      left: `${(layout.x / 400) * 100}%`,
                      top: `${(layout.y / 300) * 100}%`,
                      transform: `scale(${isActive ? scale * 1.18 : scale})`,
                      zIndex: isActive ? 20 : Math.round(layout.depth * 10),
                    }}
                  >
                    {isActive && (
                      <span
                        className={`absolute -inset-2 rounded-full border ${node.accent === 'cyan'
                          ? 'border-electric-cyan/50'
                          : node.accent === 'violet'
                            ? 'border-electric-violet/50'
                            : 'border-emerald-400/50'
                          } animate-academic-ring-pulse motion-reduce:animate-none`}
                      />
                    )}
                    <span
                      className={`relative flex w-14 h-14 items-center justify-center rounded-full bg-gradient-to-br text-white ${sphere} ${isActive ? 'ring-2 ring-white/30' : 'opacity-80 hover:opacity-100'
                        }`}
                    >
                      <node.icon className="w-5 h-5" />
                    </span>
                    <span
                      className={`mt-2 block text-center text-[10px] font-mono uppercase tracking-widest ${isActive ? accentText : 'text-slate-500'
                        }`}
                    >
                      {node.kicker}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <article
            key={active.id}
            className={`xl:col-span-7 relative rounded-3xl border bg-midnight-900/60 backdrop-blur-xl overflow-hidden ${panelBorder}`}
          >
            <div
              className={`h-px w-full ${active.accent === 'cyan'
                ? 'bg-gradient-to-r from-electric-cyan via-electric-indigo to-transparent'
                : active.accent === 'violet'
                  ? 'bg-gradient-to-r from-electric-violet to-transparent'
                  : 'bg-gradient-to-r from-emerald-400 to-transparent'
                }`}
            />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${accentBorder} ${accentText}`}
                    >
                      <Sparkles className="w-3 h-3" />
                      {active.kicker}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{active.era}</span>
                  </div>
                  <h3 className="mt-3 text-2xl sm:text-[1.7rem] font-display font-bold text-white tracking-tight leading-tight">
                    {active.title}
                  </h3>
                  <p className={`mt-1 text-sm font-medium ${accentText}`}>{active.field}</p>
                </div>
                {active.id !== 'next' ? (
                  <ScoreRing
                    percent={active.scorePercent}
                    value={active.scoreValue}
                    suffix={active.scoreSuffix}
                    label={active.scoreLabel}
                    accent={active.accent}
                  />
                ) : (
                  <div className={`w-[96px] h-[96px] rounded-full border ${accentBorder} flex items-center justify-center`}>
                    <Rocket className={`w-7 h-7 ${accentText}`} />
                  </div>
                )}
              </div>

              <p className="mt-4 text-sm text-slate-400 leading-relaxed">{active.hint}</p>

              {active.institution && (
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{active.institution}</p>
              )}
              {active.campus && (
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  {active.campus}
                </p>
              )}

              <ul className="mt-6 space-y-3">
                {active.highlights.map((line, i) => (
                  <li key={line} className="flex gap-3">
                    <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
                      <span
                        className={`relative inline-flex h-2 w-2 rounded-full ${i === 0 ? 'bg-electric-cyan' : i === 1 ? 'bg-electric-violet' : 'bg-emerald-400'
                          }`}
                      />
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>

              {active.coursework.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/8">
                  <button
                    type="button"
                    onClick={() => setPeekCourses((open) => !open)}
                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                    aria-expanded={peekCourses}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    {peekCourses ? 'Hide coursework' : 'Peek coursework'}
                    <span className="text-slate-600">({active.coursework.length})</span>
                  </button>
                  {peekCourses && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {active.href && (
                <a
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-electric-cyan hover:text-white transition-colors"
                >
                  Continue the DSA orbit on LeetCode
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
