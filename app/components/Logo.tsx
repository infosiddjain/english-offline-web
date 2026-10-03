import React from 'react';

interface LogoProps {
  /** Tile size in pixels. */
  size?: number;
  className?: string;
}

/**
 * Brand mark — ivory serif "E" with a bronze "अ" badge on a burgundy tile.
 * Same design as the app icon, drawn in HTML so it stays sharp at any size.
 */
export default function Logo({ size = 40, className = '' }: LogoProps) {
  const badge = size * 0.34;
  return (
    <span
      role="img"
      aria-label="English Offline logo"
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-burgundy shadow-sm ${className}`}
      style={{ width: size, height: size, borderRadius: size * 0.24 }}
    >
      {size >= 56 && (
        <span
          aria-hidden
          className="absolute border-bronze/45"
          style={{ inset: size * 0.07, borderRadius: size * 0.18, borderWidth: Math.max(1, size * 0.008) }}
        />
      )}
      <span
        aria-hidden
        className="font-serif font-bold leading-none text-ivory"
        style={{ fontSize: size * 0.64, marginLeft: -size * 0.12, marginTop: -size * 0.04 }}
      >
        E
      </span>
      <span
        aria-hidden
        className="absolute flex items-center justify-center rounded-full border-burgundy bg-bronze font-hindi font-bold leading-none text-ivory"
        style={{
          width: badge,
          height: badge,
          right: size * 0.12,
          bottom: size * 0.13,
          borderWidth: Math.max(1.5, size * 0.03),
          fontSize: badge * 0.56,
        }}
      >
        अ
      </span>
    </span>
  );
}
