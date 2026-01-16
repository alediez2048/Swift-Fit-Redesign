# Swift Fit Events - Technical Stack

## Framework

**Next.js 15 (App Router)**
- Server-side rendering for SEO
- Static generation for performance
- Built-in image optimization
- Edge deployment via Vercel

---

## Styling & Design System

### Core
| Tool | Purpose |
|------|---------|
| **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| **CSS Variables** | Dynamic theming, smooth color transitions |

### Component Libraries

**Base Layer: shadcn/ui**
- Accessible primitives built on Radix UI
- Fully customizable, not a dependency
- Forms, dialogs, dropdowns, etc.

**Premium Layer: Magic UI + Aceternity UI**
- Stunning animated components
- Bento grids, animated cards, text reveals
- Spotlight effects, gradient borders
- Background beams, particles

These libraries provide the "wow factor" that separates a premium site from a generic one.

---

## Typography

### Headlines: Playfair Display
- Elegant serif with editorial weight
- Signals heritage and sophistication
- Google Fonts (free, optimized)

### Body: Satoshi
- Modern geometric sans-serif
- Warmer than Inter, more distinctive
- Pairs beautifully with serifs
- Alternative: Inter (more neutral)

### Accent: Optional Mono
- JetBrains Mono for any code/technical elements

---

## Animation & Motion

| Library | Usage |
|---------|-------|
| **Framer Motion** | Page transitions, component animations, gestures |
| **Lenis** | Smooth scroll (buttery, native feel) |
| **GSAP** | Complex scroll-triggered animations (if needed) |

### Animation Principles
- Soft, organic easing (no snapping)
- Subtle parallax on images
- Text reveals on scroll
- Hover micro-interactions
- Page transitions between routes

---

## Performance Optimizations

- **Next/Image** - Automatic WebP/AVIF, lazy loading, blur placeholders
- **Font Subsetting** - Only load characters we need
- **Dynamic Imports** - Code split heavy components
- **Edge Caching** - Vercel edge network
- **Core Web Vitals** - Target 90+ Lighthouse score

---

## SEO & Analytics

| Tool | Purpose |
|------|---------|
| **Next.js Metadata API** | Dynamic meta tags, Open Graph |
| **JSON-LD Schema** | LocalBusiness, Event, Organization |
| **Vercel Analytics** | Performance monitoring |
| **Google Tag Manager** | Marketing pixel container |

---

## Forms & Lead Capture

**React Hook Form + Zod**
- Type-safe validation
- Progressive multi-step forms
- Accessible error handling

**Integration Options:**
- HubSpot Forms API (if using their CRM)
- Resend for email notifications
- Webhook to any CRM

---

## Hosting & Deployment

**Vercel**
- Native Next.js support
- Edge functions
- Preview deployments for review
- Automatic HTTPS

---

## Project Structure

```
swift-fit-redesign/
├── app/
│   ├── (marketing)/          # Marketing pages
│   │   ├── page.tsx          # Homepage
│   │   ├── corporate-wellness/
│   │   ├── venue-rental/
│   │   ├── swift-fit-social/
│   │   ├── about/
│   │   └── contact/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # shadcn components
│   ├── sections/             # Page sections (Hero, TrustBar, etc.)
│   ├── forms/                # Multi-step forms
│   └── layout/               # Navbar, Footer
├── lib/
│   ├── utils.ts
│   └── fonts.ts
├── content/
│   └── events.json           # 2026 event data
├── public/
│   ├── images/
│   ├── videos/
│   └── logos/
└── styles/
    └── globals.css
```

---

## Design Tokens (Tailwind Config)

```js
colors: {
  canvas: '#F7F5F0',      // Limestone cream background
  ink: '#1A1A1A',         // Deep charcoal text
  authority: '#00556B',   // Swift Teal (headlines)
  cta: '#FBC544',         // Swift Yellow (buttons)
  accent: '#F49028',      // Swift Orange (hover, icons)
}

fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
}
```

---

## Comparison: Why This Stack?

| Consideration | Our Choice | Alternative | Why Ours Wins |
|---------------|------------|-------------|---------------|
| Framework | Next.js 15 | Astro, Remix | Best SSR/SSG balance, image optimization, ecosystem |
| Styling | Tailwind | Styled Components | Faster development, smaller bundle, design tokens |
| Components | shadcn + Magic UI | Chakra, MUI | Full control, premium aesthetics, no bloat |
| Animation | Framer Motion | CSS only | Orchestration, gestures, layout animations |
| Scroll | Lenis | Native | Buttery smooth, matches luxury feel |
| Hosting | Vercel | Netlify, AWS | Native Next.js, fastest deployments |

---

## Inspiration References

These sites embody the aesthetic we're targeting:

- [Aman Resorts](https://www.aman.com) - Minimalist luxury
- [The Well](https://www.the-well.com) - Holistic wellness
- [Sonder](https://www.sonder.com) - Warm hospitality
- [Linear](https://linear.app) - Clean, modern SaaS (for UI patterns)
- [Vercel](https://vercel.com) - Dark/light, smooth animations
