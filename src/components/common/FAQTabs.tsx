import React, { useState } from 'react'
import { faqsData, FAQItem } from '@/data/faqs'
import { Plus, Minus } from 'lucide-react'

export const FAQTabs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Villa' | 'Location' | 'Booking'>('Villa')
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-villa-1')

  const categories: ('Villa' | 'Location' | 'Booking')[] = ['Villa', 'Location', 'Booking']
  const filteredFaqs = faqsData.filter((item) => item.category === activeCategory)

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-container mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-sans tracking-[0.2em] uppercase font-semibold text-text-light mb-3 block">
          Questions &amp; Answers
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral font-normal tracking-tight">
          Some questions, some answers
        </h2>
      </div>

      {/* Category Tab Bar */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-neutral p-1.5 rounded-sm">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat)
                  // open first question of new category
                  const firstOfCat = faqsData.find((f) => f.category === cat)
                  if (firstOfCat) setOpenFaqId(firstOfCat.id)
                }}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-surface text-neutral font-semibold shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto divide-y divide-neutral/15 border-y border-neutral/15">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id
          return (
            <div key={faq.id} className="py-5 sm:py-6 group">
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
              >
                <span className="font-heading text-xl sm:text-2xl text-neutral font-normal pr-6 group-hover:text-neutral/80 transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral/20 flex items-center justify-center transition-transform duration-200 group-hover:border-neutral">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-neutral" />
                  ) : (
                    <Plus className="w-4 h-4 text-neutral" />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-text-light text-sm sm:text-base leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
