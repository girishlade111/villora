import React from 'react'
import { Link } from 'react-router-dom'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { activitiesData } from '@/data/activities'
import { ArrowRight, Clock, MapPin, Compass } from 'lucide-react'

export const ActivitiesPage: React.FC = () => {
  return (
    <div className="w-full">
      <InnerPageHero
        title="OUR ACTIVITIES"
        subtitle="Unforgettable Experiences"
        bgImage="/assets/posters/hero-poster.jpg"
      />

      <section className="py-24 sm:py-36 px-6 sm:px-10 max-w-container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
            Coastal &amp; Land Pursuits
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
            Curated journeys for discerning guests
          </h2>
        </div>

        <div className="space-y-28 sm:space-y-40">
          {activitiesData.map((activity, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <div
                key={activity.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Image Block */}
                <div
                  className={`overflow-hidden ${
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

                {/* Text Content Block */}
                <div
                  className={`space-y-6 ${
                    isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'
                  }`}
                >
                  <span className="text-xs font-sans tracking-widest uppercase font-semibold text-text-light/80 block">
                    Experience {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral font-normal tracking-tight">
                    {activity.title}
                  </h3>
                  <p className="text-text-light text-base leading-relaxed">
                    {activity.summary}
                  </p>

                  <div className="pt-2 flex flex-col gap-2.5 text-xs text-text-light font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-neutral" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-neutral" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-neutral" />
                      <span>{activity.difficulty} Difficulty</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/activity/${activity.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light hover:border-text-light transition-colors group"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
