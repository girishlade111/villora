# Villora Animation & Motion Inventory

Documented directly from the live Webflow implementation and `/instructions` specification.

## Core Motion Stack
1. **Lenis Smooth Scroll** (`v1.3.17`)
   - `duration`: 1.2
   - `easing`: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
   - `smooth`: true
   - Synchronized with `ScrollTrigger.update` and `gsap.ticker`

2. **GSAP & ScrollTrigger** (`v3.15.0`)
   - `gsap.ticker.lagSmoothing(0)`

## Detailed Animation Inventory (21 Key Interactions)

1. **Header Sticky & Hide-on-Scroll**
   - Trigger: Scroll direction listener via `ScrollTrigger.create({ start: 0, end: 'max' })`
   - Scroll Down (> 100px): `gsap.to(header, { y: -100, duration: 0.5, ease: 'power1.out' })`
   - Scroll Up / Top: `gsap.to(header, { y: 0, duration: 0.5, ease: 'power1.out' })`

2. **Navigation Mega-Menu Expansion**
   - Trigger: Click hamburger button (`.header-menu-block`)
   - Transform hamburger icon into 'X' close icon (animated 3 lines)
   - Menu panel smoothly drops down / fades in with staggered grid items
   - Background click or Escape key triggers reverse closing animation

3. **Homepage Hero Entrance**
   - Background video autoplay with gentle fade-in
   - Giant title "VILLORA CASTLE" reveals with masked upward motion & opacity (duration 1.0s, ease: 'power2.out')
   - Subtitle & navigation elements fade in with 0.2s delay

4. **Scroll-Driven Video Showcase Expansion (`.benefits-block`)**
   - Trigger: ScrollTrigger attached to `.benefits-block` (start: `top 25%`, end: `bottom 150%`, scrub: true)
   - Behavior: Video starts in framed aspect/width and smoothly expands across viewport as user scrolls downward

5. **Section Title & Subtitle Reveals (`[title-animation]`, `[text-animation]`)**
   - Trigger: ScrollTrigger `top 80%`
   - Transforms: `y: 40 -> 0`, `opacity: 0 -> 1`, `duration: 0.8s`, `ease: 'power2.out'`

6. **Activity Rows Stagger & Scroll Transition**
   - Alternating editorial layout (image left/text right, then reverse)
   - Image clip-path or slight scale reveal (`scale: 1.08 -> 1`, `duration: 1.2s`)
   - Text block fades up into view

7. **Estate Collection Hover & Reveal**
   - Card container subtle zoom on hover (`scale: 1.03`, `duration: 0.4s`)
   - Caption and label slide slightly upwards

8. **Interactive Property Hotspot Image**
   - Aerial map overview with pulsating circular hotspot markers
   - Hover / click on pin activates tooltip / highlight card for that zone

9. **Facility Rows Presentation**
   - Clean wide warm-beige cards with image left, editorial info right
   - Reveal upon entering viewport with gentle stagger

10. **Custom Cursor Effects (`.cursor-circle`, `.cursor-dot`)**
    - Outer circle follows mouse with smooth interpolation (delay ~0.08s)
    - Inner dot tracks mouse directly
    - Expands or changes into "View" or "Click" mode over `[cursor-hover]`, `[view-button]`, `[click-button]`
    - Automatically disabled on touch / mobile devices and when `prefers-reduced-motion` is active

11. **Continuous Marquee Loop (`.footer-marquee`)**
    - Seamless infinite horizontal translation using GSAP linear ticker
    - Clean looping with duplicate content width offset

12. **FAQ Category Tab Switching**
    - Categories: Villa / Location / Booking
    - Active tab toggle with animated background transition
    - Staggered entrance for the new 5 questions

13. **FAQ Accordion Expand / Collapse**
    - Click question header toggles answer height (`auto` via layout measurement)
    - Arrow icon rotates 180 degrees
    - Smooth opacity transition on content

14. **Testimonial Slider / Carousel**
    - Centered quote, guest portrait, name, and location
    - Smooth slide transition with navigation arrows or auto-play

15. **Voucher Cards Hover Interaction**
    - Thin border separation
    - Button background color transition on hover

16. **Button Hover Micro-Interactions**
    - Button background wipe / scale effect
    - Arrow movement (+4px right) on hover

17. **Gallery Masonry Arrangement & Reveal**
    - Responsive 4-column masonry layout with staggered entrance
    - Light zoom on hover

18. **Video Tour Modal**
    - Floating / bottom-right pill trigger "Watch villa tour"
    - Modal backdrop fade-in + scale-up of video player
    - Closes on Escape, overlay click, or close button; pauses video immediately

19. **Form Input Focus States**
    - Clean border contrast enhancement, label transitions
    - Validation feedback animations

20. **Dark Footer Entrance**
    - Elegant entrance as footer reaches bottom of viewport
    - Newsletter submit animation

21. **Page Route Transitions**
    - Lenis scroll reset to top
    - Smooth opacity fade without layout flash or broken scroll positions
