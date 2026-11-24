# Villora — Luxury Villa & Boutique Retreat Experience

> High-end digital hospitality experience designed for luxury private estates, boutique resorts, and vacation rentals.

---

## Overview

**Villora** is an architectural web platform engineered to deliver an immersive, cinematic booking and showcase experience for boutique properties, private estates, and luxury retreats. Built with a focus on editorial typography, fluid motion choreography, and high-conversion reservation funnels.

---

## Core Features & Architecture

### 1. Estate Showcase & Cinematic Hero
* Full-viewport hero stage with atmospheric imagery and smooth transition choreography.
* Direct availability check and date selector integrated into initial viewport.
* Key stats display: property footprint, private suites, staff ratio, and scenic panoramas.

### 2. Comprehensive Property Experiences
* **Accommodations & Suites**: Architectural floor plans, panoramic suite viewports, suite amenities, and capacity specs.
* **Amenities & Facilities**: Curated wellness zones, infinity pools, private culinary chefs, private helipads, and concierge services.
* **Vouchers & Curated Packages**: Giftable experiences, seasonal retreat vouchers, and bespoke holiday packages.
* **Activities & Concierge Experiences**: Guided local excursions, private yacht charters, wine tasting, and spa treatments.

### 3. Visual Gallery & Virtual Tour
* Multi-angle high-resolution masonry and full-bleed image galleries.
* Interactive categorization (Interiors, Architecture, Grounds, Evening ambiance).
* Accessible lightbox integration with touch gestures and keyboard navigation.

### 4. Reservation & Booking System
* Date range selector with dynamic seasonal rate calculation.
* Guest configuration (Adults, Children, Special requirements).
* Direct inquiry workflow with automated confirmation delivery.

### 5. Editorial Journal / Blog
* Stories on local gastronomy, architecture insights, and wellness philosophy.
* SEO-optimized semantic markup with OpenGraph and structured JSON-LD schemas.

---

## Project Structure

```text
villora/
├── assets/             # Static media assets, photography, and vectors
├── components/         # Modular UI elements (Navigation, Modals, Forms)
│   ├── booking/        # Date pickers, availability cards, rate calculators
│   ├── gallery/        # Masonry layout, lightbox dialogs
│   └── ui/             # Buttons, inputs, typography primitives
├── layouts/            # Page layouts and global shells
├── styles/             # Global stylesheets, tokenized CSS variables
├── .gitignore          # Environment and build exclusion rules
└── README.md           # Documentation and architecture guide
```

---

## Tech Stack & Standards

* **Framework**: Modern component-driven frontend architecture
* **Styling**: Tokenized CSS / Utility layout system with zero hardcoded values
* **Animation**: Fluid GSAP / CSS hardware-accelerated transitions
* **Accessibility**: Fully WCAG 2.1 AA compliant (accessible name targets, full keyboard traps & focus management)
* **Optimization**: Responsive WebP/AVIF imagery pipeline, lazy loading, sub-second LCP

---

## Getting Started

### Prerequisites

* Node.js `>= 18.x`
* npm / pnpm / yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:girishlade111/villora.git
   cd villora
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Design System Guidelines

* **Color Palette**: Neutral stone tones, deep warm charcoal, muted sage, and subtle ivory surfaces.
* **Typography**: Editorial serif headings paired with clean geometric sans-serif body copy.
* **Interactive States**: Standardized 8-state model across all interactive triggers (default, hover, focus-visible, active, disabled, loading, error, selected).

---

## Author & Maintainer

* **Girish Lade** — [@girishlade111](https://github.com/girishlade111)

---

## License

This project is open source and available under the [MIT License](LICENSE).
