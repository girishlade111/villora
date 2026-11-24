import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { activitiesData } from '@/data/activities'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { ArrowRight, Clock, MapPin, Calendar, Compass, Users } from 'lucide-react'

export const ActivityDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const activity = activitiesData.find((a) => a.slug === slug)

  if (!activity) {
    return <Navigate to="/activities" replace />
  }

  const otherActivities = activitiesData.filter((a) => a.slug !== slug).slice(0, 2)

  return (
    <div className="w-full">
      <InnerPageHero
        title={activity.title}
        subtitle="Exclusive Estate Activity"
        bgImage={activity.thumbnailImage}
      />

      <section className="py-20 sm:py-32 px-6 sm:px-10 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story & Photography */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
                The Experience
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral font-normal tracking-tight">
                {activity.title}
              </h2>
            </div>

            <p className="text-text-light text-base sm:text-lg leading-relaxed">
              {activity.description}
            </p>

            <div className="aspect-[3/2] w-full overflow-hidden bg-neutral/10 shadow-md">
              <img
                src={activity.featuredImage}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-heading text-2xl text-neutral font-normal">
                What to Expect
              </h3>
              <p className="text-text-light text-sm sm:text-base leading-relaxed">
                Every detail is personally coordinated by the Villora concierge desk. From temperature-appropriate blankets and artisanal refreshments to expert local guides, you can simply relax and immerse yourself in the natural majesty of our coastal sanctuary.
              </p>
            </div>
          </div>

          {/* Sticky Spec & Booking Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-surface p-8 sm:p-10 border border-neutral/15 shadow-sm space-y-8">
            <h3 className="font-heading text-2xl text-neutral font-normal pb-4 border-b border-neutral/15">
              Activity Specifications
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Duration
                  </span>
                  <span className="text-neutral font-medium">{activity.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Best Time
                  </span>
                  <span className="text-neutral font-medium">{activity.bestTime}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Location
                  </span>
                  <span className="text-neutral font-medium">{activity.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Difficulty Level
                  </span>
                  <span className="text-neutral font-medium">{activity.difficulty}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Ideal For
                  </span>
                  <span className="text-neutral font-medium">{activity.idealFor}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral/15">
              <Link
                to="/booking"
                className="w-full bg-neutral text-white py-3.5 px-6 text-xs font-sans uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-neutral/85 transition-colors"
              >
                <span>Reserve this experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Other Activities Recommendation */}
        <div className="mt-28 pt-16 border-t border-neutral/15">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
              More Activities
            </h3>
            <Link
              to="/activities"
              className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light transition-colors"
            >
              View all activities
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherActivities.map((item) => (
              <Link
                key={item.id}
                to={`/activity/${item.slug}`}
                className="group flex flex-col sm:flex-row gap-6 items-center bg-surface p-6 border border-neutral/10 hover:border-neutral/30 transition-all"
              >
                <div className="w-full sm:w-36 h-28 overflow-hidden bg-neutral/10 flex-shrink-0">
                  <img
                    src={item.thumbnailImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="font-heading text-xl text-neutral font-medium group-hover:underline">
                    {item.title}
                  </h4>
                  <p className="text-text-light text-xs line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
