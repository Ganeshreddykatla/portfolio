import React, { useEffect, useState, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    let isTouch = false;

    const handleTouch = () => {
      isTouch = true;
    };
    window.addEventListener('touchstart', handleTouch, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating micro-particles canvas (subtle, non-intrusive)
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
          if (!canvas) return;
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Micro nodes
        const nodeCount = Math.min(35, Math.floor(width / 45));
        const nodes: Array<{
          x: number;
          y: number;
          vx: number;
          vy: number;
          radius: number;
          alpha: number;
        }> = [];

        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            radius: Math.random() * 1.5 + 0.8,
            alpha: Math.random() * 0.35 + 0.1,
          });
        }

        const render = () => {
          ctx.clearRect(0, 0, width, height);

          // Update & draw particles
          nodes.forEach((node) => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0) node.x = width;
            if (node.x > width) node.x = 0;
            if (node.y < 0) node.y = height;
            if (node.y > height) node.y = 0;

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(52, 211, 153, ${node.alpha})`;
            ctx.fill();
          });

          animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('touchstart', handleTouch);
          cancelAnimationFrame(animationFrameId);
        };
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* 1. DhruvJS Ambient Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.045), rgba(56, 189, 248, 0.02) 40%, transparent 75%)`,
        }}
      />

      {/* 2. Sleek Cyber Grid Matrix (Oblivious Aman + Dhruvjs) */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.6) 1px, transparent 0)
          `,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)',
        }}
      />

      {/* 3. Deep Ambient Colored Halos */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.04] blur-[140px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-sky-500/[0.035] blur-[150px] rounded-full" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-purple-500/[0.03] blur-[160px] rounded-full" />

      {/* 4. Canvas Floating Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
};
