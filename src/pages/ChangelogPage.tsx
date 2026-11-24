import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const ChangelogPage: React.FC = () => {
  return (
    <div className="w-full pt-32 sm:pt-40 pb-28 sm:pb-36 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral/70 hover:text-neutral transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
          Release History
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight mb-12">
          Changelog
        </h1>

        <div className="space-y-12">
          <div className="p-8 bg-surface border border-neutral/15 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl text-neutral font-medium">
                Version 1.0.0 — Production Release
              </span>
              <span className="text-xs font-sans uppercase tracking-wider text-text-light">
                November 2026
              </span>
            </div>
            <p className="text-text-light text-sm leading-relaxed">
              Complete high-fidelity recreation of the Villora luxury villa experience across all 9 primary routes, dynamic CMS experiences (Activities, Facilities, Vouchers, Blog), Lenis smooth scrolling, GSAP ScrollTrigger choreography, and full mobile responsiveness.
            </p>
            <ul className="list-disc list-inside text-xs text-text-light space-y-1 pt-2">
              <li>Engineered with React 18, TypeScript, Vite, and Tailwind CSS.</li>
              <li>Recreated floating 728px navigation bar and animated 3x3 mega menu.</li>
              <li>Integrated real local media library with HD video hero and scroll showcase.</li>
              <li>Full form validation and WCAG AA accessibility compliance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
