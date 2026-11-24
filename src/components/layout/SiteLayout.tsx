import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Marquee } from './Marquee'
import { CustomCursor } from '@/components/common/CustomCursor'
import { initSmoothScroll, scrollToTop } from '@/animations/scrollManager'

export const SiteLayout: React.FC = () => {
  const location = useLocation()

  // Initialize Lenis smooth scroll on mount
  useEffect(() => {
    const lenis = initSmoothScroll()
    return () => {
      lenis?.destroy()
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop()
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-background text-neutral relative selection:bg-neutral selection:text-white">
      <CustomCursor />
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Marquee />
      <Footer />
    </div>
  )
}
