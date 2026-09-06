import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Layers, Cpu, Terminal, Sparkles, ArrowRight, Shield, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'ai':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'product':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/30';
      case 'platform':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      case 'enterprise':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      default:
        return 'text-zinc-400 bg-zinc-800 border-zinc-700';
    }
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e1015] border border-white/[0.08] shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="project-modal-close-btn"
          aria-label="Close Project Modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Meta Header */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3 text-xs font-mono">
          <span className={`px-2.5 py-1 rounded-md border uppercase tracking-wider font-medium ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
          <span className="text-zinc-500">·</span>
          <span className="text-zinc-400">{project.organization}</span>
          <span className="text-zinc-500">·</span>
          <span className="text-zinc-300 font-medium">{project.period}</span>
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-1 mb-6 font-normal">
          {project.subtitle}
        </p>

        {/* Key Metrics if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white font-mono">{m.value}</span>
                <span className="text-xs text-zinc-400 uppercase font-mono tracking-wider">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Summary Description */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Overview</h4>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Architectural Notes if present */}
        {project.architectureNotes && (
          <div className="mb-6 p-4 rounded-xl bg-zinc-950/70 border border-emerald-500/20 text-zinc-300 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              Architecture & Strategy
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
              {project.architectureNotes}
            </p>
          </div>
        )}

        {/* Detailed Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Key Contributions & Engineering Deliverables
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Innovations */}
        {project.keyInnovations && project.keyInnovations.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Technical Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyInnovations.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/50 border border-white/[0.04] text-xs text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="space-y-2 pt-4 border-t border-white/[0.06]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Technologies & Tooling</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-white/[0.06] text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            {project.organization} · Verified contribution
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
