import React, { useState } from 'react';
import { 
  ExternalLink, 
  FolderGit2, 
  CheckCircle, 
  ChevronRight,
  Shield,
  Layout,
  Terminal,
  Database
} from 'lucide-react';
import { Icons } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All',
    'Python',
    'Web Development',
    'Academic Projects',
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Python':
        return <Terminal className="w-4 h-4 text-electric-cyan" />;
      case 'Web Development':
        return <Layout className="w-4 h-4 text-electric-violet" />;
      case 'Academic Projects':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <FolderGit2 className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-electric-cyan font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-electric-cyan" />
              <span>03 // Creations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Featured Projects & Codebases
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-sm md:text-right">
            Practical applications, logic systems, and engineering assignments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-electric-cyan/15 text-electric-cyan border border-electric-cyan/40 shadow-sm'
                  : 'bg-midnight-900/60 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel overflow-hidden flex flex-col justify-between hover:border-electric-violet/40 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-violet/10 relative"
            >
              {/* Project Card Top Visual / Header banner */}
              <div className="p-6 sm:p-8 pb-0">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.isPlaceholder ? (
                      <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        Coursework / Reference
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-electric-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed font-light">
                  {project.shortDescription}
                </p>
              </div>

              {/* Middle Section: Problem Solved & Tech Badges */}
              <div className="p-6 sm:p-8 pt-6 space-y-5">
                
                <div className="p-4 rounded-2xl bg-midnight-950/70 border border-white/5">
                  <p className="text-[11px] font-mono text-electric-violet uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Problem Addressed
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions Bar */}
              <div className="px-6 sm:px-8 py-4 bg-midnight-950/50 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-electric-cyan hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <Icons.Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-midnight-900 border border-white/15 rounded-3xl p-6 sm:p-8 glass-panel space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-electric-cyan uppercase">
                  {selectedProject.category} // {selectedProject.timeline || 'Project'}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white text-sm font-mono px-2 py-1 rounded bg-white/5 border border-white/10"
              >
                Close (ESC)
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedProject.shortDescription}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-midnight-950/80 border border-white/10">
                <h4 className="text-xs font-mono text-electric-cyan uppercase tracking-wider mb-1.5">Problem Solved</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problemSolved}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Implementation Details</h4>
                <ul className="space-y-2">
                  {selectedProject.implementationDetails.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-violet mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-xl bg-white/5 text-slate-200 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-electric-violet text-white transition-colors"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
