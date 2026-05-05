# LuxeEstate — Premium Real Estate Platform

A modern, full-featured real estate listing platform built with Next.js 15, TypeScript, and Tailwind CSS. Designed for premium presentation with fluid animations, a rich property browsing experience, and a polished gold/slate visual identity.

---

## Live Demo

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/justinesam23/RealEstateLPlatform)

---

## Features

- **Homepage** — Animated hero with background image cycling, floating stat cards, inline search with buy/rent tabs, and popular city quick links
- **Property Listings** — Filterable and sortable grid/list view with multi-dimension filters (status, type, city, price range, bedrooms)
- **Property Detail** — Full-screen image gallery, stats overview, features checklist, sticky agent contact sidebar, related properties
- **Agents Directory** — Team grid with hover-reveal contact actions, key performance stats, and specialty badge tooltip
- **About Page** — Company story, core values grid, and alternating timeline
- **Contact Page** — Validated contact form with topic select and success confirmation state

---

## Recent UI Improvements

### Property Cards
- **Equal-height cards** — All cards in a grid row share the same height; the "View" button is always pinned to the bottom via `flex-col` + `mt-auto`
- **Swipeable image slider** — Images can be dragged/swiped (Framer Motion `drag="x"`) or navigated with ‹ › arrow buttons and dot indicators; arrows are always visible on mobile, hover-only on desktop; counter shows `1/3` style

### Agent Cards (Home section & `/agents` page)
- **Equal-height cards** — Same `flex-col` / `mt-auto` treatment so "View Profile" buttons align across all cards
- **Specialty badge limit** — Shows exactly 1 specialty badge; remaining specialties are hidden behind a hoverable `+N` pill that opens a centered tooltip

### Navigation & Page Layout
- **Transparent navbar on sub-pages** — Removed the `pt-20` wrapper offset from all sub-pages (`/agents`, `/about`, `/contact`, `/properties`, `/properties/[id]`) so the fixed navbar overlays each page's dark hero section, matching the homepage behaviour
- **Hero background images** — All sub-pages now display a visible background image (30 % opacity with dark gradient overlay) in their hero/header sections; previously Agents and Properties had plain gradient backgrounds

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| Animations | Framer Motion |
| Carousel | Embla Carousel + Autoplay |
| Icons | Lucide React |
| UI Primitives | Radix UI (Dialog, Dropdown, Select, Slider, Tabs, Accordion, Avatar, Separator, Tooltip) |
| Forms | React Hook Form + Zod + @hookform/resolvers |
| Components | class-variance-authority, clsx, tailwind-merge |
| Counters | react-countup + react-intersection-observer |
| Font | Geist (via `next/font`) |
| Image Optimization | Next/Image with Unsplash remote patterns |
| Theming | next-themes ready |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, Navbar/Footer
│   ├── page.tsx                # Homepage (composes all sections)
│   ├── properties/
│   │   ├── page.tsx            # Filterable property listing
│   │   └── [id]/page.tsx       # Property detail page
│   ├── agents/page.tsx         # Agents directory
│   ├── about/page.tsx          # Company about page
│   └── contact/page.tsx        # Contact form
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with scroll-aware transparency
│   │   └── Footer.tsx          # Gold newsletter banner + link grid
│   ├── properties/
│   │   └── PropertyCard.tsx    # Reusable card with image carousel and wishlist
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FeaturedProperties.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AgentsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── button.tsx          # CVA button with gold/dark/white variants
│       ├── badge.tsx           # CVA badge with status variants
│       └── input.tsx           # Base input component
├── lib/
│   ├── data.ts                 # All mock data (properties, agents, testimonials)
│   └── utils.ts                # cn(), formatPrice(), formatArea(), slugify()
└── types/
    └── index.ts                # Property, Agent, Testimonial, Service interfaces
```

---

## Design System

**Color palette:** Gold (`#c9a84c`) accent over Slate dark backgrounds with white cards.

Custom Tailwind tokens defined in `tailwind.config.ts`:

- `gold-50` → `gold-900` — full gold scale
- `shadow-card-hover`, `shadow-glow`, `shadow-inner-glow` — layered depth
- `glass-card` — frosted glass utility class
- `section-padding`, `container-max` — consistent layout rhythm
- `animate-fadeUp`, `animate-float`, `animate-shimmer` — motion utilities

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

This project is optimized for **Vercel**. Push to GitHub and import the repository at [vercel.com/new](https://vercel.com/new). No additional environment variables are required for the current mock-data setup.

---

## Extending

- **Real data**: Replace `src/lib/data.ts` with API calls or a Prisma/PostgreSQL data layer
- **Auth**: Add NextAuth.js for agent login and saved searches
- **Dark mode**: `next-themes` is already installed — wire up a theme toggle in the Navbar
- **Agent profiles**: Create `src/app/agents/[id]/page.tsx` (nav links already point there)

---

## License

MIT
