import React from 'react';
import { contactInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, MapPin, Heart, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#07080a] py-12 pb-24 sm:pb-12 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <span className="text-sm font-semibold text-white tracking-tight">
            Ganesh Reddy Katla
          </span>
          <p className="text-zinc-500 font-mono text-[11px]">
            Senior Frontend Engineer & Technical Lead · 8+ Years Experience · Hyderabad, India
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          {contactInfo.github && (
            <>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">/</span>
            </>
          )}
          <a
            href={`mailto:${contactInfo.primaryEmail}`}
            className="hover:text-emerald-400 transition-colors"
          >
            Email
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="hover:text-sky-400 transition-colors"
          >
            Phone
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <span className="text-zinc-700">/</span>
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-zinc-400"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
