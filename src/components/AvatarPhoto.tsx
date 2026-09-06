import React, { useState, useEffect, useRef } from 'react';
import { Camera, CheckCircle2, Sparkles, Upload, RefreshCw } from 'lucide-react';

interface AvatarPhotoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showOrbit?: boolean;
  showBadge?: boolean;
  className?: string;
  allowUpload?: boolean;
}

export const AvatarPhoto: React.FC<AvatarPhotoProps> = ({
  size = 'lg',
  showOrbit = false,
  showBadge = true,
  className = '',
  allowUpload = true,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Check localStorage for uploaded photo
    const stored = localStorage.getItem('portfolio_user_photo');
    if (stored) {
      setPhotoUrl(stored);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          try {
            localStorage.setItem('portfolio_user_photo', result);
          } catch (err) {
            console.warn('Could not save photo to localStorage (quota)', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(null);
    localStorage.removeItem('portfolio_user_photo');
  };

  // Dimensions
  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-xl',
    lg: 'w-28 h-28 sm:w-32 sm:h-32 text-2xl',
    xl: 'w-36 h-36 sm:w-44 sm:h-44 text-3xl',
  }[size];

  return (
    <div className={`relative inline-block select-none group ${className}`}>
      {/* Outer ambient radiant glow */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/25 via-sky-500/20 to-purple-500/25 blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 animate-pulse-glow" />

      {/* Orbiting Tech Badges (when showOrbit is true) */}
      {showOrbit && (
        <>
          <div className="absolute -top-3 -right-2 z-20 px-2 py-0.5 rounded-full bg-zinc-900/90 border border-emerald-500/50 text-[10px] font-mono text-emerald-300 shadow-lg shadow-emerald-900/30 flex items-center gap-1 animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>AI Lead</span>
          </div>
          <div className="absolute -bottom-2 -left-2 z-20 px-2 py-0.5 rounded-full bg-zinc-900/90 border border-sky-500/50 text-[10px] font-mono text-sky-300 shadow-lg shadow-sky-900/30 flex items-center gap-1 animate-float-slow">
            <span>React 19</span>
          </div>
        </>
      )}

      {/* Avatar Container with Gradient Border */}
      <div
        className={`relative ${sizeClasses} rounded-full p-[2.5px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-sky-400 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer overflow-hidden`}
        onClick={() => allowUpload && fileInputRef.current?.click()}
        title={allowUpload ? "Click to upload your custom photo" : undefined}
      >
        <div className="w-full h-full rounded-full bg-[#0d0f15] overflow-hidden relative flex items-center justify-center">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Ganesh Reddy Katla"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* High-Detail Stylized Senior Engineer Avatar */
            <div className="w-full h-full bg-gradient-to-br from-[#121622] via-[#0b0e14] to-[#081512] flex flex-col items-center justify-center relative overflow-hidden">
              {/* Background grid texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #34d399 1px, transparent 0)',
                  backgroundSize: '8px 8px',
                }}
              />
              
              {/* Stylized Developer Silhouette & Initial Monogram */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="font-mono font-bold tracking-tight text-white/90 drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]">
                  GK
                </span>
                <span className="text-[9px] font-mono tracking-widest text-emerald-400/90 uppercase -mt-0.5">
                  GANESH
                </span>
              </div>

              {/* Cyan / Emerald Bottom Glow Arc */}
              <div className="absolute -bottom-4 w-20 h-10 bg-emerald-500/30 blur-md rounded-full pointer-events-none" />
            </div>
          )}

          {/* Upload Hover Overlay */}
          {allowUpload && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1 text-white z-20">
              <Camera className="w-5 h-5 text-emerald-400" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-200">
                {photoUrl ? 'Change' : 'Upload'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hidden File Input for uploading custom headshot */}
      {allowUpload && (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          className="hidden"
          id="avatar-photo-upload-input"
        />
      )}

      {/* Verified Senior Engineer Badge */}
      {showBadge && (
        <div
          className="absolute -bottom-1 right-1 z-30 p-1 rounded-full bg-zinc-950 border border-emerald-500/60 shadow-lg shadow-emerald-950/80"
          title="Verified Senior Frontend Engineer (Cybersoft Technologies)"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
        </div>
      )}

      {/* Reset to Default Button (only if custom photo uploaded) */}
      {photoUrl && allowUpload && (
        <button
          onClick={handleResetPhoto}
          title="Reset to default avatar"
          className="absolute -top-1 -left-1 z-30 p-1 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all opacity-0 group-hover:opacity-100"
        >
          <RefreshCw className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};
