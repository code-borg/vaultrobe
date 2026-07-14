# Vaultrobe Landing

Premium, SEO-friendly static landing site for **Vaultrobe** — a luxury Android digital wardrobe / closet app.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide** icons. Dark luxe glassmorphic design with gold + emerald accents. Content is driven by `vaultrobe-app-details.json`.

## Features

- **SSG** — fully static generation, blazing fast
- **Dark luxe glassmorphism** (default) + optional light mode toggle
- **Sections:** Hero · Features · Showcase · Onboarding / Photo guide · Tech & Privacy · Footer
- **SEO:** Metadata API, Open Graph & Twitter images, JSON-LD, `sitemap.xml`, `robots.txt`
- **Mobile-first**, accessible focus states, smooth scroll animations
- Data sourced from `vaultrobe-app-details.json`

## Project structure

```
vaultrobe/
├── vaultrobe-app-details.json   # App source of truth
├── public/
│   ├── favicon.svg
│   └── manifest.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Fonts, metadata, theme shell
│   │   ├── page.tsx             # Landing composition
│   │   ├── globals.css          # Glass utilities + theme tokens
│   │   ├── opengraph-image.tsx  # Dynamic OG image
│   │   ├── twitter-image.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/              # Header, Footer
│   │   ├── sections/            # Hero, Features, Showcase, …
│   │   ├── providers/           # ThemeProvider
│   │   ├── seo/                 # JSON-LD
│   │   └── ui/                  # GlassCard, SectionHeading
│   └── lib/
│       ├── data.ts              # Typed data + marketing maps
│       ├── types.ts
│       └── cn.ts
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Getting started

### Prerequisites

- Node.js 18.18+ (20 LTS recommended)
- npm, pnpm, or yarn

### Install & run

```bash
# Install dependencies
npm install

# Development server → http://localhost:3000
npm run dev

# Production build (static SSG)
npm run build

# Serve production build locally
npm start
```

### Environment

Optional — set your production URL for canonical links, sitemap, and absolute OG URLs:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://vaultrobe.app
```

## Design system

| Token        | Value     | Role                |
|-------------|-----------|---------------------|
| Background  | `#0E0C0A` | Deep luxe black     |
| Surface     | `#14120F` | Cards / panels      |
| Gold        | `#C9A96E` | Primary accent      |
| Rose gold   | `#B76E79` | Secondary accent    |
| Emerald     | `#81C784` | Privacy / success   |
| Ivory       | `#F0EAD6` | Primary text        |

Glass utilities: `.glass`, `.glass-strong`, `.glass-gold`  
Buttons: `.btn-gold`, `.btn-ghost`

## Data source (single source of truth)

All dynamic landing content is read from **`vaultrobe-app-details.json`** at the project root via `src/lib/data.ts`:

| JSON field | Section |
|------------|---------|
| `appName`, `tagline`, `shortDescription`, `versionName` | Hero, Header, Footer, SEO |
| `keyFeatures` | Features grid + Hero chips |
| `mainScreens` | Showcase / screens gallery |
| `onboardingHighlights` | Onboarding steps + photo guide |
| `privacyHighlights` | Privacy cards |
| `techStack`, `sdk` | Tech stack chips + SDK line |
| `themes` | Theme badges |
| `permissions`, `monetization` | Permissions + credit packs |
| `packageName` | Play Store URL, footer meta |

Edit the JSON and rebuild — no hardcoded feature lists in components.

## Deploy on Vercel

### One-click / CLI

```bash
# Install Vercel CLI if needed
npm i -g vercel

# From project root
vercel
```

### Dashboard

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project in [vercel.com/new](https://vercel.com/new).
3. Framework Preset: **Next.js** (auto-detected).
4. Add env var: `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`.
5. Deploy.

### Build settings (defaults)

| Setting        | Value          |
|----------------|----------------|
| Build Command  | `next build`   |
| Output         | `.next`        |
| Install        | `npm install`  |
| Node           | 20.x           |

No special rewrites needed. The homepage is statically generated at build time.

### Pure static export (optional)

If you need a plain `out/` folder for S3 / Cloudflare Pages:

```ts
// next.config.ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

Then run `npm run build` and deploy the `out/` directory. Note: dynamic `opengraph-image` routes may need a static PNG fallback in that mode.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Dev server with HMR      |
| `npm run build` | Production SSG build   |
| `npm start`   | Serve production build   |
| `npm run lint`  | ESLint                 |

## License

Private — all rights reserved for Vaultrobe.
