import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Play, CheckCircle2, Sparkles, Copy, Check, RotateCcw } from 'lucide-react';

interface SkillDemo {
  id: string;
  name: string;
  category: string;
  command: string;
  description: string;
  outputLines: string[];
  metrics: { label: string; value: string };
}

export const AiSkillSimulator: React.FC = () => {
  const skills: SkillDemo[] = [
    {
      id: 'ast-graph',
      name: 'ast:graph-analyze',
      category: 'Intelligence',
      command: 'claude run skill ast:graph-analyze --target="./src" --depth=3',
      description: 'Generates cross-file AST knowledge graph & dependency impact maps',
      outputLines: [
        '› Initializing Cybersoft AST parser engine...',
        '✓ Parsed 248 TypeScript modules in 142ms',
        '✓ Identified 1,842 semantic edge connections & type exports',
        '⚡ Compact summary cached: 18.4 KB (down from 940 KB raw source)',
        '★ Token reduction: 68% saved for upcoming Claude context window',
      ],
      metrics: { label: 'Token Saving', value: '68%' },
    },
    {
      id: 'pr-context',
      name: 'review:pr-context',
      category: 'Quality',
      command: 'claude run skill review:pr-context --pr=412 --include-ast',
      description: 'Automated PR reviewer using per-commit context summaries',
      outputLines: [
        '› Inspecting Git pre-commit index for commit [7f92a1c]...',
        '✓ Verified: No breaking changes to enterprise shared components API',
        '✓ Validated: TanStack table virtualizer handles 10,000+ district rows',
        '✓ Accessibility check: WCAG 2.1 AA color contrast passing 100%',
        '★ Review verdict: APPROVED - Zero regressions detected',
      ],
      metrics: { label: 'Review Latency', value: '< 3.2s' },
    },
    {
      id: 'vite-migrate',
      name: 'vite:migrate-check',
      category: 'DevOps',
      command: 'claude run skill vite:migrate-check --from="webpack@5" --target="vite@6"',
      description: 'Analyzes Webpack bundling plugins & generates zero-config Vite setup',
      outputLines: [
        '› Scanning Webpack aliases, polyfills, and CSS loaders...',
        '✓ Auto-migrated: react-router-dom v6 subpath route resolution',
        '✓ Replaced: babel-loader with native esbuild transpile target',
        '⚡ Cold server start reduced from 48.2s (Webpack) to 1.1s (Vite)',
        '★ Build time improvement: 4.8x faster CI pipeline',
      ],
      metrics: { label: 'Build Speedup', value: '4.8x' },
    },
    {
      id: 'a11y-audit',
      name: 'a11y:wcag-audit',
      category: 'Accessibility',
      command: 'claude run skill a11y:wcag-audit --scope="k-12-nutrition-views"',
      description: 'Continuous accessibility and keyboard-trap auditing for school districts',
      outputLines: [
        '› Simulating screen reader DOM navigation on District Dashboard...',
        '✓ Checked aria-expanded and aria-controls on 42 interactive widgets',
        '✓ Keyboard focus rings: 100% compliant with 3:1 focus contrast',
        '✓ No nested button elements or invalid tabIndex values',
        '★ Score: 100/100 Lighthouse A11y & Section 508 verified',
      ],
      metrics: { label: 'A11y Score', value: '100/100' },
    },
  ];

  const [activeSkillId, setActiveSkillId] = useState<string>('ast-graph');
  const [running, setRunning] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const activeSkill = skills.find((s) => s.id === activeSkillId) || skills[0];

  useEffect(() => {
    // Run simulation when skill changes
    setRunning(true);
    setDisplayedLines([]);

    let currentLine = 0;
    const lines = activeSkill.outputLines;

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        const next = lines[currentLine];
        setDisplayedLines((prev) => [...prev, next]);
        currentLine++;
      } else {
        setRunning(false);
        clearInterval(interval);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [activeSkillId]);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(activeSkill.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] overflow-hidden shadow-2xl p-4 sm:p-6 backdrop-blur-xl">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-px bg-white/[0.1] mx-1" />
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cybersoft Claude ToolKit · 30 Custom Skills</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI Enthusiast Active
          </span>
          <button
            onClick={handleCopyCommand}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-white/[0.06] transition-colors cursor-pointer text-xs"
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Skill Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none border-b border-white/[0.04]">
        {skills.map((skill) => {
          const isSelected = skill.id === activeSkillId;
          return (
            <button
              key={skill.id}
              onClick={() => setActiveSkillId(skill.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 border border-white/[0.04]'
              }`}
            >
              <span>{skill.name}</span>
              <span className="text-[10px] text-zinc-500 font-sans">({skill.metrics.label}: {skill.metrics.value})</span>
            </button>
          );
        })}
      </div>

      {/* Command Preview */}
      <div className="pt-3 pb-2 flex items-center justify-between gap-2 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2 overflow-x-auto truncate">
          <span className="text-emerald-400 select-none">$</span>
          <span className="text-zinc-200">{activeSkill.command}</span>
        </div>
        <button
          onClick={() => {
            setDisplayedLines([]);
            setActiveSkillId(activeSkill.id);
          }}
          className="shrink-0 p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Re-run simulation"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${running ? 'animate-spin text-emerald-400' : ''}`} />
        </button>
      </div>

      {/* Terminal Output Area */}
      <div className="min-h-[135px] font-mono text-xs space-y-1.5 py-2">
        {displayedLines.map((line, idx) => {
          const isSuccess = line.startsWith('✓');
          const isHighlight = line.startsWith('★');
          const isMetric = line.startsWith('⚡');

          return (
            <div
              key={idx}
              className={`leading-relaxed transition-opacity duration-200 flex items-start gap-2 ${
                isHighlight
                  ? 'text-emerald-300 font-semibold'
                  : isSuccess
                  ? 'text-emerald-400/90'
                  : isMetric
                  ? 'text-sky-300'
                  : 'text-zinc-400'
              }`}
            >
              <span>{line}</span>
            </div>
          );
        })}

        {running && (
          <div className="flex items-center gap-2 text-zinc-500 pt-1">
            <span className="inline-block w-2 h-3.5 bg-emerald-400 animate-pulse" />
            <span className="text-[11px]">processing AST tokens...</span>
          </div>
        )}
      </div>

      {/* Sub-bar showing rationale */}
      <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
        <p className="truncate">
          <span className="text-zinc-400">Skill Function: </span>
          <span className="text-zinc-200">{activeSkill.description}</span>
        </p>
        <span className="text-emerald-400/90 shrink-0 font-medium">
          Installed in 100% Cybersoft Repositories
        </span>
      </div>
    </div>
  );
};
