import React, { useState } from 'react';
import { contactInfo, bioData } from '../data/portfolioData';
import { ArrowDown, Mail, Check, FileText, ArrowUpRight, Sparkles, Terminal, Layers, Cpu, Code2, ShieldCheck, FileCheck, Github } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';
import { MagneticButton } from './effects/MagneticButton';
import { AiSkillSimulator } from './effects/AiSkillSimulator';
import { AvatarPhoto } from './AvatarPhoto';
import { TypewriterRole } from './effects/TypewriterRole';
import { triggerConfetti } from '../utils/confetti';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
  onSelectCategory: (category: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectCategory }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.primaryEmail);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenResumeWithConfetti = () => {
    triggerConfetti();
    onOpenResume();
  };

  return (
    <section id="hero-section" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-start gap-8 max-w-5xl"
        >
          {/* Top Status & Recruiter Match Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-200 font-medium">8+ Years Experience</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 hidden sm:inline">K-12 Child Nutrition SaaS · Retail · FinTech</span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-emerald-400 font-medium">Senior Frontend Lead</span>
            </div>

            {/* Profile Resume Pill */}
            <button
              onClick={handleOpenResumeWithConfetti}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-all cursor-pointer shadow-sm hover:scale-105"
              title="Click to view comprehensive profile resume"
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">Profile Resume · 8+ Yrs</span>
              <span className="text-emerald-500">›</span>
            </button>
          </div>

          {/* Hero Profile Photo & Name Banner */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 w-full">
            <div className="space-y-3.5 flex-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
                Ganesh Reddy <br className="hidden sm:inline" />
                <span className="text-zinc-400 font-light">Katla</span>
              </h1>

              {/* Animated Typing Role */}
              <div className="text-lg sm:text-2xl font-normal text-zinc-300 tracking-tight leading-relaxed flex flex-wrap items-center gap-x-2">
                <span>Experienced in</span>
                <TypewriterRole
                  roles={[
                    'Senior Frontend Engineering',
                    'K-12 Child Nutrition SaaS Platforms',
                    'Hyperlocal Commerce & Local SEO',
                    'Enterprise Design Systems (React 19)',
                    'Consumer FinTech & Digital Lending',
                    'AI Developer Tooling & Knowledge Graphs',
                  ]}
                  className="text-lg sm:text-2xl"
                />
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl pt-1">
                8+ years architecting enterprise web applications: engineering <span className="text-emerald-400 font-medium">USDA-compliant K-12 child nutrition management software</span> (PrimeroEdge & SchoolCafé at Cybersoft), leading <span className="text-sky-400 font-medium">hyperlocal retail commerce & local SEO</span> (Sekel Tech at Coditation), and building <span className="text-purple-400 font-medium">consumer FinTech and healthcare portals</span> (ZestMoney & Anthem at Stridez).
              </p>
            </div>

            {/* Ganesh Profile Headshot / Avatar with Glowing Ring and Orbiting Pills */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="shrink-0 self-center md:self-auto"
            >
              <AvatarPhoto size="xl" showOrbit={true} showBadge={true} allowUpload={true} />
            </motion.div>
          </div>

          {/* Interactive CTAs with Magnetic Physics */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <MagneticButton
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-explore-projects-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-semibold transition-all shadow-md shadow-white/5"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              onClick={handleCopyEmail}
              id="hero-copy-email-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/[0.08] hover:border-emerald-500/40 text-sm font-mono transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>{contactInfo.primaryEmail}</span>
                </>
              )}
            </MagneticButton>

            <MagneticButton
              onClick={handleOpenResumeWithConfetti}
              id="hero-resume-modal-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 text-sm font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Profile Resume & PDF</span>
            </MagneticButton>

            {contactInfo.github && (
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-cta"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/20 text-sm font-mono transition-all"
                title="GitHub: github.com/Ganeshreddykatla"
              >
                <Github className="w-4 h-4 text-zinc-200" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}
          </div>

          {/* Three Balanced Domain Cards across Ganesh's 8+ Year Journey */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {/* Pillar 1: K-12 Nutrition SaaS */}
            <SpotlightCard
              spotlightColor="rgba(52, 211, 153, 0.18)"
              borderColor="rgba(52, 211, 153, 0.7)"
              onClick={() => {
                onSelectCategory('nutrition');
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <div className="p-5 flex flex-col justify-between h-full space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400">
                      <Layers className="w-3.5 h-3.5" />
                      K-12 Nutrition SaaS
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                    PrimeroEdge & SchoolCafé
                  </h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    USDA meal compliance analytics, 10,000+ row virtualized inventory tables, parent community portals, and React 19 design systems.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 pt-2 block group-hover:text-emerald-400 transition-colors">
                  K-12 Nutrition Platforms →
                </span>
              </div>
            </SpotlightCard>

            {/* Pillar 2: Hyperlocal Retail SaaS */}
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.18)"
              borderColor="rgba(56, 189, 248, 0.7)"
              onClick={() => {
                onSelectCategory('hyperlocal');
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <div className="p-5 flex flex-col justify-between h-full space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400">
                      <Cpu className="w-3.5 h-3.5" />
                      Hyperlocal Retail SaaS
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                    Sekel Tech Commerce Platform
                  </h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Lead Engineer for 2 yrs 10 mos at Coditation: Nuxt.js SSR, dynamic store locators, real-time store inventory, and Schema.org local SEO.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 pt-2 block group-hover:text-sky-400 transition-colors">
                  Lead Engineer Role →
                </span>
              </div>
            </SpotlightCard>

            {/* Pillar 3: FinTech Lending & Healthcare */}
            <SpotlightCard
              spotlightColor="rgba(192, 132, 252, 0.18)"
              borderColor="rgba(192, 132, 252, 0.7)"
              onClick={() => {
                onSelectCategory('fintech');
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <div className="p-5 flex flex-col justify-between h-full space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-purple-400">
                      <Terminal className="w-3.5 h-3.5" />
                      FinTech & Healthcare
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                    ZestMoney & Anthem Portals
                  </h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Friction-free consumer digital lending KYC, instant EMI calculators, and HIPAA-compliant healthcare insurance administration at Stridez.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 pt-2 block group-hover:text-purple-400 transition-colors">
                  Consumer Lending & HIPAA →
                </span>
              </div>
            </SpotlightCard>
          </div>

          {/* Stat Metrics Grid with Floating Highlights */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.06]">
            {bioData.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex flex-col p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04] hover:border-emerald-500/30 hover:bg-zinc-900/70 transition-all group"
              >
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-400 uppercase font-mono tracking-wider mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Interactive AI Skill Terminal (Commented out per user request) */}
          {/*
          <div className="w-full pt-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Interactive AI Skill Terminal · Test custom Cybersoft Claude skills live:</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                Click any skill tab to simulate
              </span>
            </div>
            <AiSkillSimulator />
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
};
