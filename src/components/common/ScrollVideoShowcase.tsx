import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ScrollVideoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const videoWrapper = videoWrapperRef.current
    if (!container || !videoWrapper) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoWrapper,
        {
          width: '45%',
          height: '320px',
          borderRadius: '12px',
        },
        {
          width: '100%',
          height: '680px',
          borderRadius: '0px',
          ease: 'power1.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 1.2,
          },
        }
      )
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Intro Tag & Text */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-sans tracking-[0.2em] uppercase font-semibold text-text-light mb-2 block">
            Cinematic Sanctuary
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral font-normal">
            Where architecture merges with the sea
          </h2>
        </div>

        {/* Scroll expanding video container */}
        <div
          ref={videoWrapperRef}
          className="relative mx-auto overflow-hidden shadow-2xl bg-neutral transition-all duration-100 will-change-[width,height]"
          style={{ width: '45%', height: '320px' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/posters/showcase-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/villa-scroll-showcase.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-neutral/15 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
