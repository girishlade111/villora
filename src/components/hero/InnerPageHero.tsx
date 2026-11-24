import React from 'react'

interface InnerPageHeroProps {
  title: string
  subtitle?: string
  bgImage?: string
}

export const InnerPageHero: React.FC<InnerPageHeroProps> = ({
  title,
  subtitle,
  bgImage = '/assets/posters/hero-poster.jpg',
}) => {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] max-h-[650px] overflow-hidden bg-neutral">
      {/* Background Image / Banner */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-neutral/40 to-neutral/60 pointer-events-none" />

      {/* Stage Container */}
      <div className="relative z-10 w-full h-full max-w-container mx-auto px-6 sm:px-10 flex flex-col justify-end pb-12 sm:pb-16 text-center sm:text-left">
        {subtitle && (
          <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-white/70 mb-3 block">
            {subtitle}
          </span>
        )}
        <h1 className="font-display text-white text-5xl sm:text-7xl lg:text-9xl uppercase font-normal tracking-tight leading-[0.9]">
          {title}
        </h1>
      </div>
    </section>
  )
}
