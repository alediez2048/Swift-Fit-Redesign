# Swift Fit Events - 2026 Website Redesign

**Production URL:** [https://alediez2048.github.io/Swift-Fit-Redesign/](https://alediez2048.github.io/Swift-Fit-Redesign/)

A complete redesign of [swiftfitevents.com](https://www.swiftfitevents.com) — pivoting from "Dark/Industrial Fitness" to **"Austin Organic Luxury."**

## Project Vision

Swift Fit Events is transitioning to feel like a high-end **"Corporate Sanctuary"** — blending the professional reliability of a boutique hotel with the restorative energy of an Austin wellness retreat.

### The Design Shift

| From | To |
|------|-----|
| Dark/Industrial | Light/Organic |
| Fitness-focused | Holistic Wellness |
| Generic | Premium Editorial |
| Confusing | Clear B2B/B2C Split |

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + Radix Primitives
- **Animation:** Framer Motion (LazyMotion) + Lenis
- **Typography:** Playfair Display (serif) + Inter (sans)
- **Icons:** Phosphor Icons
- **Deployment:** GitHub Pages (Static Export)

## Performance Optimizations

This project includes comprehensive performance optimizations:

### Image Optimization
| Asset | Original | Optimized | Savings |
|-------|----------|-----------|---------|
| Hero Poster | 510 KB | 89 KB | **83%** |
| Logo | 228 KB | 7 KB | **97%** |
| Asterisk | 131 KB | 4 KB | **97%** |
| Hero Video | 9.5 MB | 4.2 MB | **56%** |

### Code Optimizations
- **LazyMotion**: Tree-shaking for framer-motion (~50% bundle reduction)
- **Image sizes props**: Responsive image delivery via `next/image`
- **fetchPriority**: High-priority loading for LCP elements
- **Preload links**: Critical assets preloaded in `<head>`

### Accessibility
- WCAG AA color contrast compliance
- Proper ARIA attributes on interactive elements
- Screen reader optimizations (`sr-only` labels)

### SEO & PWA
- Complete metadata with OpenGraph/Twitter cards
- `manifest.json` for PWA support
- `robots.txt` for search indexing
- Semantic HTML structure

## Brand Colors

| Role | Hex | Name |
|------|-----|------|
| Canvas | `#FFFFFF` | Pure White |
| Text | `#1A1A1A` | Deep Charcoal |
| Authority | `#1D4E5F` | Swift Teal |
| CTA | `#E5673D` | Swift Coral |
| Accent | `#F5E6D3` | Swift Cream |

## Getting Started

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Serve production locally
npx serve@latest out
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
# Optimize images (requires sharp)
node scripts/optimize-images.js
```

## Site Structure

```
/                       → Homepage (Dual B2B/B2C Hero)
/swift-fit-social       → Community Events (B2C)
/corporate-wellness     → B2B Services
/venue-rental           → Venue Information
/about                  → Team & Story
/contact                → Lead Capture Form
```

## Documentation

- [Brand Identity](docs/brand-identity.md)
- [Tech Stack Details](docs/tech-stack.md)
- [Current Sitemap](docs/sitemap.md)

