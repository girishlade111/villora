# Villora Reference Audit Report

## 1. Executive Summary
- **Live Reference**: https://villora.webflow.io/
- **Primary Art Direction**: Warm editorial luxury, Mediterranean coastal estate, restrained serif typography, quiet palette (`#EBE3DA`, `#0A1010`), cinematic full-bleed video heroes, floating header bar (728px width), Lenis smooth scrolling, GSAP ScrollTrigger orchestration.
- **Audit Tooling**: Playwright headless browser automation, capturing full-page and initial viewport screenshots across 12 unique routes, full HTML snapshots, CSS stylesheet extraction, and computed style tree evaluation.

## 2. Tested Viewports
- **Desktop**: 1920x1080, 1440x900, 1366x768
- **Tablet**: 1024x768, 768x1024
- **Mobile**: 430x932, 390x844, 375x812, 320x700

## 3. Page Structure Analysis

### Homepage (`/`)
1. **Hero**: Full viewport (100vh), looping aerial drone video of Mediterranean coastal mansion, infinity pool and Pacific ocean. Dominant white serif heading "VILLORA CASTLE" in Oranienbaum.
2. **Intro**: Centered text block ("Some places you visit / Villora castle / You'll feel like home") with description and dark Book Now button.
3. **Scroll-Driven Video Showcase**: Framed video in `.benefits-block` scrubbing to full-width viewport as user scrolls.
4. **Activities Showcase**: 5 alternating editorial sections (Sunset beach walks, Private boat trips, Beach bonfire, Farm visit, Fishing in lake) with image pairs and "Know more" links.
5. **Estate Collection**: 6 high-fashion architectural photos with minimal titles.
6. **Property Interactive Overview**: Aerial photo with circular hotspots.
7. **Marquee**: Seamless looping text strip "VILLA WITH SWIMMING POOL * VILLA WITH FISHING LAKE * ...".
8. **Dark Footer**: #0A1010 background, 2-column layout with brand, contact, social, 3 nav columns, newsletter subscribe.

### About (`/about`)
1. **Hero**: Panoramic coastal banner with oversized title "ABOUT VILLORA".
2. **Core Values**: "Our core values of timeless coastal excellence" - 4 value blocks (Seaside serenity, Warm hospitality, Timeless elegance, Sustainable living) surrounding a large central interior photo.
3. **Team**: "Meet the minds behind the villa" - 4 architect/designer cards (Alexander Morgan, Olivia Bennett, Ethan Carter, Sophia Reynolds).
4. **Testimonials**: Guest reviews slider with portraits and locations.
5. **FAQ**: 3-category accordion (Villa, Location, Booking).
6. **Marquee & Footer**.

### Activities (`/activities`) & Dynamic Activities
- Panoramic banner "OUR ACTIVITIES".
- 5 comprehensive experience blocks with imagery, narrative, and "Know more" leading to `/activity/:slug`.
- Detail pages feature key facts: Duration, Best time, Location, Difficulty, Suitability, Gallery, and Booking CTA.

### Facilities (`/facilities`) & Dynamic Facilities
- Panoramic banner "OUR FACILITIES".
- 6 wide warm-beige facility rows (Large pool, Private beach, Fine dining, Wellness & spa, Fitness center, Private suites).
- Detail pages feature amenity highlights, photo galleries, and reservation inquiry.

### Vouchers (`/vouchers`) & Dynamic Vouchers
- Centered header "Explore vouchers".
- 3 columns separated by thin vertical dividers:
  - Sunset dinner (From $120)
  - Spa & wellness (From $299)
  - Weekend escape (From $499)
- Villa Tour video section with floating "Watch villa tour" pill button.
- Shared FAQ, Marquee & Footer.

### Blog (`/blog`) & Dynamic Blog Posts
- Panoramic banner "OUR INSIGHTS".
- 2-column editorial article grid (4 articles).
- Full article view with reading time, category, rich editorial content, and related posts.

### Gallery (`/gallery`)
- Panoramic banner "OUR GALLERY".
- 4-column dynamic masonry layout featuring 14 distinct coastal, architectural, and lifestyle photos.

### Booking (`/booking`)
- Clean form-first layout on #EBE3DA background (no distracting photo hero).
- Heading "Start planning your stay".
- 2-column grid: Full name, Email address, Number of people, Preferred date, Phone, Interest select, full-width Message, Privacy checkbox, and dark Submit button.

### Contact (`/contact`)
- Heading "Get in touch".
- Contact form matching booking styling.
- Contact info rows (Email, Phone, Address).
- Partner booking channels (Airbnb, Booking, Agoda).
- Villa Tour section, FAQ, Marquee & Footer.
