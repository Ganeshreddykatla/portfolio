import React, { useState, useEffect } from 'react';

interface TypewriterRoleProps {
  roles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export const TypewriterRole: React.FC<TypewriterRoleProps> = ({
  roles = [
    'Senior Frontend Engineer',
    'AI Enthusiast & ToolKit Creator',
    'Enterprise Design System Architect',
    'React 19 & Modern Web Specialist',
    'Developer Enablement Lead',
  ],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2200,
  className = '',
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span className="text-emerald-400 font-semibold">{currentText}</span>
      <span className="w-2.5 h-6 bg-emerald-400 ml-1.5 animate-pulse inline-block align-middle rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
    </span>
  );
};
