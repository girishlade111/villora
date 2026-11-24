import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { facilitiesData } from '@/data/facilities'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { ArrowRight, CheckCircle2, Users, Clock } from 'lucide-react'

export const FacilityDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const facility = facilitiesData.find((f) => f.slug === slug)

  if (!facility) {
    return <Navigate to="/facilities" replace />
  }

  const otherFacilities = facilitiesData.filter((f) => f.slug !== slug).slice(0, 3)

  return (
    <div className="w-full">
      <InnerPageHero
        title={facility.title}
        subtitle="Exclusive Estate Amenity"
        bgImage={facility.thumbnailImage}
      />

      <section className="py-20 sm:py-32 px-6 sm:px-10 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story & Highlights */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
                Amenity Overview
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral font-normal tracking-tight">
                {facility.title}
              </h2>
            </div>

            <p className="text-text-light text-base sm:text-lg leading-relaxed">
              {facility.description}
            </p>

            <div className="aspect-[4/3] w-full overflow-hidden bg-neutral/10 shadow-md">
              <img
                src={facility.featuredImage}
                alt={facility.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="font-heading text-2xl text-neutral font-normal">
                Amenity Inclusions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facility.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-surface p-4 border border-neutral/10">
                    <CheckCircle2 className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Practical Information & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-surface p-8 sm:p-10 border border-neutral/15 shadow-sm space-y-8">
            <h3 className="font-heading text-2xl text-neutral font-normal pb-4 border-b border-neutral/15">
              Practical Information
            </h3>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Access &amp; Capacity
                  </span>
                  <span className="text-neutral font-medium">{facility.capacity}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Operating Hours
                  </span>
                  <span className="text-neutral font-medium">{facility.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral/15 space-y-4">
              <Link
                to="/booking"
                className="w-full bg-neutral text-white py-3.5 px-6 text-xs font-sans uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-neutral/85 transition-colors"
              >
                <span>Inquire about this facility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] text-text-light text-center leading-normal">
                All facilities are reserved exclusively for residential guests and confirmed private retreats.
              </p>
            </div>
          </div>
        </div>

        {/* More Facilities Navigation */}
        <div className="mt-28 pt-16 border-t border-neutral/15">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
              Other Estate Facilities
            </h3>
            <Link
              to="/facilities"
              className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light transition-colors"
            >
              View all facilities
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherFacilities.map((item) => (
              <Link
                key={item.id}
                to={`/facility/${item.slug}`}
                className="group block bg-surface border border-neutral/10 p-5 hover:border-neutral/30 transition-all"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral/10 mb-4">
                  <img
                    src={item.thumbnailImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-heading text-xl text-neutral font-medium group-hover:underline mb-1">
                  {item.title}
                </h4>
                <p className="text-text-light text-xs line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
