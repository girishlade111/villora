import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error')
      return
    }
    setNewsletterStatus('success')
    setNewsletterEmail('')
  }

  return (
    <footer className="bg-neutral text-white pt-16 sm:pt-24 pb-10 border-t border-stroke">
      <div className="max-w-container mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-stroke/60">
          {/* Left Column: Brand & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <Link to="/" className="inline-block" aria-label="Villora Homepage">
                <img
                  src="/assets/images/light-logo.svg"
                  alt="Villora"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </Link>
              <p className="text-text-dark text-sm max-w-sm leading-relaxed">
                An exclusive coastal estate designed for profound tranquility, timeless architecture, and bespoke hospitality along the Pacific shore.
              </p>
            </div>

            <div className="space-y-3 text-sm text-text-dark">
              <p>
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>{siteConfig.address}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-dark" />
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-2">
              {siteConfig.socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dark hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Link Columns + Newsletter */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            {/* 3 Nav Groups */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Pages */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white/50 mb-5">
                  Pages
                </h4>
                <ul className="space-y-3 text-sm">
                  {siteConfig.footerLinks.pages.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-text-dark hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Facilities */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white/50 mb-5">
                  Facilities
                </h4>
                <ul className="space-y-3 text-sm">
                  {siteConfig.footerLinks.facilities.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-text-dark hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Utilities */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white/50 mb-5">
                  Utilities
                </h4>
                <ul className="space-y-3 text-sm">
                  {siteConfig.footerLinks.utilities.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-text-dark hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="border-t border-stroke/60 pt-8">
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white mb-2">
                Newsletter
              </h4>
              <p className="text-text-dark text-xs mb-4">
                Receive private retreat availability, seasonal packages, and quiet editorial notes.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-md items-center">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value)
                      if (newsletterStatus !== 'idle') setNewsletterStatus('idle')
                    }}
                    placeholder="Enter your email address"
                    aria-label="Email address for newsletter"
                    className="w-full bg-white/5 border border-stroke px-4 py-2.5 text-xs text-white placeholder:text-text-dark/60 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-white text-neutral px-4 py-2.5 hover:bg-surface transition-colors flex items-center justify-center cursor-pointer focus:outline-none"
                >
                  {newsletterStatus === 'success' ? (
                    <Check className="w-4 h-4 text-green-700" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
              {newsletterStatus === 'success' && (
                <p className="text-[11px] text-green-400 mt-2">
                  Thank you for subscribing. We look forward to connecting with you.
                </p>
              )}
              {newsletterStatus === 'error' && (
                <p className="text-[11px] text-red-400 mt-2">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-dark/70 gap-4">
          <p>© {new Date().getFullYear()} Villora Castle. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/licenses" className="hover:text-white transition-colors">
              Licenses
            </Link>
            <Link to="/instructions" className="hover:text-white transition-colors">
              Instructions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
