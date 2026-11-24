import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
      <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-4 block">
        Error 404
      </span>
      <h1 className="font-display text-6xl sm:text-8xl text-neutral uppercase font-normal tracking-tight mb-6">
        Page Not Found
      </h1>
      <p className="text-text-light text-base max-w-md mx-auto mb-10 leading-relaxed">
        The retreat sanctuary or page you are seeking does not exist or may have been relocated.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-neutral text-white px-8 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold hover:bg-neutral/85 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  )
}
