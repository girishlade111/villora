# Villora Design Tokens

Extracted directly from computed styles and stylesheet of https://villora.webflow.io/.

## 1. Color Palette

```css
:root {
  /* Core Brand Colors */
  --color-background: #ebe3da;       /* Warm beige main background */
  --color-surface: #efe9e1;          /* Soft card/input surface background */
  --color-card-bg: #e4d7c9;          /* Slightly deeper warm beige for cards */
  --color-neutral: #0a1010;          /* Deep near-black primary text and dark sections */
  --color-dark: #0a1010;             /* Identical to neutral */
  --color-white: #ffffff;            /* Pure white for navbar, badges */
  --color-text-light: #474747;       /* Body copy secondary text */
  --color-text-dark: #989898;        /* Muted secondary labels in dark sections */
  --color-stroke: #3a3a3a;           /* Dark borders */
  --color-border: rgba(10, 16, 16, 0.17); /* Light borders on beige backgrounds */
  --color-transparent: transparent;
}
```

## 2. Typography

### Font Families
- **Display Serif**: `Oranienbaum, serif` (Hero titles e.g. "VILLORA CASTLE", large page titles)
- **Heading Serif**: `Bellefair, serif` (Section headings, card titles, quotes)
- **UI / Body Sans-Serif**: `Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` (Navigation, buttons, body copy, form labels)

### Heading Scale
- **Display 1 (Hero Title)**: clamp(3rem, 11vw, 13rem), line-height: 0.85, letter-spacing: -0.03em, font-family: Oranienbaum
- **Heading 01**: clamp(2.5rem, 5vw, 3.5rem) (40px - 56px), line-height: 1.05, letter-spacing: -0.02em, font-family: Bellefair
- **Heading 02**: clamp(2rem, 3.5vw, 2.5rem) (32px - 36px), line-height: 1.1, letter-spacing: -0.02em, font-family: Bellefair
- **Heading 03**: clamp(1.5rem, 2.5vw, 1.75rem) (24px - 28px), line-height: 1.2, letter-spacing: -0.02em, font-family: Bellefair
- **Heading 04**: 24px, line-height: 1.2, letter-spacing: -0.015em
- **Heading 05**: 20px, line-height: 1.3, letter-spacing: -0.01em
- **Heading 06**: 18px, line-height: 1.3

### Body Scale
- **Paragraph L**: 18px, line-height: 1.6, weight: 400
- **Paragraph M (Base)**: 16px, line-height: 1.5, weight: 400
- **Paragraph S**: 14px, line-height: 1.5, weight: 400
- **Label / Button**: 13px - 14px, font-weight: 500, letter-spacing: 0.02em, text-transform: uppercase / capitalized

## 3. Dimensions & Spacing

### Containers
- **Large Desktop (>=1440px)**: 1352px (max 1832px wide containers)
- **Standard Desktop (1024px - 1439px)**: 1172px
- **Tablet (768px - 1023px)**: 820px
- **Landscape Phone (480px - 767px)**: 665px
- **Mobile (<=479px)**: 100% (container-size 430px with gutters)

### Floating Header Bar
- **Width**: 720px - 728px centered on desktop
- **Height**: 54px
- **Position**: fixed top 24px, left 50%, translateX(-50%), z-index 1000
- **Border radius**: 4px (almost square, minimal rounding)
- **Background**: #ffffff

### Section Spacing
- **Desktop**: 120px - 150px vertical section padding
- **Tablet**: 100px
- **Mobile**: 60px - 80px
