import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface NavItem {
  title: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Activities', href: '/activities' },
  { title: 'Facilities', href: '/facilities' },
  { title: 'Vouchers', href: '/vouchers' },
  { title: 'Our blog', href: '/blog' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Booking', href: '/booking' },
  { title: 'Contact', href: '/contact' },
]

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  // Close menu upon route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // GSAP Hide on scroll down / reveal on scroll up
  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const handleScroll = () => {
      if (isOpen) return // keep header visible while menu is open

      const currentScroll = window.scrollY
      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        // Scrolling down -> hide header
        gsap.to(header, {
          y: -120,
          duration: 0.5,
          ease: 'power2.out',
        })
      } else {
        // Scrolling up -> show header
        gsap.to(header, {
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
      lastScrollY.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  // Animate mega menu expand / collapse
  useEffect(() => {
    const panel = menuPanelRef.current
    if (!panel) return

    if (isOpen) {
      gsap.killTweensOf(panel)
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        }
      )
      // Stagger items
      gsap.fromTo(
        panel.querySelectorAll('.menu-nav-link'),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.35,
          ease: 'power2.out',
          delay: 0.08,
        }
      )
    } else {
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }, [isOpen])

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-4 sm:top-6 left-0 right-0 z-[990] mx-auto w-[92%] max-w-[728px] transition-transform"
      >
        <div className="relative bg-white border border-neutral/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between items-start">
              <span
                className={`h-[1.5px] bg-neutral transition-all duration-300 ${
                  isOpen ? 'w-5 translate-y-[7.5px] rotate-45' : 'w-5'
                }`}
              />
              <span
                className={`h-[1.5px] bg-neutral transition-all duration-300 ${
                  isOpen ? 'w-0 opacity-0' : 'w-3.5 group-hover:w-5'
                }`}
              />
              <span
                className={`h-[1.5px] bg-neutral transition-all duration-300 ${
                  isOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-5'
                }`}
              />
            </div>
            <span className="text-[13px] font-sans tracking-wider uppercase font-medium text-neutral select-none">
              {isOpen ? 'Close' : 'Menu'}
            </span>
          </button>

          {/* Centered Brand Monogram / Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center focus:outline-none"
            aria-label="Villora Homepage"
          >
            <img
              src="/assets/images/dark-logo.svg"
              alt="Villora"
              className="h-5 sm:h-6 w-auto object-contain"
            />
          </Link>

          {/* Right Action: Booking Button */}
          <Link
            to="/booking"
            className="bg-neutral text-white px-4 sm:px-5 py-2 text-xs font-sans uppercase tracking-wider font-medium hover:bg-neutral/85 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral"
          >
            Booking
          </Link>

          {/* Expanded Mega Menu Attached Below Header */}
          <div
            ref={menuPanelRef}
            className="absolute top-full left-0 right-0 bg-white border-t border-neutral/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] overflow-hidden"
            style={{ height: 0, opacity: 0 }}
          >
            <nav
              aria-label="Main Navigation"
              className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`menu-nav-link flex items-center justify-between px-3.5 py-3 sm:py-3.5 text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-200 group ${
                      isActive
                        ? 'bg-neutral text-white'
                        : 'bg-surface text-neutral hover:bg-neutral hover:text-white'
                    }`}
                  >
                    <span>{item.title}</span>
                    <svg
                      className="w-2.5 h-2.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.89644 7.1465L5.04288 4.00005L1.89644 0.853598C1.80362 0.759636 1.75174 0.632761 1.75214 0.500679C1.75254 0.368598 1.80519 0.24204 1.89858 0.148644C1.99198 0.0552475 2.11854 0.00260051 2.25062 0.00219957C2.3827 0.00179863 2.50958 0.0536763 2.60354 0.146504L6.10354 3.6465C6.1973 3.74027 6.24998 3.86745 6.24998 4.00005C6.24998 4.13266 6.1973 4.25983 6.10354 4.3536L2.60354 7.8536C2.50958 7.94643 2.3827 7.9983 2.25062 7.9979C2.11854 7.9975 1.99198 7.94485 1.89858 7.85146C1.80519 7.75806 1.75254 7.6315 1.75214 7.49942C1.75174 7.36734 1.80362 7.24047 1.89644 7.1465Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-neutral/20 z-[980] backdrop-blur-[2px] transition-opacity"
          aria-hidden="true"
        />
      )}
    </>
  )
}
