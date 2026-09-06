import React, { useState, useEffect } from 'react';
import { contactInfo, bioData, experienceData, educationData, skillCategories } from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  FileCheck,
  Sparkles,
  Search,
  SlidersHorizontal,
  CheckCircle2,
  Award,
  Layers,
  Cpu,
  Eye,
  Camera,
  Github,
} from 'lucide-react';
import { AvatarPhoto } from './AvatarPhoto';
import { triggerConfetti } from '../utils/confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ResumeViewMode = 'interactive' | 'ats-clean' | 'recruiter-fast';

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<ResumeViewMode>('interactive');
  const [showPhoto, setShowPhoto] = useState(true);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const atsKeywords = [
    'React',
    'TypeScript',
    'Claude MCP',
    'AI Enablement',
    'Design System',
    'Vite',
    'Zustand',
    'TanStack',
    'Docker',
    'Azure',
    'WCAG 2.1 AA',
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `
KATLA GANESHREDDY (GANESH REDDY KATLA)
Senior Frontend Engineer & AI Enthusiast
Email: ${contactInfo.primaryEmail}
Phone: ${contactInfo.phone}
Location: ${contactInfo.location}
GitHub: https://github.com/Ganeshreddykatla
Website: https://ganeshreddy-portfolio.ai.studio

==================================================
EXECUTIVE SUMMARY
==================================================
${bioData.summary}

==================================================
CORE TECHNICAL SKILLS
==================================================
- Frontend: React 18/19, TypeScript, React Native, Vue.js, Nuxt.js, Next.js, Redux Toolkit, Zustand, TanStack Virtual
- AI & Tooling: Claude Code MCP, AST Code Knowledge Graphs, Context-Driven Pre-Commit Hooks, OpenTelemetry Dashboarding, Prompt Engineering
- Design Systems & UI: Material UI v7, Kendo React, Tailwind CSS, Storybook, Accessibility (WCAG 2.1 AA)
- Build & DevOps: Vite, Webpack, Docker, nginx, Azure DevOps CI/CD, Azure Artifacts, Entra ID / SAML SSO

==================================================
PROFESSIONAL EXPERIENCE
==================================================
1. Senior Frontend Engineer | Cybersoft Technologies
   Dates: Nov 2024 - Present | Location: Hyderabad, India
   Platform: PrimeroEdge & SchoolCafé K-12 Enterprise Solutions
   - Cybersoft Claude ToolKit: Designed and engineered company-wide developer tool suite installed in 100% of UI repositories. Authored 30 custom skills, AST knowledge graphs, and pre-commit context hooks, decreasing token consumption by 65% and saving 10+ developer-hours weekly.
   - Cybersoft Internal Operations Portal: Created full-stack developer operations portal in React and .NET 9 with OpenTelemetry usage tracking and Azure Container App automation runners.
   - Enterprise Shared Components v2.0: Upgraded central enterprise design system to React 19, MUI v7, and Kendo React v13 with subpath exports, reducing consumer application bundle sizes by ~40%.
   - Insights Dashboard & Reports Workspace: Refactored legacy reports workspace into high-performance virtualized React components with Zustand state management, client-side PDF export, and SAML/OIDC authentication.
   - Delivery Modernization: Migrated legacy build pipelines from Webpack to Vite, introduced content-hashed CDN asset delivery, and containerized module builds with Docker.

2. Lead Engineer | Coditation Systems Pvt Ltd
   Dates: Dec 2021 - Sep 2024 (2 yrs 10 mos) | Location: India
   Platform: Sekel Tech Hyperlocal SaaS Platform
   - Directed frontend engineering team, leading architectural design, Vue.js / Nuxt.js migrations, and developer mentoring.
   - Implemented Server-Side Rendering (SSR) and code-level structured data SEO optimization for high-traffic commerce storefronts.
   - Built resilient Redux state machines and optimized rendering lifecycles for complex multi-store catalog views.

3. Front End Developer | Stridez Solutions India Pvt Ltd
   Dates: Sep 2018 - Sep 2021 (3 yrs) | Location: India
   Key Clients & Portals:
   - ZestMoney Finservice: Built responsive digital EMI onboarding modules and KYC validation workflows.
   - Anthem Healthcare: Developed healthcare insurance administrative portals with date-wise audit trails.
   - GCP Grocery & Books E-Commerce: Engineered responsive customer-facing shopping portals integrated with Node.js REST services on GCP.

==================================================
EDUCATION
==================================================
Master of Technology (M.Tech) in Power Electronics & Electrical Drives
Jawaharlal Nehru Technological University (JNTU), Hyderabad | Year: 2017
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const markdownContent = `# KATLA GANESHREDDY (GANESH REDDY KATLA)
**Senior Frontend Engineer & AI Enthusiast**  
- **Email:** [${contactInfo.primaryEmail}](mailto:${contactInfo.primaryEmail})  
- **Phone:** ${contactInfo.phone}  
- **Location:** ${contactInfo.location}  
- **GitHub:** [github.com/Ganeshreddykatla](https://github.com/Ganeshreddykatla)  

---

## Executive Summary
${bioData.summary}

---

## Key Achievements & Metrics
- **65% Reduction in AI Token Costs**: Built 30 custom Claude Code MCP skills and context knowledge graphs.
- **40% Bundle Size Reduction**: Architected Enterprise Shared Component System v2.0 in React 19.
- **Enterprise Scale Dashboards**: Delivered virtualized KPI dashboards for PrimeroEdge & SchoolCafé.
- **8+ Years Experience**: Proven frontend leadership across SaaS, FinTech, and Healthcare.

---

## Technical Skills
- **Languages & Frameworks:** React 18/19, TypeScript, JavaScript (ESNext), Vue.js, Nuxt.js, Next.js, React Native
- **AI & Enablement:** Claude Code MCP, AST Code Graphs, Pre-commit Hooks, OpenTelemetry, Prompt Engineering
- **State & Data:** Zustand, Redux Toolkit, TanStack Virtual, TanStack Query, REST APIs, GraphQL
- **UI & Styling:** Tailwind CSS, Material UI v7, Kendo React, Storybook, WCAG 2.1 AA
- **Build & DevOps:** Vite, Webpack, Docker, nginx, Azure DevOps, Azure Artifacts, CI/CD, SAML/OIDC

---

## Experience

### Senior Frontend Engineer | Cybersoft Technologies
*Nov 2024 – Present | Hyderabad, India*  
*Platform: PrimeroEdge & SchoolCafé*  
- Engineered Cybersoft Claude ToolKit across 100% of UI repos with 30 skills and AST graph summaries.
- Developed Cybersoft Internal Operations Portal with .NET 9 and OpenTelemetry.
- Architected Design System v2.0 with React 19, MUI v7, and subpath tree-shaking.
- Created virtualized Insights & Reports workspace with Zustand and client-side PDF export.
- Executed Webpack to Vite transitions with Dockerized builds and CDN delivery.

### Lead Engineer | Coditation Systems Pvt Ltd
*Dec 2021 – Sep 2024 (2 yrs 10 mos)*  
*Platform: Sekel Tech Hyperlocal SaaS*  
- Led frontend engineering team, mentoring developers and establishing Nuxt.js/Vue code standards.
- Designed SSR architecture and schema.org structured data for commerce SEO.
- Optimized catalog performance and state management.

### Front End Developer | Stridez Solutions India Pvt Ltd
*Sep 2018 – Sep 2021 (3 yrs)*  
- **ZestMoney:** Customer EMI onboarding flows and KYC verification.
- **Anthem Healthcare:** Responsive insurance claims and audit logging portal.
- **GCP Portals:** Grocery and books commerce web applications.

---

## Education
**Master of Technology (M.Tech) in Power Electronics & Electrical Drives**  
*Jawaharlal Nehru Technological University (JNTU), Hyderabad | 2017*
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ganesh_Reddy_Katla_Resume.md';
    link.click();
    URL.revokeObjectURL(url);
    triggerConfetti();
  };

  const handlePrint = () => {
    triggerConfetti();
    window.print();
  };

  const highlightKeyword = (text: string) => {
    if (!activeKeyword) return text;
    const parts = text.split(new RegExp(`(${activeKeyword})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === activeKeyword.toLowerCase() ? (
            <mark key={i} className="bg-emerald-500/30 text-emerald-200 px-1 py-0.5 rounded font-bold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-card"
        className="resume-print-container relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl bg-[#0c0e14] border border-white/[0.1] shadow-2xl p-5 sm:p-8 lg:p-10 text-left print:bg-white print:text-black print:border-none print:shadow-none print:p-0 print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Top Bar (Hidden in Print) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08] print:hidden">
          {/* Profile Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              Verified Profile Resume · Comprehensive Overview
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopyText}
              id="copy-resume-text-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-mono text-zinc-200 hover:text-white transition-colors cursor-pointer"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copied ? 'Copied Resume Text!' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              id="download-resume-md-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-mono text-zinc-200 hover:text-white transition-colors cursor-pointer"
              title="Download Markdown resume"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Download .MD</span>
            </button>

            <button
              onClick={handlePrint}
              id="print-resume-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
              title="Print cleanly or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.08] transition-colors cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Mode Switcher & Recruiter Toolbar (Hidden in Print) */}
        <div className="py-3 px-3.5 rounded-xl bg-zinc-900/50 border border-white/[0.05] mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-white/[0.06] text-xs font-mono">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1 rounded-md transition-all ${
                viewMode === 'interactive' ? 'bg-zinc-800 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Interactive View
            </button>
            <button
              onClick={() => setViewMode('recruiter-fast')}
              className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                viewMode === 'recruiter-fast' ? 'bg-emerald-500/20 text-emerald-300 font-medium shadow border border-emerald-500/30' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Recruiter 30-Sec Fast Scan
            </button>
            <button
              onClick={() => setViewMode('ats-clean')}
              className={`px-3 py-1 rounded-md transition-all ${
                viewMode === 'ats-clean' ? 'bg-zinc-800 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Profile Single-Column Clean
            </button>
          </div>

          {/* Photo Toggle */}
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showPhoto}
                onChange={(e) => setShowPhoto(e.target.checked)}
                className="rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-0 cursor-pointer"
              />
              <span>Include Photo in View</span>
            </label>
          </div>
        </div>

        {/* Skills Keyword Filter Pill Bar (Hidden in Print) */}
        <div className="pt-3 flex flex-wrap items-center gap-1.5 print:hidden">
          <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1 mr-1">
            <Search className="w-3 h-3" />
            Skills Keyword Highlight:
          </span>
          {atsKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setActiveKeyword(activeKeyword === kw ? null : kw)}
              className={`text-[11px] font-mono px-2 py-0.5 rounded-full transition-all cursor-pointer border ${
                activeKeyword === kw
                  ? 'bg-emerald-500 text-zinc-950 font-bold border-emerald-400 shadow-sm'
                  : 'bg-zinc-900/60 text-zinc-400 border-white/[0.06] hover:border-emerald-500/40 hover:text-zinc-200'
              }`}
            >
              {kw}
            </button>
          ))}
          {activeKeyword && (
            <button
              onClick={() => setActiveKeyword(null)}
              className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 underline ml-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* RECRUITER 30-SEC FAST SCAN VIEW */}
        {viewMode === 'recruiter-fast' && (
          <div className="my-6 p-5 rounded-xl bg-gradient-to-b from-emerald-950/20 to-zinc-900/40 border border-emerald-500/30 space-y-4 print:hidden">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Recruiter Cheat Sheet & High-Impact Metrics
              </h3>
              <span className="text-xs font-mono text-zinc-400">Total Experience: 8+ Years</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-zinc-950/70 border border-white/[0.06]">
                <span className="text-xl font-bold font-mono text-emerald-400">K-12 Nutrition</span>
                <p className="text-xs text-zinc-300 mt-0.5">US school districts powered by PrimeroEdge & SchoolCafé child nutrition software.</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-950/70 border border-white/[0.06]">
                <span className="text-xl font-bold font-mono text-sky-400">2y 10m Lead</span>
                <p className="text-xs text-zinc-300 mt-0.5">Frontend squad leadership at Coditation scaling Sekel Tech hyperlocal commerce with Nuxt SSR.</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-950/70 border border-white/[0.06]">
                <span className="text-xl font-bold font-mono text-purple-400">FinTech & Health</span>
                <p className="text-xs text-zinc-300 mt-0.5">Built ZestMoney digital EMI onboarding funnels & Anthem HIPAA claims interfaces at Stridez.</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-950/70 border border-white/[0.06]">
                <span className="text-xl font-bold font-mono text-amber-400">React 19 & AI</span>
                <p className="text-xs text-zinc-300 mt-0.5">Design System v2.0 (40% bundle drop) + Cybersoft Claude ToolKit (30 skills, 65% token drop).</p>
              </div>
            </div>

            <div className="text-xs text-zinc-300 space-y-1 font-mono pt-1">
              <p>✓ <b>Current Role:</b> Senior Frontend Engineer at Cybersoft Technologies (Nov 2024 - Present)</p>
              <p>✓ <b>Leadership:</b> Former Lead Engineer at Coditation Systems mentoring teams & driving Nuxt/Vue architecture</p>
              <p>✓ <b>Education:</b> Master of Technology (M.Tech) in Power Electronics & Electrical Drives (JNTU Hyderabad, 2017)</p>
              <p>✓ <b>Availability:</b> Open to Senior / Staff Frontend Engineer, UI Architecture, & AI Enablement roles</p>
            </div>
          </div>
        )}

        {/* MAIN RESUME CONTENT (CLEAN STANDARD STRUCTURE) */}
        <div className="pt-6 space-y-7 print:pt-0 print:space-y-5">
          {/* Header Card with Photo Integration */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/[0.08] pb-6 print:border-black print:pb-4">
            <div className="space-y-2 flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight print:text-black">
                Katla Ganeshreddy (Ganesh Reddy Katla)
              </h1>
              <p className="text-base text-emerald-400 font-medium print:text-black">
                Senior Frontend Engineer & AI Enthusiast · Cybersoft Technologies
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-zinc-400 print:text-black pt-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                  {contactInfo.primaryEmail}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                  (+91) 8309226472
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                  Hyderabad, India
                </span>
                {contactInfo.github && (
                  <>
                    <span>·</span>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors print:text-black"
                    >
                      <Github className="w-3.5 h-3.5 print:hidden" />
                      <span>github.com/Ganeshreddykatla</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Profile Photo Avatar (Toggled by user preference or print rules) */}
            {showPhoto && (
              <div className="shrink-0 print:hidden">
                <AvatarPhoto size="md" showOrbit={false} showBadge={true} allowUpload={true} />
              </div>
            )}
          </div>

          {/* Executive Profile */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold print:text-black">
              Executive Profile & Career Summary
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed print:text-black">
              {highlightKeyword(bioData.summary)}
            </p>
          </div>

          {/* Core Technical Arsenal */}
          <div className="space-y-3 pt-1">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold print:text-black">
              Technical Core Competencies & Tooling
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] print:bg-white print:border-gray-300">
                <span className="font-bold text-zinc-200 block mb-1 print:text-black">Frontend Architecture:</span>
                <span className="text-zinc-400 font-mono print:text-black">
                  {highlightKeyword('React 18/19, TypeScript, JavaScript (ESNext), React Native, Vue.js, Nuxt.js, Next.js, Redux Toolkit, Zustand, TanStack Virtual, Microfrontends')}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] print:bg-white print:border-gray-300">
                <span className="font-bold text-zinc-200 block mb-1 print:text-black">AI Engineering & Developer Tooling:</span>
                <span className="text-zinc-400 font-mono print:text-black">
                  {highlightKeyword('Claude Code MCP, Custom Skills Creation (30 skills), AST Knowledge Graphs, Context-First Pre-Commit Hooks, OpenTelemetry Dashboarding, Prompt Engineering')}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] print:bg-white print:border-gray-300">
                <span className="font-bold text-zinc-200 block mb-1 print:text-black">Design Systems & Accessibility:</span>
                <span className="text-zinc-400 font-mono print:text-black">
                  {highlightKeyword('Material UI v7, Kendo React v13, Tailwind CSS, Storybook, Sub-path Exports, Tree Shaking, WCAG 2.1 AA Compliance, Responsive Layouts')}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/40 border border-white/[0.04] print:bg-white print:border-gray-300">
                <span className="font-bold text-zinc-200 block mb-1 print:text-black">Build, Performance & Cloud Delivery:</span>
                <span className="text-zinc-400 font-mono print:text-black">
                  {highlightKeyword('Vite, Webpack, Docker containerization, nginx, Azure DevOps CI/CD, Azure Artifacts, Content-Hashed CDN Delivery, SAML/OIDC SSO')}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="space-y-6 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold print:text-black">
              Professional Work Experience
            </h2>

            {/* Cybersoft Technologies */}
            <div className="space-y-2 pl-4 border-l-2 border-emerald-500/60 print:border-black print:pl-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-black">
                  Senior Frontend Engineer · Cybersoft Technologies
                </h3>
                <span className="text-xs font-mono text-zinc-400 print:text-black">Nov 2024 – Present | Hyderabad, India</span>
              </div>
              <p className="text-xs text-emerald-400 font-mono print:text-black">
                PrimeroEdge & SchoolCafé K-12 Enterprise SaaS Platform
              </p>
              <ul className="text-xs text-zinc-300 space-y-2 pt-1 list-disc pl-4 print:text-black">
                <li>
                  <b>Cybersoft Claude ToolKit:</b> {highlightKeyword('Designed and engineered company-wide AI developer toolkit installed in 100% of UI repositories. Created 30 production skills, pre-commit context summaries, and an AST-driven knowledge graph, cutting token consumption by 65% and saving 10+ developer-hours per week.')}
                </li>
                <li>
                  <b>Cybersoft Internal Operations Portal:</b> {highlightKeyword('Architected full-stack developer operations portal in React and .NET 9 with OpenTelemetry usage tracking, custom skill discovery, and on-demand Playwright/Selenium test execution runners on Azure Container Apps.')}
                </li>
                <li>
                  <b>Enterprise Shared Components v2.0:</b> {highlightKeyword('Upgraded core enterprise design system to React 19, MUI v7, and Kendo React v13 with subpath exports, reducing consumer application bundle sizes by ~40% and eliminating common cross-package runtime conflicts.')}
                </li>
                <li>
                  <b>Insights Dashboard & Reports Workspace:</b> {highlightKeyword('Modernized complex legacy reports workspace into high-performance virtualized React components with Zustand pooled notifications, client-side PDF export, and SAML/OIDC enterprise authentication.')}
                </li>
                <li>
                  <b>Build & Delivery Modernization:</b> {highlightKeyword('Migrated modules from Webpack to Vite, added content-hashed CDN asset delivery, and containerized module builds with Docker.')}
                </li>
              </ul>
            </div>

            {/* Coditation Systems */}
            <div className="space-y-2 pl-4 border-l-2 border-sky-500/40 print:border-black print:pl-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-black">
                  Lead Engineer · Coditation Systems Pvt Ltd
                </h3>
                <span className="text-xs font-mono text-zinc-400 print:text-black">Dec 2021 – Sep 2024 (2 yrs 10 mos)</span>
              </div>
              <p className="text-xs text-sky-400 font-mono print:text-black">
                Sekel Tech Hyperlocal SaaS Platform
              </p>
              <ul className="text-xs text-zinc-300 space-y-1.5 pt-1 list-disc pl-4 print:text-black">
                <li>
                  {highlightKeyword('Led frontend engineering team, establishing Vue.js / Nuxt.js code standards, driving sprint planning, and conducting rigorous code reviews.')}
                </li>
                <li>
                  {highlightKeyword('Implemented Server-Side Rendering (SSR) and code-level structured data SEO optimization for high-traffic commerce storefronts.')}
                </li>
                <li>
                  {highlightKeyword('Engineered robust state management flows with Redux and optimized rendering performance across complex catalog experiences.')}
                </li>
              </ul>
            </div>

            {/* Stridez Solutions */}
            <div className="space-y-2 pl-4 border-l-2 border-zinc-800 print:border-black print:pl-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-black">
                  Front End Developer · Stridez Solutions India Pvt Ltd
                </h3>
                <span className="text-xs font-mono text-zinc-400 print:text-black">Sep 2018 – Sep 2021 (3 yrs)</span>
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 pt-1 list-disc pl-4 print:text-black">
                <li>
                  <b>ZestMoney Finservice:</b> {highlightKeyword('Developed responsive React modules for customer onboarding journeys, digital EMI processing, and KYC verification.')}
                </li>
                <li>
                  <b>Anthem Healthcare:</b> {highlightKeyword('Built insurance management portal interfaces with responsive layout and date-wise audit reporting.')}
                </li>
                <li>
                  <b>GCP Grocery & Books E-Commerce:</b> {highlightKeyword('Developed retail and wholesale customer portals integrated with Node.js REST APIs and hosted on GCP App Engine.')}
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold print:text-black">
              Education & Academic Credentials
            </h2>
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] print:bg-white print:border-gray-300">
              <div>
                <h4 className="text-sm font-bold text-white print:text-black">
                  Master of Technology (M.Tech) in Power Electronics & Electrical Drives
                </h4>
                <p className="text-xs text-zinc-400 print:text-black">
                  Jawaharlal Nehru Technological University (JNTU), Hyderabad
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-300 bg-zinc-800 px-3 py-1 rounded print:bg-transparent print:text-black print:border">
                2017
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions (Hidden in Print) */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <span className="text-xs text-zinc-400 font-mono">
            Hyderabad, Telangana, India · Senior Frontend & AI Roles
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-mono text-zinc-200 transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-xs font-bold text-zinc-950 transition-colors cursor-pointer"
            >
              Close Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
