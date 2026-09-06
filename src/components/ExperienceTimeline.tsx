import React, { useState } from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('cybersoft');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Over 8 years of advancing from frontend development to lead engineering and developer AI enablement across enterprise SaaS, tooling, and fintech domains.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {experienceData.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCybersoft = exp.id === 'cybersoft';

            return (
              <SpotlightCard
                key={exp.id}
                id={`exp-card-${exp.id}`}
                spotlightColor={isCybersoft ? 'rgba(52, 211, 153, 0.12)' : 'rgba(56, 189, 248, 0.1)'}
                borderColor={isCybersoft ? 'rgba(52, 211, 153, 0.45)' : 'rgba(56, 189, 248, 0.4)'}
                className="transition-all"
              >
                <div className="p-6 sm:p-7">
                  {/* Header row */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-zinc-600">·</span>
                        <span className="text-sm sm:text-base text-emerald-400 font-medium">
                          {exp.company}
                        </span>
                        {exp.duration === 'Current' && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-wide">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          {exp.period}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {exp.location}
                        </span>
                        {exp.duration && exp.duration !== 'Current' && (
                          <>
                            <span>·</span>
                            <span className="text-zinc-400">{exp.duration}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <span className="text-xs font-mono text-zinc-400 hidden md:inline">
                        {isExpanded ? 'Collapse' : 'Expand Details'}
                      </span>
                      <button
                        className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Short Overview */}
                  <p className="text-sm text-zinc-300 leading-relaxed mt-4">
                    {exp.description}
                  </p>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-6">
                      {/* Key Responsibilities */}
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Key Deliverables & Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                              <span className="text-emerald-400 font-bold mt-0.5 shrink-0">›</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="space-y-2.5 p-4 rounded-xl bg-black/40 border border-white/[0.04]">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5" />
                            <span>Notable Outcomes</span>
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Skills Tagged */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Technologies Leveraged
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded bg-zinc-950 text-zinc-300 border border-white/[0.06] text-xs font-mono hover:border-emerald-500/40 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Education Highlight with Spotlight */}
        <SpotlightCard
          spotlightColor="rgba(56, 189, 248, 0.1)"
          borderColor="rgba(56, 189, 248, 0.4)"
          className="mt-10"
        >
          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-zinc-800/80 border border-white/[0.06] text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Education</span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Master of Technology (M.Tech)
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Jawaharlal Nehru Technological University (JNTU), Hyderabad · 2017 · Power Electronics & Electrical Drives
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/[0.06] text-xs font-mono self-end sm:self-center">
              Class of 2017
            </span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
