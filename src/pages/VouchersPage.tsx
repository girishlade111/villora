import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { vouchersData } from '@/data/vouchers'
import { FAQTabs } from '@/components/common/FAQTabs'
import { VideoModal } from '@/components/common/VideoModal'
import { Play, ArrowRight } from 'lucide-react'

export const VouchersPage: React.FC = () => {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false)

  return (
    <div className="w-full pt-28 sm:pt-36">
      {/* SECTION 1: Intro & 3 Voucher Columns */}
      <section className="px-6 sm:px-10 max-w-container mx-auto pb-24 sm:pb-36">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
            Giftable Experiences
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-neutral font-normal tracking-tight">
            Explore vouchers
          </h1>
          <p className="text-text-light text-sm sm:text-base leading-relaxed mt-4 max-w-lg mx-auto">
            Give the gift of timeless coastal escape, fine culinary journeys, and restorative wellness at Villora Castle.
          </p>
        </div>

        {/* 3 Columns Separated by Thin Vertical Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral/20 border-y border-neutral/20">
          {vouchersData.map((voucher) => (
            <div
              key={voucher.id}
              className="py-12 md:py-16 px-6 sm:px-10 flex flex-col justify-between space-y-10 group hover:bg-surface/50 transition-colors"
            >
              <div className="space-y-4">
                <span className="text-xs font-sans uppercase tracking-widest font-semibold text-text-light block">
                  {voucher.price}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl text-neutral font-normal tracking-tight">
                  {voucher.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {voucher.subtitle}
                </p>
              </div>

              <div>
                <Link
                  to={`/voucher/${voucher.slug}`}
                  className="inline-flex items-center gap-2 bg-neutral text-white px-6 py-3 text-xs font-sans uppercase tracking-widest font-medium hover:bg-neutral/85 transition-colors group-hover:shadow-sm"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Villa Tour (Cinematic Video / Image with Watch Tour Button) */}
      <section className="relative w-full h-[65vh] min-h-[480px] max-h-[750px] overflow-hidden bg-neutral">
        <img
          src="/assets/posters/tour-poster.jpg"
          alt="Villora Coastal Estate Panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral/25 pointer-events-none" />

        {/* Floating "Watch villa tour" Pill in Lower Right Area */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            type="button"
            onClick={() => setIsTourModalOpen(true)}
            aria-label="Open villa tour video"
            className="flex items-center gap-3 bg-white text-neutral pl-5 pr-3 py-3 rounded-full shadow-2xl hover:bg-surface transition-all duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral"
          >
            <span className="text-xs font-sans font-semibold tracking-wider uppercase select-none">
              Watch villa tour
            </span>
            <span className="w-8 h-8 rounded-full bg-neutral text-white flex items-center justify-center transition-transform group-hover:scale-105">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </span>
          </button>
        </div>
      </section>

      {/* SECTION 3: Shared FAQ */}
      <FAQTabs />

      {/* Tour Video Modal */}
      <VideoModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        videoSrc="/assets/videos/villa-tour.mp4"
        poster="/assets/posters/tour-poster.jpg"
      />
    </div>
  )
}
