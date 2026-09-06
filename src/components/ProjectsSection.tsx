import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Search, ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';
import { motion } from 'motion/react';

interface ProjectsSectionProps {
  selectedCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'nutrition', label: 'K-12 Nutrition SaaS', count: projectsData.filter((p) => p.category === 'nutrition').length },
    { id: 'hyperlocal', label: 'Hyperlocal Retail SaaS', count: projectsData.filter((p) => p.category === 'hyperlocal').length },
    { id: 'fintech', label: 'FinTech & Healthcare', count: projectsData.filter((p) => p.category === 'fintech').length },
    { id: 'ai-platform', label: 'AI & Platform Modernization', count: projectsData.filter((p) => p.category === 'ai-platform').length },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.organization.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryConfig = (cat: string) => {
    switch (cat) {
      case 'nutrition':
        return {
          text: 'K-12 Nutrition SaaS',
          badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          spotlightColor: 'rgba(52, 211, 153, 0.16)',
          borderColor: 'rgba(52, 211, 153, 0.65)',
        };
      case 'hyperlocal':
        return {
          text: 'Hyperlocal Retail SaaS',
          badgeClass: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
          spotlightColor: 'rgba(56, 189, 248, 0.16)',
          borderColor: 'rgba(56, 189, 248, 0.65)',
        };
      case 'fintech':
        return {
          text: 'FinTech & Healthcare',
          badgeClass: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
          spotlightColor: 'rgba(192, 132, 252, 0.16)',
          borderColor: 'rgba(192, 132, 252, 0.65)',
        };
      case 'ai-platform':
      case 'ai':
        return {
          text: 'AI & Developer Tooling',
          badgeClass: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
          spotlightColor: 'rgba(45, 212, 191, 0.16)',
          borderColor: 'rgba(45, 212, 191, 0.65)',
        };
      case 'platform':
        return {
          text: 'Enterprise Design System',
          badgeClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
          spotlightColor: 'rgba(129, 140, 248, 0.16)',
          borderColor: 'rgba(129, 140, 248, 0.65)',
        };
      default:
        return {
          text: 'Enterprise System',
          badgeClass: 'text-zinc-400 bg-zinc-800 border-zinc-700',
          spotlightColor: 'rgba(52, 211, 153, 0.12)',
          borderColor: 'rgba(52, 211, 153, 0.45)',
        };
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work & Engineering Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects & Engineering
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              8+ years of production software: US K-12 school child nutrition management (USDA compliance & parent portals), enterprise hyperlocal commerce (Nuxt.js SSR & local SEO), and consumer FinTech lending systems.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              id="projects-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Claude, Vite, Vue)..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-zinc-900/80 border border-white/[0.08] focus:border-emerald-500/60 rounded-xl text-zinc-100 placeholder:text-zinc-500 focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-tab-${cat.id}`}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wide whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm scale-105'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-white/[0.06]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-zinc-200 text-zinc-900' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects List Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/30 border border-dashed border-white/[0.08]">
            <p className="text-zinc-400 text-sm">No projects matching your search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="mt-3 text-xs font-mono text-emerald-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => {
              const cfg = getCategoryConfig(project.category);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
                  className="h-full"
                >
                  <SpotlightCard
                    id={`project-card-${project.id}`}
                    spotlightColor={cfg.spotlightColor}
                    borderColor={cfg.borderColor}
                    className="h-full"
                  >
                    <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                      {/* Top Metadata */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2 text-xs font-mono">
                            <span className={`px-2 py-0.5 rounded-md border text-[11px] font-medium uppercase tracking-wider ${cfg.badgeClass}`}>
                              {cfg.text}
                            </span>
                            <span className="text-zinc-600">·</span>
                            <span className="text-zinc-400 text-[11px]">{project.period}</span>
                          </div>
                          <span className="text-xs font-mono text-zinc-400">
                            {project.organization}
                          </span>
                        </div>

                        {/* Title and subtitle */}
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-normal mt-1 mb-4">
                          {project.subtitle}
                        </p>

                        {/* Summary */}
                        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                          {project.summary}
                        </p>

                        {/* Metrics row if present */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="grid grid-cols-3 gap-2 mb-4 p-2.5 rounded-xl bg-black/50 border border-white/[0.04]">
                            {project.metrics.map((m, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-sm font-bold text-white font-mono">{m.value}</span>
                                <span className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider">{m.label}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Highlights (show first 2) */}
                        <div className="space-y-1.5 mb-5">
                          {project.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                              <span className="text-emerald-400 font-bold shrink-0">›</span>
                              <span className="line-clamp-2">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer tags and deep dive CTA */}
                      <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5 max-w-sm">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded bg-zinc-950/90 text-zinc-400 border border-white/[0.05] text-[11px] font-mono group-hover:border-white/[0.1] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-1.5 py-0.5 rounded text-zinc-500 text-[10px] font-mono self-center">
                              +{project.tags.length - 4} more
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => setActiveModalProject(project)}
                          id={`project-deep-dive-${project.id}`}
                          className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-medium py-1 px-2.5 rounded-lg hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all cursor-pointer shrink-0"
                        >
                          <span>Deep Dive</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
