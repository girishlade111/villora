import React, { useEffect, useRef, useState } from 'react'

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [cursorText, setCursorText] = useState<string>('')
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true)

  useEffect(() => {
    // Detect touch device or reduced motion
    if (typeof window === 'undefined') return
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (touch || prefersReduced) {
      setIsTouchDevice(true)
      return
    }
    setIsTouchDevice(false)

    let mouseX = -100
    let mouseY = -100
    let circleX = -100
    let circleY = -100
    let animationFrameId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) setIsVisible(true)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }

      // Check targets
      const target = e.target as HTMLElement | null
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]')
        if (interactive) {
          setIsHovered(true)
          const customText = interactive.getAttribute('data-cursor-text')
          if (customText) {
            setCursorText(customText)
          } else if (interactive.getAttribute('data-cursor') === 'view') {
            setCursorText('View')
          } else {
            setCursorText('')
          }
        } else {
          setIsHovered(false)
          setCursorText('')
        }
      }
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const loop = () => {
      // Lerp circle position
      circleX += (mouseX - circleX) * 0.15
      circleY += (mouseY - circleY) * 0.15

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`
      }

      animationFrameId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    animationFrameId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible])

  if (isTouchDevice || !isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-neutral pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      {/* Outer Follower Circle */}
      <div
        ref={circleRef}
        className={`fixed top-0 left-0 pointer-events-none flex items-center justify-center rounded-full border border-neutral/40 transition-[width,height,background-color,border-color] duration-200 -ml-5 -mt-5 ${
          cursorText
            ? 'h-16 w-16 bg-neutral text-white border-neutral'
            : isHovered
            ? 'h-12 w-12 bg-neutral/10 border-neutral/60'
            : 'h-10 w-10 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-widest uppercase font-medium">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  )
}
