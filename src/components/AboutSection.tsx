import React from 'react';
import { bioData, contactInfo } from '../data/portfolioData';
import { User, Sparkles, Code2, Compass, HeartHandshake, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';
import { AvatarPhoto } from './AvatarPhoto';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      title: 'Context-First AI Engineering',
      desc: 'AI coding tools are only as effective as the codebase context provided to them. By generating compact AST summaries and static knowledge graphs at pre-commit, we slash token bloat by ~65% and eliminate hallucinations.',
    },
    {
      title: 'Design System Scalability',
      desc: 'Enterprise UI libraries must be lightweight to consume. Sub-path packaging, externalized asset chunks, and semantic design tokens ensure hundreds of consuming applications maintain theme consistency without bloated bundles.',
    },
    {
      title: 'Performance & WCAG 2.1 AA Compliance',
      desc: 'Accessibility and performance are never afterthoughts. Virtualized rendering for massive data tables, strict contrast ratios, zero keyboard traps, and clean DOM trees define production excellence.',
    },
    {
      title: 'Knowledge Sharing & Mentorship',
      desc: 'Engineering leadership is about raising the baseline of the whole squad: running code reviews, establishing architectural decision records (ADRs), and mentoring engineers into confident domain owners.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 space-y-2"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <User className="w-3.5 h-3.5" />
            <span>Philosophy & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Ganesh
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A balance of deep frontend mechanics, design system craftsmanship, and developer tooling innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio text column with Headshot Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed"
          >
            {/* Quick Profile Snippet Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06]">
              <AvatarPhoto size="md" showOrbit={false} showBadge={true} allowUpload={true} />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Ganesh Reddy Katla</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Active Leader
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  Senior Frontend Engineer · Cybersoft Technologies
                </p>
                <p className="text-xs text-emerald-400 font-mono">
                  M.Tech CSE · JNTU Hyderabad (2017) · 8+ Yrs Experience
                </p>
              </div>
            </div>

            <p>
              I am a <strong className="text-white font-medium">Senior Frontend Engineer & AI Enthusiast</strong> based in Hyderabad, India. Over the past 8+ years, I have navigated the evolution of modern web applications—from single-page application frameworks to microfrontends, server-side rendering, and now AI-native developer toolkits.
            </p>
            <p>
              At <strong className="text-emerald-400 font-medium">Cybersoft Technologies</strong>, I drive frontend modernization across PrimeroEdge and SchoolCafé, leading platforms supporting nutrition departments in school districts across the United States. My focus in 2026 has been pioneering developer AI enablement: creating the <strong className="text-white">Cybersoft Claude ToolKit</strong> installed across every UI repository, authoring 30 custom skills, and engineering the internal operations portal with OpenTelemetry observability.
            </p>
            <p>
              Prior to Cybersoft, I served as <strong className="text-white">Lead Engineer at Coditation Systems</strong>, where I led the frontend squad for the Sekel Tech hyperlocal SaaS platform in Vue/Nuxt, and started my career at <strong className="text-white">Stridez Solutions</strong> building responsive React applications for digital fintech platforms (ZestMoney) and healthcare portals (Anthem).
            </p>
          </motion.div>

          {/* Core values / principles with Spotlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-3"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Engineering Core Principles
            </h3>
            {principles.map((p, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(52, 211, 153, 0.16)"
                borderColor="rgba(52, 211, 153, 0.6)"
                className="transition-all"
              >
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-3.5">
                    {p.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
