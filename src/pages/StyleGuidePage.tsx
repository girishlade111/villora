import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const StyleGuidePage: React.FC = () => {
  return (
    <div className="w-full pt-32 sm:pt-40 pb-28 sm:pb-36 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
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
          Design System &amp; Tokens
        </span>
        <h1 className="font-display text-4xl sm:text-6xl text-neutral uppercase font-normal tracking-tight mb-16">
          Style Guide
        </h1>

        <div className="space-y-20">
          {/* Colors */}
          <section className="space-y-6">
            <h2 className="font-heading text-2xl text-neutral font-medium pb-2 border-b border-neutral/20">
              1. Color Tokens
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="h-24 bg-background border border-neutral/20 rounded-sm" />
                <span className="text-xs font-semibold block text-neutral">Background</span>
                <span className="text-[11px] text-text-light font-mono">#EBE3DA</span>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-neutral border border-neutral/20 rounded-sm" />
                <span className="text-xs font-semibold block text-neutral">Neutral / Dark</span>
                <span className="text-[11px] text-text-light font-mono">#0A1010</span>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-surface border border-neutral/20 rounded-sm" />
                <span className="text-xs font-semibold block text-neutral">Surface Card</span>
                <span className="text-[11px] text-text-light font-mono">#EFE9E1</span>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-card-bg border border-neutral/20 rounded-sm" />
                <span className="text-xs font-semibold block text-neutral">Card Accent</span>
                <span className="text-[11px] text-text-light font-mono">#E4D7C9</span>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-8">
            <h2 className="font-heading text-2xl text-neutral font-medium pb-2 border-b border-neutral/20">
              2. Typography Hierarchy
            </h2>
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-text-light block mb-1">
                  Display Serif (Oranienbaum)
                </span>
                <div className="font-display text-5xl uppercase text-neutral">
                  VILLORA CASTLE
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-text-light block mb-1">
                  Heading 01 (Bellefair)
                </span>
                <div className="font-heading text-4xl text-neutral">
                  Our core values of timeless coastal excellence
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-text-light block mb-1">
                  Heading 02 (Bellefair)
                </span>
                <div className="font-heading text-3xl text-neutral">
                  Curated journeys for discerning guests
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-text-light block mb-1">
                  Body Copy (Manrope)
                </span>
                <p className="font-sans text-base text-text-light max-w-xl leading-relaxed">
                  At Villora, we believe architecture should create a sense of harmony. Our approach combines clean aesthetics, functional planning, and sustainable thinking to shape spaces that elevate everyday living.
                </p>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className="space-y-6">
            <h2 className="font-heading text-2xl text-neutral font-medium pb-2 border-b border-neutral/20">
              3. Interactive Controls
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                className="bg-neutral text-white px-7 py-3 text-xs font-sans uppercase tracking-widest font-medium hover:bg-neutral/85 transition-colors cursor-pointer"
              >
                Primary Button
              </button>
              <button
                type="button"
                className="border border-neutral text-neutral px-7 py-3 text-xs font-sans uppercase tracking-widest font-medium hover:bg-neutral hover:text-white transition-colors cursor-pointer"
              >
                Outline Button
              </button>
              <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 cursor-pointer">
                <span>Underlined Action</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
