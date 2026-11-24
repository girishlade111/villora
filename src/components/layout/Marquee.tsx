import React from 'react'
import { siteConfig } from '@/data/siteConfig'

export const Marquee: React.FC = () => {
  // Duplicate list to achieve continuous seamless loop
  const items = [...siteConfig.marqueeItems, ...siteConfig.marqueeItems, ...siteConfig.marqueeItems]

  return (
    <div className="w-full bg-white border-y border-neutral/10 py-4 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8 text-neutral font-sans text-xs tracking-[0.2em] uppercase font-semibold whitespace-nowrap">
            <span>{item}</span>
            <svg
              className="w-2.5 h-2.5 text-neutral/40 flex-shrink-0"
              viewBox="0 0 10 10"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="5,0 6.2,3.8 10,5 6.2,6.2 5,10 3.8,6.2 0,5 3.8,3.8" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
