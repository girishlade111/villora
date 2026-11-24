import React, { useState } from 'react'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { FAQTabs } from '@/components/common/FAQTabs'
import { teamData } from '@/data/team'
import { testimonialsData } from '@/data/testimonials'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0)

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    )
  }

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    )
  }

  const currentTestimonial = testimonialsData[activeTestimonialIdx]

  return (
    <div className="w-full">
      {/* HERO BANNER */}
      <InnerPageHero
        title="ABOUT VILLORA"
        subtitle="Estate Story &amp; Heritage"
        bgImage="/assets/posters/hero-poster.jpg"
      />

      {/* SECTION 1: Core Values */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 max-w-container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
            Guiding Philosophy
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
            Our core values of timeless coastal excellence
          </h2>
        </div>

        {/* 3-Column Layout: Left Values, Center Image, Right Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Values (2 items) */}
          <div className="lg:col-span-3 space-y-12 text-left lg:text-right">
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral/60">
                Value 01
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
                Seaside serenity
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                We protect the natural tranquility of our headland, ensuring an intimate sanctuary where the ocean surf restores peace of mind.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral/60">
                Value 02
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
                Warm hospitality
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                Anticipatory, discreet, and deeply personal service designed around your individual rhythm from arrival to departure.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full overflow-hidden bg-neutral/10 shadow-lg">
              <img
                src="/assets/images/our-core-values-of-timeless-coastal-excellence.webp"
                alt="Villora Interior Ocean View"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Values (2 items) */}
          <div className="lg:col-span-3 space-y-12 text-left">
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral/60">
                Value 03
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
                Timeless elegance
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                Architecture that honors natural materials, Mediterranean symmetry, and understated finishes designed to endure across generations.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral/60">
                Value 04
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
                Sustainable living
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                From solar-assisted thermal systems to organic estate agriculture, our stewardship respects the coastal ecosystem we call home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Team */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 max-w-container mx-auto border-t border-neutral/15">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
            Creative Visionaries
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
            Meet the minds behind the villa
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {teamData.map((member) => (
            <div key={member.id} className="group">
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral/10 mb-5 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-neutral font-medium mb-1">
                {member.name}
              </h3>
              <p className="text-text-light text-xs uppercase tracking-wider font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Testimonials Slider */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 bg-surface border-y border-neutral/15">
        <div className="max-w-4xl mx-auto text-center relative">
          <Quote className="w-10 h-10 text-neutral/20 mx-auto mb-8" />
          <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-neutral font-normal italic leading-relaxed mb-10 min-h-[120px] flex items-center justify-center">
            &ldquo;{currentTestimonial.quote}&rdquo;
          </p>

          <div className="flex flex-col items-center justify-center space-y-3">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-16 h-16 rounded-full object-cover border border-neutral/20 shadow-sm"
            />
            <h4 className="font-sans text-sm font-semibold tracking-wider uppercase text-neutral">
              {currentTestimonial.author}
            </h4>
            <span className="text-xs text-text-light">
              {currentTestimonial.location}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              type="button"
              onClick={handlePrevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-neutral/30 flex items-center justify-center hover:bg-neutral hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTestimonialIdx === idx ? 'w-6 bg-neutral' : 'bg-neutral/30'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-neutral/30 flex items-center justify-center hover:bg-neutral hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Shared FAQ */}
      <FAQTabs />
    </div>
  )
}
