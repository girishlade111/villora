import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { siteConfig } from '@/data/siteConfig'
import { FAQTabs } from '@/components/common/FAQTabs'
import { VideoModal } from '@/components/common/VideoModal'
import { ArrowUpRight, Play, Check, Loader2 } from 'lucide-react'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter a message (at least 10 characters)'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTourModalOpen, setIsTourModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('Villora Contact Submission:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  return (
    <div className="w-full pt-32 sm:pt-40 bg-background">
      {/* Intro Heading */}
      <div className="text-center max-w-2xl mx-auto px-6 mb-16 sm:mb-20">
        <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
          Concierge &amp; Inquiries
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-neutral font-normal tracking-tight">
          Get in touch
        </h1>
        <p className="text-text-light text-sm sm:text-base leading-relaxed mt-4 max-w-md mx-auto">
          We invite your inquiries regarding private residencies, retreat buyouts, and personalized coastal experiences.
        </p>
      </div>

      {/* SECTION A: Contact Form */}
      <section className="max-w-3xl mx-auto px-6 sm:px-10 mb-24 sm:mb-32">
        <div className="bg-surface p-8 sm:p-12 border border-neutral/15 shadow-sm">
          <div className="mb-8 pb-4 border-b border-neutral/10">
            <h2 className="font-heading text-2xl text-neutral font-normal">
              Fill in the contact form
            </h2>
          </div>

          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
                Message sent successfully
              </h3>
              <p className="text-text-light text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting Villora Castle. Our concierge desk will review your inquiry and respond shortly.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-neutral text-white px-6 py-2.5 text-xs font-sans uppercase tracking-widest font-medium hover:bg-neutral/85 transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                    Full name <span className="text-neutral/50">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="Enter your name"
                    className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral placeholder:text-text-light/60 focus:outline-none focus:border-neutral transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-700 mt-1 block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                    Email address <span className="text-neutral/50">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="name@example.com"
                    className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral placeholder:text-text-light/60 focus:outline-none focus:border-neutral transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-700 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral placeholder:text-text-light/60 focus:outline-none focus:border-neutral transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                    Subject <span className="text-neutral/50">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    placeholder="Inquiry topic"
                    className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral placeholder:text-text-light/60 focus:outline-none focus:border-neutral transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-700 mt-1 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                  Message <span className="text-neutral/50">*</span>
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="How can our estate concierge assist you?"
                  className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral placeholder:text-text-light/60 focus:outline-none focus:border-neutral transition-colors"
                />
                {errors.message && (
                  <span className="text-xs text-red-700 mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-neutral text-white px-8 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold hover:bg-neutral/85 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Submit now</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* SECTION B: Contact Information (3 Minimal Rows with Fine Divider Lines) */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 mb-24 sm:mb-32">
        <div className="mb-6">
          <span className="text-xs font-sans tracking-[0.2em] uppercase font-semibold text-text-light block">
            Direct Contact
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl text-neutral font-normal mt-1">
            Contact info
          </h2>
        </div>

        <div className="divide-y divide-neutral/20 border-y border-neutral/20">
          {/* Email */}
          <div className="py-5 sm:py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <span className="text-xs font-sans uppercase tracking-widest text-text-light font-medium">
              Email
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-base sm:text-lg font-heading text-neutral hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Phone */}
          <div className="py-5 sm:py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <span className="text-xs font-sans uppercase tracking-widest text-text-light font-medium">
              Phone
            </span>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="text-base sm:text-lg font-heading text-neutral hover:underline"
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* Address */}
          <div className="py-5 sm:py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <span className="text-xs font-sans uppercase tracking-widest text-text-light font-medium">
              Address
            </span>
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-heading text-neutral hover:underline inline-flex items-center gap-1.5"
            >
              <span>{siteConfig.address}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral/60" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION C: Book on your favorite site */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 mb-28 sm:mb-36">
        <div className="mb-6">
          <span className="text-xs font-sans tracking-[0.2em] uppercase font-semibold text-text-light block">
            Booking Channels
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl text-neutral font-normal mt-1">
            Book on your favorite site
          </h2>
        </div>

        <div className="divide-y divide-neutral/20 border-y border-neutral/20">
          {siteConfig.partnerBooking.map((partner) => (
            <div
              key={partner.platform}
              className="py-5 sm:py-6 flex items-center justify-between group"
            >
              <span className="font-heading text-xl sm:text-2xl text-neutral font-normal">
                {partner.platform}
              </span>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider font-semibold text-neutral border-b border-neutral pb-0.5 group-hover:text-text-light transition-colors"
              >
                <span>Visit website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION D: Large Cinematic Tour Section */}
      <section className="relative w-full h-[60vh] min-h-[460px] max-h-[700px] overflow-hidden bg-neutral">
        <img
          src="/assets/posters/tour-poster.jpg"
          alt="Villora Coastal Estate Panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral/25 pointer-events-none" />

        <div className="absolute bottom-8 right-8 z-20">
          <button
            type="button"
            onClick={() => setIsTourModalOpen(true)}
            aria-label="Watch villa tour video"
            className="flex items-center gap-3 bg-white text-neutral pl-5 pr-3 py-3 rounded-full shadow-2xl hover:bg-surface transition-all duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral"
          >
            <span className="text-xs font-sans font-semibold tracking-wider uppercase select-none">
              Watch villa tour
            </span>
            <span className="w-8 h-8 rounded-full bg-neutral text-white flex items-center justify-center transition-transform group-hover:scale-105">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </span>
          </button>
        </div>
      </section>

      {/* SECTION E: Shared FAQ */}
      <FAQTabs />

      {/* Tour Video Modal */}
      <VideoModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        videoSrc="/assets/videos/villa-tour.mp4"
        poster="/assets/posters/tour-poster.jpg"
      />
    </div>
  )
}
