import React from 'react'
import { Link } from 'react-router-dom'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { facilitiesData } from '@/data/facilities'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const FacilitiesPage: React.FC = () => {
  return (
    <div className="w-full">
      <InnerPageHero
        title="OUR FACILITIES"
        subtitle="Exclusive Estate Amenities"
        bgImage="/assets/posters/hero-poster.jpg"
      />

      <section className="py-24 sm:py-36 px-6 sm:px-10 max-w-container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
            World-Class Comfort
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
            Designed for total leisure &amp; restorative peace
          </h2>
        </div>

        {/* 6 Warm-Beige Rectangular Facility Rows */}
        <div className="space-y-16 sm:space-y-20">
          {facilitiesData.map((facility, idx) => (
            <div
              key={facility.id}
              className="bg-surface border border-neutral/15 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group transition-shadow hover:shadow-md"
            >
              {/* Image Column (Half visual area) */}
              <div className="lg:col-span-6 overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral/10">
                  <img
                    src={facility.thumbnailImage}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-sans tracking-widest uppercase font-semibold text-text-light/80 block">
                  Facility {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral font-normal tracking-tight">
                  {facility.title}
                </h3>
                <p className="text-text-light text-base leading-relaxed">
                  {facility.summary}
                </p>

                {/* Highlights preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {facility.highlights.slice(0, 4).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-text-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={`/facility/${facility.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light hover:border-text-light transition-colors group"
                  >
                    <span>View more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
