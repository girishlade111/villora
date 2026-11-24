import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { vouchersData } from '@/data/vouchers'
import { InnerPageHero } from '@/components/hero/InnerPageHero'
import { ArrowRight, CheckCircle2, Calendar, Users, ShieldCheck } from 'lucide-react'

export const VoucherDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const voucher = vouchersData.find((v) => v.slug === slug)

  if (!voucher) {
    return <Navigate to="/vouchers" replace />
  }

  const otherVouchers = vouchersData.filter((v) => v.slug !== slug)

  return (
    <div className="w-full">
      <InnerPageHero
        title={voucher.title}
        subtitle={`Voucher Package • ${voucher.price}`}
        bgImage={voucher.image}
      />

      <section className="py-20 sm:py-32 px-6 sm:px-10 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story & Inclusions */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-xs font-sans tracking-[0.25em] uppercase font-semibold text-text-light mb-3 block">
                Voucher Overview
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral font-normal tracking-tight">
                {voucher.title}
              </h2>
            </div>

            <p className="text-text-light text-base sm:text-lg leading-relaxed">
              {voucher.description}
            </p>

            {/* Inclusions List */}
            <div className="space-y-6 pt-4">
              <h3 className="font-heading text-2xl text-neutral font-normal">
                What is Included
              </h3>
              <div className="space-y-3">
                {voucher.inclusions.map((inc, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-surface p-4 border border-neutral/10">
                    <CheckCircle2 className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral font-medium">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step How It Works */}
            <div className="space-y-8 pt-8">
              <h3 className="font-heading text-2xl text-neutral font-normal">
                How It Works
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {voucher.howItWorks.map((step) => (
                  <div key={step.step} className="bg-surface p-6 border border-neutral/15 space-y-2">
                    <span className="font-heading text-2xl text-neutral/40 font-light block">
                      {step.step}
                    </span>
                    <h4 className="font-sans text-sm font-semibold tracking-wide text-neutral uppercase">
                      {step.title}
                    </h4>
                    <p className="text-text-light text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Purchase / Enquiry Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-surface p-8 sm:p-10 border border-neutral/15 shadow-sm space-y-8">
            <div className="space-y-2 pb-6 border-b border-neutral/15">
              <span className="text-xs uppercase tracking-widest font-semibold text-text-light block">
                Investment
              </span>
              <div className="font-heading text-4xl text-neutral font-normal">
                {voucher.price}
              </div>
              <p className="text-xs text-text-light">
                Prices include all local taxes and estate concierge coordination.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Guest Capacity
                  </span>
                  <span className="text-neutral font-medium">{voucher.guests}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Validity Period
                  </span>
                  <span className="text-neutral font-medium">{voucher.validity}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral/70 block">
                    Flexible Redemption
                  </span>
                  <span className="text-neutral font-medium">Transferable with unique voucher ID</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral/15 space-y-4">
              <Link
                to="/booking"
                className="w-full bg-neutral text-white py-3.5 px-6 text-xs font-sans uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-neutral/85 transition-colors"
              >
                <span>Purchase / Inquire now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] text-text-light text-center leading-normal">
                Inquiries are verified by our reservations desk. No payment required upfront.
              </p>
            </div>
          </div>
        </div>

        {/* Other Vouchers */}
        <div className="mt-28 pt-16 border-t border-neutral/15">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl text-neutral font-normal">
              Other Experience Vouchers
            </h3>
            <Link
              to="/vouchers"
              className="text-xs font-sans uppercase tracking-widest font-semibold text-neutral border-b border-neutral pb-1 hover:text-text-light transition-colors"
            >
              View all vouchers
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherVouchers.map((item) => (
              <Link
                key={item.id}
                to={`/voucher/${item.slug}`}
                className="group block bg-surface border border-neutral/10 p-8 hover:border-neutral/30 transition-all"
              >
                <span className="text-xs font-sans uppercase tracking-wider text-text-light block mb-2">
                  {item.price}
                </span>
                <h4 className="font-heading text-2xl text-neutral font-medium group-hover:underline mb-2">
                  {item.title}
                </h4>
                <p className="text-text-light text-xs line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
