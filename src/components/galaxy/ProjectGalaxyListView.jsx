import React from 'react';
import { 
  ExternalLink, 
  ChevronRight, 
  Shield, 
  CheckCircle, 
  Terminal, 
  Layout, 
  Database, 
  Brain, 
  FolderGit2 
} from 'lucide-react';
import { Icons } from '../SocialIcons';

/**
 * ProjectGalaxyListView provides an accessible, conventional recruiter-friendly project card list
 * alternative without needing to navigate the 3D canvas.
 */
export const ProjectGalaxyListView = ({ 
  projects, 
  onSelectProject, 
  onOpenCaseStudy, 
  selectedProject = null,
  hoveredProject = null,
  onHoverProject = () => {},
  isCompact = false 
}) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML':
        return <Brain className="w-4 h-4 text-electric-cyan" />;
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

  if (isCompact) {
    return (
      <div className="space-y-4">
        {projects.map((project) => {
          const isSelected = selectedProject?.id === project.id;
          const isHovered = hoveredProject?.id === project.id;

          return (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              onMouseEnter={() => onHoverProject(project)}
              onMouseLeave={() => onHoverProject(null)}
              onClick={() => onSelectProject(project)}
              className={`rounded-2xl transition-all duration-300 border p-5 cursor-pointer relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-midnight-900/90 border-electric-cyan ring-1 ring-electric-cyan/40 shadow-lg shadow-electric-cyan/10'
                  : isHovered
                  ? 'bg-midnight-900/80 border-electric-cyan/50 shadow-md shadow-electric-cyan/5 translate-x-1'
                  : 'bg-midnight-950/70 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span className="text-[11px] font-mono text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {project.stats && (
                      <span className="text-[10px] font-mono text-electric-cyan bg-electric-cyan/10 px-2 py-0.5 rounded border border-electric-cyan/20">
                        {project.stats.metric}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20 flex items-center gap-1">
                      <CheckCircle className="w-2.5 h-2.5" />
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-electric-cyan transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="mt-3 p-2.5 rounded-xl bg-midnight-900/90 border border-white/5">
                  <p className="text-[10px] font-mono text-electric-violet uppercase tracking-wider flex items-center gap-1 mb-0.5 font-medium">
                    <Shield className="w-3 h-3" />
                    Problem Solved
                  </p>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-light line-clamp-2">
                    {project.problemSolved}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCaseStudy(project);
                  }}
                  className="text-xs font-mono text-electric-cyan hover:text-white flex items-center gap-1 transition-colors font-medium group/btn"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Icons.Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-electric-cyan/10 hover:bg-electric-cyan/20 text-electric-cyan hover:text-white transition-colors"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
      {projects.map((project, index) => {
        const isLeadCard = index === 0;
        const colSpanClass = isLeadCard ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-6';

        return (
          <article
            key={project.id}
            className={`${colSpanClass} rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel overflow-hidden flex flex-col justify-between hover:border-electric-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-violet/10 relative group`}
          >
            {/* Card Header */}
            <div className="p-6 sm:p-8 pb-0">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(project.category)}
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-medium">
                    {project.category}
                  </span>
                  {project.timeline && (
                    <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                      • {project.timeline}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.stats && (
                    <span className="text-[10px] font-mono text-electric-cyan bg-electric-cyan/10 px-2 py-0.5 rounded border border-electric-cyan/20">
                      {project.stats.metric}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {project.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-electric-cyan transition-colors leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed font-light">
                {project.shortDescription}
              </p>
            </div>

            {/* Problem & Tech pills */}
            <div className="p-6 sm:p-8 pt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-midnight-950/70 border border-white/5 space-y-1">
                <p className="text-[11px] font-mono text-electric-violet uppercase tracking-wider flex items-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  Problem Addressed
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                  {project.problemSolved}
                </p>
              </div>

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

            {/* Bottom Actions */}
            <div className="px-6 sm:px-8 py-4 bg-midnight-950/50 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => onOpenCaseStudy(project)}
                className="text-xs font-mono text-electric-cyan hover:text-white flex items-center gap-1.5 transition-colors font-medium group/btn"
              >
                <span>Explore Full Story</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label={`View ${project.title} repository on GitHub`}
                    title="GitHub Repository"
                  >
                    <Icons.Github className="w-4 h-4" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-electric-cyan/10 hover:bg-electric-cyan/20 text-electric-cyan hover:text-white transition-colors"
                    aria-label={`View live demo for ${project.title}`}
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </article>
        );
      })}
    </div>
  );
};
