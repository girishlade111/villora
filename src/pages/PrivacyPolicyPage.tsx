import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const PrivacyPolicyPage: React.FC = () => {
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
          Legal &amp; Compliance
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-text-light text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              1. Information We Collect
            </h2>
            <p>
              When you submit a reservation inquiry, voucher request, or contact form on the Villora website, we collect personal information you explicitly provide, including your full name, email address, telephone number, requested reservation dates, and specific accommodation preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is exclusively used to evaluate private estate availability, coordinate personalized itineraries, deliver voucher credentials, and respond to your inquiries. We do not sell, rent, or distribute personal guest information to third-party marketing networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              3. Data Security &amp; Confidentiality
            </h2>
            <p>
              We implement industry-standard encryption protocols and secure internal data access boundaries to safeguard guest confidentiality and communication records at all times.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-neutral font-medium">
              4. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions or wish to request data deletion, please contact our concierge team at <a href="mailto:villora@example.com" className="text-neutral underline">villora@example.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
