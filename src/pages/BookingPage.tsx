import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Check, ChevronDown, Loader2 } from 'lucide-react'

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  people: z.string().min(1, 'Please select number of guests'),
  date: z.string().min(1, 'Please select your preferred arrival date'),
  phone: z.string().optional(),
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z.string().min(10, 'Please enter a message (at least 10 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy to proceed',
  }),
})

type BookingFormData = z.infer<typeof bookingSchema>

const GUEST_OPTIONS = ['1-2 Guests', '3-4 Guests', '5-8 Guests', '9-12 Guests', '13-16 Guests (Full Estate)']
const INTEREST_OPTIONS = [
  'Full Estate Private Residency',
  'Private Terrace Suite',
  'Curated Sunset Dinner Voucher',
  'Wellness & Spa Retreat',
  'Private Boat & Yacht Charter',
  'Special Celebration / Gathering',
]

export const BookingPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [peopleOpen, setPeopleOpen] = useState(false)
  const [interestOpen, setInterestOpen] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      email: '',
      people: '1-2 Guests',
      date: '',
      phone: '',
      interest: 'Full Estate Private Residency',
      message: '',
      consent: false,
    },
  })

  const selectedPeople = watch('people')
  const selectedInterest = watch('interest')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    // Simulate local development enquiry submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Villora Reservation Enquiry Received:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  return (
    <div className="w-full pt-32 sm:pt-40 pb-28 sm:pb-36 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        {/* Header (No Photo Hero, Form First) */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light block">
            Reservation Inquiry
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
            Start planning your stay
          </h1>
          <p className="text-text-light text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Let’s start a conversation and explore how we can bring your vision of a private coastal retreat to life.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-surface p-8 sm:p-12 border border-neutral/15 shadow-sm">
          <div className="mb-8 pb-4 border-b border-neutral/10">
            <h2 className="font-heading text-2xl text-neutral font-normal">
              Fill the booking form
            </h2>
            <p className="text-text-light text-xs mt-1">
              Our reservations desk responds within 24 hours with exact availability and suite options.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-3xl text-neutral font-normal">
                Thank you for your enquiry
              </h3>
              <p className="text-text-light text-sm max-w-md mx-auto leading-relaxed">
                Your reservation request has been received. Our concierge team will review your preferred dates and contact you shortly with itinerary details.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-neutral text-white px-6 py-2.5 text-xs font-sans uppercase tracking-widest font-medium hover:bg-neutral/85 transition-colors cursor-pointer"
              >
                Submit another request
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
                    placeholder="Enter your full name"
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

              {/* Row 2: Guests & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Custom Accessible Select: Guests */}
                <div className="relative">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                    Number of people <span className="text-neutral/50">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setPeopleOpen(!peopleOpen)
                      setInterestOpen(false)
                    }}
                    className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral flex items-center justify-between text-left focus:outline-none focus:border-neutral"
                    aria-haspopup="listbox"
                    aria-expanded={peopleOpen}
                  >
                    <span>{selectedPeople}</span>
                    <ChevronDown className="w-4 h-4 text-neutral/60" />
                  </button>
                  {peopleOpen && (
                    <div className="absolute top-full left-0 right-0 z-30 bg-white border border-neutral/20 shadow-lg mt-1 divide-y divide-neutral/10">
                      {GUEST_OPTIONS.map((opt) => (
                        <div
                          key={opt}
                          onClick={() => {
                            setValue('people', opt)
                            setPeopleOpen(false)
                          }}
                          className="px-4 py-2.5 text-xs text-neutral hover:bg-surface cursor-pointer"
                          role="option"
                          aria-selected={selectedPeople === opt}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.people && (
                    <span className="text-xs text-red-700 mt-1 block">
                      {errors.people.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                    Preferred date <span className="text-neutral/50">*</span>
                  </label>
                  <input
                    type="date"
                    {...register('date')}
                    className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral focus:outline-none focus:border-neutral transition-colors"
                  />
                  {errors.date && (
                    <span className="text-xs text-red-700 mt-1 block">
                      {errors.date.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Phone & Interest */}
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

                {/* Custom Accessible Select: Interest */}
                <div className="relative">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                    What are you interested in? <span className="text-neutral/50">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setInterestOpen(!interestOpen)
                      setPeopleOpen(false)
                    }}
                    className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral flex items-center justify-between text-left focus:outline-none focus:border-neutral"
                    aria-haspopup="listbox"
                    aria-expanded={interestOpen}
                  >
                    <span className="truncate pr-2">{selectedInterest}</span>
                    <ChevronDown className="w-4 h-4 text-neutral/60 flex-shrink-0" />
                  </button>
                  {interestOpen && (
                    <div className="absolute top-full left-0 right-0 z-30 bg-white border border-neutral/20 shadow-lg mt-1 divide-y divide-neutral/10 max-h-56 overflow-y-auto">
                      {INTEREST_OPTIONS.map((opt) => (
                        <div
                          key={opt}
                          onClick={() => {
                            setValue('interest', opt)
                            setInterestOpen(false)
                          }}
                          className="px-4 py-2.5 text-xs text-neutral hover:bg-surface cursor-pointer"
                          role="option"
                          aria-selected={selectedInterest === opt}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.interest && (
                    <span className="text-xs text-red-700 mt-1 block">
                      {errors.interest.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral mb-2">
                  Message <span className="text-neutral/50">*</span>
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="Tell us about your requested dates, special requirements, or questions..."
                  className="w-full bg-background border border-neutral/20 px-4 py-3 text-sm text-neutral placeholder:text-text-light/60 focus:outline-none focus:border-neutral transition-colors"
                />
                {errors.message && (
                  <span className="text-xs text-red-700 mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('consent')}
                    className="mt-1 h-4 w-4 rounded-sm border-neutral/30 text-neutral focus:ring-neutral"
                  />
                  <span className="text-xs text-text-light leading-normal select-none">
                    I agree to the Villora privacy policy and terms regarding reservation inquiry handling.
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-xs text-red-700 mt-1 block">
                    {errors.consent.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-neutral text-white px-8 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold hover:bg-neutral/85 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <span>Submit now</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
