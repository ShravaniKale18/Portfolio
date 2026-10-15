import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Sparkles, 
  Search, 
  X, 
  Eye, 
  List, 
  Orbit, 
  RotateCcw, 
  Info, 
  Compass, 
  HelpCircle,
  Zap,
  ShieldCheck,
  ChevronRight,
  FolderGit2,
  Columns
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GalaxyScene } from './galaxy/GalaxyScene';
import { ProjectGalaxyDetailPanel } from './galaxy/ProjectGalaxyDetailPanel';
import { ProjectCaseStudyModal } from './galaxy/ProjectCaseStudyModal';
import { ProjectGalaxyListView } from './galaxy/ProjectGalaxyListView';

export const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  // View & Interactive State: default to 'split' (side-by-side)
  const [viewMode, setViewMode] = useState('split'); // 'split' | 'galaxy' | 'list'
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [caseStudyProject, setCaseStudyProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  const containerRef = useRef(null);
  const listContainerRef = useRef(null);

  // Categories present in authentic portfolio
  const categories = [
    'All',
    'AI/ML',
    'Python',
    'Web Development',
    'Academic Projects',
  ];

  // Detect mobile & WebGL support
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Test WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLSupported(false);
    } catch (e) {
      setWebGLSupported(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keyboard accessibility (ESC to return to overview or close case study)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (caseStudyProject) {
          setCaseStudyProject(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, caseStudyProject]);

  // Filter projects by category and search query
  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filter === 'All' ? true : p.category === filter;
    const matchesSearch = searchQuery === '' 
      ? true 
      : p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // If selected project disappears due to filter changes, clear selection
  useEffect(() => {
    if (selectedProject && !filteredProjects.some((p) => p.id === selectedProject.id)) {
      setSelectedProject(null);
    }
  }, [filter, searchQuery, selectedProject, filteredProjects]);

  return (
    <section id="projects" ref={containerRef} className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-electric-violet/15 via-electric-indigo/10 to-electric-cyan/15 blur-[160px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-cyan/10 blur-[140px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-cyan" />
              <span>03 // ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              My Project Universe
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2 max-w-xl">
              Different problems. Different technologies. One universe of ideas.
            </p>
          </div>

          {/* Mode Switcher: Side-by-Side Split vs Full 3D Galaxy Universe vs Traditional Recruiter List */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <div className="p-1 rounded-2xl bg-midnight-950/80 border border-white/10 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setViewMode('split')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'split'
                    ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Side-by-Side: 3D Galaxy + Scrolling Projects"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Split View</span>
              </button>

              <button
                onClick={() => setViewMode('galaxy')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'galaxy'
                    ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Full 3D Celestial Galaxy"
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>Galaxy Only</span>
              </button>

              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'list'
                    ? 'bg-electric-violet/20 text-electric-violet border border-electric-violet/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Traditional Project Cards Grid"
              >
                <List className="w-3.5 h-3.5" />
                <span>List Only</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters, Search & Legend Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? projects.length 
                : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                    filter === cat
                      ? 'bg-electric-cyan/15 text-electric-cyan border border-electric-cyan/40 shadow-sm'
                      : 'bg-midnight-900/60 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    filter === cat ? 'bg-electric-cyan/25 text-electric-cyan' : 'bg-white/5 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Reset */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, title, problem..."
                className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-midnight-900/60 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/40 transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {selectedProject && (
              <button
                onClick={() => setSelectedProject(null)}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
                title="Return camera to overview"
              >
                <RotateCcw className="w-3.5 h-3.5 text-electric-cyan" />
                <span className="hidden sm:inline">Reset Orbit</span>
              </button>
            )}
          </div>

        </div>

        {/* Galaxy Color Legend */}
        <div className="mb-6 flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-400 px-1">
          <span className="text-slate-500 uppercase tracking-wider text-[10px]">Celestial Legend:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] inline-block shadow-sm shadow-[#06b6d4]" />
            AI / ML & LLMs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] inline-block shadow-sm shadow-[#38bdf8]" />
            Python & Data Pipelines
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#a855f7] inline-block shadow-sm shadow-[#a855f7]" />
            Full-Stack & Web
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#34d399] inline-block shadow-sm shadow-[#34d399]" />
            Academic & Systems
          </span>
        </div>

        {/* PROJECT DISPLAY MODES */}
        {viewMode === 'split' && webGLSupported ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Interactive 3D Galaxy Canvas (Sticky on Desktop) */}
            <div className="lg:col-span-7 xl:col-span-7 lg:sticky lg:top-24">
              <div className="relative w-full h-[480px] sm:h-[580px] lg:h-[680px] rounded-3xl bg-midnight-950/90 border border-white/15 overflow-hidden shadow-2xl glass-panel">
                
                {/* Top Scene HUD / Instruction */}
                <div className="absolute top-4 left-5 z-20 pointer-events-none flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[280px] sm:max-w-none">
                    {selectedProject
                      ? `Focusing on: ${selectedProject.title}`
                      : hoveredProject
                      ? `Hovering: ${hoveredProject.title}`
                      : 'Interactive 3D Galaxy • Click a planet to inspect'}
                  </span>
                </div>

                {/* Canvas Viewport */}
                <Suspense
                  fallback={
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-400 font-mono text-xs">
                      <div className="w-8 h-8 rounded-full border-2 border-electric-cyan border-t-transparent animate-spin" />
                      <span>Calibrating celestial coordinates...</span>
                    </div>
                  }
                >
                  <Canvas
                    camera={{
                      position: [0, isMobile ? 18 : 14, isMobile ? 22 : 18],
                      fov: 45,
                      near: 0.1,
                      far: 1000
                    }}
                    gl={{
                      antialias: true,
                      powerPreference: 'high-performance',
                      alpha: true
                    }}
                    onPointerMissed={() => {
                      setSelectedProject(null);
                    }}
                  >
                    <GalaxyScene
                      projects={filteredProjects}
                      selectedProject={selectedProject}
                      hoveredProject={hoveredProject}
                      onSelectProject={(project) => {
                        setSelectedProject(project);
                        const cardEl = document.getElementById(`project-card-${project.id}`);
                        if (cardEl) {
                          cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                      }}
                      onHoverProject={(project) => {
                        setHoveredProject(project);
                      }}
                      onPointerOut={() => {
                        setHoveredProject(null);
                      }}
                      isMobile={isMobile}
                    />
                  </Canvas>
                </Suspense>

                {/* Bottom Orbit Navigation Bar */}
                <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                    Drag to orbit • Scroll to zoom • Select to focus
                  </span>

                  <div className="pointer-events-auto flex items-center gap-1.5 ml-auto">
                    {selectedProject && (
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-3 py-1 rounded-xl bg-midnight-900/90 border border-white/10 text-xs font-mono text-electric-cyan hover:text-white transition-colors"
                      >
                        Reset Camera
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Scrolling Project Cards */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Project Catalog ({filteredProjects.length})
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Click card to focus planet
                </span>
              </div>

              {/* Scrollable container with smooth custom scrollbar */}
              <div 
                ref={listContainerRef} 
                className="lg:max-h-[680px] lg:overflow-y-auto lg:pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
              >
                {filteredProjects.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl bg-midnight-950/70 border border-white/10 text-slate-400 text-xs font-mono">
                    No projects found matching filter.
                  </div>
                ) : (
                  <ProjectGalaxyListView
                    projects={filteredProjects}
                    selectedProject={selectedProject}
                    hoveredProject={hoveredProject}
                    isCompact={true}
                    onSelectProject={(project) => {
                      setSelectedProject(project);
                    }}
                    onHoverProject={(project) => {
                      setHoveredProject(project);
                    }}
                    onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
                  />
                )}
              </div>
            </div>

          </div>
        ) : viewMode === 'galaxy' && webGLSupported ? (
          /* FULL GALAXY VIEWPORT */
          <div className="relative w-full h-[620px] sm:h-[680px] rounded-3xl bg-midnight-950/90 border border-white/15 overflow-hidden shadow-2xl glass-panel">
            
            {/* Top Scene HUD / Instruction */}
            <div className="absolute top-4 left-5 z-20 pointer-events-none flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-slate-400">
                {selectedProject
                  ? `Focusing on: ${selectedProject.title}`
                  : 'Interactive 3D Galaxy • Click a planet to explore'}
              </span>
            </div>

            {/* Canvas Viewport */}
            <Suspense
              fallback={
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-400 font-mono text-xs">
                  <div className="w-8 h-8 rounded-full border-2 border-electric-cyan border-t-transparent animate-spin" />
                  <span>Calibrating celestial coordinates...</span>
                </div>
              }
            >
              <Canvas
                camera={{
                  position: [0, isMobile ? 18 : 14, isMobile ? 22 : 18],
                  fov: 45,
                  near: 0.1,
                  far: 1000
                }}
                gl={{
                  antialias: true,
                  powerPreference: 'high-performance',
                  alpha: true
                }}
                onPointerMissed={() => {
                  setSelectedProject(null);
                }}
              >
                <GalaxyScene
                  projects={filteredProjects}
                  selectedProject={selectedProject}
                  hoveredProject={hoveredProject}
                  onSelectProject={(project) => {
                    setSelectedProject(project);
                  }}
                  onHoverProject={(project) => {
                    setHoveredProject(project);
                  }}
                  onPointerOut={() => {
                    setHoveredProject(null);
                  }}
                  isMobile={isMobile}
                />
              </Canvas>
            </Suspense>

            {/* Selected Project Floating Overlay Panel */}
            {selectedProject && (
              <ProjectGalaxyDetailPanel
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
                isMobile={isMobile}
              />
            )}

            {/* Bottom Orbit Navigation Bar */}
            <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                Drag to orbit • Scroll to zoom • Click planet to inspect
              </span>

              <div className="pointer-events-auto flex items-center gap-1.5 ml-auto">
                {selectedProject && (
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3 py-1 rounded-xl bg-midnight-900/90 border border-white/10 text-xs font-mono text-electric-cyan hover:text-white transition-colors"
                  >
                    ← Back to Galaxy
                  </button>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* Traditional List Full View */
          <ProjectGalaxyListView
            projects={filteredProjects}
            selectedProject={selectedProject}
            hoveredProject={hoveredProject}
            isCompact={false}
            onSelectProject={(proj) => {
              setSelectedProject(proj);
              setViewMode('split');
            }}
            onHoverProject={(proj) => setHoveredProject(proj)}
            onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
          />
        )}

      </div>

      {/* DETAILED PROJECT CASE STUDY MODAL */}
      {caseStudyProject && (
        <ProjectCaseStudyModal
          project={caseStudyProject}
          onClose={() => setCaseStudyProject(null)}
        />
      )}

    </section>
  );
};
