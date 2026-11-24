import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ActivitiesPage } from '@/pages/ActivitiesPage'
import { ActivityDetailPage } from '@/pages/ActivityDetailPage'
import { FacilitiesPage } from '@/pages/FacilitiesPage'
import { FacilityDetailPage } from '@/pages/FacilityDetailPage'
import { VouchersPage } from '@/pages/VouchersPage'
import { VoucherDetailPage } from '@/pages/VoucherDetailPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogDetailPage } from '@/pages/BlogDetailPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { BookingPage } from '@/pages/BookingPage'
import { ContactPage } from '@/pages/ContactPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { StyleGuidePage } from '@/pages/StyleGuidePage'
import { LicensesPage } from '@/pages/LicensesPage'
import { ChangelogPage } from '@/pages/ChangelogPage'
import { InstructionsPage } from '@/pages/InstructionsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activity/:slug" element={<ActivityDetailPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/facility/:slug" element={<FacilityDetailPage />} />
          <Route path="/vouchers" element={<VouchersPage />} />
          <Route path="/voucher/:slug" element={<VoucherDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
          <Route path="/licenses" element={<LicensesPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/instructions" element={<InstructionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
