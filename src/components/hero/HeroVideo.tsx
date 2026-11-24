import React, { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1200px] overflow-hidden bg-neutral">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/posters/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/assets/videos/villa-hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-neutral/20 pointer-events-none" />

      {/* Hero Content Stage */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end items-center px-4 sm:px-8 pb-6 sm:pb-12 text-center pointer-events-none">
        {/* Dominant Oversized Serif Title */}
        <h1 className="font-display text-white text-[12vw] sm:text-[11vw] lg:text-[12rem] uppercase leading-[0.85] tracking-tight font-normal select-none drop-shadow-sm will-change-transform animate-fadeIn">
          VILLORA CASTLE
        </h1>
      </div>

      {/* Sound Toggle Button (Bottom Right) */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </section>
  )
}
