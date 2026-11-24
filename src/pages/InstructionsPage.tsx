import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const InstructionsPage: React.FC = () => {
  return (
    <div className="w-full pt-32 sm:pt-40 pb-28 sm:pb-36 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-neutral/70 hover:text-neutral transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
          Developer &amp; Motion Guide
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight mb-12">
          Instructions &amp; Code Architecture
        </h1>

        <div className="space-y-12 text-sm leading-relaxed text-text-light">
          <section className="p-8 bg-surface border border-neutral/15 space-y-4">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              1. Lenis Smooth Scroll Setup
            </h2>
            <p>
              Lenis powers the smooth momentum scrolling on desktop viewports. It is initialized in <code className="text-neutral font-mono bg-white px-1.5 py-0.5 border border-neutral/20">src/animations/scrollManager.ts</code> and automatically synced to GSAP ScrollTrigger updates:
            </p>
            <pre className="bg-neutral text-white p-4 font-mono text-xs overflow-x-auto">
{`const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);`}
            </pre>
          </section>

          <section className="p-8 bg-surface border border-neutral/15 space-y-4">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              2. Floating Header Scroll Animation
            </h2>
            <p>
              The compact 728px floating header automatically translates upward (-120px) on downward scroll past 100px, and slides back down into view upon any upward scroll:
            </p>
            <pre className="bg-neutral text-white p-4 font-mono text-xs overflow-x-auto">
{`if (currentScroll > lastScroll && currentScroll > 100) {
  // scrolling down -> hide header
  gsap.to(header, { y: -120, duration: 0.5, ease: 'power2.out' });
} else {
  // scrolling up -> show header
  gsap.to(header, { y: 0, duration: 0.5, ease: 'power2.out' });
}`}
            </pre>
          </section>

          <section className="p-8 bg-surface border border-neutral/15 space-y-4">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              3. Scroll-Linked Video Expansion
            </h2>
            <p>
              In <code className="text-neutral font-mono bg-white px-1.5 py-0.5 border border-neutral/20">ScrollVideoShowcase.tsx</code>, the video container begins framed at 45% width (320px height) and expands across the viewport using scrub:
            </p>
            <pre className="bg-neutral text-white p-4 font-mono text-xs overflow-x-auto">
{`gsap.fromTo(videoWrapper, {
  width: '45%',
  height: '320px',
  borderRadius: '12px',
}, {
  width: '100%',
  height: '680px',
  borderRadius: '0px',
  scrollTrigger: {
    trigger: container,
    start: 'top 75%',
    end: 'bottom 40%',
    scrub: 1.2,
  },
});`}
            </pre>
          </section>
        </div>
      </div>
    </div>
  )
}
