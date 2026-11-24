import React from 'react'
import { Link } from 'react-router-dom'
import { HeroVideo } from '@/components/hero/HeroVideo'
import { ScrollVideoShowcase } from '@/components/common/ScrollVideoShowcase'
import { EstateHotspots } from '@/components/common/EstateHotspots'
import { activitiesData } from '@/data/activities'
import { estateCollectionData } from '@/data/estateCollection'
import { ArrowRight } from 'lucide-react'

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* SECTION A: Cinematic Video Hero */}
      <HeroVideo />

      {/* SECTION B: Editorial Introduction */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light block">
              Architectural Philosophy
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal leading-[1.1] tracking-tight">
              Some places you visit <br />
              <span className="italic">Villora castle</span> <br />
              You’ll feel like home
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-8 lg:pt-8">
            <p className="text-text-light text-base sm:text-lg leading-relaxed">
              At Villora, we believe architecture should create a sense of harmony. Our approach combines clean aesthetics, functional planning, and sustainable thinking to shape spaces that elevate everyday living along the Pacific shore.
            </p>
            <div>
              <Link
                to="/booking"
                className="inline-flex items-center gap-3 bg-neutral text-white px-7 py-3.5 text-xs font-sans uppercase tracking-widest font-medium hover:bg-neutral/85 transition-colors group"
              >
                <span>Book now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Scroll-Driven Video Showcase */}
      <ScrollVideoShowcase />

      {/* SECTION D: Activities Showcase */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 max-w-container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
            Curated Experiences
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
            Our Activities
          </h2>
        </div>

        <div className="space-y-24 sm:space-y-36">
          {activitiesData.map((activity, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <div
                key={activity.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Imagery Block (Takes 7 cols) */}
                <div
                  className={`relative overflow-hidden ${
                    isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'
                  }`}
                >
                  <div className="aspect-[3/2] w-full overflow-hidden bg-neutral/10 group">
                    <img
                      src={activity.thumbnailImage}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Editorial Text Block (Takes 5 cols) */}
                <div
                  className={`space-y-6 ${
                    isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'
                  }`}
                >
                  <span className="text-xs font-sans tracking-widest uppercase font-medium text-text-light/80 block">
                    Experience {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral font-normal tracking-tight">
                    {activity.title}
                  </h3>
                  <p className="text-text-light text-base leading-relaxed">
                    {activity.description}
                  </p>
                  <div>
                    <Link
                      to={`/activity/${activity.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light hover:border-text-light transition-colors group"
                    >
                      <span>Know more</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION E: Estate Collection */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 max-w-container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
              Architectural Highlights
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
              Estate Collection
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light transition-colors self-start sm:self-auto"
          >
            Explore all images
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {estateCollectionData.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[4/5] w-full overflow-hidden bg-neutral/10 mb-5 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-2xl text-neutral font-medium mb-1">
                {item.title}
              </h3>
              <p className="text-text-light text-xs sm:text-sm leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION F: Property Interactive Overview (Hotspots) */}
      <EstateHotspots />
    </div>
  )
}
