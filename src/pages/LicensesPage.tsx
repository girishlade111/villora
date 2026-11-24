import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const LicensesPage: React.FC = () => {
  return (
    <div className="w-full pt-32 sm:pt-40 pb-28 sm:pb-36 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
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
          Asset Rights &amp; Attribution
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight mb-12">
          Licenses
        </h1>

        <div className="space-y-10 text-text-light text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              1. Typography Licenses
            </h2>
            <p>
              • <strong>Oranienbaum</strong>: Distributed under the SIL Open Font License (OFL). Designed by Oleg Pospelov.<br />
              • <strong>Bellefair</strong>: Distributed under the SIL Open Font License (OFL). Designed by Liron Lavid Ben Yakov.<br />
              • <strong>Manrope</strong>: Distributed under the SIL Open Font License (OFL). Designed by Mikhail Sharanda.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              2. Photography &amp; Video Footage
            </h2>
            <p>
              All architectural, landscape, and lifestyle media assets featured in this recreation are licensed through commercial royalty-free archives and generative visual models adhering to ethical, authorized creative guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              3. Iconography &amp; Code Libraries
            </h2>
            <p>
              • <strong>Lucide React</strong>: Released under the MIT License.<br />
              • <strong>GSAP</strong>: GreenSock animation framework standard license.<br />
              • <strong>Lenis</strong>: Smooth scroll engine under MIT License.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
