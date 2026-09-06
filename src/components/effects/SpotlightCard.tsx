import React, { useRef, useState, useCallback } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  enableTilt?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(52, 211, 153, 0.16)', // Emerald default
  borderColor = 'rgba(52, 211, 153, 0.7)',
  enableTilt = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Max tilt of ±3 degrees for sleek, physical depth
      const tiltX = -((y - centerY) / centerY) * 3;
      const tiltY = ((x - centerX) / centerX) * 3;
      setTilt({ x: tiltX, y: tiltY });
    }
  }, [enableTilt]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt && isHovered
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateZ(4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative group rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 ${className}`}
      {...props}
    >
      {/* 1. Dynamic Reactive Spotlight Border (Elliott Programmer Signature) */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(360px circle at ${mousePos.x}px ${mousePos.y}px, ${borderColor}, rgba(56, 189, 248, 0.3) 45%, transparent 75%)`,
        }}
      />

      {/* 2. Static subtle border base */}
      <div className="absolute inset-0 rounded-2xl bg-white/[0.07] group-hover:bg-transparent transition-colors pointer-events-none" />

      {/* 3. Card Base Container */}
      <div className="relative z-10 w-full h-full rounded-[15px] bg-[#0c0e14] overflow-hidden flex flex-col justify-between transition-colors duration-300 group-hover:bg-[#0f121a]">
        {/* Dynamic Card Surface Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 65%)`,
          }}
        />

        {/* Ambient Corner Specular Glow */}
        <div className="pointer-events-none absolute top-0 right-0 w-36 h-36 bg-emerald-500/[0.03] rounded-full blur-2xl" />

        {/* Inner Content */}
        <div className="relative z-20 flex-1 flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};

