import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface HotspotItem {
  id: string
  title: string
  description: string
  image: string
  position: { bottom: string; right?: string; left?: string }
}

const HOTSPOTS: HotspotItem[] = [
  {
    id: 'spot-1',
    title: 'Strawberry field',
    description: 'Strawberry Field the vitamin provider at Villora',
    image: '/assets/images/strawberry-field.webp',
    position: { bottom: '8%', right: '5%' },
  },
  {
    id: 'spot-2',
    title: 'Garden estate',
    description: 'Discover timeless luxury in lush gardens.',
    image: '/assets/images/garden-estate.webp',
    position: { bottom: '28%', right: '38%' },
  },
  {
    id: 'spot-3',
    title: 'Poolside haven',
    description: 'Unwind beside your own private pool today.',
    image: '/assets/images/poolside-haven.webp',
    position: { bottom: '38%', right: '18%' },
  },
  {
    id: 'spot-4',
    title: 'Luxury retreat',
    description: 'Experience comfort in a peaceful setting.',
    image: '/assets/images/luxury-retreat.webp',
    position: { bottom: '52%', right: '14%' },
  },
  {
    id: 'spot-5',
    title: 'Coastal escape',
    description: 'Relax by the sea in your private retreat.',
    image: '/assets/images/coastal-escape.webp',
    position: { bottom: '24%', left: '8%' },
  },
  {
    id: 'spot-6',
    title: 'Private villa',
    description: 'Enjoy a luxury escape with stunning views.',
    image: '/assets/images/private-villa.webp',
    position: { bottom: '48%', right: '35%' },
  },
]

export const EstateHotspots: React.FC = () => {
  const [activeSpotId, setActiveSpotId] = useState<string | null>('spot-3')

  return (
    <section className="relative w-full overflow-hidden bg-neutral">
      {/* Background Aerial Estate Image */}
      <div className="relative w-full h-[60vw] min-h-[500px] max-h-[850px]">
        <img
          src="/assets/images/explore-image.webp"
          alt="Villora Aerial Estate Overview"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Subtle dark tint */}
        <div className="absolute inset-0 bg-neutral/20 pointer-events-none" />

        {/* Hotspots */}
        {HOTSPOTS.map((spot) => {
          const isActive = activeSpotId === spot.id
          return (
            <div
              key={spot.id}
              className="absolute z-10 flex flex-col items-center"
              style={{
                bottom: spot.position.bottom,
                right: spot.position.right,
                left: spot.position.left,
              }}
            >
              {/* Trigger Button with Pulse Ring */}
              <button
                type="button"
                onClick={() => setActiveSpotId(isActive ? null : spot.id)}
                aria-label={`View ${spot.title} details`}
                aria-expanded={isActive}
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-neutral flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none cursor-pointer"
              >
                <span className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-60 pointer-events-none" />
                {isActive ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral" />
                ) : (
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-neutral" />
                )}
              </button>

              {/* Detail Card Overlay */}
              {isActive && (
                <div
                  className="absolute bottom-full mb-3 w-64 sm:w-72 bg-white/95 backdrop-blur-md shadow-2xl p-3 border border-neutral/15 z-20 transition-all duration-300"
                  role="tooltip"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral/10 mb-2.5">
                    <img
                      src={spot.image}
                      alt={spot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl text-neutral font-medium">
                    {spot.title}
                  </h4>
                  <p className="text-text-light text-xs leading-relaxed mt-1">
                    {spot.description}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
