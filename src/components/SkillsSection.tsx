import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Terminal, Code2, Sparkles, Server, ShieldCheck, Check, Cpu } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';

export const SkillsSection: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'core' | 'ai'>('all');

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case 1:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 3:
        return <Server className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-zinc-400" />;
    }
  };

  const getCategoryTheme = (index: number) => {
    switch (index) {
      case 0:
        return { spotlight: 'rgba(56, 189, 248, 0.12)', border: 'rgba(56, 189, 248, 0.45)' };
      case 1:
        return { spotlight: 'rgba(52, 211, 153, 0.14)', border: 'rgba(52, 211, 153, 0.5)' };
      case 2:
        return { spotlight: 'rgba(192, 132, 252, 0.12)', border: 'rgba(192, 132, 252, 0.45)' };
      case 3:
        return { spotlight: 'rgba(251, 191, 36, 0.12)', border: 'rgba(251, 191, 36, 0.45)' };
      default:
        return { spotlight: 'rgba(52, 211, 153, 0.1)', border: 'rgba(52, 211, 153, 0.4)' };
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Proficiencies
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              A comprehensive breakdown of modern frontend frameworks, AI developer toolkits, design systems, and cloud deployment pipelines mastered across production systems.
            </p>
          </div>

          {/* Quick filter pills */}
          <div className="flex items-center gap-2 bg-zinc-900/80 p-1.5 rounded-xl border border-white/[0.06] shadow-sm">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setFilterMode('core')}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                filterMode === 'core'
                  ? 'bg-emerald-500/25 text-emerald-400 font-semibold border border-emerald-500/40'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Core Proficiencies
            </button>
            <button
              onClick={() => setFilterMode('ai')}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                filterMode === 'ai'
                  ? 'bg-sky-500/25 text-sky-400 font-semibold border border-sky-500/40'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              AI & Tooling Focus
            </button>
          </div>
        </div>

        {/* Categories Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const theme = getCategoryTheme(idx);
            const filteredSkills = category.skills.filter((skill) => {
              if (filterMode === 'core') return skill.level === 'Core' || skill.highlight;
              if (filterMode === 'ai') return category.title.includes('AI') || skill.highlight;
              return true;
            });

            return (
              <SpotlightCard
                key={category.title}
                id={`skill-category-${idx}`}
                spotlightColor={theme.spotlight}
                borderColor={theme.border}
                className="h-full"
              >
                <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-zinc-800/80 border border-white/[0.06]">
                        {getCategoryIcon(idx)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-normal">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {filteredSkills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`group/skill px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
                            skill.highlight
                              ? 'bg-zinc-900 text-zinc-100 border-white/[0.12] hover:border-emerald-500/60 hover:text-emerald-300 hover:scale-105 shadow-sm'
                              : 'bg-zinc-950/60 text-zinc-400 border-white/[0.04] hover:border-white/[0.15] hover:text-zinc-200'
                          }`}
                        >
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover/skill:animate-ping" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Proficiency: High Production Grade</span>
                    <span className="text-emerald-400/80">Active in 2026 Stack</span>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
