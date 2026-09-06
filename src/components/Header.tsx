import React, { useState, useEffect } from 'react';
import { contactInfo } from '../data/portfolioData';
import { Mail, Check, FileText, ArrowUpRight, Menu, X, Sparkles, Github } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.primaryEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0d]/85 backdrop-blur-md border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#"
            id="brand-logo"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/60 text-zinc-100 font-mono text-sm font-semibold tracking-wider group-hover:border-emerald-500/60 group-hover:text-emerald-400 transition-all">
              GK
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#090a0d] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-100 tracking-tight flex items-center gap-1.5 group-hover:text-white transition-colors">
                Ganesh Reddy Katla
              </span>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">
                Senior Frontend Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`px-3 py-1 text-xs tracking-wide rounded-full transition-colors ${
                    isActive
                      ? 'text-white bg-white/10 font-medium'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            {contactInfo.github && (
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="header-github-btn"
                aria-label="View GitHub profile"
                title="GitHub: github.com/Ganeshreddykatla"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">GitHub</span>
              </a>
            )}

            <button
              onClick={handleCopyEmail}
              id="header-copy-email-btn"
              aria-label="Copy primary email address"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResume}
              id="header-view-resume-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            {contactInfo.github && (
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white text-xs flex items-center"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-emerald-400 text-xs flex items-center gap-1"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-xl bg-zinc-900/95 border border-white/[0.08] backdrop-blur-xl flex flex-col gap-3 shadow-xl">
            <div className="flex flex-col gap-1 border-b border-zinc-800 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-1">
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-800 text-xs text-zinc-200 border border-white/[0.06] hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub: github.com/Ganeshreddykatla</span>
                </a>
              )}
              <button
                onClick={() => {
                  handleCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-800 text-xs text-zinc-200 border border-white/[0.06]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-zinc-400" />}
                <span>{copied ? 'Email Copied!' : `Copy ${contactInfo.primaryEmail}`}</span>
              </button>
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-medium"
              >
                <FileText className="w-4 h-4" />
                <span>View Complete CV</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
