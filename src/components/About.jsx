import React, { useEffect, useState } from 'react';
import {
  Compass,
  Lightbulb,
  Target,
  Rocket,
  Sparkles,
  Code2,
  Brain,
  Cpu,
  Layers,
  ChevronRight,
  Workflow,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
  Clock
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const CHAPTERS = [
  {
    id: 'origin',
    step: '01',
    era: '2021 — 2024',
    title: 'The foundation',
    kicker: 'Diploma · C / C++ · Distinction',
    body: 'My engineering journey began with low-level systems programming in C and C++, where I learned memory, complexity, and structured problem-solving. Graduating at the top of my Polytechnic department with a 93.65% distinction locked in the habit of finishing things rigorously.',
    accent: 'violet',
  },
  {
    id: 'now',
    step: '02',
    era: '2025 — now',
    title: 'Building with AI',
    kicker: 'B.Tech IT · RAG · Full-stack',
    body: 'Today I turn abstract models into tools people can actually use — LangChain RAG pipelines, predictive ML systems, and clean web interfaces. I care as much about why a model answered as I do about the answer itself.',
    accent: 'cyan',
  },
  {
    id: 'next',
    step: '03',
    era: 'Next chapter',
    title: 'Ship in production',
    kicker: 'SDE · Python · AI/ML internships',
    body: 'I am looking for a Software Engineering, Python, or AI/ML internship where I can contribute to production software, learn from strong mentors, and solve problems that outlive a demo.',
    accent: 'emerald',
  },
];

const PILLARS = [
  {
    id: 'what-i-build',
    label: 'What I build',
    items: [
      {
        icon: Brain,
        color: 'text-electric-cyan',
        title: 'RAG engines',
        copy: 'Repository and document Q&A with chunking, embeddings, ChromaDB / FAISS, and grounded LLM answers.',
      },
      {
        icon: Workflow,
        color: 'text-electric-violet',
        title: 'Multi-agent workflows',
        copy: 'Role-separated agents for research, validation, and structured report synthesis.',
      },
      {
        icon: ShieldCheck,
        color: 'text-emerald-400',
        title: 'Explainable systems',
        copy: 'Heuristic + LLM defense (PhishGuard) so users see risk scores, cues, and recommended action — not a black box.',
      },
    ],
  },
  {
    id: 'how-i-think',
    label: 'How I think',
    items: [
      {
        icon: Code2,
        color: 'text-electric-violet',
        title: 'Complexity first',
        copy: 'Time and space get a vote before cleverness. Prefer transparent, testable modules over one-off hacks.',
      },
      {
        icon: Layers,
        color: 'text-emerald-400',
        title: 'Full-stack empathy',
        copy: 'A slow query is a slow interface. I trace latency from schema to the pixel the user waits on.',
      },
      {
        icon: Cpu,
        color: 'text-electric-cyan',
        title: 'Ground the model',
        copy: 'LLMs are retrieval + constraints, not oracles. Context windows, citations, and failure modes are part of the design.',
      },
    ],
  },
  {
    id: 'whats-next',
    label: "What's next",
    items: [
      {
        icon: Rocket,
        color: 'text-emerald-400',
        title: 'Internship, not just a certificate',
        copy: 'SDE / Python / AI-ML internships where I write production code, take review seriously, and own a slice of a real system.',
      },
      {
        icon: Sparkles,
        color: 'text-electric-cyan',
        title: 'Deeper RAG & agents',
        copy: 'Better chunking, isolated vector stores, source citations, and agent traces I can debug.',
      },
    ],
  },
];

const COMPETENCIES = [
  { name: 'LangChain RAG', detail: 'Retrieval pipelines, prompts, and grounded generation.' },
  { name: 'Python', detail: 'ML systems, APIs, and automation — primary language.' },
  { name: 'Vector search', detail: 'ChromaDB, FAISS, embeddings, semantic retrieval.' },
  { name: 'DSA', detail: '83+ LeetCode; C++ and Python problem-solving.' },
  { name: 'Scikit-learn', detail: 'Tabular ML, evaluation, and model serialization.' },
  { name: 'React + Tailwind', detail: 'Component UIs with dark, accessible product polish.' },
  { name: 'SQL / SQLite', detail: 'Normalized schemas and safe query design.' },
  { name: 'Streamlit', detail: 'Fast ML and RAG demos that non-engineers can run.' },
];

const PRINCIPLES = [
  {
    icon: Lightbulb,
    title: 'Curiosity under the hood',
    copy: 'I keep asking how the layer below works — pointers and cache lines, then embeddings and token windows.',
    tone: 'cyan',
  },
  {
    icon: Target,
    title: 'Clean over clever',
    copy: 'Modular code, named complexity, and documentation someone else can ship with.',
    tone: 'violet',
  },
  {
    icon: ShieldCheck,
    title: 'Explain the answer',
    copy: 'Especially in AI: show the evidence, the score, and the next action. Trust is a feature.',
    tone: 'emerald',
  },
];

const accentText = {
  violet: 'text-electric-violet',
  cyan: 'text-electric-cyan',
  emerald: 'text-emerald-400',
};

const accentBorder = {
  violet: 'border-electric-violet/50 bg-electric-violet/10',
  cyan: 'border-electric-cyan/50 bg-electric-cyan/10',
  emerald: 'border-emerald-400/50 bg-emerald-400/10',
};

export const About = () => {
  const { personal } = PORTFOLIO_DATA;
  const [chapterId, setChapterId] = useState('now');
  const [activeTab, setActiveTab] = useState('what-i-build');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [pinnedSkill, setPinnedSkill] = useState(null);
  const [istClock, setIstClock] = useState('');

  const chapter = CHAPTERS.find((c) => c.id === chapterId) || CHAPTERS[1];
  const pillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];

  useEffect(() => {
    const tick = () => {
      setIstClock(
        new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-24 right-1/4 w-[28rem] h-72 bg-electric-violet/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-1/5 w-[24rem] h-56 bg-electric-cyan/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-electric-cyan" />
              <span>01 // Discover</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              My Journey
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              Discover three chapters: the foundation in C/C++ programming, building AI‑powered RAG systems, and the next frontier of production‑ready software.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <article className="rounded-3xl border border-white/10 bg-midnight-900/70 overflow-hidden">
              <div className="h-px bg-gradient-to-r from-electric-cyan via-electric-violet to-transparent" />

              <div className="p-6 sm:p-8">
                <p className="text-[11px] font-mono uppercase tracking-widest text-electric-cyan flex items-center gap-2 mb-3">
                  <Compass className="w-3.5 h-3.5" />
                  Engineering philosophy
                </p>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug max-w-xl">
                  Turning complex logic into clean, dependable software.
                </h3>

                <div className="mt-7 relative" role="tablist" aria-label="Story chapters">
                  <div className="absolute top-4 left-4 right-4 h-px bg-white/10 hidden sm:block" aria-hidden="true" />
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {CHAPTERS.map((item) => {
                      const selected = item.id === chapterId;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          role="tab"
                          aria-selected={selected}
                          onClick={() => setChapterId(item.id)}
                          className={`relative text-left rounded-2xl px-3 py-3 sm:px-4 sm:py-4 border transition-colors ${selected
                            ? accentBorder[item.accent]
                            : 'border-white/8 bg-midnight-950/50 hover:border-white/16'
                            }`}
                        >
                          <span
                            className={`mb-2 flex h-2.5 w-2.5 rounded-full ${selected
                              ? item.accent === 'cyan'
                                ? 'bg-electric-cyan'
                                : item.accent === 'violet'
                                  ? 'bg-electric-violet'
                                  : 'bg-emerald-400'
                              : 'bg-slate-600'
                              }`}
                          />
                          <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">
                            {item.step} · {item.era}
                          </span>
                          <span className="mt-1 block text-sm font-display font-semibold text-white">
                            {item.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div
                  key={chapter.id}
                  className="mt-6 rounded-2xl border border-white/8 bg-midnight-950/40 p-5 sm:p-6"
                >
                  <p className={`text-xs font-mono ${accentText[chapter.accent]}`}>{chapter.kicker}</p>
                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-200">
                    {chapter.body}
                  </p>
                  {chapter.id === 'next' && (
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-white transition-colors"
                    >
                      Open to internships — say hello
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PRINCIPLES.map((principle) => {
                const Icon = principle.icon;
                const toneClass =
                  principle.tone === 'cyan'
                    ? 'text-electric-cyan border-electric-cyan/20 bg-electric-cyan/10'
                    : principle.tone === 'violet'
                      ? 'text-electric-violet border-electric-violet/20 bg-electric-violet/10'
                      : 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10';
                return (
                  <div
                    key={principle.title}
                    className="rounded-2xl border border-white/8 bg-midnight-900/50 p-4 sm:p-5 hover:border-white/16 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-3 ${toneClass}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-semibold text-white text-sm">{principle.title}</h4>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{principle.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-midnight-900/80 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-midnight-950/80">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">whoami — engineer profile</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none" />
                  active
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                <p className="font-mono text-[12px] text-slate-400">
                  <span className="text-electric-cyan">shravanikale</span>
                  <span className="text-slate-600">@</span>
                  <span className="text-electric-violet">sggsiet</span>
                  <span className="text-slate-500">:~$ </span>
                  <span className="text-slate-200">cat ./profile.txt</span>
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-2xl border border-white/8 bg-midnight-950/70 p-3.5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Standing</p>
                    <p className="mt-1 text-sm font-display font-bold text-white">Third Year (TE)</p>
                    <p className="text-[11px] font-mono text-electric-cyan mt-0.5">B.Tech IT · SGGSIE&T</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-midnight-950/70 p-3.5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Merit</p>
                    <p className="mt-1 text-sm font-display font-bold text-white">8.98 / 10</p>
                    <p className="text-[11px] font-mono text-emerald-400 mt-0.5">CGPA · Distinction</p>
                  </div>
                  <a
                    href={personal.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/8 bg-midnight-950/70 p-3.5 hover:border-electric-violet/40 transition-colors group"
                  >
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Problem solving</p>
                    <p className="mt-1 text-sm font-display font-bold text-white flex items-center gap-1">
                      83+ problems
                      <ArrowUpRight className="w-3.5 h-3.5 text-electric-violet opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-[11px] font-mono text-electric-violet mt-0.5">LeetCode</p>
                  </a>
                  <div className="rounded-2xl border border-white/8 bg-midnight-950/70 p-3.5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Base
                    </p>
                    <p className="mt-1 text-sm font-display font-bold text-white">Latur, India</p>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-electric-cyan" />
                      IST {istClock || '—:—'} · UTC+5:30
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
                    Hover a capability
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {COMPETENCIES.map((skill) => {
                      const on = hoveredSkill === skill.name;
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() =>
                            setHoveredSkill((prev) => (prev === skill.name ? null : skill.name))
                          }
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          onFocus={() => setHoveredSkill(skill.name)}
                          onBlur={() => setHoveredSkill(null)}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-colors ${on
                            ? 'border-electric-cyan/50 bg-electric-cyan/15 text-white'
                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                            }`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-2.5 min-h-[2.5rem] text-xs text-slate-400 leading-relaxed">
                    {hoveredSkill
                      ? COMPETENCIES.find((s) => s.name === hoveredSkill)?.detail
                      : 'Select a skill to see how I actually use it — not just the label.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-midnight-900/60 p-5 sm:p-6">
              <div className="flex rounded-2xl bg-midnight-950/80 p-1 border border-white/8 text-xs font-mono">
                {PILLARS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-2 rounded-xl transition-colors font-medium ${activeTab === tab.id
                      ? 'bg-white/10 text-white'
                      : 'text-slate-500 hover:text-slate-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div key={pillar.id} className="mt-5 space-y-4 min-h-[200px]">
                {pillar.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${item.color}`} />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.copy}</p>
                      </div>
                    </div>
                  );
                })}

                {activeTab === 'whats-next' && (
                  <a
                    href="#contact"
                    className="mt-1 flex items-center justify-between rounded-2xl border border-white/8 bg-midnight-950/70 px-4 py-3 text-xs font-mono hover:border-electric-cyan/40 transition-colors"
                  >
                    <span className="text-slate-300">Availability · 2026 internships</span>
                    <span className="text-electric-cyan inline-flex items-center gap-1">
                      Let&apos;s talk <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
