export default function Home() {
  return (
    <div className="relative h-screen w-full bg-background text-foreground overflow-hidden select-none">
      {/* Noise grain */}
      <div className="fuzzy-overlay1" />
      <div className="fuzzy-overlay2" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 z-10 crt-scanline-overlay"></div>

      {/* Glitch copy */}
      <div
        className="absolute inset-0 z-30 flex items-center justify-center text-7xl glitch-layer pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[var(--color-crt-glow)] font-title opacity-50">
          bartch.io
        </span>
      </div>

      {/* Normal content */}
      <div className="relative z-20 flex h-full items-center justify-center text-7xl">
        <span className="drop-shadow-[0_0_8px_var(--color-crt-glow)] font-title">
          bartch.io
        </span>
      </div>
    </div>
  );
}

