import React, { useState } from 'react';

const Logo: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/images/logo.png"
        alt="Brixel Tech Logo"
        onError={() => setImgError(true)}
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-500 hover:scale-105 select-none -my-2 -mr-3 sm:-mr-4"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 hover:scale-105 select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glowing Red Gradient for Pixels */}
        <linearGradient id="logo-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        {/* Tech Glass Gradient for Bricks */}
        <linearGradient id="logo-grad-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Assembly of 4 geometric modular blocks representing Brixel (Bricks + Pixels) */}
      {/* Top Left - Active Amber Core */}
      <rect x="18" y="18" width="28" height="28" rx="6" fill="url(#logo-grad-primary)" />
      
      {/* Top Right - Sleek Blue Grid */}
      <rect x="54" y="18" width="28" height="28" rx="6" fill="url(#logo-grad-secondary)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      
      {/* Bottom Left - Sleek Blue Grid */}
      <rect x="18" y="54" width="28" height="28" rx="6" fill="url(#logo-grad-secondary)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      
      {/* Bottom Right - Active Amber Core */}
      <rect x="54" y="54" width="28" height="28" rx="6" fill="url(#logo-grad-primary)" />

      {/* Interlocking connection element in center */}
      <rect x="44" y="44" width="12" height="12" rx="3" fill="#ffffff" />
    </svg>
  );
};

export default Logo;
