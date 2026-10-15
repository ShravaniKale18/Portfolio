import React from 'react';
import { Star, ArrowUpRight, Terminal } from 'lucide-react';
import { Icons } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GithubActivity = () => {
  const { githubSummary } = PORTFOLIO_DATA;

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-midnight-900/60 border border-white/10 glass-panel">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Icons.Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  github.com/{githubSummary.username}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {githubSummary.tagline}
                </p>
              </div>
            </div>

            <a
              href={githubSummary.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-medium transition-colors"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 text-electric-cyan" />
            </a>
          </div>

          {/* Repositories Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            {githubSummary.repositoriesPreview.map((repo) => (
              <a
                key={repo.name}
                href={`${githubSummary.profileUrl}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-midnight-950/70 border border-white/5 hover:border-electric-cyan/40 transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-white group-hover:text-electric-cyan transition-colors flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-electric-cyan" />
                      {repo.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {repo.updated}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-electric-violet" />
                    {repo.language}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
