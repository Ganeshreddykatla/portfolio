import React from 'react';
import { Briefcase, Layers, Terminal, Mail, FileText } from 'lucide-react';

interface MobileNavProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onOpenResume, activeSection }) => {
  const items = [
    { id: 'projects', label: 'Work', icon: Layers, href: '#projects' },
    { id: 'experience', label: 'Career', icon: Briefcase, href: '#experience' },
    { id: 'skills', label: 'Skills', icon: Terminal, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <div className="sm:hidden fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Mobile Bottom Navigation"
        className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/90 border border-white/[0.12] shadow-2xl backdrop-blur-xl"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-full transition-all text-[11px] font-mono ${
                isActive
                  ? 'bg-white/10 text-white font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span>{item.label}</span>
            </a>
          );
        })}

        <div className="w-[1px] h-6 bg-white/[0.1] mx-0.5" />

        <button
          onClick={onOpenResume}
          className="flex flex-col items-center justify-center px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-medium transition-all"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>CV</span>
        </button>
      </nav>
    </div>
  );
};
