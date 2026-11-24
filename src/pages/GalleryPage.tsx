import React, { useState } from 'react'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { galleryData, GalleryImage } from '@/data/gallery'
import { X, ZoomIn } from 'lucide-react'

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const categories = ['All', 'Coastline', 'Architecture', 'Lifestyle', 'Activities', 'Evening', 'Grounds']
  const filteredImages =
    activeFilter === 'All'
      ? galleryData
      : galleryData.filter((img) => img.category === activeFilter)

  return (
    <div className="w-full">
      <InnerPageHero
        title="OUR GALLERY"
        subtitle="Visual Impressions"
        bgImage="/assets/posters/hero-poster.jpg"
      />

      <section className="py-20 sm:py-32 px-4 sm:px-8 max-w-[1440px] mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeFilter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-neutral text-white shadow-sm'
                    : 'bg-surface text-neutral/80 hover:text-neutral hover:bg-neutral/10'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Responsive Masonry Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="break-inside-avoid group relative overflow-hidden bg-neutral/10 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-neutral/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center justify-between w-full text-white">
                  <span className="text-xs font-sans tracking-wide font-medium">
                    {item.title}
                  </span>
                  <ZoomIn className="w-4 h-4 text-white/80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[1000] bg-neutral/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image lightbox"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto max-w-full object-contain mx-auto shadow-2xl"
            />
            <div className="text-center mt-3 text-white">
              <h4 className="font-heading text-lg sm:text-xl font-normal">
                {selectedImage.title}
              </h4>
              <span className="text-xs text-text-dark font-sans uppercase tracking-widest">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
