/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveBackground } from './components/effects/InteractiveBackground';
import { CursorFollower } from './components/effects/CursorFollower';
import { ProjectCategory } from './types';
import { FileCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeSection, setActiveSection] = useState<string>('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero-section', 'projects', 'experience', 'skills', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s === 'hero-section' ? '' : s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0d] text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-emerald-400 relative">
      {/* 1. Dynamic Cursor Spotlight & Cyber Matrix (DhruvJS / Oblivious Aman inspired) */}
      <InteractiveBackground />

      {/* 2. Smooth Lerp Cursor Follower */}
      <CursorFollower />

      {/* Top Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main className="flex-1 relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onSelectCategory={(cat: ProjectCategory) => setSelectedCategory(cat)}
        />

        <ProjectsSection
          selectedCategory={selectedCategory}
          onCategoryChange={(cat: ProjectCategory) => setSelectedCategory(cat)}
        />

        <ExperienceTimeline />

        <SkillsSection />

        <AboutSection />

        <ContactSection />
      </main>

      {/* Floating Recruiter Profile Resume Action Button (Desktop side-dock) */}
      <div className="fixed right-6 bottom-8 z-40 hidden lg:flex flex-col items-end gap-2 group">
        <button
          onClick={() => setResumeOpen(true)}
          id="floating-recruiter-resume-btn"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-emerald-500/40 hover:border-emerald-400 text-xs font-mono text-white shadow-xl shadow-emerald-950/40 backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold text-emerald-400">Profile Resume</span>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-300">8+ Yrs Exp</span>
        </button>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar */}
      <MobileNav
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

